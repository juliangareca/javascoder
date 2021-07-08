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

// let ingresarNumero = Number(prompt ("Ingresar numero"))

// for (let i = 1; i <= 23; i++) {
//     let resultado = ingresarNumero + i;
//     console.log(resultado);
// }

// let entrada = prompt("Ingresar un dato");
// while(entrada != "ESC" ){
//     console.log("El usuario ingresó "+ entrada);
//     entrada = prompt("Ingresar otro dato");
// }

/* clase 4 */


// let numero1 = parseInt(prompt("ingrese precio del producto"));
// let IVA = 1.21;
// let operacion = prompt("ingrese * para calcular con IVA o / para calcular SIN IVA");
// function calculo(numero1, IVA, operacion){
//     switch(operacion){
//         case "*":
//             return numero1 * IVA;
//             break
//         case "/":
//             return numero1 / IVA;
//             break
//     }
// }

// alert("¡Bienvenidos a su nueva CALCULADORA DE CUOTAS!")
// const funcionPrincipal = () => {
//     let cuotas  = prompt(" Ingrese la cantidad de cuotas a seleccionar, pueden ser 1, 2, 3, 6 o hasta 12")
    
//     switch (cuotas) {
//         case "1":
//             alert( "En 1 cuota no tiene interes!");
//             let confirmacion = prompt ("¿Estas seguro de las cuotas ingresadas?")

//             switch(confirmacion){
//                 case "si":
//                     alert("Buenisimo! El valor queda en " + calculo(numero1, IVA, operacion));
                
//                 break;

//                 default:
//                     alert("Volver a ingresar cuotas deseadas");
//             }

//             break;
//         case "2":
//             alert ( "En 2 cuotas tiene un 5% de recargo");
//             let confirmacion2 = prompt ("¿Estas seguro de las cuotas ingresadas?")

//             switch(confirmacion2){
//                 case "si":
//                     alert("Buenisimo! El valor queda en " + (calculo(numero1, IVA, operacion) * 1.05));
                
//                 break;

//                 default:
//                     alert("Volver a ingresar cuotas deseadas");
//             }


//             break;
//         case "3":
//             alert ( "En 3 cuotas tiene un recargo de 10%");
//             let confirmacion3 = prompt ("¿Estas seguro de las cuotas ingresadas?")

//             switch(confirmacion3){
//                 case "si":
//                     alert("Buenisimo! El valor queda en " + (calculo(numero1, IVA, operacion) * 1.10));
                
//                 break;

//                 default:
//                     alert("Volver a ingresar cuotas deseadas");
//             }


//             break;
//         case "6":
//             alert ( " En 6 cuotas tiene un recargo de 25%");
//             let confirmacion4 = prompt ("¿Estas seguro de las cuotas ingresadas?")

//             switch(confirmacion4){
//                 case "si":
//                     alert("Buenisimo! El valor queda en " + (calculo(numero1, IVA, operacion) * 1.25));
                
//                 break;

//                 default:
//                     alert("Volver a ingresar cuotas deseadas");
//             }


//             break;
//         case "12":
//             alert ( " En 12 cuotas tiene un recargo de 60%");
//             let confirmacion5 = prompt ("¿Estas seguro de las cuotas ingresadas?")

//             switch(confirmacion5){
//                 case "si":
//                     alert("Buenisimo! El valor queda en " + (calculo(numero1, IVA, operacion) * 1.60));
                
//                 break;

//                 default:
//                     alert("Volver a ingresar cuotas deseadas");
//             }


//             break;
//         default:
//             alert("La opcion ingresada no es correcta, vuelva a elegir la cantidad de cuotas deseadas, en efectivo tiene un 10% de descuento =)")

//             break;
//     }
// };

// funcionPrincipal ();

// clase 5

class autos{
    constructor(marca, modelo, año, puertas, estado, transmision, combustible){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.puertas = puertas;
        this.estado = estado;
        this.transmision = transmision;
        this.combustible = combustible;
    }
    cotizador (){
        return`El auto ingresado es un ${this.marca} ${this.modelo} Modelo ${this.año}, posee ${this.puertas} y con tansmision ${this.transmision}, el mismo se conserva en un estado ${this.estado}. ${this.combustible}`;
    }
}

    const auto1 = new autos("Peugeot", "505", 1993 , 5, "inmaculado", "manual", "NAFTA/GNC");
    auto1.cotizador()
    // const marca = prompt("Ingrese Marca del vehiculo");
    // const modelo = prompt("Ingrese Modelo del vehiculo");
    // const año = parseInt(prompt("Ingrese año del vehiculo"));
    // const puertas = parseInt(prompt("Ingrese cantidad de puertas del vehiculo"));
    // const estado = prompt("Ingrese estado del vehiculo");
    // const transmision = prompt("Ingrese transmision del vehiculo");
    // const combustible = prompt("Ingrese tipo de combustible del vehiculo");
    const marca = "Wolswagen";
    const modelo = "Gol";
    const año = 2001;
    const puertas = 3   ;
    const estado = "detalles de pintura";
    const transmision = "manual";
    const combustible = "Diesel";

    const fundido = ["Fundido"];

    const auto2 = new autos(marca, modelo, año, puertas, estado, transmision, combustible);
    const datosIngresados = [auto1, auto2]
    
    console.log(auto1.cotizador ());
    console.log(auto2.cotizador ());
    console.log(fundido);
    console.log(datosIngresados.length);

    const ordenObjetos = datosIngresados.sort();
    console.log(ordenObjetos);
