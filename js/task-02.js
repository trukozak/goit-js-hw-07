const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const listRef = ingredients.map(elem => {
  const addElem = document.createElement('li');
  addElem.textContent = elem;
  return addElem;
});
ingredientsRef.append(...listRef);
// console.log(ingredientsRef);
