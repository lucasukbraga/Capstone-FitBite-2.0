document.addEventListener('DOMContentLoaded', () => {
    // Check if there's an 'error' parameter in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get('error');
    
    // If the error is 'usernameExists', show an alert to the user
    if (error === 'usernameExists') {
        alert('Username already exists. Please choose a different one.');
    }
});