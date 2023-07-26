//Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
function personAccount() {
  let firstname = "";
  let lastname = "";
  let incomes = [];
  let expenses = [];

  function addIncome(description, amount) {
    if (amount > 0) {
      incomes.push({ description, amount });
    }
  }

  function addExpense(description, amount) {
    if (amount > 0) {
      expenses.push({ description, amount });
    }
  }

  function totalIncome() {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome += income.amount;
    });
    return totalIncome;
  }

  function totalExpense() {
    let totalExpense = 0;
    expenses.forEach((expense) => {
      totalExpense += expense.amount;
    });
    return totalExpense;
  }

  function accountInfo() {
    console.log(`Account Holder: ${firstname} ${lastname}`);
  }

  function accountBalance() {
    const balance = totalIncome() - totalExpense();
    return balance;
  }

  return {
    setFirstName: function (name) {
      firstname = name;
    },
    setLastName: function (name) {
      lastname = name;
    },
    addIncome,
    addExpense,
    totalIncome,
    totalExpense,
    accountInfo,
    accountBalance,
  };
}

// Usage:
const person = personAccount();
person.setFirstName("John");
person.setLastName("Doe");

person.addIncome("Salary", 3000);
person.addIncome("Freelance", 500);
person.addExpense("Rent", 1000);
person.addExpense("Groceries", 200);

person.accountInfo();
console.log("Total Income:", person.totalIncome());
console.log("Total Expense:", person.totalExpense());
console.log("Account Balance:", person.accountBalance());
