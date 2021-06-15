const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInput => {
  outputRef.textContent = inputRef.value ? inputRef.value : 'незнакомец';
});
