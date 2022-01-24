jQuery(function() {
    $("#botonCiclosJQ").on("click", function() {
        $.get("./1-ciclos.html", function(datos, status) {
            $("#contenedor").html(datos)
        })
    })
    $("#botonSalidasJQ").on("click", function() {
        $.get("./2-salidas.html", function(datos, status) {
            $("#contenedor").html(datos)
        })
    })
    $("#botonOtrosJQ").on("click", function() {
        $.get("./3-otros.html", function(datos, status) {
            $("#contenedor").html(datos)
        })
    })
});