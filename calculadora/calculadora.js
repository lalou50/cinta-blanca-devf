





function myFunction(){

    var a,b,c,opera;
    a=prompt("pon un numero");
    b=prompt("pon un otro numero");
    opera=prompt("pon la operacion que quieras");
 
    if(opera=="+"){
    c =Number(a) + Number(b);}
    else if (opera==null){
     c="error" }
    else if(a==null){
      c="error"}
    else if(b==null){
    c="error" }
    else if(opera=="/"){
    c=Number(a)/Number(b);}
    else if(opera=="*"){
     c=Number(a)*Number(b);}
    else if(opera=="-"){
    c=Number(a)-Number(b);}
    return c;}
 
    document.getElementById("demo").innerHTML =myFunction();