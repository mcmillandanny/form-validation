


let emailInput = document.querySelector('#email')

emailInput.addEventListener('keyup', function(){
    let emailInputValue = emailInput.value
    let symbolCheck = emailInputValue.includes('@')
    let endCheck = emailInputValue.includes('.com')
    if (emailInputValue == ''){
        emailInput.removeAttribute('style')
    } else if (symbolCheck && endCheck){
        emailInput.style.borderBottomColor = '#00e600';
    } else {
        emailInput.style.borderBottomColor = '#ff0000';
    }
})






