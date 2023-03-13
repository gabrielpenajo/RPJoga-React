import express, { json } from 'express';
import { createUser, updateUser, retrieveUserByEmail, retrieveAllUsers } from '../persistence/userPersistence.js';
import bcrypt from "bcrypt";

const router = express.Router();
var session;

router.put('/', async (req, res) => {
    try {
        if (req.body.id) {
            const upUser = await updateUser(req.body);
            return res.json(upUser);

        } else {
            const newUser = await createUser(req.body);
            return res.json(newUser);
        }
    } catch (err) {
            console.log(err);
            res.status(500).send('Error creating/updating user');
    }
    
});

router.get('/', async (req, res) => {
    try {
        const user = await retrieveUserByEmail(req.query.email);
        if (user) {
            return res.json(user);
        } else {
            res.status(404).send('User does not exist');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving user');
    }
})

router.get('/all', async (req, res) => {
    try {
        const user = await retrieveAllUsers(req.query.email);
        if (user) {
            return res.json(user);
        } else {
            res.status(404).send('User does not exist');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving users');
    }
})

router.post('/login', async(req, res) => {
    try {
        const user = await retrieveUserByEmail(req.body.email);
        if (user) {
            const result = await bcrypt.compare(req.body.password, user.password);
            if (result){
                session=req.session;
                session.userid=req.body.email;
                console.log(req.session);
                return res.json('Authorized');
            } else {
                res.status(401).send('Wrong email or password.');
            }

        } else {
            res.status(404).send('User does not exist.');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving user');
    }
})

router.get('/logout', async(req, res) => {
    console.log(req.session);
    req.session.destroy();
    res.send('Bye bye');
})

export default router;