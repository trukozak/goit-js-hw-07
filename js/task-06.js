const inputRef = document.querySelector('#validation-input');
const dataLength = +inputRef.dataset.length;

inputRef.addEventListener('blur', event => {
  const input = event.target;
  inputRef.classList.add('invalid');
  if (input.value.length === dataLength) {
    inputRef.classList.replace('invalid', 'valid');
  }
});
