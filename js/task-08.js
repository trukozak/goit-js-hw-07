const inputRef = document.querySelector('[type="number"]');
const addButtonRef = document.querySelector('[data-action="render"]');
const removeButtonRef = document.querySelector('[data-action="destroy"]');
const boxRef = document.querySelector('#boxes');

const rgbMaxValue = 255;
const getRandomNum = () => Math.floor(Math.random() * rgbMaxValue);
const getRandomColor = () =>
  `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`;

const primaryValue = 30;
const step = 10;

const createBoxes = amount => {
  const nextBox = boxRef.lastChild;
  const initialBoxSize =
    nextBox === null
      ? primaryValue - step
      : +nextBox.style.width.replace('px', '');

  const divAll = [];
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement('div');
    const size = `${initialBoxSize + step * i}px`;
    div.style.width = size;
    div.style.height = size;
    div.style.backgroundColor = getRandomColor();
    divAll.push(div);
  }
  boxRef.append(...divAll);
};


addButtonRef.addEventListener('click', onBtnRenderClick => {
  const inputValue = inputRef.value;
  createBoxes(inputValue);
});

removeButtonRef.addEventListener(
  'click',
  destroyBoxes => (boxRef.innerHTML = ''),
);
