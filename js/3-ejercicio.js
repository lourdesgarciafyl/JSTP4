class Rectangulo{
    constructor(base, altura){
    this.ancho = base;
    this.altura = altura;
    }
    set cambiarAncho(nuevoAncho){
        this.ancho=nuevoAncho;
    }
    set cambiarAlto(nuevaAltura){
        this.altura= nuevaAltura;
    }
    get mostrarAncho(){
        return this.ancho;
    }
    get mostrarAlto(){
        return this.altura;
    }
    perimetro(){
        return (this.ancho+this.altura)*2;
    }
    area(){
        return this.ancho*this.altura;
    }
    informacion(){
        return `El rectangulo tiene un ancho de ${this.mostrarAncho}cm y un alto de ${this.mostrarAlto}cm.<br>`
    }
}

const rectangulo1 = new Rectangulo(10, 5);
const rectangulo2 = new Rectangulo(80, 45);

console.log(rectangulo1);
console.log(rectangulo2);

//Rectangulo 1
document.write(`<h3>Rectángulo 1</h3>`)
document.write(rectangulo1.informacion())
document.write(`El rectángulo tiene un perímetro de ${rectangulo1.perimetro}cm y un área de ${rectangulo1.area}cm.`)

document.write(`<h4>Modificamos su ancho y altura</h4>`)
rectangulo1.cambiarAlto=10;
rectangulo1.cambiarAncho=30;
document.write(rectangulo1.informacion())
document.write(`El rectángulo tiene un perímetro de ${rectangulo1.perimetro}cm y un área de ${rectangulo1.area}cm.`)

// Rectangulo 2
document.write(`<h3>Rectángulo 2</h3>`)
document.write(rectangulo2.informacion())
document.write(`El rectángulo tiene un perímetro de ${rectangulo2.perimetro}cm y un área de ${rectangulo2.area}cm.`)

document.write(`<h4>Modificamos su ancho y altura</h4>`)
rectangulo2.cambiarAlto=548;
rectangulo2.cambiarAncho=1259;
document.write(rectangulo2.informacion())
document.write(`El rectángulo tiene un perímetro de ${rectangulo2.perimetro}cm y un área de ${rectangulo2.area}cm.`)