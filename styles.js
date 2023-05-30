let listaDeContactos = [
  {
    id: 0,
    nombre: "jeider",
    Apellidos: "moreno",
    Telefono: 573023034641,
    email: "jeidermoreno@hotmail.com",
    Ubicaciones: {
      Ciudad: "MAICAO",
      Dirección: "cl 15 n 15 36",
    },
  },
  {
    id: 1,
    nombre: "Yira",
    Apellidos: "Diaz",
    Telefono: 573013456468,
    email: "yirasandrithmolina@gmail.com",
    Ubicaciones: {
      Ciudad: "MAICAO",
      Dirección: "calle 30 n 1-65",
    },
  },
  {
    id: 2,
    nombre: "EDUARDO",
    Apellidos: "TEHERAN",
    Telefono: 573217102528,
    email: "EDUARDOJOSE@gmail.com",
    Ubicaciones: {
      Ciudad: "San pedro de uraba",
      Dirección: "vereda el caño",
    },
  },
  {
    id: 3,
    nombre: "Nidia ",
    Apellidos: "ACUÑA",
    Telefono: 57305474812,
    email: "nidiaacuña@hotmail.com",
    Ubicaciones: {
      Ciudad: "San pedro de uraba",
      Dirección: "vereda el porvenir",
    },
  },
];
function ingresarContacto(
  name,
  lastName,
  phone,
  mail,
  location,
  city,
  address
) {
  let ultimaposicion = listaDeContactos[listaDeContactos.length - 1].id;
  let NuevoContacto = {
    id: ultimaposicion + 1,
    nombre: name,
    Apellidos: lastName,
    Telefono: phone,
    email: mail,
    Ubicacion: location,
    ciudad: city,
    Dirección: address,
  };
  listaDeContactos.push(NuevoContacto);
  console.log(ingresarContacto);
}
ingresarContacto(
  "Angel",
  "Martinez",
  3107482526,
  "aeduardo@hotmail.com",
  "",
  "maicao",
  "clle 7 1a-60"
);
ingresarContacto(
  "TPedro",
  "Cuevas",
  315281749,
  "pcuevas@hotmail.com",
  "",
  "maicao",
  "clle 2 1e-68"
);

function eliminarContacto(name, lastName) {
  let Posicion = listaDeContactos.findIndex(
    (data) => data.nombre == name && data.Apellidos == lastName
  );
  listaDeContactos.splice(Posicion, 1);
}
eliminarContacto("jeider", "moreno");

function imprimirContactos() {
  console.log(listaDeContactos);
}
imprimirContactos();

function actualizarContacto(
  name,
  lastName,
  phone,
  mail,
  location,
  city,
  address
) {
  let ultimaposicion = listaDeContactos[listaDeContactos.length - 1].id;
  let actualizacionDato = {
    id: ultimaposicion + 1,
    nombre: name,
    Apellidos: lastName,
    Telefono: phone,
    email: mail,
    Ubicacion: location,
    ciudad: city,
    Dirección: address,
  };
  listaDeContactos.filter(actualizarContacto);
  console.log(ingresarContacto);
}
