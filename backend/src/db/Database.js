import { Highscore } from "./schemas.js";
import mongoose from 'mongoose';

export default class Database {
    
    static async postHighscore(data) {
        const CONNECTION_URI = 'mongodb://127.0.0.1:27017/ordspel';
        const conn = await mongoose.connect(CONNECTION_URI);
        const highscore = new Highscore(data);
        await highscore.save();
        conn.disconnect;
        return highscore;
    }

    static async getHighscores() {
        const highscores = await Highscore.find();
        return highscores;
    }
}