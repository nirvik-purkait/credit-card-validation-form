let cardName = document.getElementById('card-holder-name')
let cardNumber = document.getElementById('card-number')
let cardExpMonth = document.getElementById('exp-month')
let cardExpYear = document.getElementById('exp-year')
let cardCVC = document.getElementById('cvc')

let dataErrorMessage = document.querySelectorAll('[data-error-message]');





cardName.addEventListener('focusout', () => {
  let isOnlySpace = cardName.value.trim().length
  
  if (cardName.value == '' || cardName == null || isOnlySpace == 0) {
    dataErrorMessage[0].dataset.errorMessage = 'Please fill out this field'
    cardName.classList.add('error')
    cardName.classList.remove('success')
  }
  else {
    dataErrorMessage[0].dataset.errorMessage = ''
    cardName.classList.add('success')
    cardName.classList.remove('error')
  } 
  
})


cardNumber.addEventListener('focusout', () => {
  let theCardNumber = Number(cardNumber.value)

  let cardNumberLength = theCardNumber.toString().length

  if (theCardNumber == '' || isNaN(theCardNumber)) {
    dataErrorMessage[1].dataset.errorMessage = 'Wrong format, numbers only'
    cardNumber.classList.add('error')
    cardNumber.classList.remove('success')
  }
  else if (cardNumberLength != 16) {
    dataErrorMessage[1].dataset.errorMessage = 'Please provide 16 digit number'
    cardNumber.classList.add('error')
    cardNumber.classList.remove('success')
  }
  else {
    dataErrorMessage[1].dataset.errorMessage = ''
    cardNumber.classList.add('success')
    cardNumber.classList.remove('error')
  }
  
})


cardExpMonth.addEventListener('focusout', () => {
  let theCardExpMonth = Number(cardExpMonth.value)

  let cardExpMonthLength = theCardExpMonth.toString().length

  if (theCardExpMonth == '' || isNaN(theCardExpMonth) || cardExpMonthLength != 2) {
    dataErrorMessage[2].dataset.errorMessage = 'Please provide valid month and year'
    cardExpMonth.classList.add('error')
    cardExpMonth.classList.remove('success')
  }
  else {
    dataErrorMessage[2].dataset.errorMessage = ''
    cardExpMonth.classList.add('success')
    cardExpMonth.classList.remove('error')
  }

})


cardExpYear.addEventListener('focusout', () => {
  let theCardExpYear = Number(cardExpYear.value)

  let cardExpYearLength = theCardExpYear.toString().length

  if (theCardExpYear == '' || isNaN(theCardExpYear) || cardExpYearLength != 4) {
    dataErrorMessage[2].dataset.errorMessage = 'Please provide valid month and year'
    cardExpYear.classList.add('error')
    cardExpYear.classList.remove('success')
  }
  else {
    dataErrorMessage[2].dataset.errorMessage = ''
    cardExpYear.classList.add('success')
    cardExpYear.classList.remove('error')
  }

})

cardCVC.addEventListener('focusout', () => {
  let theCardCVC = Number(cardCVC.value)

  let cardCVCLength = theCardCVC.toString().length

  if (theCardCVC == '' || isNaN(theCardCVC) || cardCVCLength != 3) {
    dataErrorMessage[3].dataset.errorMessage = 'Please provide a 3 digit number'
    cardCVC.classList.add('error')
    cardCVC.classList.remove('success')
  }
  else {
    dataErrorMessage[3].dataset.errorMessage = ''
    cardCVC.classList.add('success')
    cardCVC.classList.remove('error')
  }

})
