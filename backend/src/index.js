import express from 'express';
import expressLayouts from 'express-ejs-layouts';

import pages from './routes/pages.js';
import api from './routes/api.js';
import Database from './db/Database.js';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const DB = new Database();

const app = express();
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.json());

app.use('/public', express.static('./public'));

app.use('/', pages);
app.use('/api/games', api);

app.get('/bundle.js', async (req, res) => {
  res.sendFile(
    path.join(__dirname, '../../frontend/build/static/js/main.5aaf2667.js')
  );
});

app.listen(5080);

