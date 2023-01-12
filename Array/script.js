//Selecting elements
const containerMovements = document.querySelector(".movements");
const labelBalance = document.querySelector(".balance__value");

//Data

const account1 = {
  owner: "Natnael Deyas",
  movements: [1000, 2000, -600, 500, -200, 400, -100],
  interestRate: 1.5, //%
  pin: 1111,
};
const account2 = {
  owner: "Natnael Fekadu",
  movements: [100, 200, -300, 5000, -200, 400, -1000],
  interestRate: 1.5, //%
  pin: 2222,
};
const account3 = {
  owner: "Natnael Getachew",
  movements: [200, 400, -600, 3000, -200, 1000, -100],
  interestRate: 1.5, //%
  pin: 3333,
};
const account4 = {
  owner: "Natnael Assefa",
  movements: [6000, 200, -400, 900, -200, 400, -100],
  interestRate: 1.5, //%
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `<div class="movements__row">
<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
<div class="movements__date">3 days ago</div>
<div class="movements__value">${mov}€</div>
</div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

//computing usernames
const user = "Natnael Deyas Tulu";

const createUsername = function (user) {
  const username = user
    .toLowerCase()
    .split(" ")
    .map((name) => name[0])
    .join("");
  console.log(username);
};
createUsername("Natnael Deyas Tulu");
createUsername(account1.owner);

let sum = 0;
//displaying the total balance
const calcPrintBalance = function (movements) {
  const balance = movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${balance}€`;
};
calcPrintBalance(account4.movements);

//Maximum value of movement

const findMaxMovement = function (movements) {
  const max = movements.reduce(function (acc, mov) {
    if (acc > mov) return acc;
    else return mov;
  }, movements[0]);
  console.log(`Maximum value : ${max}`);
};
findMaxMovement(account4.movements);

// let max = 0;
// const findMaxMovement = function (movements) {
//   for (let i = 0; i < movements.length; i++) {
//     if (movements[i] > max) {
//       max = movements[i];
//     }
//   }
//   console.log(`Maximum : ${max}`);
// };
// findMaxMovement(account4.movements);

//Calculate total balance
// const calcBalance = function (movements) {
//   for (let i = 0; i < movements.length; i++) {
//     sum = sum + movements[i];
//   }
//   console.log(sum);
//   labelBalance.textContent = `${sum}€`;
// };
// calcBalance(account4.movements);
// for (let i = 0; i < account1.movements.length; i++) {
//   sum = sum + account1.movements[i];
// }
// console.log(sum);
// totalBalance.textContent = `${sum}€`;

//another way to generate username
// const userN = accountHolder.toLowerCase().split(" ");
// const corr = userN[0].slice(0, 2).concat(userN[1]);
// console.log(corr);
// username.forEach(function (name) {});

//appending
// let newun = "";
// for (i = 0; i < username.length; i++) {
//   let un = username[i].slice(0, 1);
//   newun = newun.concat(un);
// }
// console.log(newun);

// console.log(x);
// const numberList = [100, 200, 300, 400];
// for (let i = 0; i < numberList.length; i++) {
//   console.log(numberList[i]);
// }
// numberList.forEach(function (number, index) {
//   console.log(number, index);
// });
// const displayMovements = function (movements, index) {
//   movements = account1.movements;
//   console.log(account1.movements);
//   index = account1.movements.length;

//   if (account1.movements) {
//     let money = document.createElement("div");
//     money.innerHTML = `<div class="movements__row">
// <div class="movements__type movements__type--deposit">2 deposit</div>
// <div class="movements__date">3 days ago</div>
// <div class="movements__value">${movements}</div>
// </div>`;

//     document.querySelector(".movements").appendChild(money);
//     console.log(money);
//   }
// };
// displayMovements();
// // const accounts = { account1, account2, account3, account4 };
// // for (let i = 0; i < accounts.length; i++) {
// //   console.log(accounts[i]);
// // }

// const movVal = document.querySelector(".movements__value");

// const receiver = document.querySelector(".form__input--to");
// const amount = document.querySelector(".form__input--amount");
// const btnTransfer = document.querySelector(".form__btn--transfer");
// btnTransfer.addEventListener("click", function () {
//   const money = amount.value;
//   movVal.textContent = money;
// });

// const btnTrans = document.querySelector(".form__btn--transfer");
// btnTrans.addEventListener("click", function () {
//   const amount = document.querySelector(".form__input--amount").value;
//   let movv = document.querySelector(".movements__value");
//   movv.textContent = amount;
// });
