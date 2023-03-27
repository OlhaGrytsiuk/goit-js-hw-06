

const addListenerBtn = document.querySelector('[data-action="increment"]');
const removeListenerBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;
let spanValue = document.querySelector('#value');


addListenerBtn.addEventListener("click", () => {
  counterValue += Number(addListenerBtn.textContent);
  spanValue.textContent = counterValue;
});

removeListenerBtn.addEventListener("click", () => {
  counterValue += Number(removeListenerBtn.textContent);
  spanValue.textContent = counterValue;
});


