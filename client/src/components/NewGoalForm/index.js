import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client'
import { Form, Col, Row, Alert } from "react-bootstrap";
// import CalendarNew from "../CalendarNew";
import Auth from '../../utils/auth'
import { ADD_GOAL } from '../../utils/mutations';
import DatePicker from 'react-datepicker';

const NewGoalForm = () => {
    const defaultGoals = [
        {
            id: 0,
            description: "",
        },
        {
            id: 1,
            description: "Drink water",
        },  
        {
            id: 2,
            description: "Go on a long walk",
        }, 
        {
            id: 3,
            description: "Engage more with friends",
        }, 
        {
            id: 4,
            description: "Connect with Loved Ones",
        },
        {
            id: 5,
            description: "Healthy eating",
        },
        {
            id: 6,
            description: "Do something fun",
        }, 
        {
            id: 7,
            description: "Do something creative",
        },
        {
            id: 8,
            description: "Take vitamins",
        },
        {
            id: 9,
            description: "Get outside",
        },
        {
            id: 10,
            description: "Take my meds",
        },
        {
            id: 11,
            description: "Learn something",
        },
        {
            id: 12,
            description: "Laugh",
        },

    ]

    const styleDatePicker = {
        width: '65%',
        marginLeft: 'auto',
        marginRight: 'auto',
    }

    const [description, setDescription] = useState('');

    const [endDate, setEndDate] = useState( new Date() );
   
    const [validated] = useState(false);
    
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const [showSuccessAlert, setShowSuccessAlert] = useState(true);
  
    const [addGoal, { error, data }] = useMutation(ADD_GOAL);
    
    useEffect(() => {
      if (error) {
        setShowErrorAlert(true);
      } else { 
        setShowErrorAlert(false);
      }
    }, [error]);

    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(endDate)

        try {
          const { data } = await addGoal({
            variables: {
              description,
              endDate,
            },
          });
        } catch (err) {
          console.log(err);
        }
        setDescription('')
        setEndDate(new Date())
        console.log(endDate)
        delaySetState2();
    };

    function delaySetState2() {
        const timer = setTimeout(() => {
            console.log("this should happen after  seconds");
            window.location.reload()

        }, 2000);
        return() => clearTimeout(timer);
    };

    return (
        <>
        {Auth.loggedIn() ? (
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            { data ? (
                <>
                    <Alert dismissible onClose={() => setShowSuccessAlert(false)} show={showSuccessAlert} variant='success'>
                    Your goal has been added!
                    </Alert>
                </>
            ) : (
                <>
                    <Alert dismissible onClose={() => setShowErrorAlert(false)} show={showErrorAlert} variant='danger'>
                    Something went wrong with your submission!
                    </Alert>
                    <Form.Group className="my-2">
                        <Form.Label>Select a Goal:</Form.Label>
                        <Form.Select name='description' onChange={e => setDescription(e.currentTarget.value)}>
                            {defaultGoals.map((goal) => (
                            <option key={goal.id} value={goal.description}>{goal.description}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Row>
                        <Col sm>
                            <Form.Group className="my-2" style={styleDatePicker}>
                                <Form.Label>Select a Goal End Date: </Form.Label>
                                <DatePicker
                                    selected={endDate}
                                    onChange={(endDate) => setEndDate(endDate) }
                                    showDisabledMonthNavigation
                                    isClearable
                                    dateFormat="MM/dd/yyyy"
                                    openToDate={endDate}
                                    withPortal
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm>
                            <button className="submitButton" type="submit">
                            Submit
                            </button>
                        </Col>
                    </Row>
                </>
            )}
        </Form>
        ) : (
            <p>
              You need to be logged in to share your thoughts. Please{' '}
              <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
            </p>
        )}
        </>
    )
}


export default NewGoalForm;