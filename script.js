// Select form and other elements
const form = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const summary = document.getElementById('summary');

// Initialize an array to store expenses from localStorage (if any)
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Add event listener for form submission
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form refresh

  // Get form values
  const name = document.getElementById('expense-name').value;
  const amount = parseFloat(document.getElementById('expense-amount').value);
  const category = document.getElementById('expense-category').value;

  // Add new expense to array
  expenses.push({ name, amount, category });

  // Save expenses to localStorage
  localStorage.setItem('expenses', JSON.stringify(expenses));

  // Reset the form
  form.reset();

  // Update the expense list and summary
  displayExpenses();
  calculateSummary();
});

// Function to display expenses
function displayExpenses() {
  expenseList.innerHTML = ''; // Clear the list
  expenses.forEach((expense, index) => {
    const expenseItem = document.createElement('div');
    expenseItem.textContent = `${expense.name} - ${expense.category} - $${expense.amount.toFixed(2)}`;
    expenseList.appendChild(expenseItem);
  });
}

// Function to calculate and display summary
function calculateSummary() {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  summary.textContent = `Total Expense: $${total.toFixed(2)}`;
}

// Display existing expenses when the page loads
displayExpenses();
calculateSummary();
