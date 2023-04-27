import express from 'express';
import Database from '../db/Database.js';
const DB = new Database();

const router = express.Router();
export default router;

router.get('/', (req, res) => {
    res.render('', { title: 'Play Game' });
});

router.get('/about', async (req, res) => {
    res.render('about', { title: 'About' });
});

router.get('/highscores', async (req, res) => {
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