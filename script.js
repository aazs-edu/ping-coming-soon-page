"use strict";
// Select Elements
const submitBtn = document.getElementById("submitBtn");
const input = document.getElementsByTagName("input")[0];
const invalidFeedback = document.getElementsByClassName("invalid-feedback")[0];

// Handle Input Validation
var emailRegexp = /^[^@]+@[^@]+\.[^@]+$/;

submitBtn.addEventListener("click", () => {
    if (input.value !== "" && emailRegexp.test(input.value)){
        // Popup Toast
        Swal.fire({
            toast: true,
            text: "Thank you for subscribing",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
            position: "top",
        });
        input.value = "";
        input.classList.remove("invalid");
        invalidFeedback.classList.add("hide");
    }
    else{
        input.value = ""
        input.classList.add("invalid");
        invalidFeedback.classList.remove("hide");
    }
})