import express from 'express';
import GAME_API from './routes/GAME_API.js';
import highscores from './routes/highscores.js';



const app = express();
app.use(express.json());

app.use('/api/games', GAME_API);
app.use('/api/highscores', highscores);

//konfigurera express, så att den ska leta efter statiska i frontendmappens build mapp
app.use(express.static('../frontend/build'));



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
