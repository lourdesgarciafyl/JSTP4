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
        document.write(`A definir según cada animal!`)
    }
}

class Perro extends Animal{
    constructor(nombre, edad){
        super(nombre, edad)
    }

    emitirSonido(){
        document.write(`<p>Guau, guau!</p>`)
    }
}

class Gato extends Animal{
    constructor(nombre, edad){
        super(nombre, edad)
    }
    emitirSonido(){
        document.write(`<p>Miiiaaauuu, miiaauu!</p>`)
    }
}

const firulais = new Perro(`Firulais`, 2);
document.write(`<p>${firulais.mostrarNombre}</p>`);
firulais.emitirSonido()

const vengador = new Gato(`Vengador`, 4);
document.write(`<p>${vengador.mostrarNombre}</p>`);
vengador.emitirSonido()
