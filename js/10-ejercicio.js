class Aeropuerto{
    constructor(nombreAeropuerto){
        this.nombreAeropuerto = nombreAeropuerto;
        this.aviones = [];
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
    constructor(nombre, capacidad, destino){
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.pasajeros = [];
    }
    abordar(pasajero){
        if(this.capacidad > this.pasajeros.length){
            this.pasajeros.push(pasajero);
            return `Puede abordar`;
        } else{
            return `No hay lugar disponible en el avión`;
        }
    }
}

let aeropuesto1 = new Aeropuerto(`Areopuerto Internacional`);
let avion1 = new Avion(`Margarita`, 250, `Londres`);
let avion2 = new Avion(`Girasol`, 300, `Panamá`);
let avion3 = new Avion(`Jazmin`, 500, `Roma`);

aeropuesto1.agregarAvion(avion1);
aeropuesto1.agregarAvion(avion2);
aeropuesto1.agregarAvion(avion3);
console.log(aeropuesto1.aviones);

console.log(aeropuesto1.buscarAvion(`Jazmin`));

console.log(avion1.abordar(`Juan Perez`))
console.log(avion1.pasajeros)
