import React from "react";
import { Accordion, Form, Button, Col,  } from "react-bootstrap";

const Dashboard = () => {
    return (
      <div className="container">
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Goal Input</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                        <Form.Select aria-label="Default select example">
                            <option>Goal List</option>
                            <option value="1">Health - Drink more water</option>
                            <option value="2">Health - Become more active</option>
                            <option value="3">Social - Engage with a friend</option>
                            <option value="3">Family - Engage with a family member</option>
                        </Form.Select>
                        <Col sm={10}>
                            <Form.Check
                            type="radio"
                            label="first radio"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            />
                            <Form.Check
                            type="radio"
                            label="second radio"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            />
                            <Form.Check
                            type="radio"
                            label="third radio"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            />
                        </Col>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                        </Form>
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Goal Tracker</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Goal Metrics</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </div>
    );
  };
  
  export default Dashboard;
  

      