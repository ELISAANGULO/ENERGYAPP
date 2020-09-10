
// Sección de entrada

function getData()
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

    // console.log (pozos+" " + perfo + " "+ comple + " " + testing + " " + tie + " " + Drowback + " " + inicio + " " + fin + " " + gas + " " + crudo + " " + declinacion);
    // console.log (cemento + " " + team2 + " " + agua + " " + arena + " " + flowback);
    // console.log (team1+ " " + profundidad+ " " +cabezal);

    // var comple = 14;
    // var perfo = 7;
    // var testing = 14;
    // var Drowback = 3;
    // var tie = 7;
    // var pozos = 500;

    if(años === "")
    {
        años = 1;
        
    }

    inicio = parseFloat(inicio);
    fin = parseFloat(fin);
    visualizar = parseFloat(visualizar);
    pozos = parseFloat(pozos);
    perfo = parseFloat(perfo);
    comple = parseFloat(comple);
    testing = parseFloat(testing);
    tie = parseFloat(tie);
    Drowback = parseFloat(Drowback);
    gas = parseFloat(gas);
    crudo = parseFloat(crudo);
    declinacion = parseFloat(declinacion);
    cemento = parseFloat(cemento);
    team2 = parseFloat(team2);
    arena = parseFloat(arena);
    agua = parseFloat(agua);
    flowback = parseFloat(flowback);
    team1 = parseFloat(team1);
    profundidad = parseFloat(profundidad);
    cabezal = parseFloat(cabezal);
    años = parseFloat(años);
    team3 = parseFloat(team3);

    

    // ---------------------------------------------- Perforacion ----------------------------------------------
    // Numero de pozos de perforación
    // Variable que emplearemos en la formula equipos de perforacion
    var delta = 0;
    delta = perfo+comple+testing+tie+Drowback;
    
    // Formula de equipos de perforación

    var numerador = ( (pozos)*( perfo + Drowback ));
    var denominador = ( 365 - delta ) + ( perfo + Drowback );
    var equipos_perforacion = Math.ceil(numerador/denominador);
    

    // Cantidad de tuberías para operaciones
    var tuberias = Math.ceil((profundidad/45))*equipos_perforacion ;

    // ---------------------------------------------- Completamiento ----------------------------------------------
    // Equipos de completamiento
    var equipos_completamiento = (comple/perfo)*equipos_perforacion;
    // Cantidad de tuberías
    var cantidad_tubos = Math.ceil((profundidad/45))*pozos;
    // Cemento usado en toneladas
    var cemento_usado = (cemento*1.44)*pozos;
    // Camiones para cargar cemento capacidad de 38 toneladas
    var camiones_cemento = Math.ceil(((cemento*equipos_perforacion)/38));




    // ---------------------------------------------- Fracturamiento Hidraulico ----------------------------------------------
    // Retorno
    var retorno = flowback/agua;
    // Cantidad de agua total
    var agua_total = pozos*agua;
    // Cantidad de agua fresca
    var agua_fresca = (pozos*agua)/(1 + retorno);
    // Cantidad de agua  de retorno
    var agua_retorno = retorno*agua_fresca;
    // Cantidad de propante (Arena)
    var propante = arena*pozos;




    // ---------------------------------------------- Locación ----------------------------------------------
    // Tamaño del terreno
    var tamaño_terreno_toda_locacion = Math.pow(cabezal/1000, 2)*pozos;
    // Tandas
    var tandas = Math.ceil(pozos/equipos_perforacion);

    // Determinar si las tandas son pares o impares, para calcular vias
    if(tandas % 2 == 0)
    {
        //Pares 
        total_vias = Math.ceil((tandas/2)*(cabezal/1000)*equipos_perforacion);
    }
    else 
    {
        // Impares
        total_vias = Math.ceil(((tandas/2)+1)*(cabezal/1000)*equipos_perforacion);
    }

    // ---------------------------------------------- Logistica ----------------------------------------------
    var personal_perfo = team1*equipos_perforacion*años ;
    var personal_completamiento = team2*equipos_perforacion*años ;
    var personal_soporte = team3*equipos_perforacion*años ;


    //----------------------------------------------- Producción --------------------------------------------

    var arranque = Drowback+perfo ;


    //----------------------------------------------- Acumulado --------------------------------------------

    var años = visualizar-inicio ;








    // Mandamos el html al index para los datos de perforación
    // Perforación
    document.getElementById("resultados_perforacion").innerHTML = '<div class="card_d my-5"><div class="card_header" id="solperfo"><h3>Perforación <b>'+visualizar+'</b> </h3></div><div class="card_body"><p class="mb-0">Equipos de perforación: <span><b>'+equipos_perforacion+'</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de tuberías para operaciones [Segmentos de 45 ft]: <span><b>'+tuberias+'</b></span></p><h4 class="text-primary mt-4">Acumulado ------------------------------------------</h4><p class="mb-0">Equipos de perforación: <span><b>'+equipos_perforacion*años+'</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de tuberías para operaciones [Segmentos de 45 ft]: <span><b>'+tuberias*años+'</b></span></p></div></div>';
    // Completamiento
    document.getElementById("resultados_completamiento").innerHTML = '<div class="card_d my-5"><div class="card_header" id="solcomple"><h3>Completamiento <b>'+visualizar+'</b></h3></div><div class="card_body"><p class="mb-0">Equipos de completamiento: <span><b>'+equipos_completamiento+'</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de tubería para completar [Segmento de 45 ft]: <span><b>'+cantidad_tubos+'</b></span></p><hr class="my-2"><p class="mb-0">Cemento usado [ m<sup>3</sup> ]: <span><b>'+cemento_usado+'</b></span></p><hr class="my-2"><p class="mb-0">Camiones de cemento de 38 toneladas: <span><b>'+camiones_cemento+'</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de arena [Ton]: <span><b>'+propante+'</b></span></p><h4 class="text-primary mt-4">Acumulado ------------------------------------------</h4><p class="mb-0">Equipos de completamiento: <span><b>'+equipos_completamiento*años+'</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de tubería para completar [Segmento de 45 ft]: <span><b>'+cantidad_tubos*años+'</b></span></p><hr class="my-2"><p class="mb-0">Cemento usado [ m<sup>3</sup> ]: <span><b>'+cemento_usado*años+'</b></span></p><hr class="my-2"><p class="mb-0">Camiones de cemento de 38 toneladas: <span><b>'+camiones_cemento*años+'</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de arena [ton]: <span><b>'+propante*años+'</b></span></p></div></div>';
    // Fracturamiento
    document.getElementById("resultados_fracturamiento").innerHTML = '<div class="card_d my-5"><div class="card_header" id="solfrac"><h3>Fracturamiento <b>'+visualizar+'</b></h3></div><div class="card_body"><p class="mb-0">Cantidad de agua total consumida [ m<sup>3</sup> ]: <span><b>'+agua_total+'</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de agua fresca requerida [ m<sup>3</sup> ]: <span><b>'+agua_fresca+'</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de agua de retorno reciclada [ m<sup>3</sup> ]: <span><b>'+agua_retorno+'</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de propante [Ton]: <span><b>'+propante+'</b></span></p><h4 class="text-primary mt-4">Acumulado ------------------------------------------</h4><p class="mb-0">Cantidad de agua total consumida [ m<sup>3</sup> ]: <span><b>'+agua_total*años+'</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de agua fresca requerida [ m<sup>3</sup> ]: <span><b>'+agua_fresca*años+'</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de agua de retorno reciclada [ m<sup>3</sup> ]: <span><b>'+agua_retorno*años+'</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de propante [Ton]: <span><b>'+propante*años+'</b></span></p></div></div>';
    // Tabla fracturamiento
    document.getElementById("tabla_drawback").innerHTML = '<table class="table"><caption>Quimicos para tratar el Flowback</caption><thead><tr><th scope="col">Additive</th><th scope="col">Function</th><th scope="col">Household use</th></thead><tbody><tr><th scope="row">Acids</th><td>It helps dissolve minerals in the source rock </td><td>Swimming pool cleaner </td></tr><tr><th scope="row">Glutaraldehyde</th><td>Eliminates bacteria in the water</td><td>Disinfectant used by dentists</td></tr><tr><th scope="row">Sodium chloride</th><td>Delays the degradation of the polymer chains </td><td>Table salt </td></tr><tr><th scope="row">N-Dimethyl</th><td>Prevents corrosion in tubing</td><td>Pharmaceuticals and plastics </td></tr><tr><th scope="row">Borate salts</th><td>Maintains fluid viscosity </td><td>Bath soap and cosmetics</td></tr><tr><th scope="row">Distillates</th><td>Reduces friction in water </td><td>Cleanser, laxatives, candy</td></tr><tr><th scope="row">Guar Gum</th><td>Water thickener prevents sand precipitation</td><td>Cosmetics. Ice cream, toothpaste, dressings</td></tr><tr><th scope="row">Citric acid</th><td>Prevents precipitation of metal oxides </td><td>Food additives, juices, etc. </td></tr><tr><th scope="row">Potassium chloride</th><td>Brine which improves the circulation of fluids</td><td>Light table salt</td></tr><tr><th scope="row">Potassium carbonate</th><td>Maintains effectiveness of other compounds</td><td>Soaps, glass, ceramics </td></tr><tr><th scope="row">Glycol</th><td>Avoids depositions in pipes</td><td>Household cleaners, putty</td></tr><tr><th scope="row">Isopropanel</th><td>Used to increase the viscosity of injection fluids </td><td>Window cleaners, anti-transpirants </td></tr></tbody></table>';
    // Locación
    document.getElementById("resultados_locacion").innerHTML = '<div class="card_d my-5"><div class="card_header" id="solloc"><h3>Locación <b>'+visualizar+'</b></h3></div><div class="card_body"><p class="mb-0">Tamaño del terreno [ km<sup>2</sup> ]: <span><b>'+tamaño_terreno_toda_locacion+'</b></span> </p><hr class="my-2"><p class="mb-0">Extención de vías principales [ km ]: <span><b>'+total_vias+'</b></span> </p><hr class="my-2"><p class="mb-0">Extención de vías de conexión [ km ]: <span><b>'+pozos+'</b></span> </p><h4 class="text-primary mt-4">Acumulado ------------------------------------------</h4><p class="mb-0">Tamaño del terreno [ km<sup>2</sup> ]: <span><b>'+tamaño_terreno_toda_locacion*años+'</b></span> </p><hr class="my-2"><p class="mb-0">Extención de vías principales [ km ]: <span><b>'+total_vias*años+'</b></span> </p><hr class="my-2"><p class="mb-0">Extención de vías de conexión [ km ]: <span><b>'+pozos*años+'</b></span> </p></div></div>';
    // Personal
    document.getElementById("resultados_logistica").innerHTML = '<div class="card_d my-5"><div class="card_header" id="solper"><h3>Personal <b>'+visualizar+'</b></h3></div><div class="card_body"><p class="mb-0">Personal perforación total: <span><b>'+personal_perfo+'</b></span> </p><hr class="my-2"><p class="mb-0">Personal de completamiento total: <span><b>'+personal_completamiento+'</b></span></p><hr class="my-2"><p class="mb-0">Personal de soporte total: <span><b>'+personal_soporte+'</b></span> </p></div></div>';
    // Tabla personal
    document.getElementById("tabla_logistica").style.display = "block";
    // Producción
    document.getElementById("produccion").innerHTML = '<h1 class="text-primary mt-5"> Producción </h1> <P>En esta sección ustedes podrán encontrar la producción de petroleo y gas para el proyecto en especifico para cada uno de los años de perforación.</P> <a href="https://bit.ly/3cHVQpT" class="btn mb-5" style="background-color: #7c2307; color: white;" target="_blank">Haga click para ver la producción</a>' ;
    // Obtener un archivo en PDF
    document.getElementById("PDF").innerHTML = '<div class="clearfix col-12"> <button class="btn btn-dark px-5 float-md-right mt-3"><a href="javascript:genPDF()">Download PDF</a></button></div>' ;

    

    
  


}



