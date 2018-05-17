


const emailInput = document.querySelector("#email_input")

emailInput.addEventListener("keyup", function(){
    event.preventDefault();
    const emailInputValue = emailInput.value
    const symbolCheck = emailInputValue.includes("@")
    const endCheck = emailInputValue.includes(".com")
    if (emailInputValue == ""){
        emailInput.removeAttribute("style")
    } else if (symbolCheck && endCheck){
        emailInput.style.borderBottomColor = "#00e600";
    } else {
        emailInput.style.borderBottomColor = "#ff0000";
    }
})