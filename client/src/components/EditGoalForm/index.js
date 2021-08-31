import React from "react";
import { useQuery } from '@apollo/client';
import { Accordion, Form, Button, Table, Card, useAccordionButton, } from "react-bootstrap";
import CalendarUpdate from "../CalendarUpdate";
import { QUERY_USER, QUERY_ME } from '../../utils/queries';

const EditGoalForm = () => {
    let goals = [];

    return (
        <Table>
        <thead>
            <tr>
            <th>Description</th>
            <th>End Date</th>sss
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
    )
}

export default EditGoalForm;