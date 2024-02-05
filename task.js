/* 
Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/

function lowestNumber(numbers) {
    let lowest = numbers[0];

    for (const number of numbers) {
        if (number < lowest) {
            lowest = number;
        }
    }
    return lowest;
}
const heights2 = [167, 190, 120, 165, 137];
// console.log(lowestNumber(heights2))

/* 

Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience 
then adding the result to the starting salary. 
Now calculate is the total salary has to be provided by the company in a month.*/

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function provideSalary(employees) {
    total = 0;
    for (const employee of employees) {
        const startSalary = employee.starting;
        const incrementNow = employee.increment * employee.experience;
        const totalSalary = startSalary + incrementNow;
        total = total + totalSalary;
    }
    return total;
}

console.log(provideSalary(employees));
