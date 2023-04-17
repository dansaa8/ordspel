import evalWord from './evalWord';
import randWord from './randWord';

class Word {
    constructor() {
        this.getRandom = randWord;
        this.evaluate = evalWord;
    }
}
