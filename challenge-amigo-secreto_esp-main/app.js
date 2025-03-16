// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declaracion de variables
const input = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const arregloAmigos = [];

//Funcion para agregar amigos
function agregarAmigo() {
  //Se quitan los espacios en blancos, en caso de que se presenten.
  const nombreAmigo = input.value.trim();
  arregloAmigos.push(nombreAmigo);
  listaAmigos.innerHTML = ''
  //Se recorre el arreglo con un forEach, añadiendo los nuevos nombres
  arregloAmigos.forEach(amigo =>{
    listaAmigos.innerHTML += `<li>${amigo}</li>`;
  })
}




