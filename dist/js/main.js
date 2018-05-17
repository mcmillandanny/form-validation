"use strict";

var emailInput = document.querySelector("#email_input");

emailInput.addEventListener("keyup", function () {
    event.preventDefault();
    var emailInputValue = emailInput.value;
    var symbolCheck = emailInputValue.includes("@");
    var endCheck = emailInputValue.includes(".com");
    if (emailInputValue == "") {
        emailInput.removeAttribute("style");
    } else if (symbolCheck && endCheck) {
        emailInput.style.borderBottomColor = "#00e600";
    } else {
        emailInput.style.borderBottomColor = "#ff0000";
    }
});
//# sourceMappingURL=main.js.map
