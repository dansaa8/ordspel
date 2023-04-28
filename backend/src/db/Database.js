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

  async getHighscores(page, hiScrsPerPage) {
    page -= 1;
    const conn = await mongoose.connect(CONNECTION_URI);
    const filteredHghScrs = await Highscore.find()
      .skip(page * hiScrsPerPage)
      .limit(hiScrsPerPage);
    const allHighscores = await Highscore.find();
    conn.disconnect;
    return {
      filteredHghScrs: filteredHghScrs,
      pageCount: Math.ceil(allHighscores.length / hiScrsPerPage),
    };
  }
}
