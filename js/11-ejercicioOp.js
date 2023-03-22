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

function aJugar(jugadaUsuario, jugadaCompu){
    if(jugadaUsuario === jugadaCompu){
        return `Empate!`
    } else if(jugadaUsuario == 1 && jugadaCompu == 2){
        return `Ganó la máquina! El papel le gana a la piedra`
    } else if(jugadaUsuario == 1 && jugadaCompu == 3){
        return `Ganasteee! La piedra le gana a la tijera`
    } else if(jugadaUsuario == 2 && jugadaCompu == 1){
        return `Ganasteee! El papel le gana a la piedra`
    } else if(jugadaUsuario == 2 && jugadaCompu == 3){
        return `Ganó la máquina! La tijera le gana al papel`
    } else if(jugadaUsuario == 3 && jugadaCompu == 1){
        return `Ganó la máquina! La piedra le gana a la tijera`
    } else if(jugadaUsuario == 3 && jugadaCompu == 2){
        return `Ganasteee! La tijera le gana al papel`
    }
}
alert(aJugar(jugadaUsuario, jugadaCompu))
} while(confirm(`¿Desea seguir jugando?`))