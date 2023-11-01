// Selecciona el botón y el texto a copiar por sus IDs
const copyButton = document.getElementById("copy-button");
const textToCopy = document.getElementById("text-to-copy");

// Agrega un manejador de eventos al botón
copyButton.addEventListener("click", function () {
  // Selecciona el contenido del elemento de texto
  const text = textToCopy.innerText;

  // Crea un elemento de texto temporal para copiar
  const tempInput = document.createElement("input");
  tempInput.value = text;

  // Agrega el elemento temporal al documento (pero oculto)
  document.body.appendChild(tempInput);

  // Selecciona y copia el texto del elemento temporal
  tempInput.select();
  document.execCommand("copy");

  // Elimina el elemento temporal
  document.body.removeChild(tempInput);

  // Cambia el texto del botón para indicar que se copió
  copyButton.innerText = "¡Check!";
  
  // Vuelve a cambiar el texto después de unos segundos
  setTimeout(function () {
    copyButton.innerText = "copy";
  }, 2000); // Cambia el texto de vuelta después de 2 segundos
});
