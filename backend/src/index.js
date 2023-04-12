import express from 'express';
import fs from 'fs/promises';
import randomWord from './utils/randomWord.js';
import evalWord from './utils/evalWord.js';
import * as uuid from 'uuid';

const app = express();
app.use(express.json());

const GAMES = [];

app.post('/api/games', (req, res) => {
  console.log(req.body);
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
    game.guesses.push({ string: guess, evaluation: evalWord(game.correctWord, guess) });

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

//konfigurera express, så att den ska leta efter statiska i frontendmappens
//build mapp
app.use(express.static('../frontend/build'));

const fakeHigscoreDatabase = [1, 2, 3];
app.get('/highscores', (req, res) => {
  res.status(200).json({
    data: fakeHigscoreDatabase,
  });
});

app.post('/highscores', (req, res) => {
  fakeHigscoreDatabase.push(req.body);

  // i REST-API:er brukar man returnera status 201 (som betyder created)
  // och innehållet, det man har skapat, dvs req.body.
  res.status(201).json({ data: req.body });
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
