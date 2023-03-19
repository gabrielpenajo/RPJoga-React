import express from 'express';
import { createRpg, updateRpg, retrieveRpgById } from '../persistence/rpgPersistence.js';

const router = express.Router();

// Save or update a rpg.
// If an id is provided, rpg is updated (id and user_id will not be updated).
// If no id is provided, rpg is created (new id will be generated).
router.put('/', async (req, res) => {
    try {
        if (req.body.id) {
            const updatedRpg = await updateRpg(req.body);
            return res.json(updatedRpg);
        } else {
            const newRpg = await createRpg(req.body);
            return res.json(newRpg);
        }
    } catch (err) {
        if (err.cause?.code === 'ER_NO_REFERENCED_ROW_2') {
            res.status(400).send('User ' + req.body.user_id + ' does not exist');
        } else {
            console.log(err);
            res.status(500).send('Error creating rpg');
        }
    }
});

// Retrieve a rpg by id (provided via route param)
router.get('/:id', async (req, res) => {
    try {
        const rpg = await retrieveRpgById(req.params.id);
        return res.json(rpg);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving rpgs');
    }
});

export default router;