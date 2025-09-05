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
const d = new CustomDate(12, 5, 2023);
console.log('ISO date: ', date.getISODate());
//4
class Time {
    #hour; #minute; #second;
    constructor(h = 0, m = 0, s = 0) { this.setHour(h); this.setMinute(m); this.setSecond(s); }
    getHour() { return this.#hour; }
    getMinute() { return this.#minute; }
    getSecond() { return this.#second; }
    setHour(h) { if (h < 0 || h > 23) throw new RangeError('hour 0..23'); this.#hour = h; }
    setMinute(m) { if (m < 0 || m > 59) throw new RangeError('minute 0..59'); this.#minute = m; }
    setSecond(s) { if (s < 0 || s > 59) throw new RangeError('second 0..59'); this.#second = s; }
    #fmt() {
        const HH = String(this.#hour).padStart(2, '0');
        const MM = String(this.#minute).padStart(2, '0');
        const SS = String(this.#second).padStart(2, '0');
        return `${HH}:${MM}:${SS}`;
    }
    nextSecond() {
        this.#second++;
        if (this.#second >= 60) { this.#second = 0; this.#minute++; }
        if (this.#minute >= 60) { this.#minute = 0; this.#hour++; }
        if (this.#hour >= 24) { this.#hour = 0; }
        return this.#fmt();
    }
    previousSecond() {
        this.#second--;
        if (this.#second < 0) { this.#second = 59; this.#minute--; }
        if (this.#minute < 0) { this.#minute = 59; this.#hour--; }
        if (this.#hour < 0) { this.#hour = 23; }
        return this.#fmt();
    }
}

const tm = new Time(6, 20, 10);
console.log('Next second:', tm.nextSecond());     
console.log('Previous second:', tm.previousSecond()); 
//5
class Shape {
    #color; #filled;
    constructor(color = 'black', filled = true) {
        this.#color = color;
        this.#filled=!!filled;
    }
    getColor() { return this.#color; }
    setColor(c) { this.#color = c; }
    isFilled() { return this.#filled; }
    setFilled(f) { this.#filled = !!f; }
}
class Circle extends Shape {
    #radius;
    constructor(radius = 1, color = 'black', filled = true) {
        super(color, filled);
        if(radius<0) throw new RangeError('radius >= 0');
        this.#radius = radius;
    }
    getRadius() { return this.#radius; }
    setRadius(r) { if(r<0) throw new RangeError('radius >= 0'); this.#radius = r; }
    getArea() { return Math.PI * this.#radius * this.#radius; }
    getPerimeter() { return 2 * Math.PI * this.#radius; }
 }

class Rectangle extends Shape {
    #width; #height;
    constructor(width = 1, height = 1, color = 'black', filled = true) {
        super(color, filled);
        if (width < 0 || height < 0) throw new RangeError('width, height >= 0');
        this.#width = width;
        this.#height = height;
    }
    getWidth() { return this.#width; }
    setWidth(w) { if (w < 0) throw new RangeError('width >= 0'); this.#width = w; }
    getHeight() { return this.#height; }
    setHeight(h) { if (h < 0) throw new RangeError('height >= 0'); this.#height = h; }
    getArea() { return this.#width * this.#height; }
    getPerimeter() { return 2 * (this.#width + this.#height); }
}

const c1 = new Circle(3, 'red', true);
console.log('Circle area:', c1.getArea().toFixed(2));
console.log('Circle perimeter:', c1.getPerimeter().toFixed(2));

const r1 = new Rectangle(4, 5, 'blue', false);
console.log('Rectangle area:', r1.getArea());
console.log('Rectangle perimeter:', r1.getPerimeter());

//6
class Person {
    #name; #address;
    constructor(name, address) { this.#name = name; this.#address = address; }
    getName() { return this.#name; }
    setName(n) { this.#name = n; }
    getAddress() { return this.#address; }
    setAddress(a) { this.#address = a; }
}
class Student extends Person {
    #faculty; #year; #university;
    constructor(name, address, faculty, year, university) {
        super(name, address);
        this.#faculty = faculty; this.#year = year; this.#university = university;
    }
    getFaculty() { return this.#faculty; }
    setFaculty(f) { this.#faculty = f; }
    getYear() { return this.#year; }
    setYear(y) { this.#year = y; }
    getUniversity() { return this.#university; }
    setUniversity(u) { this.#university = u; }
}
class Employee extends Person { 
    #salary; #work;
    constructor(name, address, salary, work) {
        super(name, address);
        this.#salary = salary; this.#work = work;
    }
    getSalary() { return this.#salary; }
    setSalary(s) { this.#salary = s; }
    getWork() { return this.#work; }
    setWork(w) { this.#work = w; }
}

const st = new Student('Ali', 'Tashkent', 'CS', 2, 'TATU');
console.log('Student:', st.getName(), st.getUniversity(), st.getFaculty()); 
const emp6 = new Employee('Vali', 'Samarkand', 3000, 'Engineer');
console.log('Employee (task6):', emp6.getName(), emp6.getWork(), emp6.getSalary());

//7
class Animal {
    constructor(name, speed, weight) { this.name = name; this.speed = speed; this.weight = weight; }
}
class Mammal extends Animal {
    #legs;
    constructor(name, speed, weight, legs) { super(name, speed, weight); this.#legs = legs; }
    getLegs() { return this.#legs; }
    setLegs(l) { this.#legs = l; }
}
class Cat extends Mammal {
    getSound() { return 'Meow'; }
}
class Dog extends Mammal {
    getSound() { return 'Woof'; }
}
class Fish extends Animal {
    #size;
    constructor(name, speed, weight, size) { super(name, speed, weight); this.#size = size; }
    getSize() { return this.#size; }
    setSize(s) { this.#size = s; }
}
class Whale extends Fish {
    getSound() { return 'Poof'; }
}
class Shark extends Fish {
    getSound() { return 'Sheef'; }
}

const cat = new Cat('Misha', 20, 4, 4);
console.log('Cat legs & sound:', cat.getLegs(), cat.getSound()); 
const shark = new Shark('Great White', 40, 1100, 'Large');
console.log('Shark size & sound:', shark.getSize(), shark.getSound()); 

//8
Object.customKeys = function (obj) {
    const keys = [];
    for (const k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) keys.push(k);
    return keys;
};
Object.customValues = function (obj) {
    const vals = [];
    for (const k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) vals.push(obj[k]);
    return vals;
};
Object.customEntries = function (obj) {
    const ents = [];
    for (const k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) ents.push([k, obj[k]]);
    return ents;
};
Number.customIsInteger = function (val) {
    return typeof val === 'number' && isFinite(val) && Math.floor(val) === val;
};
Array.customIsArray = function (val) {
    return Object.prototype.toString.call(val) === '[object Array]';
};

const oTest = { a: 1, b: 2 };
console.log('customKeys:', Object.customKeys(oTest));       
console.log('customValues:', Object.customValues(oTest));   
console.log('customEntries:', Object.customEntries(oTest)); 
console.log('Number.customIsInteger(5.0):', Number.customIsInteger(5.0)); 
console.log('Array.customIsArray([]):', Array.customIsArray([])); 


//9
Array.isNumberArray = function (arr) {
    if (!Array.isArray(arr)) throw new TypeError('Not an array');
    const ok = arr.every(x => typeof x === 'number' && !Number.isNaN(x));
    if (!ok) throw new TypeError('Array must contain only valid numbers');
    return true;
};
Array.sum = function (arr) {
    Array.isNumberArray(arr);
    return arr.reduce((s, x) => s + x, 0);
};
Array.max = function (arr) {
    Array.isNumberArray(arr);
    return arr.reduce((m, x) => x > m ? x : m, -Infinity);
};
Array.min = function (arr) {
    Array.isNumberArray(arr);
    return arr.reduce((m, x) => x < m ? x : m, Infinity);
};

const nums = [3, 10, -5, 8];
console.log('isNumberArray:', Array.isNumberArray(nums)); 
console.log('sum:', Array.sum(nums));
console.log('max:', Array.max(nums)); 
console.log('min:', Array.min(nums));




