function findInputValueById(elementId) {

    const inputField = document.getElementById(elementId)
    const inputString = inputField.value
    const input = parseFloat(inputString)
    return input
}
function findElementById(elementId) {

    const innerText = document.getElementById(elementId)
    const textString = innerText.innerText
    const text = parseFloat(textString)
    return text
}

document.getElementById('calculate').addEventListener('click', function () {
    const income = findInputValueById('income')
    const food = findInputValueById('food')
    const rent = findInputValueById('rent')
    const clothes = findInputValueById('cloth')
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
        alert('Please input number')
        return
    }
    // console.log(income)
    // console.log(food)
    // console.log(rent)
    // console.log(clothes)
    const expenses = food + rent + clothes
    if (income < expenses) {
        alert('You crossed your limit')
        return
    }
    const expensesField = document.getElementById('total-expenses')
    expensesField.innerText = expenses
    const balanceValue = income - expenses
    const balanceField = document.getElementById('total-balance')
    balanceField.innerText = balanceValue

})

document.getElementById('btn-save').addEventListener('click', function () {

    const saveValue = findInputValueById('save')
    const convertParcent = saveValue / 100
    if (convertParcent >= 1) {
        alert('It is not possible')
        return
    }

    const income = findInputValueById('income')
    const balance = findElementById('total-balance')
    const save = findElementById('saving-amount')
    console.log(save)
    // if (save >)
    const saveAmount = convertParcent * income
    const savingAmountField = document.getElementById('saving-amount')
    savingAmountField.innerText = saveAmount



    const currentBlance = balance - save



    const remainingBalance = document.getElementById('remaining-balance')
    remainingBalance.innerText = currentBlance
})