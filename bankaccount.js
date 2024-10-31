const account = {
    name: "Alex",
    balance: 0,
    credit(amount) {
        this.balance += amount;
    },
    description() {
        return `owner: ${this.name}, balance ${this.balance}`;
    }
};

// Showing initial description
console.log(account.description());

// Crediting 250
account.credit(250);

// Debiting 80
account.credit(-80);

// Showing updated description
console.log(account.description());