import express from 'express';
import { env } from 'process';
import session from 'express-session';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.use(session({
    secret: 'recruitment task',
    saveUninitialized: true,
    resave: false,
    cookie: {
        httpOnly: true,
    },
}));

app.post('/login', (req, res) => {
    const users = [
        {
            username: 'test',
            password: 'test'
        }
    ];

    const response: any = {
        status: 'success',
    }
    if(req.session.isLoggedIn) {
        response.status = 'already_logged';
        return res.status(200).send(response);
    }

    if(!req.body) {
        response.status = 'error';
        response.message = 'provide user credentials: username and password';
        return res.status(400).send(response);
    }

    const { username, password } = req.body;
    const userFound = users.find((user) => {
        return user.username === username && user.password === password;
    });

    if(!userFound) {
        response.status = 'user_not_found';
        return res.status(404).send(response);
    }
    req.session.isLoggedIn = true;
    return res.status(200).send(response);
});

app.get('/users', (req, res) => {
    if(!req.session.isLoggedIn) {
        return res.status(401).send({
            status: 'unauthorized',
            message: 'authorize first'
        });
    }

    let users = [
        {
            name: 'Joe',
            surname: 'Doe',
        },
        {
            name: 'Jan',
            surname: 'Kowalski'
        },
        {
            name: 'James',
            surname: 'Smith'
        },
        {
            name: 'David',
            surname: 'Miller'
        },
        {
            name: 'John',
            surname: 'Brown'
        },
    ];

    return res.status(200).send({
        status: 'success',
        data: users
    });
});

app.listen(Number(env.PORT), () => {
    console.log(`Listen on port: ${env.PORT}`);
});