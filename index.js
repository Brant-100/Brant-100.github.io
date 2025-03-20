function validateForm() {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const street = document.getElementById('street').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let errors = [];//setting errors as an arry in order to push more than one out at once


    if (!name) errors.push("Name cannot be empty.");

 
    const ageNumber = Number(age);
    if (isNaN(ageNumber) || ageNumber < 0 || ageNumber > 120) errors.push("Please enter a valid age.");

    if (!/^\d{10}$/.test(phone)) errors.push("Please enter a valid 10-digit phone number.");//uses a regex to validate phone

    if (!/^\d{5}(-\d{4})?$/.test(zip)) errors.push("Please enter a valid 5-digit ZIP code.");//uses a regex to validate zip

   
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Please enter a valid email address."); //uses a regex to validate email 
    // just accepts anything after @whatever.whatever = not good
    

 
    if (!street) errors.push("Street cannot be empty.");
    if (!city) errors.push("City cannot be empty.");
    if (!state) errors.push("State cannot be empty.");
    if (!message) errors.push("please say somthing about my code Please")
 

    if (errors.length > 0) {
        alert(errors.join("\n")); // makes the eorrs be in a list format 
        return false;
    }
    return true; 
}

document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    if (!validateForm()) {
        e.preventDefault(); 
    };
})

