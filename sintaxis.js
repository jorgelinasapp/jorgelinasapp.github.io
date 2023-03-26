
function cambiarColor(){
    document.body.style.backgroundColor="red" 
    /* document.getElementById('boton_color').addEventListener('click', function(){debugger
       /*  document.body.style.backgroundColor= 'red';  
        document.body.style.backgroundColor="red" 
    }); */
}

const botonColor = document.getElementById('boton_color');
botonColor.addEventListener("click",function(){
    document.body.style.backgroundColor="white"
})

const span = document.getElementById('algo');
span.addEventListener("click",function(){
    document.body.style.color="blue" 

})

window.addEventListener("load", function() {document.getElementById ("CabiarColor"). addEventListener ("click", function () {
    var ColorFondo = document.getElementById ("ColorFondo").value;

    document.getElementById("cuerpo").setAttribute(backgroundColor,ColorFondo);

})

}

)