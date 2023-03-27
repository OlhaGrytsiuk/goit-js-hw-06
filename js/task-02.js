const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(function(ingredient) {

const itemElements = document.createElement('li');
itemElements.classList.add('item');
itemElements.textContent = ingredient;
console.log(itemElements);

const itemIngredients = document.querySelector('#ingredients');
itemIngredients.appendChild(itemElements);

})
