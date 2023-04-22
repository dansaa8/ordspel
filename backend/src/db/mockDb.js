import { Highscore } from './schemas.js';
import mongoose from 'mongoose';

export default function renderMockHiScrs() {
  const db = mongoose.connection;
  db.once('open', async () => {
    const highscore = new Highscore();
    if ((await Highscore.countDocuments().exec()) > 0) return;
    Highscore.create({
      name: 'Erik',
      time: 4.5,
      guesses: ['LOSER', 'MOSAS', 'SOLAS'],
      settings: { wordLength: 5, repeatingChars: false },
    });

    Highscore.create({
      name: 'Jan',
      time: 14.51,
      guesses: ['LOS', 'MOS', 'SOL'],
      settings: { wordLength: 3, repeatingChars: false },
    });

    Highscore.create({
      name: 'Olle',
      time: 3.85,
      guesses: ['SJUBOKS', 'UJKLDFE', 'SLDASDE'],
      settings: { wordLength: 7, repeatingChars: false },
    });

    Highscore.create({
      name: 'Sven',
      time: 8.11,
      guesses: ['DASI', 'SDSL', 'QWERR'],
      settings: { wordLength: 4, repeatingChars: true },
    });

    Highscore.create({
      name: 'Göran',
      time: 20.98,
      guesses: ['NIOBOKSTA', 'LUTDCBETR', 'PTRWAHCBT'],
      settings: { wordLength: 9, repeatingChars: false },
    });

    Highscore.create({
      name: 'Ove',
      time: 1.57,
      guesses: ['KJFD', 'YTRE', 'XZAW'],
      settings: { wordLength: 4, repeatingChars: false },
    });

    Highscore.create({
      name: 'Anna',
      time: 9.04,
      guesses: ['UTAAA', 'UJNVR', 'PTRQQ'],
      settings: { wordLength: 5, repeatingChars: true },
    });

    Highscore.create({
      name: 'Pelle',
      time: 74.12,
      guesses: ['FEMBO', 'AOJHT', 'YQEPÄ'],
      settings: { wordLength: 5, repeatingChars: false },
    });

    Highscore.create({
      name: 'Stina',
      time: 4.71,
      guesses: ['UHGFREWQ', 'PLKHGFDS', 'OIUYTDCO'],
      settings: { wordLength: 8, repeatingChars: true },
    });

    Highscore.create({
      name: 'Kalle',
      time: 26.27,
      guesses: ['KJHGTEW', 'UIOPLKJ', 'HGFEWQA'],
      settings: { wordLength: 7, repeatingChars: false },
    });

    Highscore.create({
      name: 'Svea',
      time: 14.11,
      guesses: ['FYRA', 'IYTR', 'EWQQ'],
      settings: { wordLength: 4, repeatingChars: true },
    });

    Highscore.create({
      name: 'Ann',
      time: 7.32,
      guesses: ['LKSDU', 'UREDF', 'FFEAS'],
      settings: { wordLength: 5, repeatingChars: true },
    });

    Highscore.create({
      name: 'Birger',
      time: 14.59,
      guesses: ['OIUYTR', 'LKJHGF', 'GFDSAQ'],
      settings: { wordLength: 6, repeatingChars: false },
    });

    Highscore.create({
      name: 'Harald',
      time: 4.21,
      guesses: ['OIUYTREQ', 'IJHGFDCE', 'IUYTREWQ'],
      settings: { wordLength: 8, repeatingChars: false },
    });
    // Promise.all({}).then(() => console.log('Added users'));
  });
}
