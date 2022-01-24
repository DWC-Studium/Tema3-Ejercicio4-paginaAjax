window.addEventListener("load", function() {
    document.getElementById("botonCiclos").addEventListener("click", function() {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("contenedor").innerHTML = this.responseText
            }
        }
        xhr.open("GET", "./1-ciclos.html", true)
        xhr.send()
    })
    document.getElementById("botonSalidas").addEventListener("click", function() {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("contenedor").innerHTML = this.responseText
            }
        }
        xhr.open("GET", "./2-salidas.html", true)
        xhr.send()
    })
    document.getElementById("botonOtros").addEventListener("click", function() {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("contenedor").innerHTML = this.responseText
            }
        }
        xhr.open("GET", "./3-otros.html", true)
        xhr.send()
    })
})