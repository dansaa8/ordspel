import express from 'express';
import mongoose from 'mongoose';
import { Highscore } from '../schemas.js';

const router = express.Router();
export default router;

router.get('/', async (req, res) => {
    const highscores = await Highscore.find();

    //OK success response code, indicates that req is successful
    res.status(200).json({
        data: highscores,
    });
}); 