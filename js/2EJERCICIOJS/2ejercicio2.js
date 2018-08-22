/** 
   *this function wil create a mulptiplication 
   *  
   * @author lalou50 
   * @since v1.0 
   * @see validaInputs() 
   */
function generatablas() {
    
    var numero = document.getElementById("numero").value;
    if (numero > 0) {
        var body = document.getElementsByTagName('body')[0]
        for (var tabla = 1; tabla <= numero; tabla++) {
            var tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta');

            for (var index = 1; index <= 10; index++) {
                var linea = document.createElement('H4');
                linea.textContent = tabla + ' x ' + index + '=' + tabla * index
                tarjeta.appendChild(linea);
            }

            //genero el contenido de la tarjeta
            body.appendChild(tarjeta);
        }
    }

    
}

