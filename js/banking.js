// function doubleIt(num){
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear input field
    inputField.value = '';

    return amountValue;
};


function updateTotalField(totalFieldId, amount){
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalElementText = totalElement.innerText;
    const previousTotal = parseFloat(totalElementText);
    totalElement.innerText = previousTotal + amount;
};


function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(depositAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
    }
};


// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function(){
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);

    // get an update deposite total
    // const totalField = document.getElementById('deposit-total');
    // const totalFieldText = totalField.innerText;
    // const previoustotalField = parseFloat(totalFieldText);
    // totalField.innerText = previoustotalField + depositAmount;

    // update Balance
//     const balanceTotal = document.getElementById('balance-total');
//     const balanceTotalText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(balanceTotalText);
//     balanceTotal.innerText = previousBalanceTotal + depositAmount;

const amount = getInputValue('deposit-input');
if(amount > 0) {
updateTotalField('deposit-total', amount);
updateBalance(amount, true);
}

});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    
    // get an update withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // update balance after withdraw
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount <= currentBalance){
    updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log('you cannot withdraw more than what you have in your account');
    }
});