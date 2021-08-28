import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Accordion, Form, Button, Table, Col, Row, Card, useAccordionButton } from "react-bootstrap";
import { CalendarNew, CalendarUpdate } from "../components/Calendar";
import Metric from "../components/Metric/index";
import { QUERY_GOALS, QUERY_USERS } from "../utils/queries";

///for the radio button, need to change the checked value with state

const Dashboard = () => {

    const defaultGoals = [
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

    const goals = [
        {
            id: 1,
            description: "Drink more water",
            endDate: '2021/09/20'
        },  
        {
            id: 2,
            description: "Go on a long walk",
            endDate: "2021/8/30"
        }, 
        {
            id: 3,
            description: "Engage more with friends",
            endDate: "2021/12/25"
        }, 

    ]

    const styleAccHeader = {
        backgroundColor: '#215a78 !important',
        width: '100%',
        color: '#e0dee1'
    }

    const styleCard= {
       background: '#fff',
       width: '100%',
    }

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

    // const { user_id } = useParams();

    // const { data } = useQuery(QUERY_USERS,  {
    //     variables: { user_id: user_id },
    // });

    // let user;

    // if (data) {
    // user = data.user;
    // }

    // const { loading, data } = useQuery(QUERY_GOALS, {
    //     variables: { user_id: user_id },
    // });
    // const goalList = data?.goals || [];


    return (
      <div className="container">
          {/* {user ? (
              <> */}
            <Accordion defaultActiveKey="0">
                <Card style={styleCard}>
                    <Card.Header>
                        <ContextAwareToggle eventKey="0">Goal Tracker</ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <p>Enter status for goals for ENTER CURRENT DATE HERE</p>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Goal</th>
                                        <th>Completed?</th>
                                        <th>Save</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {goals.map((goal) => (
                                    <tr key={goal.id}>
                                        <td>
                                        {goal.description}
                                        </td>
                                        <td>
                                        <Form>
                                            <div key={`inline-radio`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Yes"
                                                name="group1"
                                                type="radio"
                                                id={`inline-radio-1`}
                                            />
                                            <Form.Check
                                                inline
                                                checked
                                                label="No"
                                                name="group1"
                                                type="radio"
                                                id={`inline-radio-2`}
                                            />
                                            </div>
                                        </Form>
                                        </td>
                                        <td>
                                            <Button
                                                type="button"
                                                onClick={() => console.log("hello")}>
                                                <span role="img" aria-label="close">
                                                💾
                                                </span>
                                            </Button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </Table>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card style={styleCard}>
                    <Card.Header>
                        <ContextAwareToggle eventKey="1">Create New Goals</ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <form>
                                <Form.Group className="my-2">
                                    <Form.Label>Select a Goal:</Form.Label>
                                    <Form.Select aria-label="">
                                        <option></option>
                                        {defaultGoals.map((goal) => (
                                        <option value={goal.id}>{goal.description}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                                <Row>
                                    <Col xsm>
                                        <Form.Group className="my-2">
                                            <Form.Label>Select a Goal Color: </Form.Label>
                                            <Form.Control
                                                type="color"
                                                id="exampleColorInput"
                                                defaultValue="#563d7c"
                                                title="Choose your color"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xsm>
                                        <Form.Group className="my-2">
                                            <Form.Label>Select a Goal End Date: </Form.Label>
                                            <CalendarNew/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <button className="submitButton" type="submit">
                                Submit
                                </button>
                            </form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card style={styleCard}>
                    <Card.Header>
                        <ContextAwareToggle eventKey="2">Edit Existing Goals</ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <Table>
                                <thead>
                                    <tr>
                                    <th>Description</th>
                                    <th>End Date</th>
                                    <th>Update</th>
                                    <th>Archive</th>
                                    <th>Remove</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {goals.map((goal) => (
                                    <tr key={goal.id}>
                                        <td>
                                        {goal.description}
                                        </td>
                                        <td>
                                            <CalendarUpdate endDate={goal.endDate}/>
                                        </td>

                                        <td>
                                            <Button
                                                type="button"
                                                onClick={() => console.log("hello")}>
                                                <span role="img" aria-label="close">
                                                📝
                                                </span>
                                            </Button>
                                        </td>
                                        <td>
                                            <Button
                                                type="button"
                                                onClick={() => console.log("hello")}>
                                                <span role="img" aria-label="close">
                                                🦖
                                                </span>
                                            </Button>
                                        </td>
                                        <td>
                                            <Button
                                                type="button"
                                                onClick={() => console.log("hello")}>
                                                <span role="img" aria-label="close">
                                                ✖️
                                                </span>
                                            </Button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card style={styleCard}>
                    <Card.Header>
                        <ContextAwareToggle eventKey="3">Goal Metrics</ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <Metric />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            {/* </>
            ) : null} */}
      </div>
    );
  };
  
  export default Dashboard;
  

      