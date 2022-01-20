// Alexis Tercero
// Alura Challenge 1 : Logica de programacion.

// ---------- interaction with the user ----------

// funtion to write the string in the output element
function output(string)
{
    document.querySelector('.output').value = string;
}

// Call the functions depending on the user choice.
// event for calling the encryptor function
function callEncryptor(event) 
{
    // skipt the reload of the page
    event.preventDefault();
    // get the user input
    let string = document.querySelector('.string').value;
    // encrypt the string
    let encryptedString = encrypt(string);
    // show the encrypted string
    console.log(encryptedString);
    output(encryptedString);
}
// event for calling the decryptor function
function callDecryptor(event) 
{
    // skipt the reload of the page
    event.preventDefault();
    // get the user input
    let string = document.querySelector('.string').value;
    // decrypt the string
    let decryptedString = decrypt(string, decodingRule);
    // show the decrypted string
    console.log(decryptedString);
    output(decryptedString);
}

// Event listeners
document.getElementById('btn-encriptar').addEventListener('click', callEncryptor);
document.getElementById('btn-desencriptar').addEventListener('click', callDecryptor);

// ------ clear the inputs elements ------

// function to clear the input element chosen by any selector
function clearInput(selector)
{
    document.querySelector(selector).value = '';
}

// set up the event listener for the buttons input and output
document.querySelector("#btn-clear-input").addEventListener("click", function(event) {
    event.preventDefault();
    clearInput('.string');
});
document.querySelector("#btn-clear-output").addEventListener("click", function(event) {
    event.preventDefault();
    clearInput('.output');
});

