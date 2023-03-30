class Persona{
    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    get mostrarNombre(){
        return this.nombre;
    }
    get mostrarEdad(){
        return this.edad;
    }
    get mostrarProfesion(){
        return this.profesion
    }
    saludar(){
        document.write(`Hola! Soy ${this.mostrarNombre}, tengo ${this.mostrarEdad} años y mi profesión es ${this.mostrarProfesion}.<br>`);
    }
    despedirse(){
        document.write(`Adiós!. Que te vaya bien. <br>`);
    }
}
const persona1 = new Persona(`Mariana Enriquez`, 58, `escritora`);
const persona2 = new Persona(`Carlos Busqued`, 41, `investigador`);
persona1.saludar();
persona2.saludar();
persona1.despedirse();
persona2.despedirse();