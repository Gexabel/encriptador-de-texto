// Declaracion de variables
// Mapa de caracteres para encriptacion

let imagen = document.getElementById('cifrado');
const botonCopiar = document.getElementById('copiar');
const resultadoElemento = document.getElementById('textoSalida');

const diccionarioEncriptacion = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
  };

// Funcion para manipular texto en elementos HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

asignarTextoElemento('#textoExclamativo','&#10071; Solo letras minúsculas y sin acentos');

// Para limpiar textarea que permite al usuario introducir el mensaje a encriptar o desencriptar.
function limpiarCaja() {
    document.querySelector('#textoIngresado').value = '';
  }

// Funcion encriptar mensaje, con validacion de caracteres no permitidos.
function encriptarMensaje() {
  const mensajeOriginal = document.getElementById('textoIngresado').value.toLowerCase();
  const mensajeEncriptado = document.getElementById('textoSalida');

  let mensajeCifrado = "";
  let mensajeInvalidos = ""; // Variable para almacenar caracteres no válidos


    for (let i = 0; i < mensajeOriginal.length; i++) {
      const caracter = mensajeOriginal[i];

          if (/[a-z ]/.test(caracter)) {
            mensajeCifrado += diccionarioEncriptacion[caracter] || caracter;
          } else {
            mensajeInvalidos += caracter; // Almacenar caracteres no válidos
          }
    }
          if (mensajeInvalidos.length > 0) {
            alert("Se han encontrado caracteres no válidos: " + mensajeInvalidos + "\nSolo se permiten letras minúsculas sin acentos.");
          } else {
            mensajeEncriptado.textContent = mensajeCifrado;
          }

    if (mensajeOriginal.length !=0){
      limpiarCaja();
      imagen.style.display = 'none';
      asignarTextoElemento('#textoGrande','');
      asignarTextoElemento('#textoPequeno','');
    }else{
      imagen.style.display = 'block';
      asignarTextoElemento('#textoGrande','Ningún mensaje fue encontrado');
      asignarTextoElemento('#textoPequeno','Ingresa el texto que desees encriptar o desencriptar.');
      alert("Debes ingresar un texto");

    }
}

//La funcion para desencriptar se hizo con .replace
function desencriptarMensaje(){

        const mensaje = document.getElementById('textoIngresado').value.toLowerCase();
        const mensajeDesencriptado = document.getElementById('textoSalida');

        const mensajeDescifrado = mensaje
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
      
        mensajeDesencriptado.textContent = mensajeDescifrado;
        
        if (mensaje.length !=0){
          limpiarCaja();
          imagen.style.display = 'none';
          asignarTextoElemento('#textoGrande','');
          asignarTextoElemento('#textoPequeno','');
        }else{
          imagen.style.display = 'block';
          asignarTextoElemento('#textoGrande','Ningún mensaje fue encontrado');
          asignarTextoElemento('#textoPequeno','Ingresa el texto que desees encriptar o desencriptar.');
          alert("Debes ingresar un texto");
    
        }
      }

//Permite copiar el texto encriptado o desencriptado
function copiarTexto() {
    if (navigator.clipboard) {
      const { textContent: textoACopiar } = resultadoElemento;
    
      const textToCopy = String(textoACopiar);
    
      navigator.clipboard.writeText(textToCopy)
    }
    }
      
    botonCopiar.addEventListener('click', copiarTexto);
      





