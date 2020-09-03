// Función para validar los campos


document.getElementById("val").onclick=validar;


function validar()
{
    var inicio = document.getElementById("inicio").value;
    var fin = document.getElementById("fin").value;
    var visualizar = document.getElementById("visualizar").value;
    var pozos = document.getElementById("pozos").value;
    var perfo = document.getElementById("perfo").value;
    var comple = document.getElementById("comple").value;
    var testing = document.getElementById("testing").value;
    var tie = document.getElementById("tie").value;
    var Drowback = document.getElementById("Drowback").value;
    var gas = document.getElementById("gas").value;
    var crudo = document.getElementById("crudo").value;
    var declinacion = document.getElementById("declinacion").value;
    var cemento = document.getElementById("cemento").value;
    var team2 = document.getElementById("team2").value;
    var arena = document.getElementById("arena").value;
    var agua = document.getElementById("agua").value;
    var flowback = document.getElementById("flowback").value;
    var team1 = document.getElementById("team1").value;
    var profundidad = document.getElementById("profundidad").value;
    var cabezal = document.getElementById("cabezal").value;
    var team3 = document.getElementById("team3").value;

    if ( inicio === "" || fin === "" || visualizar === "" || pozos === "" || perfo === "" || comple === "" || testing === "" || tie === "" || Drowback === "" || gas === "" || crudo === "" || declinacion === "" || cemento === "" || team2 === "" || arena === "" || agua === "" || flowback === "" || team1 === "" || profundidad === "" || cabezal ==="" || años === "" || team3 === "" ){
        Swal.fire({
            icon: 'error',
            title: 'ERROR...',
            text: 'Recuerda que todos los campos son requeridos!',
            footer: '<a href>Intenta hacerlo nuevamente</a>'
          })
         
        return false;
   
    }

    
    else if (inicio.length>5 || inicio.length<4 || fin.length>5 || fin.length<4 || visualizar.length>5 || visualizar.length<4){
        Swal.fire({
            icon: 'warning',
            title: 'La fecha de los años esta incorrecta...',
            text: 'Verifica que se encuentre bien para avanzar!',
            footer: '<a href>Intenta hacerlo nuevamente</a>'
          })
         
        return false;  
    }

    else if (perfo.length>2 || perfo.length<1 || comple.length>2 || comple.length<1 || testing.length>2 || testing.length<1 || tie.length>2 || tie.length<1  || Drowback.length<1 || Drowback.length>2){
        Swal.fire({
            icon: 'warning',
            title: 'Error en la duración de las operaciones...',
            text: 'Verifica que se encuentren bien para avanzar!',
            footer: '<a href>Intenta hacerlo nuevamente</a>'
          })
         
        return false;
   
        
    }

    else if (pozos.length<1 || pozos.length>6 || cabezal.length<1 || cabezal.length>6 ){
      Swal.fire({
        icon: 'warning',
        title: 'Error en el ingreso de condiciones de localización...',
        text: 'Verifica que se encuentren bien para avanzar!',
        footer: '<a href>Intenta hacerlo nuevamente</a>'
      })
     
    return false;
    }

    else if (profundidad.length<2 || profundidad.length>6 || team1.length<1 || team1.length>2 ){
      Swal.fire({
        icon: 'warning',
        title: 'Error en el ingreso de condiciones de perforación...',
        text: 'Verifica que se encuentren bien para avanzar!',
        footer: '<a href>Intenta hacerlo nuevamente</a>'
      })
     
    return false;
    }

    else if (cemento.length<2 || cemento.length>3 ){
      Swal.fire({
        icon: 'warning',
        title: 'Error en el ingreso de cantidad de cemento...',
        text: 'Verifica que se encuentren bien para avanzar!',
        footer: '<a href>Intenta hacerlo nuevamente</a>'
      })
     
    return false;
    }

    else if (team2.length<1 || team2.length>3 ){
      Swal.fire({
        icon: 'warning',
        title: 'Error en el ingreso de cantidad de cemento...',
        text: 'Verifica que se encuentren bien para avanzar!',
        footer: '<a href>Intenta hacerlo nuevamente</a>'
      })
     
    return false;

    }

    else if (team2.length<1 || team2.length>3 ){
      Swal.fire({
        icon: 'warning',
        title: 'Error en el ingreso de personal de completamiento...',
        text: 'Verifica que se encuentren bien para avanzar!',
        footer: '<a href>Intenta hacerlo nuevamente</a>'
      })
     
    return false;

    }

    else if (arena.length<1 || arena.length>4 ){
      Swal.fire({
        icon: 'warning',
        title: 'Error en el ingreso de cantidad de propante...',
        text: 'Verifica que se encuentren bien para avanzar!',
        footer: '<a href>Intenta hacerlo nuevamente</a>'
      })
     
    return false;

    }

    else if (agua.length<3 || agua.length>6 ){
      Swal.fire({
        icon: 'warning',
        title: 'Error en el ingreso de cantidad de agua...',
        text: 'Verifica que se encuentren bien para avanzar!',
        footer: '<a href>Intenta hacerlo nuevamente</a>'
      })
     
    return false;
    }

    else if (flowback.length<3 || flowback.length>6 ){
      Swal.fire({
        icon: 'warning',
        title: 'Error en el ingreso de flowback...',
        text: 'Verifica que se encuentren bien para avanzar!',
        footer: '<a href>Intenta hacerlo nuevamente</a>'
      })
     
    return false;
    }

    else if (gas.length<1 || gas.length>7 ){
      Swal.fire({
        icon: 'warning',
        title: 'Error en el ingreso de produccion de gas...',
        text: 'Verifica que se encuentren bien para avanzar!',
        footer: '<a href>Intenta hacerlo nuevamente</a>'
      })
     
    return false;
    }
    else if (crudo.length<1 || crudo.length>7 ){
      Swal.fire({
        icon: 'warning',
        title: 'Error en el ingreso de produccion de crudo...',
        text: 'Verifica que se encuentren bien para avanzar!',
        footer: '<a href>Intenta hacerlo nuevamente</a>'
      })
     
    return false;
    }
    else if (declinacion.length<1 || declinacion.length>3 ){
      Swal.fire({
        icon: 'warning',
        title: 'Error en el ingreso de declinación anual...',
        text: 'Verifica que se encuentren bien para avanzar!',
        footer: '<a href>Intenta hacerlo nuevamente</a>'
      })
     
    return false;
    }
    else if (años.length<1 || años.length>3 ){
      Swal.fire({
        icon: 'warning',
        title: 'Error en el ingreso de años acumulados...',
        text: 'Verifica que se encuentren bien para avanzar!',
        footer: '<a href>Intenta hacerlo nuevamente</a>'
      })
     
    return false;
    }
   
    else if (team3.length<1 || años.length>2 ){
      Swal.fire({
        icon: 'warning',
        title: 'Error en el ingreso de personal de soporte...',
        text: 'Verifica que se encuentren bien para avanzar!',
        footer: '<a href>Intenta hacerlo nuevamente</a>'
      })
     
    return false;
    }

  else {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Los datos ingresados son correctos',
      text: 'Ahora puedes pulsar el boton enviar!',
      showConfirmButton: false,
      timer: 1500
     
    })
  }



    
}

