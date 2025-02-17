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

