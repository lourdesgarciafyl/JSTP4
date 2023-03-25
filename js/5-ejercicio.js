class Persona{
    constructor(nombre, edad, sexo, peso, altura, anioDeNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = this.generarDNI();
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioDeNacimiento = anioDeNacimiento;
    }
    mostrarGeneracion(){
        if(this.anioDeNacimiento >= 1930 && this.anioDeNacimiento <= 1948){
            return `<ul>
            <li>Generación: Silent Generation </li>
            <li>Marco temporal: 1930 - 1940</li>
            <li>Circunstancia histórica: Conflictos bélicos</li>
            <li>Rasgo característico: Ansiedad</li>
            </ul>`
        } else if(this.anioDeNacimiento >= 1949 && this.anioDeNacimiento <= 1968){
            return `<ul>
            <li>Generación: Baby Boom </li>
            <li>Marco temporal: 1949 - 1968</li>
            <li>Circunstancia histórica: Paz y explosión demográfica</li>
            <li>Rasgo característico: Ambición</li>
            </ul>`
        } else if(this.anioDeNacimiento >= 1969 && this.anioDeNacimiento <= 1980){
            return `<ul>
            <li>Generación: Generación X </li>
            <li>Marco temporal: 1969 - 1980</li>
            <li>Circunstancia histórica: Crisis del 73 y transición española</li>
            <li>Rasgo característico: Obsesión por el éxito</li>
            </ul>`
        } else if(this.anioDeNacimiento >= 1981 && this.anioDeNacimiento <= 1993){
            return `<ul>
            <li>Generación: Generación Y (Millenials) </li>
            <li>Marco temporal: 1981 - 1993</li>
            <li>Circunstancia histórica: Inicio de la digitalización</li>
            <li>Rasgo característico: Frustración</li>
            </ul>`
        } else if(this.anioDeNacimiento >= 1994 && this.anioDeNacimiento <= 2010){
            return `<ul>
            <li>Generación: Generación Z</li>
            <li>Marco temporal: 1994 - 2010</li>
            <li>Circunstancia histórica: Expansión masiva de Internet</li>
            <li>Rasgo característico: Irreverencia</li>
            </ul>`
        } else{
            return `No hay información sobre ese año.`
        }
    }
    esMayorDeEdad(){
        if(this.edad >= 18){
            return `${this.nombre} es mayor de edad.`
        } else{
            return `${this.nombre} es menor de edad`
        }
    }
    generarDNI(){
        return Math.round(Math.random() * (11111111 - 99999999) + 11111111)
    }
    mostrarDatos(){
        return `<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad} años</li>
        <li>DNI: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso} kg</li>
        <li>Altura: ${this.altura} cm</li>
        <li>Año de nacimiento: ${this.anioDeNacimiento}</li>
        </ul>`
    }
}

let nombre = prompt(`Ingrese el nombre de la persona`);
let edad = prompt(`Ingrese la edad de la persona`);
let sexo = prompt(`Ingrese el género de la persona`);
let peso = prompt(`Ingrese el peso de la persona en kg`);
let altura = prompt(`Ingrese la altura de la persona en cm`);
let anioDeNacimiento = prompt(`Ingrese el año de nacimiento de la persona`);
let personaNueva = new Persona(nombre, edad, sexo, peso, altura, anioDeNacimiento);

document.write(personaNueva.mostrarDatos());
console.log(personaNueva.dni)
document.write(personaNueva.esMayorDeEdad());
document.write(personaNueva.mostrarGeneracion())