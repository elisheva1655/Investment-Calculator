/*
  Investment Growth Calculator
  Calculates future value using the compound interest formula.
*/

document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements by their IDs
    const form = document.getElementById("investmentForm");
    const resultBox = document.getElementById("resultBox");
    const resultText = document.getElementById("resultText");

    // Listens for form submission
    form.addEventListener("submit", function (event) {
        // Prevent page refresh
        event.preventDefault();
        const number=document.getElementById('initialNumber').value;
        const annualInterest=parseFloat(document.getElementById('interestRate').value);
        const year=parseFloat(document.getElementById('retirementYear').value)-2026;
        let outcome=number*Math.pow(1+(annualInterest/100),year);
        let formattedAmount = outcome.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
        document.getElementById('output').innerHTML ="Your investment will be "+formattedAmount+" when you retire.";

        // TIP: You can view the form input values using the console for debugging
        //console.log("Form submitted " + resultText.value);
    });
});
