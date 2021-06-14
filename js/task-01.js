const сategoryRef = document.querySelector('#categories');
const amountCategory = сategoryRef.children;
console.log(`В списке ${amountCategory.length} категории.`);

[...amountCategory].forEach(item => {
  const titleRef = item.querySelector('h2');
  console.log(`Категория: ${titleRef.textContent}`);
  const countList = item.querySelector('ul');
  const countListEl = countList.children;
  console.log(`Количество элементов: ${countListEl.length}`);
});
