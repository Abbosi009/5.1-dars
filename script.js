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
