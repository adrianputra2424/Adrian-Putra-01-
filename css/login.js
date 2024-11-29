function confirmLogin() {
    document.getElementById('popup').style.display = 'flex';
    return false; // Prevent form submission
}

function submitForm() {
    document.getElementById('loginForm').submit(); // Submit the form
}

function closePopup() {
    document.getElementById('popup').style.display = 'none'; // Close the popup
}