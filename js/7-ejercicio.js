class Contacto {
  #nombre;
  #telefono;
  constructor(nombre, telefono) {
    this.#nombre = nombre;
    this.#telefono = telefono;
  }
  get mostrarNombre() {
    return this.#nombre;
  }
  get mostrarTelefono() {
    return this.#telefono;
  }
  set cambiarNombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  set cambiarTelefono(nuevoTelefono) {
    this.#telefono = nuevoTelefono;
  }
  mostrarContacto() {
    document.write(
      `Nombre: ${this.mostrarNombre}. Teléfono: ${this.mostrarTelefono}.<br>`
    );
  }
}

class Agenda {
  #contactos;
  constructor(tamanio) {
    this.#contactos = [];
    this.tamanio = tamanio;
  }
  get mostrarContactos() {
    return this.#contactos;
  }
  get mostrarTamanio() {
    return this.tamanio;
  }
  set cambiarContactos(nuevaListaDeContactos) {
    this.#contactos = nuevaListaDeContactos;
  }
  set cambiarTamanio(nuevoTamanio) {
    this.tamanio = nuevoTamanio;
  }
  aniadirContacto(contactoNuevo) {
    if (this.existeContacto(contactoNuevo)) {
      console.log(`El contacto ya existe, no se puede repetir`);
    } else {
      if (!this.agendaLlena()) {
        this.mostrarContactos.push(contactoNuevo);
        console.log(`Se añadió a: ${contactoNuevo.mostrarNombre}`);
      }
    }
  }
  listarContactos() {
    console.log(this.#contactos);
    document.write(`<ul>`);
    for (let i = 0; i < this.mostrarContactos.length; i++) {
      document.write(
        `<li>Contacto: ${this.mostrarContactos[i].mostrarNombre}. Teléfono: ${
          this.#contactos[i].mostrarTelefono
        }</li>`
      );
    }
    document.write(`</ul>`);
  }

  existeContacto(contacto) {
    const existente = this.mostrarContactos.find(
      (contactoExistente) =>
        contactoExistente.mostrarNombre === contacto.mostrarNombre
    );
    if (existente) {
      console.log(`El contacto ya existe.`);
      //    document.write(`<p>El contacto existe.</p>`);
      return true;
    } else {
      console.log(`El contacto no existe. Podés agregarlo`);
      //    document.write(`<p>No existe ese contacto</p>`);
      return false;
    }
  }

  buscarContacto(contacto) {
    const encontrado = this.mostrarContactos.find(
      (contactoExistente) => contactoExistente.mostrarNombre === contacto
    );
    if (encontrado) {
      document.write(
        `<p>Teléfono de ${encontrado.mostrarNombre}: ${encontrado.mostrarTelefono}</p>`
      );
    } else {
      document.write(`Contacto inexistente.`);
    }
  }
  // Para este metodo no pude hacer funcionar un if que compruebe si el contacto existe, no se que error estaba cometiendo
  eliminarContacto(contacto) {
    let nuevaLista = this.mostrarContactos.filter(
      (contactos) => contactos.mostrarNombre != contacto
    );
    this.cambiarContactos = nuevaLista;
    console.log(`Se ha eliminado al contacto`);
  }
  agendaLlena() {
    if (this.mostrarContactos.length === this.tamanio) {
      console.log(`Agenda llena`);
      return true;
    } else {
      console.log(`Hay lugar disponible en la agenda.`);
      return false;
    }
  }
  huecosLibres() {
    let espaciosDisponibles = this.tamanio - this.mostrarContactos.length;
    console.log(
      `Hay lugar disponible para ${espaciosDisponibles} contactos en tu agenda.`
    );
  }
}

let agendaNueva = new Agenda(20);
do {
  let eleccionUsuario = parseInt(
    prompt(`Elija entre las siguientes opciones:
    1- añadir un contacto
    2- ver la lista de los contactos
    3- consultar si existe un contacto
    4- buscar un contacto para obtener su teléfono
    5- eliminar un contacto
    6- consultar si la agenda está llena
    7- consultar si la agenda tiene espacios libres
    8- cambiar el tamaño de la agenda`)
  );

  switch (eleccionUsuario) {
    case 1:
      console.log(`1- Añadir un contacto`);
      let nombre = prompt(`Escriba el nombre del contacto`);
      let telefono = prompt(`Escriba el telefono del contacto.`);
      let nuevoContacto = new Contacto(nombre, telefono);
      agendaNueva.aniadirContacto(nuevoContacto);
      break;
    case 2:
      console.log(`2- Ver lista de contactos`);
      agendaNueva.listarContactos();
      break;
    case 3:
      console.log(`3- Consultar si existe el contacto`);
      let contactoBusqueda = prompt(`Escribe el nombre del contacto`);
      let contactoABuscar = new Contacto(contactoBusqueda, 0);
      agendaNueva.existeContacto(contactoABuscar);
      break;
    case 4:
      console.log(`4- Buscar contacto y obtener telefono`);
      let contactoSolicitado = prompt(`Escribe el nombre del contacto`);

      agendaNueva.buscarContacto(contactoSolicitado);
      break;
    case 5:
      console.log(`5- Eliminar un contacto`);
      let contactoAEliminar = prompt(`Escriba el nombre del contacto`);
      agendaNueva.eliminarContacto(contactoAEliminar);
      break;
    case 6:
      console.log(`6-Verificar si agenda llena`);
      agendaNueva.agendaLlena();
      break;
    case 7:
      console.log(`7- Ver si hay espacios libres`);
      agendaNueva.huecosLibres();
      break;
    case 8:
      console.log(`8- Cambiar el tamaño`);
      let tamanioModificado = parseInt(
        prompt(`Ingrese el nuevo tamaño de la agenda`)
      );
      agendaNueva.cambiarTamanio = tamanioModificado;
      console.log(`El tamaño se modificó a: ${tamanioModificado}`);
      break;
    default:
      alert(`Ingresa una opcion entre el 1 y el 8.`);
  }
} while (confirm(`¿Quiere realizar otra operación?`));
