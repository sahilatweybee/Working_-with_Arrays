'use strict';

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (acc, sort = false) {
    containerMovements.innerHTML = '';

    let transactions = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;
 
    transactions.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>`;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
}

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`;
}

const calcDisplaySummary = function (acc) {
    let incomes = acc.movements.filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);

    let outgoings = acc.movements.filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);

    labelSumIn.textContent = `${incomes}€`;
    labelSumOut.textContent = `${Math.abs(outgoings)}€`;

    let interest = acc.movements.filter(mov => mov > 0)
        .map(deposit => deposit * currentAccount.interestRate / 100)
        .filter((int, i, arr) => {
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}€`;
};

let createUserNames = function (accs) {
    accs.forEach(function (acc) {
        acc.userName = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};
createUserNames(accounts);
// console.log(accounts);

const updateUI = function (acc) {
    displayMovements(acc);
    calcDisplayBalance(acc);
    calcDisplaySummary(acc);
}

let currentAccount;
btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    currentAccount = accounts.find(acc => acc.userName ===
        inputLoginUsername.value);
    // console.log(currentAccount);
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        //TODO: DIsplay/Update the ui.
        labelWelcome.textContent = `welcome back ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        updateUI(currentAccount);
    } else {
        alert("Invalid UserName or Password!!");
    }

    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
});

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    let receiverAcc = accounts.find(acc => acc.userName === inputTransferTo.value);
    let transferAmount = Number(inputTransferAmount.value);
    if (
        transferAmount > 0 &&
        receiverAcc &&
        currentAccount.balance >= transferAmount &&
        receiverAcc?.userName !== currentAccount.userName
    ) {
        currentAccount.movements.push(-transferAmount);
        receiverAcc.movements.push(transferAmount);
        updateUI(currentAccount);

    } else {
        alert(`Please check wether you have entered correct user name and appropriate 
        amount!`);
    }
    inputTransferTo.value = inputTransferAmount.value = '';
    inputTransferAmount.blur();
});

btnClose.addEventListener('click', function (e) {
    e.preventDefault();
    if (inputCloseUsername.value === currentAccount.userName &&
        Number(inputClosePin.value) === currentAccount.pin) {
        let index = accounts.findIndex(acc => acc.userName === currentAccount.userName);
        accounts.splice(index, 1);

        inputCloseUsername.value = inputClosePin.value = '';
        containerApp.style.opacity = 0;
    }
});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        currentAccount.movements.push(amount);
        updateUI(currentAccount);
    } else if (amount < 0) {
        alert("Loan Amount can't be negative.");
    } else {
        alert(`You Don't match the criteria to get this Loan because you require arleast one deposit tha is higher than ${amount * 0.1}!`);
    }
    inputLoanAmount.value = '';
});

let sorted = false
btnSort.addEventListener('click', function(e){
    e.preventDefault();
    displayMovements(currentAccount, !sorted);
    sorted = !sorted;
});
