class Libro{
    #isbn
    #titulo
    #autor
    #nroPaginas
    #anioPubli
    #genero
    constructor(isbn, titulo, autor, nroPaginas, anioPubli, genero){
        this.#isbn = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#nroPaginas = nroPaginas;
        this.#anioPubli = anioPubli;
        this.#genero = genero;
    }
    get mostrarIsbn(){
        return this.#isbn;
    }
    set cambiarIsbn(nuevoIsbn){
        this.#isbn = nuevoIsbn;
    }
    get mostrarTitulo(){
        return this.#titulo;
    }
    set cambiarTitulo(nuevoTitulo){
        this.#titulo = nuevoTitulo;
    }
    get mostrarAutor(){
        return this.#autor;
    }
    get mostrarCantPaginas(){
        return this.#nroPaginas;
    }
    set cambiarCantPaginas(nuevaCant){
        this.#nroPaginas = nuevaCant;
    }
    get mostrarAnioPubli(){
        return this.#anioPubli;
    }
    get mostrarGenero(){
        return this.#genero;
    }
    set cambiarGenero(nuevoGenero){
        this.#genero = nuevoGenero;
    }
    mostrarLibro(){
        return `<p>El libro ${this.mostrarTitulo} con ISBN ${this.mostrarIsbn}, escrito por el autor ${this.mostrarAutor}, tiene ${this.mostrarCantPaginas} páginas. Fue publicado en el año ${this.mostrarAnioPubli} y es del género ${this.mostrarGenero}.</p>`
    }
}

function masLargo(libro1, libro2){
    if(libro1.mostrarCantPaginas > libro2.mostrarCantPaginas){
        return `El libro ${libro1.mostrarTitulo} tiene más páginas.`;
    } else if(libro1.mostrarCantPaginas < libro2.mostrarCantPaginas){
        return `El libro ${libro2.mostrarTitulo} tiene más páginas.`;
    } else{
        return `${libro1.mostrarCantPaginas} y ${libro2.mostrarCantPaginas} tienen la misma cantidad de páginas.`;
    }
}

const bajoEsteSol = new Libro(4455, `Bajo este sol tremendo`, `Carlos Busqued`, 254, 2018, `Suspenso`);
const nuestraParte = new Libro(4785, `Nuestra parte de noche`, `Mariana Enriquez`, 665, 2017, `Terror`);

document.write(bajoEsteSol.mostrarLibro());
document.write(nuestraParte.mostrarLibro());
document.write(masLargo(bajoEsteSol, nuestraParte));