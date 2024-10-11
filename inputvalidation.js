while (true) {
    const number = parseInt(prompt("Enter a number: "));
    if (number <= 100) {
        break;
    }
    alert("Please enter a number less than or equal to 100.");
}

// Improved version:
while (true) {
    const number = parseInt(prompt("Enter a number between 50 and 100: "));
    if (50 <= number <= 100) {
        break;
    }
    alert("Please enter a number between 50 and 100.");
}