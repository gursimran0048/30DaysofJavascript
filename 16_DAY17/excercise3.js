//Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = {
    firstname: "",
    lastname: "",
    incomes: {},
    expenses: {},
    
    addIncome(description, amount) {
      if (amount > 0) {
        this.incomes[description] = amount;
        this.saveData();
      }
    },
  
    addExpense(description, amount) {
      if (amount > 0) {
        this.expenses[description] = amount;
        this.saveData();
      }
    },
  
    totalIncome() {
      let totalIncome = 0;
      for (const amount of Object.values(this.incomes)) {
        totalIncome += amount;
      }
      return totalIncome;
    },
  
    totalExpense() {
      let totalExpense = 0;
      for (const amount of Object.values(this.expenses)) {
        totalExpense += amount;
      }
      return totalExpense;
    },
  
    accountInfo() {
      console.log(`Account Holder: ${this.firstname} ${this.lastname}`);
    },
  
    accountBalance() {
      const balance = this.totalIncome() - this.totalExpense();
      return balance;
    },
  
    loadData() {
      const data = JSON.parse(localStorage.getItem('personAccountData'));
      if (data) {
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.incomes = data.incomes;
        this.expenses = data.expenses;
      }
    },
  
    saveData() {
      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
        incomes: this.incomes,
        expenses: this.expenses
      };
      localStorage.setItem('personAccountData', JSON.stringify(data));
    }
  };
  

  personAccount.loadData();
  

  personAccount.firstname = "John";
  personAccount.lastname = "Doe";
  
  personAccount.addIncome("Salary", 3000);
  personAccount.addIncome("Freelance", 500);
  personAccount.addExpense("Rent", 1000);
  personAccount.addExpense("Groceries", 200);
  
  personAccount.accountInfo();
  console.log("Total Income:", personAccount.totalIncome());
  console.log("Total Expense:", personAccount.totalExpense());
  console.log("Account Balance:", personAccount.accountBalance());
  