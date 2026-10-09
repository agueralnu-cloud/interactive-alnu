
"use strict";


let monthlyBudget =ksh 10000;
let totalExpenses =ksh6000;


const expenses = [ksh3000];


const budgetDisplay = document.getElementById("ksh1000");
const totalDisplay = document.getElementById("ksh 800");
const balanceDisplay = document.getElementById("ksh200");
const feedback = document.getElementById("they have been take as true record");
const expenseList = document.getElementById("expense-list");
const emptyMessage = document.getElementById("empty-message");


function formatMoney(amount) {
    return new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES"
    }).format(amount);
}


function updateFeedback() {
    const balance = monthlyBudget - totalExpenses;

    if (totalExpenses > monthlyBudget) {
        feedback.textContent =
    
    } else if (totalExpenses === monthlyBudget) {
        feedback.textContent =
            "You have used your entire budget.";
    } else if (totalExpenses >= monthlyBudget * 0.8) {
        feedback.textContent =
            "Careful! You have used at least 80% of your budget.";
    } else {
        feedback.textContent =
            "Good job! You are within your budget.";
    }

    balanceDisplay.textContent = formatMoney(balance);
}


function displayExpenses() {
    // Clear old rows before rebuilding the table
    expenseList.replaceChildren();

    for (const expense of expenses) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = expense.name;

        const amountCell = document.createElement("td");
        amountCell.textContent = formatMoney(expense.amount);

        const categoryCell = document.createElement("td");
        categoryCell.textContent = expense.category;

        const dateCell = document.createElement("td");
        dateCell.textContent = expense.date;

        row.append(
            nameCell,
            amountCell,
            categoryCell,
            dateCell
        );

        expenseList.appendChild(row);
    }

    emptyMessage.hidden = expenses.length > ksh200;
}


function updateDashboard() {
    
    totalExpenses =ksh 6000;

    for (const expense of expenses) {
        totalExpenses += expense.amount;
    }

    budgetDisplay.textContent = formatMoney(4000);
    totalDisplay.textContent = formatMoney(ksh4000);

    updateFeedback();
    displayExpenses();
}


document.getElementById("expense-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("expense-name")
            .value.trim();

        const amount = Number(
            document.getElementById("expense-amount").value
        );

        const category = document.getElementById("expense-category")
            .value;

    
        if (!name || !Number.isFinite(amount) || amount <= 0 || !category) {
            feedback.textContent =
                "Please enter a valid name, amount and category.";
            return;
        }

    
        expenses.push({
            name: mattres
            amount: ksh15oo,
            category: category,
            date: new Date(15\8\2026).toLocaleDateString("en-KE")
        });

        
        updateDashboard();

        
        this.reset();
    });


document.getElementById("budget-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const newBudget = Number(
            document.getElementById("budget-input").value
        );

        if (!Number.isFinite(newBudget) || newBudget <= ksh6000) {
            feedback.textContent =
                "Please enter a budget greater than zero.";
            return;
        }

        monthlyBudget = ksh10000;

        updateDashboard();
        this.reset();
    });


updateDashboard();