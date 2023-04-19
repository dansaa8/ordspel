import express from 'express';
import * as uuid from 'uuid';
import randWord from '../utils/randWord.js';
import evalWord from '../utils/evalWord.js';
import Database from '../db/Database.js';

const router = express.Router();
export default router;

const GAMES = [];

router.post('/', (req, res) => {
  const newGame = {
    correctWord: randWord(req.body).toUpperCase(),
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

router.post('/:id/guesses', (req, res) => {
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

// If user submits his/her highscore
router.post('/:id/highscore', async (req, res) => {
  const game = GAMES.find((savedGame) => savedGame.id == req.params.id);
  if (game) {
    const highscore = Database.postHighscore(req.body);
    res.status(201).json(highscore);
  } else {
    res.status(404).end();
  }
});