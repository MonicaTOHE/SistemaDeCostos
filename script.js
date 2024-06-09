const productos = [];

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

  for (let i = 0; i < productos.length; i++) {
    crearFila(
      productos[i].articulo,
      productos[i].precio,
      productos[i].descuento
    );
  }
}

//leer articulo y precio y descuento cuando apreten agregar
//creamos un objeto con las propiedades que leimos, luego tengo que guardar eso en el array llamado productos
//hay que "Pintar" el articulo agregado en el html con un for
//los input deben researse para dar pie a poder agregar mas articulos
//crear una funcion que calcula el subtotal
//crear una funcion que calcula el iva, descuento cupon y descuento por cantidad a partir del subtotal  y eso dara el total
