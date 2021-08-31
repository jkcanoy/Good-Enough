import React, { useState }from "react";
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { Form, Card, Col } from "react-bootstrap";
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { ADD_METRIC } from '../../utils/mutations';
import Auth from '../../utils/auth';


const AddMetricForm = () => {
    const style = {
        borderBottom: 'thin solid #5292ab',
        margin: '.2em',
    }

    const { email: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { email: userParam},
    });
  
    const user = data?.me || data?.user || {};

    const [goalId, setGoalId] = useState('');
    const [complete, setGoalComplete] = useState('false');
    const [addMetric, { error }] = useMutation(ADD_METRIC);
    

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

    
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        console.log("ID: " + goalId + " complete " + complete )

        try {
            const { data } = await addMetric({
                variables: {
                    goalId,
                    complete,
                }
            })
            
        } catch (err) {
            console.log(err);
        }
    };
  
    return (
        <>
         { !data ? (
            <p>
             You do not have any goals currently. Please add a goal in the "Creat New Goals" section.
            </p>
         ) : (
             <>
                <p>Enter daily status for goals here: </p>
                <Card.Header className="row">
                    <Col>Goal</Col>
                    <Col>Completed Today?</Col>
                    <Col></Col>
                </Card.Header>
                    {user.goals.map((goal) => (
                        <Form key={goal._id} onSubmit={handleFormSubmit} className="row" style={style}>
                            <Col>
                            {goal.description}
                            </Col>
                            <Col>
                                <div key={`inline-radio`} className="mb-3">
                                <Form.Check
                                    inline
                                    name={goal._id}
                                    type="checkbox"
                                    onChange={e => setGoalComplete(e.currentTarget.checked)}
                                    onClick={e => setGoalId(e.target.name)}
                                />
                                </div>
                            </Col>
                            <Col>
                                <button type="submit">
                                    Save
                                </button>
                            </Col>
                        </Form>
                    ))}
            </>
        )}
        </>
    )
}

export default AddMetricForm;
