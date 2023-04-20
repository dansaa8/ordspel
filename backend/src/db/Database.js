import { Highscore } from "./schemas.js";
import mongoose from 'mongoose';
const CONNECTION_URI = 'mongodb://127.0.0.1:27017/ordspel';

export default class Database {
    
    static async postHighscore(data) {
        const highscore = new Highscore(data);
        const conn = await mongoose.connect(CONNECTION_URI);
        await highscore.save();
        conn.disconnect;
        return highscore;
    }

    static async getHighscores() {
        const conn = await mongoose.connect(CONNECTION_URI);
        const highscores = await Highscore.find();
        conn.disconnect;
        return highscores;
    }
}
