/*Declaración de variables*/
const nombre = document.getElementById("propietario");
const telefono= document.getElementById("telefono");
const direccion= document.getElementById("direccion");
const inputNombreMascota= document.getElementById("nombreMascota");
const inputEnfermedadMascota= document.getElementById("enfermedad");
const TipoMascota=document.getElementById("tipo");

let resultado= document.getElementById("resultado");
let boton= document.getElementById("boton");


/*boton*/

boton.addEventListener("click", () =>{
  const tipoAnimal = TipoMascota.value;
  const Perro = new Mascota(
    nombre.value,
    direccion.value,
    telefono.value,
    tipoAnimal,
    nombreMascota.value,
    enfermedad.value
  );
  
  const Gato = new Mascota(
    nombre.value,
    direccion.value,
    telefono.value,
    tipoAnimal,
    nombreMascota.value,
    enfermedad.value
  );
  
  const Conejo = new Mascota(
    nombre.value,
    direccion.value,
    telefono.value,
    tipoAnimal,
    nombreMascota.value,
    enfermedad.value
  );
  
switch(tipoAnimal){
  case "perro":
    resultado.innerHTML = Perro.datosPropietario() + " El nombre es: " + Perro.verNombreMascota + "<br>"+ Perro.verTipo +" y su enfermedad es: "+ "<br>"+ Perro.verEnfermedad;
    break;
  case "gato":
   resultado.innerHTML = Gato.datosPropietario() + " El nombre es: " + Gato.verNombreMascota +"<br>"+ Gato.verTipo +" y su enfermedad es: "+ "<br>"+ Gato.verEnfermedad;
break;
  case "conejo":
   resultado.innerHTML = Conejo.datosPropietario() + " El nombre es: " + Conejo.verNombreMascota + "<br>"+ Conejo.verTipo +"y su enfermedad es:"+ "<br>"+ Conejo.verEnfermedad;
break;
}


    
})


/* Herencia y clases segun diagrama UML*/
class Propietario{
    #nombre = "";
    #direccion = "";
    #telefono = "";
    constructor(nombre, direccion, telefono){
        this.#nombre=nombre;
        this.#direccion=direccion;
        this.#telefono=telefono;
    }
    datosPropietario() {
        return `El nombre del dueño es: ${this.#nombre}. <br> El domicilio es ${this.#direccion}. <br> El número de teléfono es: ${this.#telefono}<br>`;
      }
}

/* Clase hija Animal*/
class Animal extends Propietario{
    #tipo = "";
    constructor(nombre,direccion,telefono,tipo){
        super(nombre,direccion,telefono);
        this.#tipo=tipo;
    }
    get verTipo () {
        return `“El tipo de animal es un: ${this.#tipo}`;
    }
    
}

/*clase hija macota*/
class Mascota extends Animal{
    #nombreMascota = "";
    #enfermedad = "";
    constructor(nombre,direccion,telefono,tipo,nombreMascota, enfermedad){
        super(nombre,direccion,telefono,tipo)
        this.#nombreMascota=nombreMascota;
        this.#enfermedad=enfermedad;
    }
    get verNombreMascota (){
        return this.#nombreMascota;
    }
    get verEnfermedad(){
        return this.#enfermedad;
    }
    set modificarnombreMascota(valor){
        this.#nombreMascota=valor;
    }
    set modificarEnfermedad(valor){
        this.#enfermedad=valor;
    }
}




