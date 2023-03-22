do{
let jugadaUsuario = prompt(`¿Piedra, papel o tijera?`).toUpperCase();
let jugadaCompu = Math.round(Math.random() * (3 - 1) + 1);

console.log(jugadaUsuario)
console.log(jugadaCompu)

if(jugadaUsuario == `PIEDRA`){
    jugadaUsuario = 1
} else if(jugadaUsuario == `PAPEL`){
    jugadaUsuario = 2
} else if(jugadaUsuario == `TIJERA`){
    jugadaUsuario = 3
} else{
    alert(`Ingrese su jugada: piedra, papel o tijera`)
}
console.log(jugadaUsuario);


} while(confirm(`¿Desea seguir jugando?`))