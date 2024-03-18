function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

// Example
const month = 1; // February (0-based index)
const year = 2025;
const daysInMonth = getDaysInMonth(month, year);
console.log(`There are ${daysInMonth} days in the month of February ${year}.`);