const numberCategories = document.querySelectorAll('.item');
console.log('Number of categories:', numberCategories.length);

numberCategories.forEach(function(category) {
    
    const nameCategory = category.querySelector('h2');
    console.log('Category:', nameCategory.textContent);
    const elementCategory = category.querySelectorAll('li');
    console.log('Elements:', elementCategory.length);
   
})