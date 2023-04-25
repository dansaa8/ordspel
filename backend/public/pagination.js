const args = document.querySelector('#paginationArgs');

const pageCount = Number(args.getAttribute('data-pageCount'));
let currPage = Number(args.getAttribute('data-currPage'));
const navBar = document.querySelector('.pagi-nav');
const URL = '/highscores';

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

createAnchors();
setLeftArrow();
setRightArrow();

function createAnchors() {
  for (let i = 1; i <= pageCount; i++) {
    const pageNr = document.createElement('a');
    pageNr.innerText = i;
    pageNr.setAttribute('href', `${URL}?page=${i}`);
    pageNr.setAttribute('index', i);
    navBar.appendChild(pageNr);
  }
}

function setLeftArrow() {
  if (currPage > 1) {
    leftBtn.setAttribute('href', `${URL}?page=${currPage - 1}`);
  } else {
    leftBtn.classList.add('disabled');
  }
}

function setRightArrow() {
  if (currPage < pageCount) {
    rightBtn.setAttribute('href', `${URL}?page=${currPage + 1}`);
  } else {
    leftBtn.classList.add('disabled');
  }
}
