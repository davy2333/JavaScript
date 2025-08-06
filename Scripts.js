class telefono{
    constructor(color, peso, resolucionP, resolucionC, ram){

        this.color = color;
        this.peso = peso;
        this.resolucionP = resolucionP;
        this.resolucionC = resolucionC;
        this.ram = ram;

    }

    mostrarInfomacion(){
        return document.write(`el telefono es de color ${this.color}, pesa 
                    <br>${this.peso}, su resolucion de pantalla es 
                    <br>${this.resolucionP}, su resolucion de camara es 
                    <br>${this.resolucionC} y cuenta con una memoria ram de 
                    ${this.ram}<br><br>`);
    }
    prender(){
        return document.write('el telefono se ha prendido<br>');
    }
    reiniciar(){
        return document.write('el telefono se ha reiniciado<br>');
    }
    apagar(){
        return document.write('el telefono se ha apagado<br>');
    }
    tomarFoto(){
        return document.write('mira que bonita foto wacho<br>');
    }
    grabar(){
        return document.write('video 4k papu<br>');
    }
    
}

const huaweii = new telefono("negro","23g","1080","50mp","4gb");
const samsung = new telefono("negro","25g","1080","40mp","4gb");
const iPhoneX = new telefono("blanco","20g","1080","80mp","8gb");

let opcion = prompt(`ingrese el numbre del telefono que quiere ver, elija entre: huaweii, samsung o iPhoneX`);
let accion = prompt('ingresa la accion que quieras hacer primero con el telefono, elige entre: prender, reiniciar, apagar, tomarFoto o grabar');

if(opcion == 'huaweii' && accion == 'prender')
{
    huaweii.mostrarInfomacion();
    huaweii.prender();
}
else if(opcion == 'huaweii' && accion == 'reiniciar')
{
    huaweii.mostrarInfomacion();
    huaweii.reiniciar();
}
else if(opcion == 'huaweii' && accion == 'apagar')
{
    huaweii.mostrarInfomacion();
    huaweii.apagar();
}
else if(opcion == 'huaweii' && accion == 'tomarFoto')
{
    huaweii.mostrarInfomacion();
    huaweii.tomarFoto();
}
else if(opcion == 'huaweii' && accion == 'grabar')
{
    huaweii.mostrarInfomacion();
    huaweii.grabar();
}
else if(opcion == 'samsung' && accion == 'prender')
{
    samsung.mostrarInfomacion();
    samsung.prender();
}
else if(opcion == 'samsung' && accion == 'reiniciar')
{
    samsung.mostrarInfomacion();
    samsung.reiniciar();
}
else if(opcion == 'samsung' && accion == 'apagar')
{
    samsung.mostrarInfomacion();
    samsung.apagar();
}
else if(opcion == 'samsung' && accion == 'tomarFoto')
{
    huaweii.mostrarInfomacion();
    huaweii.tomarFoto();
}
else if(opcion == 'samsung' && accion == 'grabar')
{
    samsung.mostrarInfomacion();
    samsung.grabar();
}
if(opcion == 'iPhoneX' && accion == 'prender')
{
    iPhoneX.mostrarInfomacion();
    iPhoneX.prender();
}
else if(opcion == 'iPhoneX' && accion == 'reiniciar')
{
    iPhoneX.mostrarInfomacion();
    iPhoneX.reiniciar();
}
else if(opcion == 'iPhoneX' && accion == 'apagar')
{
    iPhoneX.mostrarInfomacion();
    iPhoneX.apagar();
}
else if(opcion == 'iPhoneX' && accion == 'tomarFoto')
{
    iPhoneX.mostrarInfomacion();
    iPhoneX.tomarFoto();
}
else if(opcion == 'iPhoneX' && accion == 'grabar')
{
    iPhoneX.mostrarInfomacion();
    iPhoneX.grabar();
}
else
{
    alert('te equivocaste en algo intentalo de nuevo')
}