const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemIngredients = document.querySelector('#ingredients');

const items = [];

ingredients.forEach(function(ingredient)  {
const itemElements = document.createElement('li');
itemElements.classList.add('item');
itemElements.textContent = ingredient;
items.push(itemElements);
});

itemIngredients.append(...items);




