export default function GetRandomAffirmation () { 

    const affirmations = [
        "You got this",
        "You'll figure it out",
        "You're a smart cookie",
        "I believe in you",
        "Sucking at something is the first step towards being good at something",
        "Struggling is part of learning",
        "Everything has cracks - that's how the light gets in",
        "Mistakes don't make you less capable",
        "We are all works in progress",
        "You are a capable human",
        "You know more than you think",
        "10x engineers are a myth",
        "If everything was easy you'd be bored",
        "I admire you for taking this on",
        "You're resourceful and clever",
        "You'll find a way",
        "I know you'll sort it out",
        "Struggling means you're learning",
        "You're doing a great job",
        "It'll feel magical when it's working",
        "I'm rooting for you",
        "Your mind is full of brilliant ideas",
        "You make a difference in the world by simply existing in it",
        "You are learning valuable lessons from yourself every day",
        "You are worthy and deserving of respect",
        "You know more than you knew yesterday",
        "You're an inspiration",
        "Your life is already a miracle of chance waiting for you to shape its destiny",
        "Your life is about to be incredible",
        "Nothing is impossible. The word itself says 'I’m possible!'",
        "Failure is just another way to learn how to do something right",
        "I give myself permission to do what is right for me",
        "You can do it",
        "It is not a sprint, it is a marathon. One step at a time",
        "Success is the progressive realization of a worthy goal",
        "People with goals succeed because they know where they’re going",
        "All you need is the plan, the roadmap, and the courage to press on to your destination",
        "The opposite of courage in our society is not cowardice... it is conformity",
        "Whenever we’re afraid, it’s because we don’t know enough. If we understood enough, we would never be afraid",
        "The past does not equal the future",
        "The path to success is to take massive, determined action",
        "It’s what you practice in private that you will be rewarded for in public",
        "Small progress is still progress",
        "Don't worry if you find flaws in your past creations, it's because you've evolved",
        "Starting is the most difficult step - but you can do it",
        "Don't forget to enjoy the journey",
        "It's not a mistake, it's a learning opportunity",
        "Put on your positive pants",
        "Toss your hair in a bun, drink some coffee, put on some gangsta rap and handle it",
        "Why become moody when you can shake your booty",
        "When something goes wrong in your life, just yell “plot twist” and move on",
        "Be a pineapple: stand tall, wear a crown, and be sweet on the inside",
        "Was it a bad day? Or was it a bad five minutes that you milked all day?",
        "Some see a weed, I see a wish",
        "Tell the negative committee that meets inside your head to sit down and shut up",
        "Awesome things will happen today if you choose not to be a miserable cow",
        "Giving up on your goal because of one setback is like slashing your other three tires because you got a flat",
        "Chin up princess or the crown slips",
        "If life gives you melons you might be dyslexic",
        "I love it when the coffee kicks in and I realize what an adorable badass I am going to be today",
        "Excuse, I have to go be awesome",
        "Think like a proton always positive",
        "Tact is the ability to tell someone to go to hell in such a way that they look forward to the trip",
        "I am thankful for all those difficult people in my life. They have show me exactly who I do not want to be",
        "Not everyone has to like you. Not everyone has taste.",
        "We get so worried about being “pretty” let’s be pretty kind, pretty funny, pretty smart, pretty strong.",
        "Be brace. Even if you’re not, pretend to be.",
        "Get your happy on",
        "When shit happens turn it into fertilizer",
        "It’s ever too late to get your shit together",
        "How to be successful: focus on your own shit",
        "Be happy, it drives people crazy",
        "Don’t worry about those who talk behind your back, they’re behind you for a reason",
        "Compliment people: magnify their strengths, not their weaknesses",
        "You can’t make everyone happy. You aren’t a jar of Nutella",
        "Life is better when you’re laughing",
        "Dear universe, I am totally open to some awesome coming my way",
        "Amazing things happen when you distance yourself from negativity",
        "If you were able to believe in Santa Claus for like 8 years, you can believe in yourself for like 5 minutes",
        "Every time you are able to find some humor in a difficult situation, you win",
        "If you have the power to make someone happy, do it. The world needs more of that.",
        "Cry a river. Build a bridge. Get over it.",
        "Surround yourself with pizza not negativity",
        "Don’t ruin a good today by thinking about a bad day yesterday. Let it go",
        "The idea is to die young. As late as possible.",
        "Remember even your worst days on have 24 hours",
        "If you cannot be positive then at least be quiet",
        "Nothing can dim the light that shines from within",
        "Stop being afraid of what could go wrong and think of what could go right",
        "Tell the negative committee that meets inside your head to sit down and shut up",
        "What consumes your mind, controls your life",
        "Expect nothing and appreciate everything",
        "No matter how you feel. Get up, dress up, show up and never give up.",
        "Don’t let anyone ever dull your sparkle",
        "You may think you’ll never get over it, but you will, and you’ll be fine",
        "A negative mind will never give you a positive life",
        "Worry about loving yourself, instead of loving the idea of other people loving you",
        "Kill them with success and bury them with a smile",
        "You have to be odd to be number one",
        "You mistakes don’t define you",
        "No beauty shines brighter than that of a good heart",
        "Life would be tragic if it weren’t funny",
        "Weak people revenge. Strong people forgive. Intelligent people ignore.",
        "A secret to happiness is letting every situation be what it is, instead of what you think it should be",
        "It’s important to give it all you have while you have the chance",
        "Your past is just a story and once you realize this, it has no power over you",
        "Be thankful for all the troubles that you don’t have",
        "Don’t forget to be awesome",
        "And in that moment I swear I still didn’t give a shit",
        "To thrive in life you need three bones. A wishbone. A backbone. And a funny bone.",
        "Life is 10% of what happens to you and 90% of how you react to it",
        "You are good enough, smart enough, beautiful enough, and strong enough. Believe it and never let insecurity run your life.",
        "Your vibe attracts your tribe",
        "Be somebody who makes everybody feel like a somebody",
        "I’m gonna make the rest of my life. The best of my life.",
        "It is what it is. Accept it and move on.",
        "Never let somebody waste your time, twice.",
        "Don’t let your fear of what could happen making nothing happen",
        "Broken crayons still color",
        "I release all disease from my body and welcome health, love, and happiness into my life",
        "Oh, yes you certainly fucking can",
        "I persevere. I am relentless. I keep going.",
        "Each day, I automatically and successfully get healthier and healthier",
        "I love taking good care of myself",
        "You can and you will",
        "You must believe it to receive it",
        "Feelings are just visitors, let them come and go",
        "Slow down. Calm down. Don’t worry. Don’t hurry. Trust the process.",
        "Doubt kills more dreams than failure ever will.",
        "In every moment of my day. I radiate calmness & tranquility. I am still within myself.",
        "Take a second to think about how blessed you are.",
        "Forgive yourself for your faults and your mistakes and move on",
        "Stop looking for happiness in the same place you lost it",      
      ];

    const currentAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)]

    const style = {
      background: '#1f3850',
      color: '#5292ab',
      borderRadius: '.25em',
      padding: '.25em',
      boxShadow: '0px 0px 12px 6px #FFFFFF',
      overflow: 'wrap',
      width: '100%',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'fixed',
      bottom: '0',
      
    }

    return (
      <div style={style}>
        <p>{currentAffirmation}</p>
      </div>
    )
}

