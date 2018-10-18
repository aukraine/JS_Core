const PI = 3.14;
class Сircle {
    constructor (coordinates = [], R) {
        this.coordinatesСentrum[0, 1] = coordinates[0, 1];
        this.radius = R;
    };
    get coordinates () {
        return this.coordinatesСentrum[0, 1];
    };
    set coordinates () {
        this.coordinatesСentrum[0] = prompt ("Введіть координату x центру круга", 0);
        this.coordinatesСentrum[1] = prompt ("Введіть координату y центру круга", 0);
    };
    get radius () {
        return this.radius;
    };
    set radius () {
        this.radius = prompt ("Введіть радіус круга", 1);
    };

    circleLengths () {
        return 2 * PI * this.radius;
    };

    static circleLengthsStatic (r) {
        return 2 * PI * r;
    };

    copyСircle () {
        let copyC = new Сircle (this.coordinatesСentrum[0], this.coordinatesСentrum[1], this.radius);
        return copyC;
    };

    static copyСircleStatic() {
        let xStatic = prompt ("Введіть координату x центру круга", 0);
        let yStatic = prompt ("Введіть координату y центру круга", 0);
        let rStatic = prompt ("Введіть радіус круга", 1);
        let copyCStatic = new Сircle (xStatic, yStatic, rStatic);        
        return copyCStatic;
    }
}

let x=0, y=0, r=1;
let c = new Сircle (x, y, r);

let rStatic = prompt ("Введіть радіус круга", 0);
let lStatic1 = c.__proto__.circleLengthsStatic(rStatic);
alert("Довжиа круга з радіусом ", rStatic, " становить ", lStatic1)
let lStatic2 = Сircle.circleLengthsStatic(rStatic);
alert("Довжиа круга з радіусом ", rStatic, " становить ", lStatic2)


class Cube extends Square {
    constructor (size) {
        super (size);
    };
    // perimeter () {
    //     return this.square_size*12;
    // };
    perimeter () {
        let p = super.perimeter();
        return p*3;
    };
}