import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { Form, Col, Card, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { UPDATE_GOAL } from "../../utils/mutations";
import moment from 'moment';



const EditGoalForm = () => {
    const style = {
        borderBottom: 'thin solid #b4bbc5',
        margin: '.2em',
    }

    const style2 = {
        borderBottom: 'thick solid #5292ab',
        margin: '.1em',
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

    const handleGoalUpdate = async (_id, event, endDate) => {
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
    };

    const UpdateDateFormItem = (props) => {

        const goal = props.goal;
        console.log(goal);
        const [endDate, setEndDate] = useState(null);
    
        return (
            <Form style={style} className="row" key={goal._id} onSubmit={(event) => handleGoalUpdate(goal._id, event, endDate)} dateselected={endDate}>
                <Col style={styleColumn1}>
                    <Row>{goal.description}</Row>
                    <Row>{goal.endDate}</Row>
                </Col>
                <Col style={styleColumn2}>
                    <Row>
                        <DatePicker
                            selected={endDate}
                            onChange={(endDate) => setEndDate(endDate)}
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
                    <Row style={styleRow}>
                        <button type="submit">
                            End Goal
                        </button>
                    </Row>
                </Col>
            </Form>
        );
        }

    return (
        <>
        <Row style={style2}>
            <Col style={styleColumn1}>
                <h5>Goal and Current End Date</h5>
            </Col>
            <Col style={styleColumn2}>
                <h5>Select New End Date</h5>
            </Col>
            <Col style={styleColumn3}></Col>
        </Row>
            {user.goals.map((goal) => (
               <UpdateDateFormItem goal={goal} />
            ))}
    </>
    )
}

export default EditGoalForm;