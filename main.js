function checkVacio(event) {
    valor = event.currentTarget.value

    if (valor == "") {
        return true;
    }
}

function comprobarTexto(event) {
    var campoNombre = event.currentTarget.value;
    checkAlfabeto = /[0-9]/;

    if (checkAlfabeto.test(campoNombre)) {
        return true;
    }
}

function comprobarNumero(event, valorMin, valorMax) {
    var campoNumero = event.currentTarget.value;

    if (campoNumero < valorMin || campoNumero > valorMax) {
        return true;
    }
}

function comprobarLongitud(event, longitudMinima, longitudMaxima) {
    var campo = event.currentTarget.value;

    if (longitudMaxima == 0) {
        return false;
    } else if (campo.length >= longitudMaxima || campo.length < longitudMinima) {
        return true;
    }
}

function comprobacionesForm() {
    var errores = [];

    nombre = document.getElementById("nombre");
    nombre.addEventListener("blur", (evt) => {
        if (comprobarTexto(evt)) {
            alert("Solo se pueden introducir letras.");
            nombre.value = "";
        }

        if (comprobarLongitud(evt, 0, 25)) {
            alert("El texto introducido supera el tamaño máximo")
            nombre.value = "";
        }
    });

    apellido = document.getElementById("apellidos");
    apellido.addEventListener("blur", (evt) => {
        if (comprobarTexto(evt)) {
            alert("Solo se pueden introducir letras.");
            apellido.value = "";
        }

        if (comprobarLongitud(evt, 0, 50)) {
            alert("El texto introducido supera el tamaño máximo")
            apellido.value = "";
        }
    });

    edad = document.getElementById("edad");
    edad.addEventListener("blur", (evt) => {
        if (comprobarNumero(evt, 1, 100)) {
            alert("Edad invalida");
            edad.value = "";
        }

    });

    nota = document.getElementById("nota");
    nota.addEventListener("blur", (evt) => {
        if (comprobarNumero(evt, 1, 10)) {
            alert("Nota inadecuada.");
            nota.value = "";

        }
    })
}

function botonEnviar(){
    boton = document.getElementById("botonEnviar");

    nota = document.getElementById("nota").value;
    edad = document.getElementById("edad").value;
    apellidos = document.getElementById("apellidos").value;
    nombre = document.getElementById("nombre").value;

    $.ajax({
        data:{"nombre":nombre,"apellidos":apellidos,"edad":edad,"nota":nota},
        url:'main.php',
        type:'post',
        success:function(respuesta){
            alert(respuesta);
        }
    });
}

function __main__() {
    comprobacionesForm();

    boton = document.getElementById("botonEnviar");
    
    boton.addEventListener("click", ()=>{

            botonEnviar();

    });
    

}

__main__();