// function typeWriter() {
    
//     console.log(i);
//   if (i < txt.length) {
//     //   if(txt.charAt(i)=='2'){
//     //       document.getElementById("demo").innerHTML += "<br>";
//     //   }else{
//         document.getElementById("demo").innerHTML += txt.charAt(i);
//     //   }
        
//     i++;
//     setTimeout(typeWriter, speed);
//   }
//   else 
//   {
//         i=0;
//         document.getElementById("demo").innerHTML = "";
//         typeWriter();
//   }
// }

// get #demo element
var anim = document.getElementById("demo");

var i = 0;
let txt = 'felicidades por enfrentar este 2 desafio y haberlo 2 concluido con exito                                                           ';
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() 
{
    if (i < txt.length) {
        if (txt.charAt(i) == '2') {
            document.getElementById("demo").innerHTML += "<br>";
        } else {
            document.getElementById("demo").innerHTML += txt.charAt(i);
        }
      //document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    else
        {
          i=0;
          document.getElementById("demo").innerHTML = '';
          typeWriter();
      }
}

// set listener when the page is loaded
window.addEventListener("load", function() {
    typeWriter();
});

  


// let txt = 'felicidades por enfrentar este desafio y haberlo <br> concluido con exito';
// let speed = 50;

