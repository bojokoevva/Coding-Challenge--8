// Task 1 - Employee Salary Calculation (Function Declaration)

function calculateSalary(baseSalary, bonus, taxRate) {
    let taxAmount = baseSalary * taxRate; // Compute tax amount
    let netSalary = (baseSalary + bonus) - taxAmount; // Compute net salary
    console.log(`Net Salary: $${netSalary.toFixed(2)}`); 
};

// Test cases
calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"


// Task 2 - Product Price After Discount (Function Expression)

const calculateDiscount = function(price, discountRate) {
    let discountAmount = price * discountRate; // Calculate discount amount
    let finalPrice = price - discountAmount; // Apply discount
    console.log(`Final Price: $${finalPrice.toFixed(2)}`); // Log formatted output
};

// Test cases
calculateDiscount(100, 0.2); // Expected output: "Final Price: $80.00"
calculateDiscount(250, 0.15); // Expected output: "Final Price: $212.50"


// Task 3 - Service Fee Calculation (Arrow Function)

const calculateServiceFee = (amount, serviceType) => {
    let fee = 0;
    
    if (serviceType === "Premium") {
        fee = amount * 0.15;
    } else if (serviceType === "Standard") {
        fee = amount * 0.10;
    } else {
        fee = amount * 0.05;
    }
    
    console.log(`Service Fee: $${fee.toFixed(2)}`); // Log formatted output
};

// Test cases
calculateServiceFee(200, "Premium"); // Expected output: "Service Fee: $30.00"
calculateServiceFee(500, "Standard"); // Expected output: "Service Fee: $50.00"


// Task 4 - Car Rental Cost Calculation (Parameters & Arguments)

function calculateRentalCost(days, carType, insurance = false) {
    let dailyRate = 0;

    if (carType === "Economy") {
        dailyRate = 40;
    } else if (carType === "Standard") {
        dailyRate = 60;
    } else if (carType === "Luxury") {
        dailyRate = 100;
    }

    let totalCost = dailyRate * days;

    if (insurance) {
        totalCost += 20 * days; // Add insurance cost per day
    }

    console.log(`Total Rental Cost: $${totalCost}`); 
}

// Test cases
calculateRentalCost(3, "Economy", true); // Expected output: "Total Rental Cost: $180"
calculateRentalCost(5, "Luxury", false); // Expected output: "Total Rental Cost: $500"


// Task 5 - Loan Payment Calculation (Returning Values)

function calculateLoanPayment(principal, rate, time) {
    let interestAmount = principal * rate * time; // Compute total interest
    let totalPayment = principal + interestAmount; // Compute total loan payment
    console.log(`Total Payment: $${totalPayment.toFixed(2)}`); // Log formatted output
}

// Test cases
calculateLoanPayment(1000, 0.05, 2); // Expected output: "Total Payment: $1100.00"
calculateLoanPayment(5000, 0.07, 3); // Expected output: "Total Payment: $6050.00"


// Task 6 - Identifying Large Transactions (Higher-Order Function)

let transactions = [200, 1500, 3200, 800, 2500];

function filterLargeTransactions(transactions, filterFunction) {
    console.log(transactions.filter(filterFunction));
}

// Test case: Filter transactions greater than $1000
filterLargeTransactions(transactions, function(amount) {
    return amount > 1000;
});  // Expected output: [1500, 3200, 2500]

