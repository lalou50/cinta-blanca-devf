
 


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
        //  tarjeta.style.background = 'rgb('255,256,123');

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
for(var i=0; i<1000; i++){
  var color ='#'+Math.random().toString(15).substr(2,6);
/*  
  var objetos = document.getElementsByTagName("tarjeta");
  console.log(document.getElementsByTagName("tarjeta"));
  for(var j=0, len2=objetos.length; j<len2;j++){
    console.log(objetos[j]);
  }
      elem.style.backgroundColor = "rgb(255,0,0)";
  var tarjeta = document.getElementsByTagName("tarjeta").css('background-color', 'rgb('+Math.random()+','+Math.random()+','+Math.random()+')');
  $('body').append(div);
  if(!tarjeta.attr('style')) console.log(color);*/
}
js5.txt
Mostrando js5.txt.