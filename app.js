// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

const agregarAmigo = () => {
  let amigo = document.getElementById("amigo");
  if (amigo.value === "") {
    alert("Por favor, inserte un nombre.")
  } else {
    amigos.push(amigo.value)
    listaAmigos();
  }
  amigo.value = "";
}

const listaAmigos = () => {
  const ul = document.getElementById("listaAmigos");
  let lista = "";
  ul.innerHTML = "";
  amigos.forEach((amigo) => {
    lista += `<li>${amigo}</li>`
  })
  ul.innerHTML = lista;
}

const sortearAmigo = () => {
  if (amigos.length <= 1) {
    alert("Debes agregar mas de 1 amigos para sortear");
  } else {
    let random = Math.floor(Math.random() * amigos.length)
    const amigoSeleccionado = amigos[random]
    document.getElementById("resultado").innerHTML = amigoSeleccionado;
  }
  
}