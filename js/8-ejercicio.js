class Persona{
    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    saludar(){
        return `Hola! Soy ${this.nombre}, tengo ${this.edad} años y mi profesión es ${this.profesion}.<br>`
    }
    despedirse(){
        return `Adiós!. Que te vaya bien. <br>`
    }
}
const persona1 = new Persona(`Mariana Enriquez`, 58, `escritora`);
const persona2 = new Persona(`Carlos Busqued`, 41, `investigador`);
document.write(persona1.saludar());
document.write(persona2.saludar());
document.write(persona1.despedirse());
document.write(persona2.despedirse());