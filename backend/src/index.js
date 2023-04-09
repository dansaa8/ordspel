import express from 'express';
import fs from 'fs/promises';

const app = express();
app.use(express.json());

// Resources
// * /highscores (Get to retriveve, POST to create)

//Eftersom att det ligger i en array i våran applikation
//Så försvinner datan när vi startar om servern.
//Arrayen är bara en variabel som existerar så länge som programmet kör.
const fakeHigscoreDatabase = [1, 2, 3];

//konfigurera express, så att den ska leta efter statiska i frontendmappens
//build mapp
app.use(express.static('../frontend/build'));

app.get('/highscores', (req, res) => {
  res.status(200).json({
    data: fakeHigscoreDatabase,
  });
});

app.post('/highscores', (req, res) => {
  // TODO: Egentligen borde vi kolla att req.body är det vi
  // förväntar att den ska vara. Men det behöver vi inte bry oss om nu.
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
