function parseCount(value){
    let parsed = parseInt(value, 10);
    let result = parsed;
    if(isNaN(parsed)){
        const parseError = new Error("Невалидное значение");
        throw parseError;
    }
    return result
}
parseCount();

function validateCount(value){
    let result;
    try{
        result = parseCount(value);
    }
    catch(err){
        result = err;
    }
    return result;
}
validateCount();

class Triangle{

    constructor(side1, side2, side3){
        this.a = side1;
        this.b = side2;
        this.c = side3;

        if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a){
            const triangleError = new Error("Треугольник с такими сторонами не существует");
            throw triangleError;
        }
    }

    getPerimeter(){
        let p = this.a + this.b + this.c;
        return p;
    }
    getArea(){
        let p = 0.5 * (this.a + this.b + this.c);
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(s.toFixed(3));
    }
}

function getTriangle(a, b, c){
    let triangle;
    try{
        triangle = new Triangle(a, b, c);
    }
    catch(err){
        triangle = {getArea: () => 'Ошибка! Треугольник не существует', getPerimeter: () => 'Ошибка! Треугольник не существует'}
    }
    return triangle;
}
getTriangle()