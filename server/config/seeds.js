const db = require("./connection");
const { User, Goal, Metric } = require("../models");

const userData = require('./userData.json');
const goalData = require('./goalData.json');
const metricData = require('./metricData.json');

db.once("open", async () => {
  await User.deleteMany({});
  await Goal.deleteMany({});
  await Metric.deleteMany({});

  const users = await User.insertMany(userData);
  const goals = await Goal.insertMany(goalData);
  const metrics = await Metric.insertMany(metricData);

  for (newGoal of goals) {

    // randomly add a goal to each user
    const tempUser = users[Math.floor(Math.random() * users.length)];
    tempUser.goals.push(newGoal._id);
    await tempUser.save();

    // randomly add a metric to each goal
    const tempMetric = metrics[Math.floor(Math.random() * metrics.length)];
    newGoal.metric = tempMetric._id;
    await newGoal.save();

  }
  console.log('all done!')
  process.exit();
});
