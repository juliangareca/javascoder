/*CLASE Nº 1 */

//  const miNombre = "Julian";
//  const apellido = "Gareca Kandrachoff";
//  const espacio = " ";
//  const concatenacion = miNombre + " " + apellido + espacio;

//  console.log(concatenacion);


// const numeroTelefono = parseInt(prompt("ingrese su número de telefono"));
// alert("Usted ha ingresado: " + numeroTelefono);
// const compania = prompt("ingrese su compañia de teléfono");
// alert("Gracias por visitar nuestra pagina! =) mi nombre es " + miNombre);

/* clase 2!*/

// const unNumero = parseInt(prompt("ingresar un Numero!!"))

//     if (unNumero >= 1000) {
//         alert ("Buenisimo! adivinaste!");
//     }

// const unaPalabra = prompt("Saludame, pero como la REA lo haria")

//     if (unaPalabra === "Hola") {
//         console.log ("Buenisimo! adivinaste de nuevo!");
//     }

// const otroNumero= parseInt(prompt("ahora ingresa oooooooooootro número pero entre 0 y 100"))

//     if ((otroNumero >=10) && (otroNumero <=50)){
//         alert ("Grande Campeon!! pero no tanto como bokita");
//     }
//     else if (otroNumero <10){
//         alert ("no negro, es muy chico");
//     }
//     else if (otroNumero >50){
//         alert ("Fua, ni messi se animo a tanto");
//     }

/* clase 3 */ 

let ingresarNumero = Number(prompt ("Ingresar numero"))

for (let i = 1; i <= 23; i++) {
    let resultado = ingresarNumero + i;
    console.log(resultado);
}

let entrada = prompt("Ingresar un dato");
while(entrada != "ESC" ){
    console.log("El usuario ingresó "+ entrada);
    entrada = prompt("Ingresar otro dato");
}