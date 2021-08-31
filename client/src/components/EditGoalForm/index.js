import React, { useState }from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Form, Button, Col, Card, } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { QUERY_USER, QUERY_ME } from '../../utils/queries';

const EditGoalForm = () => {
    const style = {
        borderBottom: 'thin solid #5292ab',
        margin: '.2em',
    }

    const { email: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { email: userParam},
    });
  
    const user = data?.me || data?.user || {};

    const [endDate, setEndDate] = useState( new Date() )

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

    return (
        <>
        <Card.Header className="row">
            <Col>Goal</Col>
            <Col>Current End Date</Col> 
            <Col>Select New End Date</Col>
            <Col></Col>
            <Col></Col>
        </Card.Header>
            {user.goals.map((goal) => (
                <Form key={goal._id} className="row" style={style}>
                <Col xs>
                {goal.description}
                </Col>
                <Col>
                    <DatePicker
                        selected={endDate}
                        selectsStart
                        onChange={(endDate) => setEndDate(endDate)}
                        showDisabledMonthNavigation
                        isClearable
                        dateFormat="MM/dd/yyyy"
                        openToDate={endDate}
                        withPortal
                        />
                </Col>
                <Col>
                    <Button
                        type="button"
                        onClick={() => console.log("hello")}>
                        Update
                    </Button>
                </Col>
                <Col>
                    <Button
                        type="button"
                        onClick={() => console.log("hello")}>
                        Delete
                    </Button>
                </Col>
            </Form>
            ))}
    </>
    )
}

export default EditGoalForm;