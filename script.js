// alert('test')
const Dolar = {
    Blue: "490",
    Oficial: "250",
    Tarjeta: "438",
    Turista: "501",
    Mayorista: "240",
    Euro: "269",
}




function blue() {
    let dolarBlueInput = parseInt(document.getElementById('formularioDolarBlue').value);
    if (isNaN(dolarBlueInput)) {
        alert("Error de formato")
    } else {
        document.getElementById('resultadoDolarBlue').innerHTML = (dolarBlueInput * Dolar.Blue + '$')
    }
}
function oficial() {
    let dolarOficialInput = parseInt(document.getElementById('formularioDolarOficial').value);
    if (isNaN(dolarOficialInput)) {
        alert("Error de formato")
    } else {
        document.getElementById('resultadoDolarOficial').innerHTML = (dolarOficialInput * Dolar.Oficial) + '$'
    }
}
function tarjeta() {
    let dolarTarjetaInput = parseInt(document.getElementById('formularioDolarTarjeta').value);
    if (isNaN(dolarTarjetaInput)) {
        alert("Error de formato")
    } else {
        document.getElementById('resultadoDolarTarjeta').innerHTML = (dolarTarjetaInput * Dolar.Tarjeta) + "$"
    }
}

function turista() {
    let dolarTuristaInput = parseInt(document.getElementById('formularioDolarTurista').value);
    if (isNaN(dolarTuristaInput)) {
        alert("Error de formato")
    } else {
        document.getElementById('resultadoDolarTurista').innerHTML = (dolarTuristaInput * Dolar.Turista) + "$"
    }
}

function mayorista() {
    let dolarMayoristaInput = parseInt(document.getElementById('formularioDolarMayorista').value);
    if (isNaN(dolarMayoristaInput)) {
        alert('Error de formato')
    } else {
        document.getElementById('resultadoDolarMayorista').innerHTML = (dolarMayoristaInput * Dolar.Mayorista) + "$"
    }
}

function euro() {
    let EuroInput = parseInt(document.getElementById('formularioEuroOficial').value);
    if (isNaN(EuroInput)) {
        alert('Error de formato')
    } else {
        document.getElementById('resultadoEuro').innerHTML = (EuroInput * Dolar.Euro) + "$"
    }
}


