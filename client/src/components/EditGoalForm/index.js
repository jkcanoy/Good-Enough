import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { Form, Col, Card, Row, Alert } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { QUERY_USER, QUERY_ME, QUERY_GOALS } from '../../utils/queries';
import { UPDATE_GOAL } from "../../utils/mutations";
import moment from 'moment';



const EditGoalForm = () => {
    const style = {
        borderBottom: 'thin solid #b4bbc5',
        margin: '.2em',
    }

    const headerBottomBorder = {
        borderBottom: '3px solid #5292ab',
    
    }


    const styleColumn1= {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        maxWidth: "250px",
    }

    const styleColumn2= {
        maxWidth: "220px",
        marginRight: 'auto',
        marginLeft: 'auto',
        fontSize: '14px'
    }
    const styleRow= {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '.1em'
    }
    const styleButtonWidth ={
        width: '75px'
    }

    const styleColumn3= {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        maxWidth: '30px',
        fontSize: '14px'
    }

    const notAButton = {
        background: 'none',
        padding: 'none',
        margind: 'none'

    }

    const { email: userParam } = useParams();
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { email: userParam },
    });
    const user = data?.me || data?.user || {};

    const [validated] = useState(false);

    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    
    const [updateGoal, { error }] = useMutation(UPDATE_GOAL, {
        write(cache, { data: { updateGoal } }) {
            try {
              const { goals } = cache.readQuery({ query: QUERY_GOALS });
      
              cache.writeQuery({
                query: QUERY_GOALS,
                data: { goals: [updateGoal, ...goals ] },
              });
            } catch (e) {
              console.error(e);
            }
      
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
              query: QUERY_ME,
              data: { me: { ...me, goals: [...me.goals, updateGoal] } },
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

    const handleGoalUpdate = async (_id, event, endDate, active) => {
        event.preventDefault();
        

        const goalId = _id
        let goalActive = active

        const currentDate = moment(new Date()).format('MM DD YYYY')
        const newEndDate = moment(endDate).format('MM DD YYYY')

        if (newEndDate <= currentDate ) {
            goalActive = false;
        } else {
            goalActive = true;
        }
    
          try {
            const { data } = await updateGoal({
              variables: {
                goalId,
                endDate,
                goalActive,
              },
            });
            setShowSuccessAlert(true);
          } catch (err) {
            console.log(err);
          }
    };

    const handleGoalEnd = async (_id, event, endDate, active) => {
        event.preventDefault();
        

        const goalId = _id
        let goalActive = false

        const newEndDate = moment(new Date()).format('MM DD YYYY')

        endDate = newEndDate;
    
          try {
            const { data } = await updateGoal({
              variables: {
                goalId,
                endDate,
                goalActive,
              },
            });
            setShowSuccessAlert(true);
          } catch (err) {
            console.log(err);
          }
    };

    const UpdateDateFormItem = (props) => {

        const goal = props.goal;

        const [endDate, setEndDate] = useState('');
        
       
        return (
            <Form style={style} className="row" onSubmit={(event) => 
            {
                try{
                    handleGoalUpdate(goal._id, event, endDate, goal.active)
                } catch (err) {
                    console.log(err)
                }
            }} >
                <Col style={styleColumn1}>
                    <Row >{goal.description}</Row>
                    <Row >{goal.endDate}</Row>
                </Col>
                <Col style={styleColumn2}>
                    <Row >
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            isClearable
                            dateFormat="MM/dd/yyyy"
                            withPortal
                            placeholderText="Enter new date"
                            showDisabledMonthNavigation
                            minDate={new Date()}
                        />
                    </Row>
                    <Row style={styleRow}>
                        <button style={styleButtonWidth} type="submit">
                            Update
                        </button>
                    </Row>
                </Col>
                <Col style={styleColumn3}>
                    <Row style={styleRow} value={goal.active}>
                        <button type="submit" onClick={(event) => {
                            try {
                                handleGoalEnd(goal._id, event, endDate, goal.active)
                            } catch (err){
                                console.log(err)
                            }
                        }}>
                            End Goal
                        </button>
                        
                    </Row>
                </Col>
            </Form>
        );
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
                    <Col style={styleColumn1}>
                        <h6>Goal and Prior End Date</h6>
                    </Col>
                    <Col style={styleColumn2}>
                        <h6>Select New End Date</h6>
                    </Col>
                    <Col style={styleColumn3}></Col>
                </Card.Header>
                    {user.goals.map((goal) => (
                    <UpdateDateFormItem goal={goal} key={goal._id} />
                    ))}
            </>
        )}
    </>
    )
}

export default EditGoalForm;