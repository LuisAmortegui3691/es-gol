document.getElementById("capturarBtn").addEventListener('click', function() {
    let datos = document.getElementsByClassName('dato');
    let datosObjeto = {};
    let resultado = document.getElementById('result');

    for (let i = 0; i < datos.length; i++) {
        datosObjeto[datos[i].id] = parseFloat(datos[i].value);
    }

    let a = datosObjeto['a'];
    let b = datosObjeto['b'];
    let c = datosObjeto['c'];
    let d = datosObjeto['d'];
    let x = datosObjeto['x'];
    let y = datosObjeto['y'];

    // Verifica si es palo
    if ((x === a || x === (a+c)) && (b <= y && y <= (b+c))) {
        resultado.value = "Está en el palo.";
    } else if (a <= x && x <= a + c && b <= y && y <= b + d) { // Comprobar si es 
        resultado.value = "¡Es gol!";   
    } else { // No es palo ni gol, es por fuera del arco
        resultado.value = "Está por fuera del arco.";
    }

});
