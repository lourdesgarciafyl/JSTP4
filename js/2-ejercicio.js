class Cuenta{
    constructor(nombreTitular){
        this.titular = nombreTitular;
        this.saldo = 0;
    }
   ingresar(cantidad){
    this.saldo += cantidad;
    document.write(`Ingresaste $${cantidad} a tu cuenta.<br>`)
   } 
   extraer(cantidad){
    if(cantidad <= this.saldo){
        this.saldo-= cantidad;
        document.write(`Extraíste $${cantidad} de tu cuenta.<br>`)
    } else{
        document.write(`No tenés suficiente dinero.<br>`)
    }
   }
   estadoDeCuenta(){
    document.write(`<br>Nombre del titular de la cuenta: ${this.titular}. Saldo actual: $${this.saldo}.<br>`)
   }
}

// Cuenta de Alex
const cuenta = new Cuenta(`Alex`);
cuenta.estadoDeCuenta();

document.write(`<h4>Agregamos dinero a la cuenta</h4>`)
cuenta.ingresar(3000);
console.log(cuenta.saldo);


document.write(`<h4>Retiramos dinero de la cuenta</h4>`)
cuenta.extraer(250);
console.log(cuenta.saldo);

cuenta.estadoDeCuenta();