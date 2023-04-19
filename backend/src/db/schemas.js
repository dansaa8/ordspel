import mongoose from 'mongoose';

const Highscore = mongoose.model('Highscore', {
  // Mongoose tar första argumentet och lägger till ett S när/om collection skapas.
  name: String,
  time: Number,
  guesses: Array,
  settings: {
    wordLength: mongoose.Schema.Types.Mixed,
    repeatingChars: Boolean,
  },
});

export { Highscore };

// async function run() {
//   const conn = await mongoose.connect('mongodb://127.0.0.1:27017/ordspel'); //anslutningssträng

//   const highscore = new Highscore({
//     name: 'Daniel',
//     time: 12.34,
//     guesses: ['SOL', 'ORD', 'RÖD'],
//     settings: {
//       wordLength: 'any',
//       repeatingChars: true,
//     },
//   });

//   await highscore.save();

//   const highscores = await Highscore.find(); //Kommer ge oss alla våra highscores.
//   console.log(highscores);

//   conn.disconnect();
// }
// run();
