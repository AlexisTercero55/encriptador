// Alexis Tercero
// Alura Challenge 1 : Logica de programacion.
// Encriptador y desencriptador de texto.
//----------------------------------------------------
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
let encodingRule = {
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' : 'ober',
    'u' : 'ufat'
}

// function to encrypt a string
// using the encoding rule
function encrypt(string) 
{   // methodology: loops and conditionals.
    let encryptedString = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] in encodingRule) {
            encryptedString += encodingRule[string[i]];
        } else {
            encryptedString += string[i];
        }
    }
    return encryptedString;
}

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
let decodingRule = {
    'enter' : 'e',
    'imes' : 'i',
    'ai' : 'a',
    'ober' : 'o',
    'ufat' : 'u'
}

// function to decrypt a string
// using the decoding rule as regex pattern with global flag
// this function is able to encrypt and decrypt strings
// depending on the rules of encoding.
function decrypt(string, rules) 
{
    // methodology: iterations , regex and built-in functions.
    //get an array of encoding rules as regex
    let regexRules = Object.keys(rules).map(function(key) {
        return new RegExp(key, 'g');
    });

    // get an array with yhe rules values
    let valueRules = Object.values(rules);

    //replace the string with the decoding rules values
    //string = string.replace(regexRules[0], valueRules[0]);
    // do for each encoding rule
    for (let i = 0; i < regexRules.length; i++)
    {
        string = string.replace(regexRules[i], valueRules[i]);
    }
    return string; // return the decrypted string
}

//----------------------------------------------------
// test the functions to encrypt and decrypt strings
// ----- test aproved -----
// a = encrypt('alexis tercero', encodingRule);
// console.log('alexis : ' + a);
// console.log(a + ' : ' + decrypt(a, decodingRule));
//----------------------------------------------------