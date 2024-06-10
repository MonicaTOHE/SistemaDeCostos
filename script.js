const productos = [];
let subtotal = 0;
let descuento = 0;
let precioDespuesDeLosDescuentos = 0;
let total = 0;
let iva = 0;
//todo esto es el boton
const botonAgregar = document.getElementById("botonagregar");
botonAgregar.addEventListener("click", () => {
  const a = document.getElementById("articulo").value;
  const b = document.getElementById("precio").value;
  const c = document.getElementById("descuento").value;

  const obj = { articulo: a, precio: b, descuento: c };

  productos.push(obj);

  borrarTabla();
  //crearFila("nombre");
  llenarTabla();
});

function borrarTabla() {
  document.getElementById("tablabody").innerHTML = "";
}

function crearFila(nombre, precio, descuento) {
  const tr = document.createElement("tr"); //creamos un tr

  const td1 = document.createElement("td"); //creeamos primero td que son los que vna dentro de tr
  td1.innerHTML = nombre; //aqui hicimos que el td tuviera un texto
  const td2 = document.createElement("td");
  td2.innerHTML = precio;
  const td3 = document.createElement("td");
  td3.innerHTML = descuento;

  tr.appendChild(td1); // hicimos que el tr tenga como hijo el td, asi el td ahora vale lo de arriba
  tr.appendChild(td2);
  tr.appendChild(td3);

  document.getElementById("tablabody").appendChild(tr);
  /*
  document.getElementById("tablabody").innerHTML = `<tr>
  <td>Mark2</td>
  <td>Otto</td>
  <td>Otto</td>
</tr>`;
*/
}

function llenarTabla() {
  //crearFila(productos[1].articulo, productos[1].precio, productos[1].descuento);
  subtotal = 0;
  descuento = 0; //descuento sirve para cada producto
  precioDespuesDeLosDescuentos = 0;
  total = 0;

  for (let i = 0; i < productos.length; i++) {
    crearFila(
      productos[i].articulo,
      productos[i].precio,
      productos[i].descuento
    );
    const precioInt = parseInt(productos[i].precio);
    const descuentoInt = parseInt(productos[i].descuento);

    subtotal += precioInt;
    reglaDeTres = (descuentoInt * precioInt) / 100; // aqui nos quedara 100
    descuento += reglaDeTres;
    precioDespuesDeLosDescuentos += precioInt - reglaDeTres; //aqui quedan 900
  }

  if (productos.length > 9) {
    diezPorciento = precioDespuesDeLosDescuentos * 0.1;
    total = precioDespuesDeLosDescuentos - diezPorciento;
    const MuestraDescuentoPorCantidad =
      document.getElementById("descuentoCantidad");
    MuestraDescuentoPorCantidad.innerText = "Aplicado 10%";
  } else {
    total = precioDespuesDeLosDescuentos;
    const MuestraDescuentoPorCantidad =
      document.getElementById("descuentoCantidad");
    MuestraDescuentoPorCantidad.innerText = "No aplica 10%";
  }

  iva = (19 * total) / 100;

  const muestraSubtotal = document.getElementById("subtotal");
  muestraSubtotal.innerText = subtotal;

  const muestraDescuento = document.getElementById("primerDescuento");
  muestraDescuento.innerText = descuento;

  const muestraIva = document.getElementById("iva");
  muestraIva.innerText = iva;

  const muestraTotal = document.getElementById("total");
  muestraTotal.innerText = total;
}

//leer articulo y precio y descuento cuando apreten agregar
//creamos un objeto con las propiedades que leimos, luego tengo que guardar eso en el array llamado productos
//hay que "Pintar" el articulo agregado en el html con un for
//los input deben researse para dar pie a poder agregar mas articulos
//crear una funcion que calcula el subtotal
//crear una funcion que calcula el iva, descuento cupon y descuento por cantidad a partir del subtotal  y eso dara el total
