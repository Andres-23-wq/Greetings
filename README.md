# Greeting App

Welcome to the Greeting App! This is a simple JavaScript application that allows users to enter their name and receive a personalized greeting message. Additionally, the project includes Cypress tests to ensure the functionality of the app.

## Overview

The Greeting App is a straightforward application developed using JavaScript. Users can input their name into a text field and click a button to submit it. Upon submission, the app generates a greeting message with the user's name and displays it on the screen.

## Testing

Cypress tests have been implemented to verify the functionality of the Greeting App. These tests ensure that users can successfully input their name, submit it, and receive the expected greeting message. The tests are run automatically using GitHub Actions as part of the project's continuous integration (CI) workflow.

## Usage

To run the Greeting App locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the application by running `npm start`.
5. Access the app in your web browser at `http://localhost:PORT`, where `PORT` is the port number specified in the terminal.

## Cypress Tests

To run Cypress tests locally, make sure you have Cypress installed as a development dependency:

```bash
npm install cypress --save-dev

