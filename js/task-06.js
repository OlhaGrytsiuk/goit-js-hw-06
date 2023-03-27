const input = document.querySelector('#validation-input');
const textLength = input.getAttribute('data-length');


    input.addEventListener('blur', (event) => {
        console.log(event.currentTarget.value.length);
        if (event.currentTarget.value.length !== Number(textLength)) {
           input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
            input.classList.add('valid'); 
        }
    })

   