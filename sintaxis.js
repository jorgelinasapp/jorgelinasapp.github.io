window.addEventListener("load", function( ) {
    document.getElementById("CambiarColor").addEventListener("click", function () {
        var ColorFondo = document. getElementById ("ColorFondo").value;
        document.getElementById("cuerpo").setAttribute("bgcolor", ColorFondo);

    })
})