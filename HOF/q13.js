function processCategories(categories) { 
    let counts = categories.reduce(function(acc, category) {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});
    let sorted = Object.entries(counts).sort(function(a, b) {
        return b[1] - a[1];
    });
    return {
        counts: counts,
        sorted: sorted
    };
}

let input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(processCategories(input));
