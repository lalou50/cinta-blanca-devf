
/**
 * este metodo te regresa un jason 
 * como si lo estuviesemos pidiendo de un servidor
 * 
 * @returns{JSON}
 */

function pideInformacion(){

    var informacion = {
        'linea_blanca':[

            {

                'nombre':'lavadora',
                'precio': 5000,
                'stock':10,
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

        'electronicos' : [
            {

                'nombre':'Nintendo SWITCH',
                'precio':7000,
                'stock':10,
            },
            {
                'nombre':'ps4',
                'precio':7500,
                'stock':4,
            },

        ]

    }

   return informacion;
}

pideInformacion();

// Builds the HTML Table out of myList.
function buildHtmlTable(selector) {
    var columns = addAllColumnHeaders(informacion, selector);
  
    for (var i = 0; i < myList.length; i++) {
      var row$ = $('<tr/>');
      for (var colIndex = 0; colIndex < columns.length; colIndex++) {
        var cellValue = informacion[i][columns[colIndex]];
        if (cellValue == null) cellValue = "";
        row$.append($('<td/>').html(cellValue));
      }
      $(selector).append(row$);
    }
  }
  
  // Adds a header row to the table and returns the set of columns.
  // Need to do union of keys from all records as some records may not contain
  // all records.
  function addAllColumnHeaders(myList, selector) {
    var columnSet = [];
;  
    for (var i = 0; i < myList.length; i++) {
      var rowHash = myList[i];
      for (var key in rowHash) {
        if ($.inArray(key, columnSet) == -1) {
          columnSet.push(key);
          headerTr$.append($('<th/>').html(key));
        }
      }
    }
    $(selector).append(headerTr$);
  
    return columnSet;
  }






}