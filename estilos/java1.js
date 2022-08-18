const productos = [];//array donde tengo todos los productos
const elementosCarrito = [];//array donde voy a guardar los elemntos del carrito
const IVA = 1.21
class ElementosCarrito {
    constructor(producto, cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }
}
class Producto {
    constructor(nombre, importe, foto) {
        this.nombre = nombre
        this.importe = importe
        this.foto = foto

    }
    precioFinal() {
        return parseFloat((this.importe * IVA).toFixed(2))//solo con dos decimales
    }
}//agrega iva


let producto0 = new Producto("notebook", "100000", './imagenes/tienda1.jpg')
let producto1 = new Producto("celular", "80000", './imagenes/tienda1.jpg')
let producto2 = new Producto("funda", "1000", './imagenes/tienda1.jpg')
let producto3 = new Producto("vidrio templado", "1000", 'imagenes/tienda1.jpg')
let producto4 = new Producto("mouse", "2000", 'imagenes/tienda1.jpg')
let producto5 = new Producto("teclado", "1000", 'imagenes/tienda1.jpg')
let producto6 = new Producto("auricular", "1500", 'imagenes/tienda1.jpg')//lista de productos

productos.push(producto0, producto1, producto2, producto3, producto4, producto5, producto6)//push a productos ya agregados

//por cada objeto de mi array creo una card 
let cartas = document.querySelector("#tienda")
for (const obj of productos) {
    let carta = document.createElement("div");
    carta.innerHTML = `
   <img src ="${obj.foto}">
                        <h3>${obj.nombre}</h3>
                        <p>${obj.importe}</p>
                        <a href class="botonTienda">Comprar</a>
                         `
    cartas.append(carta);
}//puse en las fotos siempre la misma pero los nombres y los importes van cambiando



//a partir de aca estoy intentando hacer el boton para hacer el carrito y la tienda pero no esta terminado
/* const agregarAlCarritoBotones = document.querySelectorAll('.botonTienda');

agregarAlCarritoBotones.forEach((agregarAlCarro) => {
    agregarAlCarro.addEventListener('click', agregarAlCarroSeleccionado);
});

function agregarAlCarroSeleccionado(event){
    const boton = event.target
} */



let botonPrincipal = document.getElementById("botonPrincipal");//este es un evento q al pasar x encima del boton comprar te tira un alerta para q lo compres
botonPrincipal.onmouseover=()=>{
    alert("necesitas un iphone 10 !");

}


function capturarEnter(e){
    if (e.which==13 || e.keycode==13){//esta funcion captura el evento enter del codigo postal que es el ultimo dato a llenar
        alert("presionaste Enter");
    }
}

