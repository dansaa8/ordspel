import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs/promises';
import randomWord from './utils/randomWord.js';
import evalWord from './utils/evalWord.js';
import * as uuid from 'uuid';
import { Highscore } from './models.js';


const app = express();
app.use(express.json());

//konfigurera express, så att den ska leta efter statiska i frontendmappens build mapp
app.use(express.static('../frontend/build'));

const GAMES = [];

app.post('/api/games', (req, res) => {
  const newGame = {
    correctWord: randomWord(req.body).toUpperCase(),
    guesses: [],
    id: uuid.v4(),
    startTime: new Date(),
  };

  GAMES.push(newGame);
  // 201 created success status response code indicates that
  // the request has succeeded and has led to the creation of a resource.
  res
    .status(201)
    .json({ id: newGame.id, wordLength: newGame.correctWord.length });
});

app.post('/api/games/:id/guesses', (req, res) => {
  const game = GAMES.find((savedGame) => savedGame.id == req.params.id);
  if (game) {
    const guess = req.body.guess;
    game.guesses.push({
      string: guess,
      evaluation: evalWord(game.correctWord, guess),
    });

    if (guess === game.correctWord) {
      game.endTime = new Date();

      res.status(201).json({
        guesses: game.guesses,
        result: game,
        correct: true,
      });
    } else {
      res.status(201).json({
        guesses: game.guesses,
        correct: false,
      });
    }
  } else {
    res.status(404).end();
  }
});


const fakeHigscoreDatabase = [1, 2, 3];

// If user submits his/her highscore
app.post('/api/games/:id/highscore', async (req, res) => {
  const conn = await mongoose.connect('mongodb://127.0.0.1:27017/ordspel');
  const game = GAMES.find((savedGame) => savedGame.id == req.params.id);
  if (game) {
    console.log(req.body);
    const highscore = new Highscore(req.body);
    await highscore.save();
    res.status(201).json(highscore);
  } else {
    res.status(404).end();
  }
  conn.disconnect;
});

// ?
app.get('/api/highscores', async (req, res) => {
  const highscores = await Highscore.find();

  //OK success response code, indicates that req is successful
  res.status(200).json({
    data: highscores,
  });
});

// app.get('/', async (req, res) => {
//   res.send(await fs.readFile('./HTML/index.html'));
// });

// app.get('/about', async (req, res) => {
//   res.send(await fs.readFile('./HTML/about.html'));
// });

// app.get('/highscore', async (req, res) => {
//   res.send(await fs.readFile('./HTML/highscore.html'));
// });

app.listen(5080);
