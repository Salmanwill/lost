// Constructor function for Lost object
function Lost(username, phone, description) {
    this.username = username;
    this.phone = phone;
    this.description = description;
}

// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', () => {
        // Retrieve values from input fields
        const usernameVal = document.getElementById('username').value.trim();
        const phoneVal = document.getElementById('phone').value.trim();
        const descriptionVal = document.getElementById('description').value.trim();
        const messageBox = document.getElementById('messageBox');

        // Check if all fields are filled out
        if (usernameVal === '' || phoneVal === '' || descriptionVal === '') {
            messageBox.innerHTML = '*** Please fill out all fields ***';
        } else {
            // Instantiate the Lost object
            const lostItem = new Lost(usernameVal, phoneVal, descriptionVal);

            // Extract the user's first name using split()
            const firstName = lostItem.username.split(' ')[0];

            // Display success message using properties from the object
            messageBox.innerHTML = `${firstName}, someone will call you within one business day. Description: ${lostItem.description}`;

            // Clear input fields
            document.getElementById('username').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('description').value = '';
        }
    });
});