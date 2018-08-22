/** 
   * This function validates if two given string are Anagrams or not 
   *  
   * @author lalou50 
   * @since v1.0 
   * @see validaInputs() 
   */ 
  function validaAnagrama(){ 
    debugger; 
     //Obtenemos el valor de los nodos 
    var palabra1 = document.getElementById('palabra1').value; 
     var palabra2 = document.getElementById('palabra2').value; 
 

     //Validar la entrada del Usuario 
     if(validaInputs(palabra1,palabra2)){ 
         // Hacemos minusculas, separamos, ordenamos y juntamos las letras 
        var palabraOrdenada1=palabra1.toLowerCase().split("").sort().join(""); 
         var palabraOrdenada2=palabra2.toLowerCase().split("").sort().join(""); 
 

         //Comparamos las palabras ordenadas 
         if(palabraOrdenada1===palabraOrdenada2){ 
            creaTarjeta(palabra1+" - "+palabra2,false); 
        } else { 
             creaTarjeta(palabra1+" - "+palabra2,true); 
         } 
     } else { 
         alert('nel compa, te falta info'); 
     } 
 } 
 

 /** 
  * This function will validate if the inputs are not empty 
  *  
  * @param {string} texto1 
  * @param {string} texto2 
  * @returns {boolean} 
  */ 
 function validaInputs(texto1,texto2){ 
     return texto1.length>0 && texto2.length>0; 
 } 
 

 /** 
  * This method will render in the screen a card with the given text 
  * and also the color based on the 'erroneo' flag, if erroneo is true,  
  * the card will be red, else will be green. 
  *  
  * @param {string} texto  
  * @param {boolean} erroneo  
  */ 
 function creaTarjeta(texto,erroneo){ 
     //Creo la tarjeta 
     var tarjeta = document.createElement('div'); 
   
  
   
     //Creo el texto de la tarjeta 
     var h3 = document.createElement('h3'); 
   
   
     //Le asigno el texto que recibo por parametro 
     h3.textContent=texto; 
     //Le agrego el H3 a la tarjeta 
     tarjeta.appendChild(h3); 
     tarjeta.classList.add('tarjeta'); 
 

     //Valido si es erroneo o no 
     if(erroneo) 
         tarjeta.classList.add('erroneo'); 
               
   //En caso de que si, le pongo la clase error 
   

     else 
         tarjeta.classList.add('correcto')
 
   
     var resultado = document.getElementsByClassName('resultados')[0]; 
     resultado.appendChild(tarjeta); 

function mOver(obj) {
   obj.innerHTML = "Thank You";
}

function mOut(obj) {
   obj.innerHTML = "Mouse Over Me"
}


    // Limpio los dos inputs 
    document.getElementById('palabra1').value=''; 
     document.getElementById('palabra2').value=''; 
 } 