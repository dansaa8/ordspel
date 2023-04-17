import express from 'express';
import api from './routes/api.js';
import highscores from './routes/highscores.js';
import expressLayouts from 'express-ejs-layouts';


const app = express();
app.use(expressLayouts);
app.use(express.json());
app.set('view engine', 'ejs');
// app.use(express.static('static'));

app.get('/', (req, res) => {
    res.render('', { title: 'Play Game' });
})

app.get('/highscore', async (req, res) => {
    res.render('highscore', { title: 'Highscore' });
})

app.get('/about', async (req, res) => {
    res.render('about', { title: 'About' });
})



// app.use('/', siteNavigation);
app.use('/api/games', api);
app.use('/api/highscores', highscores);

//konfigurera express, så att den ska leta efter statiska i frontendmappens build mapp
// app.use(express.static('../frontend/build'));



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
