console.log("===Excercise 3 starts here===");
//Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: "Gursimran",
  lastName: "Singh",
  incomes: {
    job: "10000",
    realEstate: "5000",
  },
  expenses: {
    rent: "4000",
    bills: "1000",
  },
  totalIncome: "15000",
  totalExpense: "14000",
  accountInfo: () =>
    console.log(
      firstNam + " " + lastName + "/n" + totalIncome + " " + totalExpense
    ),
  addIncome: function (income = 0) {
    this.totalIncome = this.totalIncome + income;
  },
  addExpense: function (expense = 0) {
    this.totalExpense = this.totalIncome + expense;
  },
};

let users1 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];


// Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

function signUp(_id,username,email,password,createdAt,isLoggedIn){
    if(users1.find((user)=>user._id===_id)){
        console.log('User already Exits!');
    }else
    users1.push({
        _id,
        username,
        email,
        password,
        createdAt,
        isLoggedIn
    })
}


signUp('Jh3wed','gursimran123','gursimran@gmail.com','123','07/24/2023 5:06 P.M',false)
console.log(users1);

function signIn(email, password) {
    const userIndex = users1.findIndex((user) => user.email === email && user.password === password);
  
    if (userIndex !== -1) {
      console.log("Login Successful!!");
      users1[userIndex].isLoggedIn = true;
    } else {
      console.log("Login Failed. Invalid email or password.");
    }
  }
  


signIn('gursimran@gmail.com','123');


function rateProduct(_id,rating){
    const productIndex = products.findIndex((product) => product._id===_id)
    if(productIndex!==-1){
        products[productIndex].ratings.push(rating);
    }
}

rateProduct('eedfcf',{ userId: "fg12cy", rate: 1.5 })


function calculateAverageRating(_id){
    const productIndex = products.findIndex((product) => product._id===_id);
    const tRating=products[productIndex].ratings.reduce((acc,rating,index)=>acc+=rating.rate,0);
    console.log(tRating/products[productIndex].ratings.length);
}
calculateAverageRating('eedfcf')


function likeProduct(_id, userId) {
    const productIndex = products.findIndex((product) => product._id === _id);
    if (productIndex !== -1) {
      if (products[productIndex].likes.includes(userId)) {
        console.log('I am working');
        products[productIndex].likes = products[productIndex].likes.filter((id) => id !== userId);
        console.log(products[productIndex].likes);
      } else {
        products[productIndex].likes.push(userId);
      }
    } else {
      console.log("Product not found!");
    }
  }
  
  likeProduct('eedfcf', "fg12cy");
  console.log(products);
 

