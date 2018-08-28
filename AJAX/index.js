

function cargaDatos(){

    $.ajax({
        method:'GET',
        url:'https://jsonplaceholder.typicode.com/posts'

    }).done(function(datos){

        console.log(datos);
    }).fail (function(){
        alert('ya valio madres no hay internet');
    });
}

function enviaDatos(){
    
var title=document.getElementById('title').value;

var body = document.getElementById('body').value;

    $.ajax({
        method:'POST',
        url:'https://jsonplaceholder.typicode.com/posts',
        data:{
            title:title,
            body:body,
            userId:2
        },

    }).done(function(response){
        console.log(response);
    }).fail (function(){
        alert('ya valio madres no hay internet');
    });

}
