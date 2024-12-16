// Read input from the user
const solve = (input) => {
    const lines = input.trim().split('\n');
    const t = parseInt(lines[0]); // Number of test cases
    const results = [];
    
    for (let i = 1; i <= t; i++) {
        const n = parseInt(lines[i]);
        results.push(n - 1); // Calculate and store the result
    }
    
    console.log(results.join('\n')); // Print all results line by line
};



solve(input);