// Tabs
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
} 

// ------------------------------- TEST -------------------------------
// equipos_perforacion = 5;
// tuberias = 10;
// tandas_perforacion = 15;

// equipos_completamiento = 55;
// cantidad_tubos = 55;
// cemento_usado = 55;
// camiones_cemento = 55;
// propante = 55;

// agua_total = 20;
// agua_fresca = 20;
// agua_retorno = 20;

// tamaño_terreno_toda_locacion = 30;
// total_vias = 30;
// pozos = 30;

var test = function()
{
    // var comple = 14;
    // var perfo = 7;
    // var testing = 14;
    // var Drowback = 3;
    // var tie = 7;
    // var pozos = 500;
    // var delta = perfo + comple + testing + tie + Drowback;
    
    // var numerador = ( pozos*( perfo + Drowback ));
    // var denominador = ( 365 - delta ) + ( perfo + Drowback );
    // var equipos_perforacion = Math.ceil(numerador/denominador);
    // alert(equipos_perforacion);
    // Perforación
    // document.getElementById("resultados_perforacion").innerHTML = '<div class="card_d my-5"><div class="card_header"><h3>Perforación</h3></div><div class="card_body"><p class="mb-0">Equipos de perforación: <span><b>'+equipos_perforacion+'</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de tuberías para operaciones: <span><b>'+tuberias+'</b></span></p></div></div>';
    // Completamiento
    // document.getElementById("resultados_completamiento").innerHTML = '<div class="card_d my-5"><div class="card_header"><h3>Completamiento</h3></div><div class="card_body"><p class="mb-0">Equipos de completamiento: <span><b>'+equipos_completamiento+'</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de tubos: <span><b>'+cantidad_tubos+'</b></span></p><hr class="my-2"><p class="mb-0">Cemento usado: <span><b>'+cemento_usado+'</b></span></p><hr class="my-2"><p class="mb-0">Camiones de cemento de 38 toneladas: <span><b>'+camiones_cemento+'</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de arena: <span><b>'+propante+'</b></span></p></div></div>';
    // Fracturamiento
    // document.getElementById("resultados_fracturamiento").innerHTML = '<div class="card_d my-5"><div class="card_header"><h3>Fracturamiento</h3></div><div class="card_body"><p class="mb-0">Cantidad de agua total: <span><b>'+agua_total+'</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de agua fresca: <span><b>'+agua_fresca+'</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de agua de retorno: <span><b>'+agua_retorno+'</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de propante: <span><b>'+propante+'</b></span></p></div></div>';
    // Locación
    // document.getElementById("resultados_locacion").innerHTML = '<div class="card_d my-5"><div class="card_header"><h3>Locación</h3></div><div class="card_body"><p class="mb-0">Tamaño del terreno: <span><b>'+tamaño_terreno_toda_locacion+'</b></span> [ km<sup>2</sup> ]</p><hr class="my-2"><p class="mb-0">Total de vías principales: <span><b>'+total_vias+'</b></span> [ km ]</p><hr class="my-2"><p class="mb-0">Total de vías de conexión: <span><b>'+pozos+'</b></span> [ km ]</p></div></div>';


}