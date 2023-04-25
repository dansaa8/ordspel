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
hiLiteCurrPageNr();

function createAnchors() {
  for (let i = 1; i <= pageCount; i++) {
    const pageNr = document.createElement('a');
    pageNr.innerText = i;
    pageNr.setAttribute('href', `${URL}?page=${i}`);
    pageNr.setAttribute('index', i);
    pageNr.classList.add('pageNr');
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
    rightBtn.classList.add('disabled');
  }
}

function hiLiteCurrPageNr() {
  // const pageAnchors = document.querySelectorAll('.pageNr');
  const anchor = document.querySelector(`.pageNr[index="${currPage}"]`);
  anchor.classList.add('highlight');

  // for (let i = 0; i < pageAnchors.length; i++) {
  //   if (pageAnchors[i].getAttribute('index') == currPage) {
  //     pageAnchors[i].classList.add('highlight');
  //   } else {
  //     pageAnchors[i].classList.remove('highlight');
  //   }
  // }
}
