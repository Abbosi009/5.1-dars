//1
class Triangle {
    #leftside;
    #rightside;
    #width;
    constructor(a= 0, b= 0, c= 0) {
        this.setSides(a, b, c);
    }
    getLeftSide() { return this.#leftside; }
    getRightSide() { return this.#rightside; }
    getWidth() { return this.#width; }
    setSides(a, b, c) {
        const ok = [a, b, c].every(x => typeof x === 'number' && x >= 0);
        if (!ok) throw new Error('Sides must be non-negative numbers');
        this.#leftside = a;
        this.#rightside = b;
        this.#width = c;
    }
}
const t = new Triangle(3, 4, 5);
console.log('Triangle: ', t.getLeftSide(), t.getRightSide(), t.getWidth()   );
t.setSides(7, 8, 9);
console.log('Triangle after set: ', t.getLeftSide(), t.getRightSide(), t.getWidth()   );
//2
class EmployeeBase {
    #id; #firstName; #lastName; #salary;
    constructor(id, firstName, lastName, salary) {
        this.#id = id;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#salary = salary;
    }
    getId() { return this.#id; }
    getFirstName() { return this.#firstName; }
    getLastName() { return this.#lastName; }
    getSalary() { return this.#salary; }
    setId(id) { this.#id = id; }
    setFirstName(f) { this.#firstName = f; }
    setLastName(l) { this.#lastName = l; }
    setSalary(s) { this.#salary = s; }

    getFullName() { return `${this.#firstName} ${this.#lastName}`; }
    getAnnualSalary() { return this.#salary * 12; }
    raiseSalary(percent) {
        this.#salary = this.#salary + (this.#salary * percent / 100);
        return this.#salary;
    }
}
const emp = new EmployeeBase(1, 'Abbos', 'Programmer', 2000);
console.log('Full name: ', emp.getFullName());
console.log('Annual salary: ', emp.getAnnualSalary());
console.log('Raised salary 25%: ', emp.raiseSalary(25));
//3
class CustomDate {
    #day; #month; #year;
    constructor(day, month, year) {
        this.setDay(day);
        this.setMonth(month);
        this.setYear(year);
    }
    getDay() { return this.#day; }
    getMonth() { return this.#month; } 
    getYear() { return this.#year; }
    setDay(d) {if (m<1 || m>31) throw new RangeError('day 1..31'); this.#day = d;}
    setMonth(m) {if (m<1 || m>12) throw new RangeError('month 1..12'); this.#month = m;}
    setYear(y){this.#year = y; }
    getISODate() {
        const dd = String(this.#day).padStart(2, '0');
        const mm = String(this.#month).padStart(2, '0');
        const yyyy = String(this.#year).padStart(4, '0');
        return `${dd}-${mm}-${yyyy}`;
    }

}
const date = new CustomDate(5, 6, 2024);
console.log('ISO date: ', date.getISODate());

