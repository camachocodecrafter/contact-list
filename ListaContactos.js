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

function actualizarContacto(id, nuevosDatos) {
  for (let i = 0; i < listaContactos.length; i++) {
    if (listaContactos[i].id === id) {
      listaContactos[i].nombres =
        nuevosDatos.nombres || listaContactos[i].nombres;
      listaContactos[i].apellidos =
        nuevosDatos.apellidos || listaContactos[i].apellidos;
      listaContactos[i].telefono =
        nuevosDatos.telefono || listaContactos[i].telefono;
      listaContactos[i].ubicaciones =
        nuevosDatos.ubicaciones || listaContactos[i].ubicaciones;
      listaContactos[i].ciudad = nuevosDatos.ciudad || listaContactos[i].ciudad;
      listaContactos[i].direccion =
        nuevosDatos.direccion || listaContactos[i].direccion;
      console.log("Contacto actualizado:", listaContactos[i]);
      return;
    }
  }
  console.log("El contacto no existe en la lista.");
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

imprimirContactos();

let datosActualizados = {
  telefono: "987654321",
  direccion: "Avenida 2",
};

actualizarContacto(1, datosActualizados);
