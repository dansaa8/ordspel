import express from 'express';
import Database from '../db/Database.js';
const DB = new Database();

const router = express.Router();
export default router;

router.get('/', async (req, res) => {
    const highscores = await DB.getHighscores();
    //OK success response code, indicates that req is successful
    res.status(200).json({
        data: highscores,
    });
}); 