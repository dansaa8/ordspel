import mongoose from 'mongoose';

const Highscore = mongoose.model('Highscore', {
  name: String,
  time: Number,
  guesses: Array,
  settings: {
    wordLength: mongoose.Schema.Types.Mixed,
    repeatingChars: Boolean,
  },
});

export { Highscore };
