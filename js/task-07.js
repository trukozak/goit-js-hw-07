const inputFontSize = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputFontSize.addEventListener('input', onInputChangeSize => {
  let inputRef = inputFontSize.value;
  textRef.style.fontSize = `${inputRef}px`;
});
