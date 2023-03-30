class Producto{
    #codigo
    #nombre
    #precio
    constructor(codigo, nombre, precio){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#precio = precio;
    }
    get mostrarCodigo(){
        return this.#codigo;
    }
    get mostrarNombre(){
        return this.#nombre;
    }
    get mostrarPrecio(){
        return this.#precio;
    }
    set cambiarCodigo(nuevoCodigo){
        this.#codigo = nuevoCodigo;
    }
    set cambiarNombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }
    set cambiarPrecio(nuevoPrecio){
        this.#precio = nuevoPrecio;
    }
    imprimeDatos(){
        document.write(`<ul>
        <li>Código del producto: ${this.mostrarCodigo}</li>
        <li>Nombre del producto: ${this.mostrarNombre}</li>
        <li>Precio del producto: $${this.mostrarPrecio}</li>
        </ul>`)
    }
}
const producto1 = new Producto(1122, `Galletas Chocolinas`, 200);
const producto2 = new Producto(1123, `Galletas Pepitos`, 250);
const producto3 = new Producto(1124, `Galletas Oreo`, 300);
let productos = [producto1, producto2, producto3];

for(let i = 0; productos.length > i; i++){
    productos[i]. imprimeDatos()
}