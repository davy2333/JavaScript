class animal
{
    constructor(nombre, edad)
    {
        this.nombre = nombre;
        this.edad = edad;
    }

    showInfo(){
        document.write(`El nombre del animal es 
            ${this.nombre} y tiene ${this.edad} 
            años y su raza es ${this.raza}<br>`);
    }
}

class Perro extends animal 
{
    constructor(nombre, edad, raza)
    {
        super(nombre, edad);
        this.raza = null;
    }
    set modificarRaza (newName){
        this.raza = newName;
    }
}
const dog = new Perro( "Firulais", 5, "Beagle");

dog.modificarRaza = "Labrador";
document.write( dog.raza );
