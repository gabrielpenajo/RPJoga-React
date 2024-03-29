import express from 'express';
import cookieParser from 'cookie-parser';
import session from "express-session";
import cors from 'cors'; // Just use in development. In production, set policies correctly!

import userRouter from './routes/userRouter.js';
import rpgRouter from './routes/rpgRouter.js';

const app = express();

const port = 5000;
const maxAge = 43200000

app.use(session({
    secret: 'rpjogasecret',
    saveUninitialized: false,
    cookie: { maxAge: maxAge }, 
    resave: false
}));

app.use(cors()); // Just use in development. In production, set policies correctly!
app.use(express.json());
app.use(cookieParser());
app.use('/user', userRouter);
app.use('/rpg', rpgRouter);

app.listen(port, () => { console.log('Listening on port ' + port); });