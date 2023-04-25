// const contentLimit = args.getAttribute('data-hiScrsPerPage');
const args = document.querySelector('#paginationArgs');

const pageCount = Number(args.getAttribute('data-pageCount'));
let currPage = Number(args.getAttribute('data-currPage'));
const navBar = document.querySelector('.pagi-nav');
const URL = '/highscores';

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

createAnchors();
setLeftBtn();
setRightBtn();

function createAnchors() {
  for (let i = 1; i <= pageCount; i++) {
    const pageNr = document.createElement('a');
    pageNr.innerText = i;
    pageNr.setAttribute('href', `${URL}?page=${i}`);
    pageNr.setAttribute('index', i);
    navBar.appendChild(pageNr);
  }
}

function setLeftBtn() {
  if (currPage >= 1) {
    leftBtn.setAttribute('href', `${URL}?page=${currPage - 1}`);
  } else {
    leftBtn.classList.add('disabled');
  }
}

function setRightBtn() {
  if (currPage < pageCount) {
    rightBtn.setAttribute('href', `${URL}?page=${currPage + 1}`);
  } else {
    leftBtn.classList.add('disabled');
  }
}
