import React, { useState } from "react";
import { Accordion, Card, useAccordionButton, } from "react-bootstrap";
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Auth from '../utils/auth';
import AddMetricForm from "../components/AddMetricForm";
import EditGoalForm from "../components/EditGoalForm";
import NewGoalForm from '../components/NewGoalForm'
import Graphs from "../components/Graphs/index";
import { QUERY_USER, QUERY_ME } from '../utils/queries'

const Dashboard = () => {

/// styling ///
    const styleAccHeader = {
        backgroundColor: '#215a78 !important',
        width: '100%',
        color: '#e0dee1'
    }

    const styleCard = {
       background: '#fff',
       width: '100%',
    }

    const styleHeader = {
        fontSize: '20px !important'
    }

/// Get user data ///
    // const { email: userParam } = useParams();

    // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    //   variables: { email: userParam},
    // });
  
    // const user = data?.me || data?.user || {};

    // const numberGoals = user.goals.length;
    // console.log(numberGoals)


/// Accordian toggle ///
    function ContextAwareToggle({ children, eventKey, callback }) {
      
        const decoratedOnClick = useAccordionButton(
          eventKey,
          () => callback && callback(eventKey),
        );
      
        return (
          <button
            type="button"
            style={styleAccHeader}
            onClick={decoratedOnClick}
          >
            {children}
          </button>
        );
    }

    return (
      <div className="container">
            <Accordion defaultActiveKey='0'>
                <Card style={styleCard}>
                    <Card.Header>
                        <ContextAwareToggle eventKey="0">
                            <h2>Goal Tracker</h2></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <AddMetricForm />
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card style={styleCard}>
                    <Card.Header>
                        <ContextAwareToggle eventKey="1"><h2>Create New Goals</h2></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <NewGoalForm />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card style={styleCard}>
                    <Card.Header>
                        <ContextAwareToggle eventKey="2"><h2>Edit Existing Goals</h2></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <EditGoalForm />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card style={styleCard}>
                    <Card.Header>
                        <ContextAwareToggle eventKey="3"><h2>Goal Metrics</h2></ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <Graphs />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
      </div>
    );
  };
  
  export default Dashboard;
  

      