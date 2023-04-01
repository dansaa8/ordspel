import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (req, res) => {
  res.send(await fs.readFile('./HTML/index.html'));
});

app.get('/about', async (req, res) => {
  res.send(await fs.readFile('./HTML/about.html'));
});

app.get('/highscore', async (req, res) => {
  res.send(await fs.readFile('./HTML/highscore.html'));
});

app.listen(3000);