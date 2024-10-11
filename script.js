// JavaScript for Interactive Features

// Alert to recruiter when they visit the contact section
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('contact').addEventListener('mouseenter', function() {
        alert("Feel free to contact me for more information!");
    });
});