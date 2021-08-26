import React from "react";
import { Accordion, Form, Button, FormControl, Table  } from "react-bootstrap";
import AnimatedRadar from "../components/Radar";
import { CalendarNew, CalendarUpdate } from "../components/Calendar";

///for the radio button, need to change the 

const Dashboard = () => {

    const goals = [
        {
            id: 1,
            description: "Drink more water",
            endDate: '2021/09/20'
        },  
        {
            id: 2,
            description: "Go on more walks",
            endDate: "2021/8/30"
        }, 
        {
            id: 3,
            description: "Engage more with friends",
            endDate: "2021/12/25"
        }, 

    ]

    return (
      <div className="container">
        <Accordion defaultActiveKey="3">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Create New Goals</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Form.Select aria-label="">
                                <option>Pick a goal from the list below</option>
                                {goals.map((goal) => (
                                <option value={goal.id}>{goal.description}</option>
                                ))}
                            </Form.Select>
                            <Form.Control
                                type="color"
                                id="exampleColorInput"
                                defaultValue="#563d7c"
                                title="Choose your color"
                            />
                            <CalendarNew/>
                            <Button variant="primary" type="submit">
                            Submit
                            </Button>
                        </Form>
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Edit Existing Goals</Accordion.Header>
                <Accordion.Body>
                <table>
                    <thead>
                        <tr>
                        <th>Goal Description</th>
                        <th>Current End Date</th>
                        <th>Update</th>
                        <th>Archive</th>
                        <th>Remove</th>
                        </tr>
                    </thead>

                    <tbody>
                        {goals.map((goal) => (
                        <tr key={goal.id}>
                            <td>
                                <FormControl defaultValue={goal.description}></FormControl>
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
                    </table>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Goal Tracker</Accordion.Header>
                <Accordion.Body>
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
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Goal Metrics</Accordion.Header>
                <Accordion.Body>
                    <AnimatedRadar />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </div>
    );
  };
  
  export default Dashboard;
  

      