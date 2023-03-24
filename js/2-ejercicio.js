let cuenta = {
    titular: `Alex`,
    saldo: 0,
    ingresar: function(cantidad){
        return this.saldo = this.saldo + cantidad;
    },
    extraer: function(cantidad){
        return this.saldo = this.saldo - cantidad;
    },
    informar: function(){
        return `El saldo actual de la cuenta es: ${this.saldo}`;
    }
}

document.write(`Esta cuenta pertenece a ${cuenta.titular}, y cuenta con un saldo de  $${cuenta.saldo} <br>`);

document.write(`<h4>Agregamos dinero a la cuenta</h4>`)
cuenta.ingresar(3000);
console.log(cuenta.saldo);
document.write(`<p>El saldo actual de la cuenta de ${cuenta.titular} es de $${cuenta.saldo}</p>`)

document.write(`<h4>Retiramos dinero de la cuenta</h4>`)
cuenta.extraer(250);
console.log(cuenta.saldo);
document.write(`<p>${cuenta.titular} retiró dinero. El saldo actual de la cuenta es de $${cuenta.saldo}</p>`)