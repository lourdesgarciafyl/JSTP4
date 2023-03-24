let auto = {
    marca: `Peugeot`,
    color: `gris`,
    modelo: `RCZ 2023`,
    patente: 5522,
    estaEncendido: false,
    estaApagado: true,
    encender: function(){
        document.write(`El auto está encendido`);
    },
    apagar: function(){
        document.write(`El auto está apagado`);
    }
}

document.write(`<p>Este auto es marca ${auto.marca} modelo ${auto.modelo}. Es de color ${auto.color} y su patente es ${auto.patente}. </p> <br>`);
document.write('Estado del auto: '+((auto.estaEncendido)?'Encendido':'Apagado'));

//Encender
document.write(`<h3>Encender el auto</h3>`)
auto.encender();


//Apagar
document.write(`<h3>Apagar el auto</h3>`)
auto.apagar();
