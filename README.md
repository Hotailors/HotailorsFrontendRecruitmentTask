# HOTAILORS FRONTEND RECRUITMENT TASK

## Requirements

To start work with task You will need:

* Node.js v8^

## How to use server

First of all go into server directory and use ``npm install`` command which will install dependencies. Next, to start server use ``npm start`` command which starts server on 8080 port.

## Task

Prepare website project in Angular framework inside client directory, which will display list of registered users from server with data filtering possibility on frontend. Task should be programmed with SOLID principles.

* to fetch users list use endpoint: ``GET /users``
* fetched data should be filtered by name or/and surname
* to be able to fetch users list You have to authorize through endpoint: ``POST /login``
* Authorization credentials: ``username: test password: test``
* Example response: ``{ status: 200, data: [ { name: "John", surname: "Doe" } ]}``
* Please, apply to SOLID principles.

In case of any questions send email to: kamil@hotailors.com
