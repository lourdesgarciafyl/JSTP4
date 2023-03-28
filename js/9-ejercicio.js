class Animal{
    #nombre
    #edad
    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }
    get mostrarNombre(){
        return this.#nombre
    }
    get mostrarEdad(){
        return this.#edad
    }
    set cambiarNombre(nuevoNombre){
        if(nuevoNombre.length > 0){
            this.#nombre = nuevoNombre;
        }
    }
    set cambiarEdad(nuevaEdad){
        if(nuevaEdad.length > 0){
            this.#edad = nuevaEdad;
        }
    }
    emitirSonido(){
        document.write(`Guau guau!`)
    }
}

class Perro extends Animal{
    constructor(nombre, edad){
        super(nombre, edad)
    }
}

class Gato extends Animal{
    constructor(nombre, edad){
        super(nombre, edad)
    }
}

const firulais = new Perro(`Firulais`, 2);
console.log(firulais.mostrarNombre);

const vengador = new Gato(`Vengador`, 4);
console.log(vengador.mostrarEdad)
