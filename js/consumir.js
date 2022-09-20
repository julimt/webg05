const urlApi="https://g2d5d2c0c150515-dbgequipo5.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/api/reto1"

function peticionGet(){
    $.ajax({
        url: urlApi,
        type: 'GET',
        datatype: 'JSON',
        success:function(respuesta){
            console.log(respuesta)
            pintarRespuesta(respuesta.items);
            /*let numerg = data.count
            let productos = data.items
            console.log(numerg)
            console.log(producto)
            console.log("================================================");
            for (i = 0; i < numerg; i++){
                console.log("Producto "+ (i + 1))
                console.log("Codigo " + productos[i].codprod)
                console.log("Nombre " + productos[i].nomprod)
                console.log("Precio " + productos[i].precio)
                console.log("Inventario " + productos[i].inventario)
            }*/
        },
        error:function(xhr, status){
            console.log("Ha sucedido un problema al consumir la Api " + xhr.status + " " + status)
        },
        complete:function(xhr, status){
            console.log("Petición Realizada con Exito!!")
        }
    });
}

function pintarRespuesta(items){
    let myTable="<table>";
    for (i = 0; i < items.length; i++){
        myTable += "<tr>";
        myTable += "<td> "+items[i].codprod+" </td>";
        myTable += "<td> "+items[i].nomprod+" </td>";
        myTable += "<td> "+items[i].precio+" </td>";
        myTable += "<td> "+items[i].inventario+" </td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").append(myTable);
}

function peticionPost(codprode,nomprode,precioe,inventarioe){

    const dataSend = {
        codprod: codprode,
        nomprod: nomprode,
        precio: precioe,
        inventario: inventarioe
    }
    const json = JSON.stringify(dataSend);
    $.ajax({
        url: urlApi,
        method: 'POST',
        data: json,
        contentType: "application/json",
        complete: function(response){
            $("#resultado").empty();
            if (response.status == 555) {
                alert("Registro ya Existe!!")
            }
            else if (response.status == 201) {
                alert("Guardo registro con Exito!!")
            }
            console.log(response.status)
        }
    });

    console.log(json)
}

function peticionPut(codprode,nomprode,precioe,inventarioe){

    const dataSend = {
        codprod: codprode,
        nomprod: nomprode,
        precio: precioe,
        inventario: inventarioe
    }
    const json = JSON.stringify(dataSend);
    $.ajax({
        url: urlApi,
        method: 'PUT',
        data: json,
        contentType: "application/json",
        complete: function(response){
            $("#resultado").empty();
            if (response.status == 201) {
                alert("Actualizo registro con Exito!!")
            }
            console.log(response.status)
        }
    });
    
    console.log(json)
}

function peticionDelete(codprode){

    const dataSend = {
        codprod: codprode
    }
    const json = JSON.stringify(dataSend);
    $.ajax({
        url: urlApi,
        method: 'DELETE',
        data: json,
        contentType: "application/json",
        complete: function(response){
            $("#resultado").empty();
            if (response.status == 204) {
                alert("Registro Eliminado con Exito!!")
            }
            console.log(response.status)
        }
    });
    
    console.log(json)
}
