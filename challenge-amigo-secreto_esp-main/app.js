// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declaracion de variables
const input = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const arregloAmigos = [];

//Funcion para agregar amigos
function agregarAmigo() {
  //Se quitan los espacios en blancos, en caso de que se presenten.
  const nombreAmigo = input.value.trim();
  //Se valida que el input este vacio
  if(!nombreAmigo) return window.alert('No se puede enviar un nombre vacio')
  //Se añade el amigo al arreglo
  arregloAmigos.push(nombreAmigo);
  //Se limpia el <ul> para añadir y mostrar los nuevos elementos
  listaAmigos.innerHTML = ''
  //Se recorre el arreglo con un forEach, añadiendo los nuevos nombres
  arregloAmigos.forEach(amigo =>{
    listaAmigos.innerHTML += `<li>${amigo}</li>`;
  })
}

//Funcion para sortear amigos
function sortearAmigo() {
  //Se coloca en una constante la longitud del arreglo
  const longitud = arregloAmigos.length;
  //Se genera un numero aleatorio que sera usado para colocarlo en la posicion del arreglo
  let random = Math.floor(Math.random() * longitud) + 1;
  //Se muestra el amigo sorteado, se le resta uno para no sobrepasar el límite del arreglo
  resultado.innerHTML = `<li>Tu amigo secreto es: ${arregloAmigos[random - 1]}</li>`;
}


