import { Highscore } from './schemas.js';
import mongoose from 'mongoose';
import renderMockHiScrs from './mockDb.js';
const CONNECTION_URI = 'mongodb://127.0.0.1:27017/ordspel';

export default class Database {
  constructor() {
    renderMockHiScrs();
  }

  async postHighscore(data) {
    const highscore = new Highscore(data);
    const conn = await mongoose.connect(CONNECTION_URI);
    await highscore.save();
    conn.disconnect;
    return highscore;
  }

  async getHighscores(page) {
    const hiScrsPerPage = 10;
    const conn = await mongoose.connect(CONNECTION_URI);
    const highscores = await Highscore.find()
      .skip(page * hiScrsPerPage)
      .limit(hiScrsPerPage);
    conn.disconnect;
    return highscores;
  }
}
