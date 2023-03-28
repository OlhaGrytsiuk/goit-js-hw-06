const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    return alert("Заповніть рядки");
  }

  const form = {};
  form[formElements.email.name] = email;
  form[formElements.password.name] = password;
  console.log(form);

  event.currentTarget.reset();
}
