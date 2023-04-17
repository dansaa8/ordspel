import express from 'express';
// import siteNavigation from './routes/siteNavigation.js';
import gameComm from './routes/gameComm.js';
import highscores from './routes/highscores.js';


const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

// app.use('/', siteNavigation);
app.use('/api/games', gameComm);
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
