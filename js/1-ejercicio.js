let auto = {
    marca: `Peugeot`,
    color: `gris`,
    modelo: `RCZ 2023`,
    estaEncendido: false,
    encender: function(){
        this.estaEncendido = true;
    },
    apagar: function(){
       this.estaEncendido= false;
    }
}

document.write(`<p>Este auto es marca ${auto.marca} modelo ${auto.modelo}. Es de color ${auto.color}. </p> <br>`);
document.write('Estado del auto: '+((auto.estaEncendido)?'Encendido':'Apagado'));

//Encender
auto.encender();
document.write('<br>Estado del auto: '+((auto.estaEncendido)?'Encendido':'Apagado'));

//Apagar
auto.apagar();
document.write('<br>Estado del auto:' +((auto.estaEncendido)? 'Encendido':'Apagado'));