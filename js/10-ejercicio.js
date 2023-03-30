class Aeropuerto{
    #nombreAeropuerto
    constructor(nombreAeropuerto){
        this.#nombreAeropuerto = nombreAeropuerto;
        this.aviones = [];
    }
    get mostrarNombre(){
        return this.#nombreAeropuerto
    }
    get mostrarAviones(){
        return this.aviones
    }
    set cambiarNombre(nuevoNombre){
        if(nuevoNombre.length > 0){
            this.#nombreAeropuerto = nuevoNombre
        }
    }
    agregarAvion(avion){
        this.aviones.push(avion)
    }
    
    buscarAvion(avion){
        if(this.aviones.includes(avion) === true){
            console.log(`Este avión está en el aeropuerto`);
            return true
        } else{
            console.log(`No encontramos el avión`);
            return false
        }
    }
    
}

class Avion{
    #nombre
    #capacidad
    #destino
    constructor(nombre, capacidad, destino){
        this.#nombre = nombre;
        this.#capacidad = capacidad;
        this.#destino = destino;
        this.pasajeros = [];
    }
    get mostrarNombre(){
        return this.#nombre
    }
    get mostrarCapacidad(){
        return this.#capacidad
    }
    get mostrarDestino(){
        return this.#destino
    }
    get mostrarPasajeros(){
        return this.pasajeros
    }
    set cambiarNombre(nuevoNombre){
        if(nuevoNombre.length > 0){
            this.#nombre = nuevoNombre
        }
    }
    set cambiarCapacidad(nuevoCapacidad){
        if(nuevoCapacidad.length > 0){
            this.#capacidad = nuevoCapacidad
        }
    }
    set cambiarDestino(nuevoDestino){
        if(nuevoDestino.length > 0){
            this.#destino = nuevoDestino
        }
    }
    abordar(pasajero){
        if(this.#capacidad > this.pasajeros.length){
            this.pasajeros.push(pasajero);
            return `Puede abordar`;
        } else{
            return `No hay lugar disponible en el avión`;
        }
    }
}

let aeropuerto1 = new Aeropuerto(`Areopuerto Internacional`);
let avion1 = new Avion(`Margarita`, 4, `Londres`);
let avion2 = new Avion(`Girasol`, 300, `Panamá`);
let avion3 = new Avion(`Jazmin`, 500, `Roma`);

aeropuerto1.agregarAvion(avion1.mostrarNombre);
aeropuerto1.agregarAvion(avion2.mostrarNombre);
aeropuerto1.agregarAvion(avion3.mostrarNombre);
document.write(aeropuerto1.mostrarAviones);
document.write(`<br>`);
aeropuerto1.buscarAvion(`Jazmin`);

console.log(avion1.abordar(`Juan Perez`))
console.log(avion1.abordar(`Mario Luis`))
console.log(avion1.abordar(`Marcelo Tinelli`))
console.log(avion1.abordar(`Lionel Messi`))
console.log(avion1.abordar(`Lourdes Garcia`))
document.write(avion1.mostrarPasajeros)