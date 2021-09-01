import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { Form, Button, Col, Card, } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { UPDATE_GOAL } from "../../utils/mutations";

const EditGoalForm = () => {
  const style = {
    borderBottom: 'thin solid #5292ab',
    margin: '.2em',
  }

  const { email: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { email: userParam },
  });
  const user = data?.me || data?.user || {};

  //const [endDate, setEndDate] = useState(null);


  const [updateGoal, { error, updData }] = useMutation(UPDATE_GOAL);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.email) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  const handleFormSubmit = async (_id, event, endDate) => {
    event.preventDefault();

    console.log(endDate);
    console.log("endDate: " + endDate.toISOString());
    console.log(_id);


    //   try {
    //     const { updData } = await updateGoal({
    //       variables: {

    //         endDate,
    //       },
    //     });
    //     //setEndDate(endDate.toISOString());
    //   } catch (err) {
    //     console.log(err);
    //   }
  }

  const UpdateDateFormItem = (props) => {

    const goal = props.goal;
    console.log(goal);
    const [endDate, setEndDate] = useState(null);

    return (<Form key={goal._id} onSubmit={(event) => handleFormSubmit(goal._id, event, endDate)} dateselected={endDate}>
      <p>{goal.description}</p>
      <p>{goal.endDate}</p>
      <p>{goal._id}</p>
      <DatePicker
        selected={endDate}
        onChange={(endDate) => setEndDate(endDate)}
        isClearable
        dateFormat="MM/dd/yyyy"
        withPortal
        placeholderText="Enter new date"
      />
      <br />
      <Button className="submitButton" type="submit">Update</Button><br /><br />
      {/* <Button type="button">Delete</Button> */}
    </Form>);
  }

  return (
    <>
      {user.goals.map((goal) => (
        <UpdateDateFormItem goal={goal} />
      ))
      }
    </>
  )
}

export default EditGoalForm;