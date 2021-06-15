const refs = {
  input: document.querySelector('input'),
  create: document.querySelector('[data-action="render"]'),
  destroy: document.querySelector('[data-action="destroy"]')
}
console.log(refs.input);

refs.input.addEventListener('input', onValueBoxes)
refs.create.addEventListener('click', onCreateBoxes)

function onValueBoxes() {
  const resValue = refs.input.value
  console.log(resValue);
}
function onCreateBoxes(amount) {
  amount.forEach(element => {
    const res = document.createElement('div')
    element = res
    console.log(element);

  });
}
onCreateBoxes([2])
