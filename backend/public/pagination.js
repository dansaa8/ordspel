const pageNumbers = document.querySelector('.pageNumbers');
const paginationList = document.querySelector('#paginationList');
const listItems = paginationList.querySelectorAll('li');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const args = document.querySelector('#paginationArgs');

const contentLimit = args.getAttribute('data-hiScrsPerPage');
const pageCount = args.getAttribute('data-pageCount');
let currentPage = args.getAttribute('data-currPage');

console.log(pageCount);
console.log(currentPage);

const handleActivePageNumber = () => {
  document.querySelectorAll('a').forEach((button) => {
    button.classList.remove('active');
    const pageIndex = Number(button.getAttribute('index'));
    if (pageIndex == currentPage) {
      button.classList.add('active');
    }
  });
};
handleActivePageNumber();

const displayPageNumbers = (index) => {
  const pageNumber = document.createElement('a');
  pageNumber.innerText = index;
  pageNumber.setAttribute('href', '#');
  pageNumber.setAttribute('index', index);
  pageNumbers.appendChild(pageNumber);
};

const getPageNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    displayPageNumbers(i);
  }
};

const disableButton = (button) => {
  button.classList.add('disabled');
  button.setAttribute('disabled', true);
};

const enableButton = (button) => {
  button.classList.remove('disabled');
  button.removeAttribute('disabled');
};

const controlButtonStatus = () => {
  if (currentPage == 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }
  if (pageCount == currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  controlButtonStatus();

  const prevRange = (pageNum - 1) * contentLimit;
  const currRange = pageNum * contentLimit;

  listItems.forEach((item, index) => {
    item.classList.add('hidden');
    if (index >= prevRange && index < currRange) {
      item.classList.remove('hidden');
    }
  });
};

window.addEventListener('load', () => {
  getPageNumbers();
  setCurrentPage(currentPage);

  prevButton.addEventListener('click', () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener('click', () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll('a').forEach((button) => {
    const pageIndex = Number(button.getAttribute('index'));

    if (pageIndex) {
      button.addEventListener('click', () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});
