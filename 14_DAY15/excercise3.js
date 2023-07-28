//Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]


class Statistics {
    count() {
        return ages.length;
    }
    sum() {
        return ages.reduce((a, b) => a + b);
    }
    min() {
        return Math.min(...ages);
    }
    max() {
        return Math.max(...ages);
    }
    range() {
        return this.max() - this.min();
    }
    mean() {
        return this.sum() / this.count();
    }
    median() {
        return this.mode()[0];
    }
    mode() {
        const counts = {};
        ages.forEach((age) => {
            if (counts[age]) {
                counts[age]++;
            } else {
                counts[age] = 1;
            }
        });
        let maxCount = 0;
        let maxAge = 0;
        for (let age in counts) {
            if (counts[age] > maxCount) {
                maxCount = counts[age];
                maxAge = age;
            }
        }
        return {
          'mode': maxAge,
            'count': maxCount
        };
    }
    var() {
        const mean = this.mean();
        return this.sum() / this.count() - mean * mean;
    }
    std() {
        return Math.sqrt(this.var());
    }
    freqDist() {
        const counts = {};
        ages.forEach((age) => {
            if (counts[age]) {
                counts[age]++;
            } else {
                counts[age] = 1;
            }
        });
        const freqDist = [];
        for (let age in counts) {
            freqDist.push([age, counts[age]]);
        }
        freqDist.sort((a, b) => a[1] - b[1]);
        return freqDist;
    }
    print() {
        console.log('Count:', this.count()) 
        console.log('Sum: ', this.sum()) 
        console.log('Min: ', this.min()) 
        console.log('Max: ', this.max()) 
    }
}

const statistics = new Statistics();
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) 


//Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.incomes = {};
      this.expenses = {};
    }
  
    addIncome(description, amount) {
      if (amount > 0) {
        this.incomes[description] = amount;
      }
    }
  
    addExpense(description, amount) {
      if (amount > 0) {
        this.expenses[description] = amount;
      }
    }
  
    totalIncome() {
      let totalIncome = 0;
      for (const amount of Object.values(this.incomes)) {
        totalIncome += amount;
      }
      return totalIncome;
    }
  
    totalExpense() {
      let totalExpense = 0;
      for (const amount of Object.values(this.expenses)) {
        totalExpense += amount;
      }
      return totalExpense;
    }
  
    accountInfo() {
      console.log(`Account Holder: ${this.firstname} ${this.lastname}`);
    }
  
    accountBalance() {
      const balance = this.totalIncome() - this.totalExpense();
      return balance;
    }
  }
  

  const person = new PersonAccount("John", "Doe");
  person.addIncome("Salary", 3000);
  person.addIncome("Freelance", 500);
  person.addExpense("Rent", 1000);
  person.addExpense("Groceries", 200);
  person.accountInfo();
  console.log("Total Income:", person.totalIncome());
  console.log("Total Expense:", person.totalExpense());
  console.log("Account Balance:", person.accountBalance());
  