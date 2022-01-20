// Alexis Tercero
// Alura Challenge 1 : Logica de programacion.
/**
 * Script to implement the clipboard functionalities
 * asociated with the buttons in the document.
 */

// function to copy a string on the clipboard 
// from input element class="output"
// using navigator.clipboard.writeText()
function copyToClipboard()
{
    let output = document.querySelector('.output');
    navigator.clipboard.writeText(output.value);

    // TEST IF THE COPY WAS SUCCESSFUL
    // -------------------------------------
    // let prom = navigator.clipboard.readText();
    // prom.then(function(text) {
    //     alert('Copiado al portapapeles: ' + text);
    // });
    // -------------------------------------
}
// set up the event listener for the button
document.querySelector("#btn-copy").addEventListener("click", copyToClipboard);