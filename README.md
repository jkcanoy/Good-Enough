# Good-Enough

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

Our application is a to-do-list/tracker application where users can create an account, create a daily goal by choosing a default goal from the dropdown menu, set an end date for that goal, and add that to their goal tracker where they can mark if the goal has been completed for the day or not. Users are also able to edit existing goals where they can select a new end date, or end the goal. Overall our project goal is to discourage neverending lists, as well as overly complicated/specific list items.

### Motivation

Our motivation behind this project was to create an app that would allow users to create a short list of broad goals to help them balance life without creating endless lists and guilt.

## Table of Contents

- [Description](#description)
- [Core Objectives Met](#coreobjectivesmet)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Deployed](#deployed)
- [License](#license)
- [Contributors](#contributors)

## Core Objectives Met

- When a user views the homepage, they will find a site description and buttons to login in or sign up and create an account.
- When a user attempts to sign in or create an account, they can sign in or create a password-protected account
- When a user views the user's dashboard in a logged-in state, they see a list of all the goals they are tracking.
- When a user views the user's dashboard in a logged-out state, they are asked to login.
- When a user is views any page in a logged-in or logged-out state, the footer presents an 'affirmation' that changes on page refresh.
- When a user views the 'Goal Tracker' accordian, they are able to check off whether a goal has been completed for the day, and submit to update the goal's metrics, and increase the count under 'Comp. Entries.'
- When a user clicks on the 'Create New Goals' button, the accordian drops down and users are then able to choose a goal from a dropdown, select a date through a calendar modal, and submit to create a new goal.
- When a user clicks on the 'Edit Existing Goals' button, the accordian drops down, users are able to view their existing goals and end dates, and update those end dates or end the goal.
- When a user clicks on the 'Goal Metrics' button, the accordian drops down and users are able to see a radial graph that visualizes how many times they have completed a goal.

## Technologies

- React
- JavaScript
- CSS
- HTML
- Node.js
- Apollo-Server-Express
- Mongoose
- bcrypt
- GraphQL
- React-Vis
- JSONwebtoken
- React-Datepicker
- React-Bootstrap

## Installation

Must have a connection in Robo-3T.

1. Clone Good-Enough repo to local machine.
2. Access repo using the command line.

## Usage

1. Access repo using the command line.
2. Run `npm i`.
3. Run `npm run develop`.
4. Open application in `localhost:3000`.
5. Open graphql in `localhost:3001/graphql`.

## Demo

The following gif shows the design and functionality of the application

[A user can register on signup page, then can see their empty dashboard. They then add goals and choose end dates. The user can see their list of goals and check off if the goal has been completed for the day. They can also edit the end date and see a radial chart comparing each goal and number of completions](https://drive.google.com/file/d/14rSsymtoXFHl1RWJXZ45H35YBOSwP5zS/view)

## Deployed

Access the deployed application [here](https://good-enuff.herokuapp.com/dashboard)

## License

©2021 Cailin Bell Wold, Sandy Marr, Tami Shepherd, and Kyle Canoy

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributors

For inquiries, please contact any of the following contributors:

- [Cailin Bell Wold](https://github.com/CailinBellWold)
- [Sandy Marr](https://github.com/sandra-marr)
- [Tami Shepherd](https://github.com/Fett-Boba)
- [Kyle Canoy](https://github.com/jkcanoy)
