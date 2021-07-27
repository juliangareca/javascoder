class autos {
    constructor(marca, modelo, año, puertas, estado, transmision, combustible) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.puertas = puertas;
        this.estado = estado;
        this.transmision = transmision;
        this.combustible = combustible;
    }
    cotizador() {
        return `El auto ingresado es un ${this.marca} ${this.modelo} Modelo ${this.año}, posee ${this.puertas} y con tansmision ${this.transmision}, el mismo se conserva en un estado ${this.estado}. ${this.combustible}`;
    }
}

const marca = prompt("Ingrese Marca del vehiculo");
const modelo = prompt("Ingrese Modelo del vehiculo");
const año = parseInt(prompt("Ingrese año del vehiculo"));
const puertas = parseInt(prompt("Ingrese cantidad de puertas del vehiculo"));
const estado = prompt("Ingrese estado del vehiculo");
const transmision = prompt("Ingrese transmision del vehiculo");
const combustible = prompt("Ingrese tipo de combustible del vehiculo");

const fundido = ["Fundido"];

const auto1 = new autos(
    marca,
    modelo,
    año,
    puertas,
    estado,
    transmision,
    combustible
);
auto1.cotizador();
const datosIngresados = [auto1];

console.log(auto1.cotizador());
console.log(fundido);
console.log(datosIngresados.length);

const ordenObjetos = datosIngresados.sort();
console.log(ordenObjetos);
