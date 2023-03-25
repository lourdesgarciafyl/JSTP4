class Contacto{
    constructor(nombre, telefono){
        this.nombre = nombre;
        this.telefono = telefono;
    }
    get mostrarNombre(){
        return this.nombre;
    }
    get mostrarTelefono(){
        return this.telefono;
    }
    set cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre
    }
    set cambiarTelefono(nuevoTelefono){
        this.telefono = nuevoTelefono;
    }
    mostrarContacto(){
        return `Nombre: ${this.nombre}. Teléfono: ${this.telefono}.`
    }
}

class Agenda{
    constructor(tamanio){
        this.contactos = [];
        this.tamanio = tamanio;
    }
    set cambiarTamanio(nuevoTamanio){
        this.tamanio = nuevoTamanio;
    }
    
    aniadirContacto(contacto){
        if(this.existeContacto(contacto)){
            document.write(`El contacto ya existe.`)
        }
        else{
            if(!this.agendaLlena()){
                this.contactos.push(contacto);
                this.listarContactos();
            }
        }        
    }
    
    listarContactos(){
        for(i = 0; i< this.contactos.length; i++){
            document.write(`Contacto: ${this.contactos[i].mostrarNombre}. Teléfono: ${this.contactos[i].mostrarTelefono} <br>`)
        }
    }
    
    existeContacto(contacto){
        let existeContacto = this.contactos.find(
            (contactoExistente) => contactoExistente.nombre === contacto
        );
        if(existeContacto){
            document.write(`El contacto ya existe.`);
            return true;
        } else{
            document.write(`El contacto no existe.`)
            return false;
        }
    }
    
    
    buscarContacto(contacto){
        let encontrado = this.contactos.find(
            (contactoEncontrado) => contactoEncontrado.nombre === contacto
        )
        if(encontrado){
            document.write(`Contacto encontrado. Teléfono: ${contacto.telefono}`);
        } else{
            document.write(`Contacto inexistente.`);
        }
    } 
    eliminarContacto(contacto){
        let nuevaLista = this.contactos.filter(
            (contactosDefinitivos) => contactosDefinitivos != contacto
        )
        this.contactos = nuevaLista;
        document.write(`Lista actualizada de contactos: ${this.listarContactos()}`);
    }
    agendaLlena(){
        if(this.contactos.length == this.tamanio){
            document.write(`Agenda llena`);
        }else{
            document.write(`Hay lugar disponible en la agenda.`)
        }
    }
    huecosLibres(){
        let espaciosDisponibles = this.tamanio - this.contactos.length;
        document.write(`Hay lugar disponible para ${espaciosDisponibles} contacto/s en tu agenda.`)
    } 
}

let agendaNueva = new Agenda(20);
do{
    let eleccionUsuario = parseInt(prompt(`Elija entre las siguientes opciones:
    1- añadir un contacto,
    2- ver la lista de los contactos,
    3- consultar si existe un contacto, 
    4- buscar un contacto para obtener su teléfono, 
    5- eliminar un contacto,
    6- consultar si la agenda está llena,
    7- consultar si la agenda tiene espacios libres,
    8- cambiar el tamaño de la agenda`))

    switch(eleccionUsuario){
        case 1:
            let nombre = prompt(`Escriba el nombre del contacto`);
            let telefono = prompt(`Escriba el telefono del contacto.`);
            let nuevoContacto = new Contacto(nombre, telefono);
            agendaNueva.aniadirContacto(nuevoContacto);
            break;
        case 2:
            agendaNueva.listarContactos();  
            break;
        case 3:
            let contactoConsulta = prompt(`Escribe el nombre del contacto`);
            agendaNueva.existeContacto(contactoConsulta);
            break;
        case 4:
            let contactoBuscado = prompt(`Escribe el nombre del contacto`);
            agendaNueva.buscarContacto(contactoBuscado);
            break;
        case 5:
            let contactoAEliminar = prompt(`Escriba el nombre del contacto`);
            agendaNueva.eliminarContacto(contactoAEliminar);
            break;
        case 6:
            agendaNueva.agendaLlena();
            break;
        case 7:
            agendaNueva.huecosLibres();
            break;
        case 8:
            let nuevoTamanio = parseInt(prompt(`Ingrese el nuevo tamaño de la agenda`));
            agendaNueva.tamanio = nuevoTamanio  
            break;
        default:
            document.write(`Ingresa una opcion entre el 1 y el 8.`)                            
    }
} while (confirm(`¿Quiere realizar otra operación en su agenda?`))