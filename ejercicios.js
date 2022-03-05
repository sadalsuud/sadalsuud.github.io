

function punto_1() {

    let num_1 = parseInt(document.getElementById("num_1").value)
    let num_2 = parseInt(document.getElementById("num_2").value)
    let num_3 = parseInt(document.getElementById("num_3").value)
    let operacion = 0

    if (num_1 > 0) {
        operacion = num_2 * num_3
    }
    else {
        operacion = num_2 + num_3
    }

    console.log("El resultado es: " + operacion)
    document.getElementById("resultado").innerHTML = operacion

}


function punto_2() {

    let num_1 = parseInt(document.getElementById("num1").value)
    let num_2 = parseInt(document.getElementById("num2").value)
    let num_3 = parseInt(document.getElementById("num3").value)
    let respuesta = "Ningun número es igual a la suma de los otros dos"

    if (num_1 == num_2 + num_3) {
        respuesta = num_1 + " si es igual a la suma de " + num_2 + " y " + num_3
    }
    else if (num_2 == num_1 + num_3) {
        respuesta = num_2 + " si es igual a la suma de " + num_1 + " y " + num_3
    }
    else if (num_3 == num_1 + num_2) {
        respuesta = num_3 + " si es igual a la suma de " + num_1 + " y " + num_2
    }

    console.log(respuesta)
    document.getElementById("operacion").innerHTML = respuesta

}


function punto_3() {

    let multiplo_3 = 3
    let sumatoria = 0
    let i = 1
    let multiplos = ""

    while (multiplo_3 <= 100) {
        multiplo_3 = i * 3
        multiplos += multiplo_3 + "\n"
        sumatoria += multiplo_3
        i++
    }

    document.getElementById("multiplos").innerHTML = multiplos
    document.getElementById("sumatoria").innerHTML = "La sumatoria de multiplos dió " + sumatoria
}


function punto_4() {

    let potencia_2 = 2
    let potencias = ""

    while (potencia_2 <= 100) {
        potencias += potencia_2 + "\n"
        potencia_2 *= 2
    }
    document.getElementById("potencias").innerHTML = potencias
}


function punto_5() {

    // esto se puede resolver usando una formula y sin usar ciclos
    let num = 50
    let sumatoria = 0

    while (num <= 200) {
        sumatoria += num
        num += 2
    }
    document.getElementById("sumatoria_p5").innerHTML = sumatoria
}


function punto_6() {
    let temp_c = parseFloat(document.getElementById("temp_c").value)
    let temp_f = 9 / 5 * temp_c + 32
    document.getElementById("temperatura").innerHTML = temp_c + "°C equivale a " + temp_f + " °F"
}


function punto_7() {

    let hora_nueva = 0
    let hora = parseInt(document.getElementById("hora").value)

    if (hora == 12) {
        hora_nueva = hora + "M"
    }
    else if (hora > 12) {
        hora_nueva = hora - 12 + "PM"
    }
    else if (hora < 12) {
        hora_nueva = hora + "AM"
    }

    document.getElementById("hora_nueva").innerHTML = hora_nueva
}


function punto_8() {

    let palabras = new Array()
    let palabras_alrevez = new Array()
    let i = 0
    let respuesta = ""

    palabras = document.getElementById("alderecho").value.split(', ')

    i = 0
    while (i < 5) {
        palabras_alrevez.push(palabras.pop())
        i++
    }

    i = 0
    while (i < 5) {
        console.log(palabras_alrevez[i])
        respuesta += palabras_alrevez[i] + ", "
        i++
    }

    document.getElementById("alrevez").innerHTML = respuesta
}


function punto_9() {

    let notas = new Array()
    let promedio = 0
    let mas_alta = 0
    let mas_baja = 10
    let sumatoria = 0
    let respuesta = ""
    let i = 0

    let aux = document.getElementById("notas").value
    let aux2 = aux.split(',')
    for (let k = 0; k < aux2.length; k++) {
        notas.push(parseFloat(aux2[k]))
    }

    while (i < 5) {
        sumatoria += notas[i]
        if (notas[i] > mas_alta) {
            mas_alta = notas[i]
        }
        if (notas[i] < mas_baja) {
            mas_baja = notas[i]
        }
        i++
    }

    promedio = sumatoria / 5

    respuesta += "La nota promedio es: " + promedio + "\n"
    respuesta += "La nota mas alta es: " + mas_alta + "\n"
    respuesta += "La nota mas baja es: " + mas_baja + "\n"

    document.getElementById("boletin_notas").innerHTML = respuesta
}


function punto_10() {

    let j = 0
    let aux = 0
    let numero = 0
    let respuesta = ""
    let sum_fila = []
    let sum_col = [0, 0, 0, 0]
    let matriz = [[], [], []]

    let i = 0
    while (i < 3) {
        j = 0
        while (j < 4) {
            numero = Math.floor(Math.random() * 10);
            matriz[i].push(numero)
            aux += numero
            sum_col[j] += numero
            j++
        }
        sum_fila[i] = aux
        aux = 0
        i++
    }


    i = 0
    j = 0
    while (i < 3) {
        while (j < 4) {
            respuesta += matriz[i][j] + "    "
            j++
        }
        respuesta += " | " + sum_fila[i] + "\n"
        i++
        j = 0
    }

    respuesta += "-----------------\n"

    i = 0
    while (i < 4) {
        respuesta += sum_col[i] + "  "
        i++
    }

    document.getElementById("tabla").innerHTML = respuesta
}


function mostrar(punto) {

    let numero = punto[punto.length - 1]
    for (let i = 1; i <= 10; i++) {
        if (numero == 0) {
            numero = 10
        }

        if (i == numero) {
            document.getElementById(punto).style.display = 'block';
        }
        else {
            let aux = 'punto' + i
            document.getElementById(aux).style.display = 'none';
        }
    }
}