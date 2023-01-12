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

//Computing usernames
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
//displaying  total balance
const calcPrintBalance = function (movements) {
  const balance = movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${balance}€`;
};
calcPrintBalance(account4.movements);

//Max value of movement

const findMaxMovement = function (movements) {
  const max = movements.reduce(function (acc, mov) {
    if (acc > mov) return acc;
    else return mov;
  }, movements[0]);
  console.log(`Maximum value : ${max}`);
};
findMaxMovement(account4.movements);



