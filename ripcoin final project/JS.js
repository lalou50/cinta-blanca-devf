
function pideInformacion(){

    var informacion = {
        'Subcompactos':[

            {

                'nombre':'march',
                'marca':'nissan',
                'seguridad':'1',
                'precio': '$80000 - 125000',
                'color':'rojo',
                'contado':'si',
                'tamaño':'chico',
                'imagen':'http://www.automovilonline.com.mx/sites/default/files/styles/620px_wide/public/cars/220/Nissan%20March.jpg?itok=aq3cZf_b',
                'consumoCombustbleaño':'$ 18,100',
                'tranmision':'MAN'
            },
            {
                'nombre':'horno',
                'precio': 2500,
                'stock':14
            },
            {

                'nombre':'plancha',
                'precio':500,
                'stock':5,

            }

        ],

        'Compactos' : [
            {

                'nombre':'versa',
                'marca':'nissan',
                'seguridad':'3',
                'precio': '$119000 - $166000',
                'contado':'si',
                'color':'azul',
                'tamaño':'mediano',
                'imagen':'http://www.automovilonline.com.mx/sites/default/files/styles/620px_wide/public/cars/234/Nissan%20Versa.jpg?itok=eCOgTP1P',
                'consumoCombustbleaño':'$ 17,900  ',
                'tranmision':'AUT'
            },
            {
                'nombre':'',
                'marca':'',
                'seguridad':'',
                'precio': '',
                'color':'',
                'tamaño':'',
                'imagen':'',
                'consumoCombustbleaño':'  ',
                'tranmision':''
            },

        ],



        'Medianos' : [
            {

                'nombre':'malibu',
                'marca':'chevrolet',
                'seguridad':'4',
                'precio': '$392,400-$524,900',
                'color':'gris',
                'tamaño':'grande',
                'imagen':'http://www.automovilonline.com.mx/sites/default/files/styles/620px_wide/public/cars/68/chevroletmalibu2016.jpg?itok=QgUmiPAT',
                'consumoCombustbleaño':'$ 18,200 ',
                'tranmision':'AUT'
            },
            

        ],

        'SUV' : [
            {

                'nombre':'rav4',
                'marca':'toyota',
                'seguridad':'5',
                'precio': '$392,400-$524,900',
                'color':'blanco',
                'tamaño':'grande',
                'imagen':'https://www.diariomotor.com/imagenes/picscache/375x250c/toyota-rav4-hybrid-2016-precio-02_1920x1600c_375x250c.jpg',
                'consumoCombustbleaño':'$ 22,600 ',
                'tranmision':'AUT'
            },
            

        ]





    }

   return informacion;
}

 var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}