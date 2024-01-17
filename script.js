let totalExpenses = 0;

function addExpense() {
    const expenseInput = document.getElementById('expenseInput');
    const expensesList = document.getElementById('expensesList');
    const totalExpensesElement = document.getElementById('totalExpenses');

    if (expenseInput.value !== '') {
        const expenseAmount = parseFloat(expenseInput.value);
        totalExpenses += expenseAmount;

        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense');
        expenseItem.innerHTML = `<span>$${expenseAmount.toFixed(2)}</span>`;
        expensesList.appendChild(expenseItem);

        totalExpensesElement.textContent = totalExpenses.toFixed(2);

        expenseInput.value = '';
    }
}
