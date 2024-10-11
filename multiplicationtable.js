while (true) {
    const number = parseInt(prompt("Enter a number between 2 and 9: "));
    if (2 <= number <= 9) {
        break;
    }
    alert("Please enter a number between 2 and 9.");
}

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}