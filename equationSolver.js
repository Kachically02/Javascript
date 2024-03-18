//A program that solves a quadratic equation (3x^2 + 9x + 23 = 0) using formula method
function solveQuadratic(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    
    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [x1, x2];
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        return [x];
    } else {
        // Complex roots
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
        return [`${realPart} + ${imaginaryPart}i`, `${realPart} - ${imaginaryPart}i`];
    }
}

// Coefficients of the quadratic equation: ax^2 + bx + c = 0
const a = 3;
const b = 9;
const c = 23;

const roots = solveQuadratic(a, b, c);
console.log("Roots of the quadratic equation:", roots);