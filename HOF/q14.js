function evaluateEmployees(employees) {
    let filtered = employees.filter(function(employee) {
        return employee.tasksCompleted > 5;
    });

    let performanceMapped = filtered.map(function(employee) {
        let performanceLevel = "";

        if (employee.rating > 4.5) {
            performanceLevel = "Excellent";
        } else if (employee.rating >= 3 && employee.rating <= 4.5) {
            performanceLevel = "Good";
        } else {
            performanceLevel = "Needs Improvement";
        }

        return {
            name: employee.name,
            performance: performanceLevel
        };
    });
    const priority = {
        "Excellent": 3,
        "Good": 2,
        "Needs Improvement": 1
    };

    performanceMapped.sort(function(a, b) {
        return priority[b.performance] - priority[a.performance];
    });
    return performanceMapped;
}
let employees = [
    { name: "Alice", tasksCompleted: 8, rating: 4.8 },
    { name: "Bob", tasksCompleted: 3, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 10, rating: 3.5 },
    { name: "David", tasksCompleted: 6, rating: 2.8 },
    { name: "Emma", tasksCompleted: 7, rating: 4.6 },
    { name: "Frank", tasksCompleted: 11, rating: 2.9 }
];

console.log(evaluateEmployees(employees));
