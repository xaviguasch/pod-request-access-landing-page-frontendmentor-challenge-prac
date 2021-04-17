const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = form['email'].value

  if (email === '') {
    showError('email', 'Oops! Please add your email')
  } else if (!validateEmail(email)) {
    showError('email', 'Oops! Please check your email')
  } else {
    removeError('email')
  }
})

function showError(inputName, errorMessage) {
  const formControl = form[inputName].parentNode
  formControl.classList.add('error')

  const errorFormMessage = formControl.querySelector('.error-message')
  errorFormMessage.innerText = errorMessage
}

function removeError(inputName) {
  const formControl = form[inputName].parentNode
  formControl.classList.remove('error')
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
