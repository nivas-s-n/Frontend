class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    //Method 1 
    getDetails() {
        return `Employee Name : ${this.name}, Salary : ${this.salary}`
    }
    //Method 2
    increaseSalary(amount) {
        this.salary += amount;
        return `Updated Salary : ${this.salary}`;
    }
    //Method 3 
    annualSalary() {
        return `Annual Salary is ${this.salary * 12}`;
    }
}
//Creating Object 
// const name = prompt(`Enter Your Name :`);
// const salary = parseFloat(prompt(`Enter Your Salary : `));
function btnaction(event) {
    event.preventDefault(); // Prevents from reload/refresh of a page
    const ename = document.getElementById("ename").value;
    const esal = Number(document.getElementById("esal").value);
    const emp = new Employee(ename, esal);
    console.log(emp.getDetails());
    console.log(emp.increaseSalary(5000));
    console.log(emp.annualSalary());
}