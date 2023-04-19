import express from 'express';
import Database from '../db/Database.js';

const router = express.Router();
export default router;

router.get('/', async (req, res) => {
    const highscores = await Database.getHighscores();
    //OK success response code, indicates that req is successful
    res.status(200).json({
        data: highscores,
    });
}); 