import express from 'express';
import api from './routes/api.js';
import expressLayouts from 'express-ejs-layouts';
import Database from './db/Database.js';

const DB = new Database();

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(expressLayouts);
app.use(express.json());
app.set('view engine', 'ejs');
// app.use(express.static('../../frontend/build/static'));
app.use('/public', express.static('./public'));

app.get('/', (req, res) => {
  res.render('', { title: 'Play Game' });
});

app.get('/highscores', async (req, res) => {
  const hiScrsPerPage = 5;

  let highscores;
  if (req.query.page > 0) {
    highscores = await DB.getHighscores(req.query.page, hiScrsPerPage);
  }

  if (highscores && req.query.page <= highscores.pageCount) {
    res.render('highscores', {
      title: 'Highscores',
      highscores: highscores.filteredHghScrs,
      pageCount: highscores.pageCount,
      currPage: req.query.page,
      hiScrsPerPage,
    });
  } else {
    res.render('404', { title: '404' });
  }
});

app.get('/about', async (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/bundle.js', async (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../frontend/build/static/js/main.5aaf2667.js')
  );
});

app.use('/api/games', api);
// app.use('/api/highscores', highscores);

app.listen(5080);
