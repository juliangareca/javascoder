// entidades -----------------------------------------


class Pelicula {
    constructor(nombre, tipo, genero, anio, id) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.genero = genero;
        this.anio = anio;
        this.id = id
    }
}


// --------------------variables --------------------

let buscar = "kiba" //prompt("Ingresar Busqueda");
let agregarPelicula = ("agrega una pelicula a la lista");

// -------------------- constantes --------------------


const peli1 = new Pelicula("Game Of Thrones", "Serie", "Ficcion", 2021, 1);
const peli2 = new Pelicula("Gladiador", "Pelicula", "Accion", 2041, 2);
const peli3 = new Pelicula("El Rey Leon", "Pelicula", "Infantil", 2031, 3);
const peli4 = new Pelicula("Armageddon", "Pelicula", "Accion/Suspenso", 2001, 4);

let peliculas = [peli1, peli2, peli3, peli4]

let ordenFilterNombre = peliculas.filter(Pelicula => Pelicula.nombre == buscar.toLowerCase());
let ordenFilterTipo = peliculas.filter(Pelicula => Pelicula.tipo == buscar.toLowerCase());
let ordenFilterGenero = peliculas.filter(Pelicula => Pelicula.genero == buscar.toLowerCase());
let ordenFilterAnio = peliculas.filter(Pelicula => Pelicula.anio == buscar.toLowerCase());


// -------------------- selectores--------------------

const btn = document.getElementById("guardar");
const tabla = document.getElementById("tabla");
// -------------------- Arrays  --------------------




// -------------------- funciones --------------------


function guardar() {



    let nombre = document.getElementById("nombre").value;
    let tipo = document.getElementById("tipo").value;
    let genero = document.getElementById("genero").value;
    let anio = document.getElementById("anio").value;

    let listaPeliculas = JSON.parse(localStorage.getItem("peliculas"))


    if (localStorage.getItem("peliculas") != null) {
        let id = listaPeliculas.length + 1
        let pelicula = new Pelicula(nombre, tipo, genero, anio, id);
        listaPeliculas.push(pelicula)
        localStorage.setItem("peliculas", JSON.stringify(listaPeliculas))

    } else {
        localStorage.clear()
        let id = 5
        let pelicula = new Pelicula(nombre, tipo, genero, anio, id);
        peliculas.push(pelicula)
        localStorage.setItem("peliculas", JSON.stringify(peliculas))



    }

}






// ORDENO LAS peliculas POR NOMBRE

let peliculasOrdenadasNombre = peliculas.sort(function (a, b) {
    if (a.nombre > b.nombre) {

        return 1;
    }
    if (a.nombre < b.nombre) {

        return -1;
    }
    return 0


});


// ORDENO LAS peliculas POR TIPO


let peliculasOrdenadasTipo = peliculas.sort(function (a, b) {
    if (a.tipo > b.tipo) {

        return 1;
    }
    if (a.tipo < b.tipo) {

        return -1;
    }
    return 0


});

// ORDENO LAS peliculas POR GENERO


let peliculasOrdenadasGenero = peliculas.sort(function (a, b) {
    if (a.genero > b.genero) {

        return 1;
    }
    if (a.genero < b.genero) {

        return -1;
    }
    return 0


});

// ORDENO LAS peliculas POR ANIO


let peliculasOrdenadasAnio = peliculas.sort(function (a, b) {
    if (a.anio > b.anio) {

        return 1;
    }
    if (a.anio < b.anio) {

        return -1;
    }
    return 0


});


function imprimir() {


    let imprimir = JSON.parse(localStorage.getItem("peliculas"));


    if (imprimir != null) {
        imprimir.forEach(element => {

            let card = document.createElement("div")
            card.setAttribute("class", "card subInfo col-sm-4 flex-fill bd-highlight marginCard bg-danger border border-3 border-dark")
            card.setAttribute("style", "width: 18rem;")


            let card2 = document.createElement("div")
            card2.setAttribute("class", "card-title")
            card.appendChild(card2)


            let h5 = document.createElement("h5")
            h5.setAttribute("class", "card-title")
            h5.setAttribute("style", "color: black;")
            h5.textContent = `${element.nombre}`
            card.appendChild(h5)

            let h6 = document.createElement("h6")
            h6.setAttribute("class", "card-subtitle mb-2 text-white")
            h6.textContent = `${element.tipo}`
            card.appendChild(h6)

            let p = document.createElement("p")
            p.setAttribute("class", "card-text")
            p.textContent = `${element.genero}`
            card.appendChild(p)

            let p2 = document.createElement("p")
            p2.setAttribute("class", "card-text")
            p2.textContent = `${element.anio}`
            card.appendChild(p2)

            let button = document.createElement("button")
            button.setAttribute("style", "color: black;")
            button.setAttribute("onclick", `borrarDatos(${element.id})`)
            button.textContent = "Eliminar"
            card.appendChild(button)

            tabla.appendChild(card)


        });




    } else {
        console.log("Error");
    }


}

function borrarDatos(id) {
    let peliculas = JSON.parse(localStorage.getItem("peliculas"))
    let refresh = peliculas.filter(peliculas => peliculas.id != id)

    localStorage.setItem("peliculas", JSON.stringify(refresh))

    location.reload()

}

// -------------------- eventos  --------------------

btn.addEventListener("click", guardar)

// -------------------- logica --------------------

imprimir()