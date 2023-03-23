let numeroShow = 0
let cantindadEntradas = 0
let descuentos = 0
let pago = false
let reintegrotarjeta = 0
let precioEntrada = 0
let total = 0

let mensajeBienvenida = "¿Qué entrada deseas comprar?: \n" +
    "1) Show 1 \n" +
    "2) Show 2 \n" +
    "3) Show 3 \n" +
    "Ingresa el número de show para el que quieres adquirir tu pase"

function validarNumeroShow() {
    return numeroShow !== 1 && numeroShow !== 2 && numeroShow !== 3
}

function iniciarCompra() {
    while (validarNumeroShow()) {
        numeroShow = Number(prompt(mensajeBienvenida))
        if (validarNumeroShow()) {
            alert("🚫Ingresa un número de show válido, por favor")
        }
    }
    pago = confirm("💵¿Cómo realizarás el pago? Selecciona Aceptar si es en efectivo y Cancelar si es con tarjeta (hay descuento con tarjeta de crédito)")
    if (pago == false) {
        reintegrotarjeta = 0.10
    }
    while (cantindadEntradas > 3 || cantindadEntradas < 1) {
        cantindadEntradas = Number(prompt("Ingresa el número de entradas a comprar (cant. max.3):"))
        if (cantindadEntradas > 3 || cantindadEntradas < 1) {
            alert("🚫La cantidad de entradas es inválida.")
        }
    }
    switch (cantindadEntradas) {
        case 1:
            precioEntrada = 1500
            break
        case 2:
            precioEntrada = 2800
            break
        case 3:
            precioEntrada = 4000
            break
        default: break
    }
    total = precioEntrada - (precioEntrada * reintegrotarjeta)

    alert("El valor de tu/s entrada/s es de:" + total)
}



iniciarCompra()