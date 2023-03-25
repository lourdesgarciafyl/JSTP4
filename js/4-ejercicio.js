class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimeDatos(){
        document.write(`<ul>
        <li>Código del producto: ${this.codigo}</li>
        <li>Nombre del producto: ${this.nombre}</li>
        <li>Precio del producto: $${this.precio}</li>
        </ul>`)
    }
}
const producto1 = new Producto(1122, `Galletas Chocolinas`, 200);
const producto2 = new Producto(1123, `Galletas Pepitos`, 250);
const producto3 = new Producto(1124, `Galletas Oreo`, 300);
let productos = [producto1, producto2, producto3];

for(let i = 0; i <= productos.length; i++){
    productos[i].imprimeDatos();
}