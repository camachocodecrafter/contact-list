let listaContactos = [];

function agregarContacto(contacto) {
  listaContactos.push(contacto);
  console.log("Contacto añadido:", contacto);
}

function borrarContacto(id) {
  let indice = -1;
  for (let i = 0; i < listaContactos.length; i++) {
    if (listaContactos[i].id === id) {
      indice = i;
      break;
    }
  }

  if (indice !== -1) {
    let contactoBorrado = listaContactos.splice(indice, 1);
    console.log(
      "Contacto borrado:",
      contactoBorrado[0].nombres,
      contactoBorrado[0].apellidos
    );
  } else {
    console.log("El contacto no existe en la lista.");
  }
}

function imprimirContactos() {
  console.log("Lista de contactos:");
  for (let contacto of listaContactos) {
    console.log("ID:", contacto.id);
    console.log("Nombre completo:", contacto.nombres, contacto.apellidos);
    console.log("Teléfono:", contacto.telefono);
    console.log("Ciudad:", contacto.ciudad);
    console.log("Dirección:", contacto.direccion);
  }
}

let nuevoContacto = {
  id: 1,
  nombres: "Juan Carlos",
  apellidos: "Camacho",
  telefono: "5555-5555",
  ciudad: "San Pedro Sula",
  direccion: "Calle Principal",
};

agregarContacto(nuevoContacto);
