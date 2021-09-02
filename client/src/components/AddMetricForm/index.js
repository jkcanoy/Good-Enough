import React, { useState, useEffect }from "react";
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { Form, Card, Col, Alert } from "react-bootstrap";
import { QUERY_USER, QUERY_ME, QUERY_GOALS } from '../../utils/queries';
import { ADD_METRIC } from '../../utils/mutations';
import Auth from '../../utils/auth';


const AddMetricForm = () => {
    const style = {
        borderBottom: 'thin solid #5292ab',
        margin: '.2em',
    }

    const styleCountCol = {
        width: '15px'
    }

    const headerBottomBorder = {
        borderBottom: '3px solid #5292ab',
    
    }

    const { email: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { email: userParam},
    });
  
    const user = data?.me || data?.user || {};

    const [validated] = useState(false);
    
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const [addMetric, { error }] = useMutation(ADD_METRIC, {
        write(cache, { data: { addMetric } }) {
            try {
              const { goals } = cache.readQuery({ query: QUERY_GOALS });
      
              cache.writeQuery({
                query: QUERY_GOALS,
                data: { goals: [addMetric, ...goals.metrics] },
              });
            } catch (e) {
              console.error(e);
            }
      
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
              query: QUERY_ME,
              data: { me: { ...me, goals: [...me.goals.metrics, addMetric] } },
            });
          },
        });

    useEffect(() => {
        if (error) {
          setShowErrorAlert(true);
        } else { 
          setShowErrorAlert(false);
        }
      }, [error, data]);
    

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

    
    const handleSubmitMetric = async (event, complete, goalId, newTally) => {
        event.preventDefault();

        if(complete) {
           newTally ++;
        }
        
        try {
            const { data } = await addMetric({
                variables: {
                    goalId,
                    newTally,
                    complete
                }
            })
            setShowSuccessAlert(true);
        } catch (err) {
            console.log(err);
        }
    };
    

    const AddMetricItem = (props) => {
        const goal = props.goal;

        const [goalId, setGoalId] = useState(null);
        const [complete, setGoalComplete] = useState('false');
        const [newTally, setTally] = useState(goal.tally);
    
        return(
            <Form key={goal._id} style={style} className='row' name={goal.tally} onSubmit={
                (event) => {
                    try{
                        handleSubmitMetric(event, complete, goalId, newTally)
                    } catch (err) {
                        console.log(err)
                    }
                }
            }>
                <Col id=''>
                    {goal.description}
                </Col>
                <Col key={`inline-radio`} className="mb-3">
                    <Form.Check
                        inline
                        name={goal._id}
                        type="checkbox"
                        onChange={(e) => setGoalComplete(e.currentTarget.checked)}
                        onClick={(e) => setGoalId(e.target.name)}
                    />
                    <button type="submit" >
                        Save
                    </button>
                </Col>
                <Col style={styleCountCol}>
                    {goal.tally}
                </Col>
            </Form>
        )
    }
  
    return (
        <>
         { !data ? (
            <p>
             You do not have any goals currently. Please add a goal in the "Creat New Goals" section.
            </p>
         ) : (
             <>
                <>
                    <Alert dismissible onClose={() => setShowSuccessAlert(false)} show={showSuccessAlert} variant='success'>
                    Your status has been added!
                    </Alert>
                </>
                <>
                    <Alert dismissible onClose={() => setShowErrorAlert(false)} show={showErrorAlert} variant='danger'>
                    Something went wrong with your submission!
                    </Alert>
                </>
                <Card.Header className="row" style={headerBottomBorder}>
                    <Col>Goal</Col>
                    <Col>Completed Today?</Col>
                    <Col style={styleCountCol}>Comp. Entries</Col>
                </Card.Header>
                    {user.goals.map((goal) => (
                        <AddMetricItem goal={goal} key={goal._id}/>
                    ))}
            </>
        )}
        </>
    )
}

export default AddMetricForm;
