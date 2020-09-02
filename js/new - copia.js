// Sección de entrada
var pgl = "pgl";
var inicio;
var fin;
var visualizar;
var pozos;
var perfo;
var comple;
var testing;
var tie;
var Drowbackvalue;
var gas;
var crudo;
var declinacion;
var cemento;
var team2;
var arena;
var agua;
var flowbackvalue;
var team1;
var profundidad;
var cabezal;
var team3;
var delta;
var equipos_perforacion;
var tandas;
var años;
var añosTotales;
var arranque;
var declinaciondia;
var rango;
var diastotales;
var dd;
var pp;
var gg;
var eco;
var ecogas;
var ff;
var preciodelgas;
var preciodelcrudo;
var totalsuma;
var preciogas;
var preciocrudo;
var sumaeco;


function getData() {
  inicio = document.getElementById("inicio").value;
  fin = document.getElementById("fin").value;
  visualizar = document.getElementById("visualizar").value;
  pozos = document.getElementById("pozos").value;
  perfo = document.getElementById("perfo").value;
  comple = document.getElementById("comple").value;
  testing = document.getElementById("testing").value;
  tie = document.getElementById("tie").value;
  Drowback = document.getElementById("Drowback").value;
  gas = document.getElementById("gas").value;
  crudo = document.getElementById("crudo").value;
  declinacion = document.getElementById("declinacion").value;
  cemento = document.getElementById("cemento").value;
  team2 = document.getElementById("team2").value;
  arena = document.getElementById("arena").value;
  agua = document.getElementById("agua").value;
  flowback = document.getElementById("flowback").value;
  team1 = document.getElementById("team1").value;
  profundidad = document.getElementById("profundidad").value;
  cabezal = document.getElementById("cabezal").value;
  team3 = document.getElementById("team3").value;
  preciodelgas = document.getElementById("team3").value;
  preciodelgas = document.getElementById("preciodelgas").value;
  preciodelcrudo = document.getElementById("preciodelcrudo").value;


  

  // console.log (pozos+" " + perfo + " "+ comple + " " + testing + " " + tie + " " + Drowback + " " + inicio + " " + fin + " " + gas + " " + crudo + " " + declinacion);
  // console.log (cemento + " " + team2 + " " + agua + " " + arena + " " + flowback);
  // console.log (team1+ " " + profundidad+ " " +cabezal);

  // var comple = 14;
  // var perfo = 7;
  // var testing = 14;
  // var Drowback = 3;
  // var tie = 7;
  // var pozos = 500;

  if (años === "") {
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
  delta = 0;
  delta = perfo + comple + testing + tie + Drowback;

  // Formula de equipos de perforación

  var numerador = pozos * (perfo + Drowback);
  var denominador = 365 - delta + (perfo + Drowback);
  equipos_perforacion = Math.ceil(numerador / denominador);

  // Cantidad de tuberías para operaciones
  var tuberias = Math.ceil(profundidad / 45) * equipos_perforacion;

  // ---------------------------------------------- Completamiento ----------------------------------------------
  // Equipos de completamiento
  var equipos_completamiento = (comple / perfo) * equipos_perforacion;
  // Cantidad de tuberías
  var cantidad_tubos = Math.ceil(profundidad / 45) * pozos;
  // Cemento usado en toneladas
  var cemento_usado = cemento * 1.44 * pozos;
  // Camiones para cargar cemento capacidad de 38 toneladas
  var camiones_cemento = Math.ceil((cemento * equipos_perforacion) / 38);

  // ---------------------------------------------- Fracturamiento Hidraulico ----------------------------------------------
  // Retorno
  var retorno = flowback / agua;
  // Cantidad de agua total
  var agua_total = pozos * agua;
  // Cantidad de agua fresca
  var agua_fresca = (pozos * agua) / (1 + retorno);
  // Cantidad de agua  de retorno
  var agua_retorno = retorno * agua_fresca;
  // Cantidad de propante (Arena)
  var propante = arena * pozos;

  // ---------------------------------------------- Locación ----------------------------------------------
  // Tamaño del terreno
  var tamaño_terreno_toda_locacion = Math.pow(cabezal / 1000, 2) * pozos;
  // Tandas
  tandas = Math.ceil(pozos / equipos_perforacion);

  // Determinar si las tandas son pares o impares, para calcular vias
  if (tandas % 2 == 0) {
    //Pares
    total_vias = Math.ceil(
      (tandas / 2) * (cabezal / 1000) * equipos_perforacion
    );
  } else {
    // Impares
    total_vias = Math.ceil(
      (tandas / 2 + 1) * (cabezal / 1000) * equipos_perforacion
    );
  }

  // ---------------------------------------------- Logistica ----------------------------------------------
  var personal_perfo = team1 * equipos_perforacion * años;
  var personal_completamiento = team2 * equipos_perforacion * años;
  var personal_soporte = team3 * equipos_perforacion * años;

  //----------------------------------------------- Acumulado --------------------------------------------

  años = visualizar - inicio;
  añosTotales = fin - inicio;

  //----------------------------------------------- Producción --------------------------------------------

  arranque = Drowback + perfo;
  declinaciondia = declinacion / 365;
  console.log(declinaciondia);

  rango = fin - inicio + 1;
  diastotales = rango * 365;

  // Mandamos el html al index para los datos de perforación
  // Perforación
  document.getElementById("resultados_perforacion").innerHTML =
    '<div class="card_d my-5"><div class="card_header" id="solperfo"><h3>Perforación <b>' +
    visualizar +
    '</b> </h3></div><div class="card_body"><p class="mb-0">Equipos de perforación: <span><b>' +
    equipos_perforacion +
    '</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de tuberías para operaciones [Segmentos de 45 ft]: <span><b>' +
    tuberias +
    '</b></span></p><h4 class="text-primary mt-4">Acumulado ------------------------------------------</h4><p class="mb-0">Equipos de perforación: <span><b>' +
    equipos_perforacion * años +
    '</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de tuberías para operaciones [Segmentos de 45 ft]: <span><b>' +
    tuberias * años +
    "</b></span></p></div></div>";
  // Completamiento
  document.getElementById("resultados_completamiento").innerHTML =
    '<div class="card_d my-5"><div class="card_header" id="solcomple"><h3>Completamiento <b>' +
    visualizar +
    '</b></h3></div><div class="card_body"><p class="mb-0">Equipos de completamiento: <span><b>' +
    equipos_completamiento +
    '</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de tubería para completar [Segmento de 45 ft]: <span><b>' +
    cantidad_tubos +
    '</b></span></p><hr class="my-2"><p class="mb-0">Cemento usado [ m<sup>3</sup> ]: <span><b>' +
    cemento_usado +
    '</b></span></p><hr class="my-2"><p class="mb-0">Camiones de cemento de 38 toneladas: <span><b>' +
    camiones_cemento +
    '</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de arena [Ton]: <span><b>' +
    propante +
    '</b></span></p><h4 class="text-primary mt-4">Acumulado ------------------------------------------</h4><p class="mb-0">Equipos de completamiento: <span><b>' +
    equipos_completamiento * años +
    '</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de tubería para completar [Segmento de 45 ft]: <span><b>' +
    cantidad_tubos * años +
    '</b></span></p><hr class="my-2"><p class="mb-0">Cemento usado [ m<sup>3</sup> ]: <span><b>' +
    cemento_usado * años +
    '</b></span></p><hr class="my-2"><p class="mb-0">Camiones de cemento de 38 toneladas: <span><b>' +
    camiones_cemento * años +
    '</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de arena [ton]: <span><b>' +
    propante * años +
    "</b></span></p></div></div>";
  // Fracturamiento
  document.getElementById("resultados_fracturamiento").innerHTML =
    '<div class="card_d my-5"><div class="card_header" id="solfrac"><h3>Fracturamiento <b>' +
    visualizar +
    '</b></h3></div><div class="card_body"><p class="mb-0">Cantidad de agua total consumida [ m<sup>3</sup> ]: <span><b>' +
    agua_total +
    '</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de agua fresca requerida [ m<sup>3</sup> ]: <span><b>' +
    agua_fresca +
    '</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de agua de retorno reciclada [ m<sup>3</sup> ]: <span><b>' +
    agua_retorno +
    '</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de propante [Ton]: <span><b>' +
    propante +
    '</b></span></p><h4 class="text-primary mt-4">Acumulado ------------------------------------------</h4><p class="mb-0">Cantidad de agua total consumida [ m<sup>3</sup> ]: <span><b>' +
    agua_total * años +
    '</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de agua fresca requerida [ m<sup>3</sup> ]: <span><b>' +
    agua_fresca * años +
    '</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de agua de retorno reciclada [ m<sup>3</sup> ]: <span><b>' +
    agua_retorno * años +
    '</b></span></p><hr class="my-2"><p class="mb-0">Cantidad de propante [Ton]: <span><b>' +
    propante * años +
    "</b></span></p></div></div>";
  // Tabla fracturamiento
  document.getElementById("tabla_drawback").innerHTML =
    '<table class="table"><caption>Quimicos para tratar el Flowback</caption><thead><tr><th scope="col">Additive</th><th scope="col">Function</th><th scope="col">Household use</th></thead><tbody><tr><th scope="row">Acids</th><td>It helps dissolve minerals in the source rock </td><td>Swimming pool cleaner </td></tr><tr><th scope="row">Glutaraldehyde</th><td>Eliminates bacteria in the water</td><td>Disinfectant used by dentists</td></tr><tr><th scope="row">Sodium chloride</th><td>Delays the degradation of the polymer chains </td><td>Table salt </td></tr><tr><th scope="row">N-Dimethyl</th><td>Prevents corrosion in tubing</td><td>Pharmaceuticals and plastics </td></tr><tr><th scope="row">Borate salts</th><td>Maintains fluid viscosity </td><td>Bath soap and cosmetics</td></tr><tr><th scope="row">Distillates</th><td>Reduces friction in water </td><td>Cleanser, laxatives, candy</td></tr><tr><th scope="row">Guar Gum</th><td>Water thickener prevents sand precipitation</td><td>Cosmetics. Ice cream, toothpaste, dressings</td></tr><tr><th scope="row">Citric acid</th><td>Prevents precipitation of metal oxides </td><td>Food additives, juices, etc. </td></tr><tr><th scope="row">Potassium chloride</th><td>Brine which improves the circulation of fluids</td><td>Light table salt</td></tr><tr><th scope="row">Potassium carbonate</th><td>Maintains effectiveness of other compounds</td><td>Soaps, glass, ceramics </td></tr><tr><th scope="row">Glycol</th><td>Avoids depositions in pipes</td><td>Household cleaners, putty</td></tr><tr><th scope="row">Isopropanel</th><td>Used to increase the viscosity of injection fluids </td><td>Window cleaners, anti-transpirants </td></tr></tbody></table>';
  // Locación
  document.getElementById("resultados_locacion").innerHTML =
    '<div class="card_d my-5"><div class="card_header" id="solloc"><h3>Locación <b>' +
    visualizar +
    '</b></h3></div><div class="card_body"><p class="mb-0">Tamaño del terreno [ km<sup>2</sup> ]: <span><b>' +
    tamaño_terreno_toda_locacion +
    '</b></span> </p><hr class="my-2"><p class="mb-0">Extención de vías principales [ km ]: <span><b>' +
    total_vias +
    '</b></span> </p><hr class="my-2"><p class="mb-0">Extención de vías de conexión [ km ]: <span><b>' +
    pozos +
    '</b></span> </p><h4 class="text-primary mt-4">Acumulado ------------------------------------------</h4><p class="mb-0">Tamaño del terreno [ km<sup>2</sup> ]: <span><b>' +
    tamaño_terreno_toda_locacion * años +
    '</b></span> </p><hr class="my-2"><p class="mb-0">Extención de vías principales [ km ]: <span><b>' +
    total_vias * años +
    '</b></span> </p><hr class="my-2"><p class="mb-0">Extención de vías de conexión [ km ]: <span><b>' +
    pozos * años +
    "</b></span> </p></div></div>";
  // Personal
  document.getElementById("resultados_logistica").innerHTML =
    '<div class="card_d my-5"><div class="card_header" id="solper"><h3>Personal <b>' +
    visualizar +
    '</b></h3></div><div class="card_body"><p class="mb-0">Personal perforación total: <span><b>' +
    personal_perfo +
    '</b></span> </p><hr class="my-2"><p class="mb-0">Personal de completamiento total: <span><b>' +
    personal_completamiento +
    '</b></span></p><hr class="my-2"><p class="mb-0">Personal de soporte total: <span><b>' +
    personal_soporte +
    "</b></span> </p></div></div>";
  // Tabla personal
  document.getElementById("tabla_logistica").style.display = "block";
  // Producción
  document.getElementById("produccion").innerHTML =
    '<h1 class="text-primary mt-5"> Producción </h1> <P>En esta sección ustedes podrán encontrar la producción de petroleo y gas para el proyecto en especifico para cada uno de los años de perforación.</P> <button type="button"  id="btngas"value="Enviar" class="btn btn-dark px-5 float-md-left mt-3">Haga click para ver la producción de gas</button > <br> <br> <button type="button"  id="btncrudo"value="Enviar" class="btn btn-dark px-5 float-md-left mt-3">Haga click para ver la producción de crudo</button > <br> <br>';
  // Obtener un archivo en PDF
  document.getElementById("PDF").innerHTML =
    '<div class="clearfix col-12"> <button class="btn btn-dark px-5 float-md-right mt-3"><a href="javascript:genPDF()">Download PDF</a></button></div>';

  //hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
  //PARTE DE PRODUCCION ;

  document.getElementById("btngas").addEventListener("click", (e) => {
    //console.log("hizo algo bien");

    div = document.getElementById("produccion_");
    div.innerHTML = `
    <div class="containes">
    
    <p><h2 class="text-center" style="color:#7c2307">Producción</h2></p>
    <p><h2 class="text-center" style="color:#7c2307">Gas</h2></p>
</div>

<div class="container">
  <div class="row">
    <div class="col">
      
      <h2 class="text-center" style="color:#7c2307">Producción individual Gas</h2>
      <form action="#" id="visualizar3">
        <div class="form-group">
          <label for="anio">Año:</label>
          <select class="form-control" id="anio"> </select>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-outline-info btn-lg btn-block">
            Visualizar
          </button>
        </div>
      </form>
      <div class="container" id='canvas1' >
        <canvas id="individual" width="600" height="400"></canvas>
      </div>  
     
    </div>
    <div class="col">
      <h2 class="text-center" style="color:#7c2307">Producción Acumulada Gas</h2>
      <form action="#" id="visualizar2">
        <div class="form-group">
          <label for="anio2">Año:</label>
          <select class="form-control" id="anio2"> </select>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-outline-info btn-lg btn-block">
            Visualizar
          </button>
        </div>
      </form>
      <div class="container" id='canvas2' >
        <canvas id="acumulado" width="600" height="400"></canvas>
      </div> 
    </div> 
    <div class="w-100">
      <h2 class="text-center" style="color:#7c2307">Producción Total Gas</h2>
      <div class="col"><canvas id="total" width="600" height="400"></canvas></div>
    </div>

    <div class="container" id='mostar_total_años'>
    <div >
     <h2 class="text-center" style="color:#7c2307">Ingresos por gas</h2>
     <div class="col"><canvas id="economicosgas" ></canvas>
    </div>
  

     
   <div class="col-sm">
     
       
     <p></p>
     <p></p>

   </div>  
   </div>
   <div class=" w3-padding-48"></div>   
 </form>
   <div class="col-sm">
     <p></p>
     <h2 class="text-center" id='div_mostrar_valor'>
       
     </h2>

 
        </div>
      </div>
    </div>
  
  
  

 
</div>
    
    
    
    
    
    
    `;

    function calProud(
      diaria,
      proInicial,
      dias,
      taladros,
      cantidadPozos,
      arranque,
      delta
    ) {
      var tandas = Math.ceil(cantidadPozos / taladros);
      let prodDiaria = new Array(tandas);
      //let corrimiento = 0;
      for (let i = 1; i <= tandas; i++) {
        let prodTanda = new Array(dias);
        proInicialtmp = proInicial;
        for (let dia = delta; dia <= dias; dia++) {
          prodxDia = proInicialtmp * taladros;
          prodTanda[dia] = prodxDia;
          proInicialtmp -= proInicialtmp * diaria;
        }
        prodDiaria[i] = prodTanda;
        delta = delta + arranque;
        if (i === tandas - 1) {
          let n = cantidadPozos / taladros;
          let decimal = n - Math.floor(n);
          taladros = taladros * decimal;
        }
      }
      return prodDiaria;
    }

    dd = calProud(
      0.00019178083,
      gas,
      diastotales,
      equipos_perforacion,
      pozos,
      arranque,
      delta
    ); //// cambiar valores
    console.log(dd);

    //parte de la suma diaria

    //pp = calProdAnuInd(dd, 45, 15, 32, 10);
    //console.log(pp);

    //parte de la suma diaria 2

    function calProdAnuInd2(prodDiaria, delta, años, tandas, arranque) {
      let prodAnualIndv = new Array(años);

      let fin;
      fin = 365;
      for (let año = 1; año <= años; año++) {
        let prodt = [];
        let y = 1;

        for (let tanda = 1; tanda <= tandas; tanda++) {
          let suma;
          suma = 0;

          // console.log(delta);
          // console.log(fin);
          // console.log(tanda);

          for (let dia = delta; dia <= fin; dia++) {
            //console.log(prodDiaria[tanda][dia]);
            if (año == 15) {
              //console.log(dia);
              //console.log(fin);
              //console.log(tanda);
              //console.log(prodDiaria[tanda][dia]);
            }
            suma += prodDiaria[tanda][dia];
          }
          //  console.log(suma);
          prodt[y] = suma;
          y += 1;
          if (año === 1) {
            delta += arranque;
          }
        }

        delta = fin + 1;
        fin += 365;

        prodAnualIndv[año] = prodt;
      }
      return prodAnualIndv;
    }

    pp = calProdAnuInd2(dd, delta, rango, tandas, arranque); //// cambiar valores
    console.log(pp);

    function sumIndv(prodAnualIndv, tandas, años) {
      let sum = [];
      for (let año = 1; año <= años; año++) {
        let suma;
        suma = 0;
        for (let i = 1; i <= tandas; i++) {
          suma += prodAnualIndv[año][i];
          //console.log(suma);
        }
        sum[año] = suma;
      }

      return sum;
    }

    ff = sumIndv(pp, tandas, rango); //// cambiar valores
    console.log(ff);

    function calProdAnualAcumu(sumIndvAños) {
      let prodAñosAcumulada = [];
      let suma;
      prodAñosAcumulada[1] = sumIndvAños[1];
      for (let dia = 2; dia < sumIndvAños.length; dia++) {
        suma = 0;
        suma = prodAñosAcumulada[dia - 1] + sumIndvAños[dia];
        prodAñosAcumulada[dia] = suma;
      }
      return prodAñosAcumulada;
    }

    gg = calProdAnualAcumu(ff);
 
    console.log(gg);

    ecogas = [];
    for (let g = 0; g < rango; g++) {
      //// cambiar valores (los años)
      ecogas[g] = gg[g+1]  * 1.037 * preciodelgas ;
    }
    console.log(ecogas);



    

    function acumAño(año, prodAñosAcumulada) {
      let acum = 0;
      for (let index = año; index >= 1; index--) {
        acum += prodAñosAcumulada[index];
      }
      return acum;
    }

    //para la suma de los acumulados totales de todos los años

    sum = acumAño(rango, gg);
    console.log(sum);
    totalsuma = [];
    for (let g = 0; g < rango; g++) {
      //// cambiar valores (los años)
      totalsuma[g] = acumAño(g + 1, gg);
    }
    console.log(totalsuma);

    //#######################GRAFICAS#######################################################

    //individual

    const selecAnios = document.getElementById("anio");
    var f = 0;
    for (let i = 1; i <= rango; i++) {
      //// cambiar valores
      let option = document.createElement("option");
      option.value = i;
      option.innerHTML = inicio + f; //// cambiar valores
      f += 1;
      selecAnios.appendChild(option);
    }

    const formulario = document.getElementById("visualizar3");
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();

      var contenedor = document.getElementById("canvas1");
      contenedor.innerHTML = " ";
      contenedor.innerHTML = `

      <canvas id="individual" width="600" height="400"></canvas>

      `;

      //leer el año seleccionado del <select>
      const anio = document.getElementById("anio");
      const anioSeleccionado = anio.options[anio.selectedIndex].value;
      const anioMotrar =
        inicio + parseInt(anio.options[anio.selectedIndex].value) - 1; //// cambiar valores

      //individual

      var etiquetas = function (inicio, fin) {
        let etiquetas = [];
        let años = fin - inicio;
        for (let index = 0; index <= años; index++) {
          etiquetas[index] = inicio + index;
        }
        return etiquetas;
      };

      function años(inicio, vector) {
        var años = [];
        if (inicio == 1) {
          for (let index = inicio; index < vector.length; index++) {
            años[index - 1] = vector[index];
          }
        } else if (inicio == 2) {
          for (let index = 1; index < vector.length; index++) {
            años[index] = vector[index];
          }
        } else {
          let corrimiento = inicio - 2;
          for (let index = corrimiento; index < vector.length; index++) {
            años[index] = vector[index - corrimiento];
          }
        }

        return años;
      }

      var etiquetas = etiquetas(inicio, fin); //// cambiar valores
      //var años = años(anioSeleccionado, ff);
      Chart.defaults.global.defaultFontFamily = "Lato";
      Chart.defaults.global.defaultFontSize = 18;

      const densityData = {
        label: "Producción anual individual",
        data: años(anioSeleccionado, ff),

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      };

      var densityCanvas = document.getElementById("individual");

      const barChart = new Chart(densityCanvas, {
        type: "bar",
        data: {
          labels: etiquetas,
          datasets: [densityData],
        },
        options: {
          title: {
            display: true,
            text: `Pozos perforados en ${anioMotrar}`,
          },
          legend: {
            display: false,
            position: "bottom",
            labels: {
              fontColor: "#000080",
            },
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Produccion",
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Años",
                },
              },
            ],
          },
        },
      });
    });

    //acumulada

    const selecAnios2 = document.getElementById("anio2");
    var f = 0;
    for (let i = 1; i <= rango; i++) {
      //// cambiar valores el 15 por los años
      let option = document.createElement("option");
      option.value = i;
      option.innerHTML = inicio + f; //// cambiar valores año de incio 2025 por el incio
      f += 1;
      selecAnios2.appendChild(option);
    }

    const formulario2 = document.getElementById("visualizar2");
    formulario2.addEventListener("submit", function (e) {
      e.preventDefault();

      var contenedor = document.getElementById("canvas2");
      contenedor.innerHTML = " ";
      contenedor.innerHTML = `
  
      <canvas id="acumulado" width="600" height="400"></canvas>
  
      `;

      //leer el año seleccionado del <select>
      const anio = document.getElementById("anio2");
      const anioSeleccionado = anio.options[anio.selectedIndex].value;
      const anioMotrar =
        inicio + parseInt(anio.options[anio.selectedIndex].value) - 1; //// cambiar valores
      //acumulado

      var etiquetas = function (inicio, fin) {
        let etiquetas = [];
        let años = fin - inicio;
        for (let index = 0; index <= años; index++) {
          etiquetas[index] = inicio + index;
        }
        return etiquetas;
      };

      function años(inicio, vector) {
        var años = [];
        if (inicio == 1) {
          for (let index = inicio; index < vector.length; index++) {
            años[index - 1] = vector[index];
          }
        } else if (inicio == 2) {
          for (let index = 1; index < vector.length; index++) {
            años[index] = vector[index];
          }
        } else {
          let corrimiento = inicio - 2;
          for (let index = corrimiento; index < vector.length; index++) {
            años[index] = vector[index - corrimiento];
          }
        }

        return años;
      }

      var etiquetas = etiquetas(inicio, fin); //// cambiar valores
      //var años = años(anioSeleccionado, ff);
      Chart.defaults.global.defaultFontFamily = "Lato";
      Chart.defaults.global.defaultFontSize = 18;

      const densityData = {
        label: "Producción anual acumulada",
        data: años(anioSeleccionado, gg),

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      };

      var densityCanvas = document.getElementById("acumulado");

      const barChart = new Chart(densityCanvas, {
        type: "bar",
        data: {
          labels: etiquetas,
          datasets: [densityData],
        },
        options: {
          title: {
            display: true,
            text: `Pozos perforados en ${anioMotrar}`,
          },
          hover: false,
          tooltips: {
            mode: "nearest",
          },
          intersect: false,
          legend: {
            display: false,
            position: "bottom",
            labels: {
              fontColor: "#000080",
            },
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Produccion",
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Años",
                },
              },
            ],
          },
        },
      });
    });

    //acumulada totdal
    var speedCanvas = document.getElementById("total");

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;

    var etiquetas = function (inicio, fin) {
      let etiquetas = [];
      let años = fin - inicio;
      for (let index = 0; index <= años; index++) {
        etiquetas[index] = inicio + index;
      }
      return etiquetas;
    };
    var etiquetas = etiquetas(inicio, fin); //// cambiar valores
    var speedData = {
      labels: etiquetas,
      datasets: [
        {
          label: "Produccion acumulada de todos los pozos",
          data: totalsuma,
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          borderColor: "rgba(255, 206, 86, 1)",
        },
      ],
    };

    var chartOptions = {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 80,
          fontColor: "black",
        },
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Produccion",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Años",
            },
          },
        ],
      },
    };

    var lineChart = new Chart(speedCanvas, {
      type: "line",
      data: speedData,
      options: chartOptions,
    });

    // ECONOMICOS PROYECTO GAS

    
    var speedCanvas = document.getElementById("economicosgas");

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;

    var etiquetas = function (inicio, fin) {
      let etiquetas = [];
      let años = fin - inicio;
      for (let index = 0; index <= años; index++) {
        etiquetas[index] = inicio + index;
      }
      return etiquetas;
    };

    var etiquetas = etiquetas(inicio, fin);
    var speedData = {
      labels: etiquetas, 

      datasets: [
        {
          label: "Análisis económico de la producción de gas",
          data: ecogas, 
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
         
        },
      ],
    };

    var chartOptions = {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 80,
          fontColor: "black",
        },
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "USD/BBL",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Años",
            },
          },
        ],
      },
    };
  


    var lineChart = new Chart(speedCanvas, {
      type: "line",
      data: speedData,
      options: chartOptions,
    });

   
    const selecAnios3 = document.getElementById("anio3");
    var f = 0;
    for (let i = 1; i <= rango; i++) {
      //// cambiar valores el 15 por los años
      let option = document.createElement("option");
      option.value = i;
      option.innerHTML = inicio + f; //// cambiar valores año de incio 2025 por el incio
      f += 1;
      selecAnios3.appendChild(option);
    }

    const mostrarAño = document.getElementById("ver_años");
    mostrarAño.addEventListener("submit", (e) => {
      e.preventDefault();

      let valor;
      const anio3 = document.getElementById("anio3");
      const anioSeleccionado = anio3.options[anio3.selectedIndex].value;
      valor = gg[anioSeleccionado] * preciogas;
      console.log(valor);
      const div = document.getElementById("div_mostrar_valor");
      div.innerHTML = `${valor}`;
    });
  });

  //##################################################################

  document.getElementById("btncrudo").addEventListener("click", (e) => {
    //console.log("hizo algo bien");
    div = document.getElementById("produccion_");
    div.innerHTML = `
    <div class="containes">
    
    <p><h2 class="text-center" style="color:#7c2307">Producción</h2></p>
    <p><h2 class="text-center" style="color:#7c2307">Crudo</h2></p>
</div>

<div class="container">
  <div class="row">
    <div class="col">
      
      <h2 class="text-center" style="color:#7c2307">Producción individual Crudo</h2>
      <form action="#" id="visualizar3">
        <div class="form-group">
          <label for="anio">Año:</label>
          <select class="form-control" id="anio"> </select>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-outline-info btn-lg btn-block">
            Visualizar
          </button>
        </div>
      </form>
      <div class="container" id='canvas1' >
        <canvas id="individual" width="600" height="400"></canvas>
      </div>  
     
    </div>
    <div class="col">
      <h2 class="text-center" style="color:#7c2307">Producción Acumulada Crudo</h2>
      <form action="#" id="visualizar2">
        <div class="form-group">
          <label for="anio2">Año:</label>
          <select class="form-control" id="anio2"> </select>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-outline-info btn-lg btn-block">
            Visalizar
          </button>
        </div>
      </form>
      <div class="container" id='canvas2' >
        <canvas id="acumulado" width="600" height="400"></canvas>
      </div> 
    </div> 
    <div class="w-100">
    <h2 class="text-center" style="color:#7c2307">Producción Total Crudo</h2>
    <div class="col"><canvas id="total" width="600" height="400"></canvas></div>

  </div>

    <div class="container" id='mostar_total_años'>
       <div >
        <h2 class="text-center" style="color:#7c2307">ANÁLISIS ECONÓMICO</h2>
        <div class="col"><canvas id="economicoscrudo" ></canvas>
       </div>

       <div >
        <h2 class="text-center" style="color:#7c2307">ANÁLISIS ECONÓMICO</h2>
        <div class="col"><canvas id="economicostotales" ></canvas>
       </div>

      </form>
    </div>
    <div class="center">
      <div class="col-sm">
         <form action="#" id="ver_años">
          <div class="form-group">
            <label for="anio">Año:</label>
            <select class="form-control" id="anio3"> </select>
          </div>
          <div class="form-group">
          <button type="submit" class="btn btn-outline-info btn-lg btn-block">
            Ver
          </button>
    </div>
        
        
      <div class="col-sm">
        
          
        <p></p>
        <p></p>

      </div>  
      </div>
      <div class=" w3-padding-48"></div>   
    </form>
      <div class="col-sm">
        <p></p>
        <h2 class="text-center" id='div_mostrar_valor'>
          
        </h2>
      </div>
    </div>
  </div>




    
 
</div>
    
    
    
    
    
    
    `;

    function calProud(
      diaria,
      proInicial,
      dias,
      taladros,
      cantidadPozos,
      arranque,
      delta
    ) {
      var tandas = Math.ceil(cantidadPozos / taladros);
      let prodDiaria = new Array(tandas);
      //let corrimiento = 0;
      for (let i = 1; i <= tandas; i++) {
        let prodTanda = new Array(dias);
        proInicialtmp = proInicial;
        for (let dia = delta; dia <= dias; dia++) {
          prodxDia = proInicialtmp * taladros;
          prodTanda[dia] = prodxDia;
          proInicialtmp -= proInicialtmp * diaria;
        }
        prodDiaria[i] = prodTanda;
        delta = delta + arranque;
        if (i === tandas - 1) {
          let n = cantidadPozos / taladros;
          let decimal = n - Math.floor(n);
          taladros = taladros * decimal;
        }
      }
      return prodDiaria;
    }

    dd = calProud(
      0.00019178083,
      crudo,
      diastotales,
      equipos_perforacion,
      pozos,
      arranque,
      delta
    ); //// cambiar valores
    console.log(dd);

    //parte de la suma diaria

    function calProdAnuInd(prodDiaria, delta, años, tandas, arranque) {
      let prodAnualIndv = new Array(tandas);
      let prodt = new Array(años);
      let suma;
      let fin;
      prodDiaria.forEach((tanda) => {
        suma = 0;
        fin = 365;
        for (let i = 1; i <= años; i++) {
          for (let dia = delta; dia < fin; dia++) {
            suma += tanda[dia];
          }
          prodt[i] = suma;
          delta += arranque;
          fin += 365;
        }
        prodAnualIndv.push(prodt);
      });

      return prodAnualIndv;
    }

    //pp = calProdAnuInd(dd, 45, 15, 32, 10);
    //console.log(pp);

    //parte de la suma diaria 2

    function calProdAnuInd2(prodDiaria, delta, años, tandas, arranque) {
      let prodAnualIndv = new Array(años);

      let fin;
      fin = 365;
      for (let año = 1; año <= años; año++) {
        let prodt = [];
        let y = 1;

        for (let tanda = 1; tanda <= tandas; tanda++) {
          let suma;
          suma = 0;

          // console.log(delta);
          // console.log(fin);
          // console.log(tanda);

          for (let dia = delta; dia <= fin; dia++) {
            //console.log(prodDiaria[tanda][dia]);
            if (año == 15) {
              //console.log(dia);
              //console.log(fin);
              //console.log(tanda);
              //console.log(prodDiaria[tanda][dia]);
            }
            suma += prodDiaria[tanda][dia];
          }
          //  console.log(suma);
          prodt[y] = suma;
          y += 1;
          if (año === 1) {
            delta += arranque;
          }
        }

        delta = fin + 1;
        fin += 365;

        prodAnualIndv[año] = prodt;
      }
      return prodAnualIndv;
    }

    pp = calProdAnuInd2(dd, delta, rango, tandas, arranque); //// cambiar valores
    console.log(pp);

    function sumIndv(prodAnualIndv, tandas, años) {
      let sum = [];
      for (let año = 1; año <= años; año++) {
        let suma;
        suma = 0;
        for (let i = 1; i <= tandas; i++) {
          suma += prodAnualIndv[año][i];
          //console.log(suma);
        }
        sum[año] = suma;
      }

      return sum;
    }

    ff = sumIndv(pp, tandas, rango); //// cambiar valores
    console.log(ff);

    function calProdAnualAcumu(sumIndvAños) {
      let prodAñosAcumulada = [];
      let suma;
      prodAñosAcumulada[1] = sumIndvAños[1];
      for (let dia = 2; dia < sumIndvAños.length; dia++) {
        suma = 0;
        suma = prodAñosAcumulada[dia - 1] + sumIndvAños[dia];
        prodAñosAcumulada[dia] = suma;
      }
      return prodAñosAcumulada;
    }

    gg = calProdAnualAcumu(ff);
    console.log(gg);
    
    eco = [];
    for (let g = 0; g < rango; g++) {
      //// cambiar valores (los años)
      eco[g] = gg[g+1] * preciodelcrudo; 
    }
    console.log(eco);

    sumaeco = [];
    for (let g = 0; g < rango; g++) {
      //// cambiar valores (los años)
      sumaeco[g] = ecogas[g]+ eco[g]; 
    }
    console.log(sumaeco);



    function acumAño(año, prodAñosAcumulada) {
      let acum = 0;
      for (let index = año; index >= 1; index--) {
        acum += prodAñosAcumulada[index];
      }
      return acum;
    }

    //para la suma de los acumulados totales de todos los años

    sum = acumAño(rango, gg);
    console.log(sum);
    totalsuma = [];
    for (let g = 0; g < rango; g++) {
      //// cambiar valores (los años)
      totalsuma[g] = acumAño(g + 1, gg);
    }
    console.log(totalsuma);

    //#######################GRAFICAS#######################################################

    //individual

    const selecAnios = document.getElementById("anio");
    var f = 0;
    for (let i = 1; i <= rango; i++) {
      //// cambiar valores
      let option = document.createElement("option");
      option.value = i;
      option.innerHTML = inicio + f; //// cambiar valores
      f += 1;
      selecAnios.appendChild(option);
    }

    const formulario = document.getElementById("visualizar3");
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();

      var contenedor = document.getElementById("canvas1");
      contenedor.innerHTML = " ";
      contenedor.innerHTML = `

      <canvas id="individual" width="600" height="400"></canvas>

      `;

      //leer el año seleccionado del <select>
      const anio = document.getElementById("anio");
      const anioSeleccionado = anio.options[anio.selectedIndex].value;
      const anioMotrar =
        inicio + parseInt(anio.options[anio.selectedIndex].value) - 1; //// cambiar valores

      //individual

      var etiquetas = function (inicio, fin) {
        let etiquetas = [];
        let años = fin - inicio;
        for (let index = 0; index <= años; index++) {
          etiquetas[index] = inicio + index;
        }
        return etiquetas;
      };

      function años(inicio, vector) {
        var años = [];
        if (inicio == 1) {
          for (let index = inicio; index < vector.length; index++) {
            años[index - 1] = vector[index];
          }
        } else if (inicio == 2) {
          for (let index = 1; index < vector.length; index++) {
            años[index] = vector[index];
          }
        } else {
          let corrimiento = inicio - 2;
          for (let index = corrimiento; index < vector.length; index++) {
            años[index] = vector[index - corrimiento];
          }
        }

        return años;
      }

      var etiquetas = etiquetas(inicio, fin); //// cambiar valores
      //var años = años(anioSeleccionado, ff);
      Chart.defaults.global.defaultFontFamily = "Lato";
      Chart.defaults.global.defaultFontSize = 18;

      const densityData = {
        label: "Producción anual individual",
        data: años(anioSeleccionado, ff),

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      };

      var densityCanvas = document.getElementById("individual");

      const barChart = new Chart(densityCanvas, {
        type: "bar",
        data: {
          labels: etiquetas,
          datasets: [densityData],
        },
        options: {
          title: {
            display: true,
            text: `Pozos perforados en ${anioMotrar}`,
          },
          legend: {
            display: false,
            position: "bottom",
            labels: {
              fontColor: "#000080",
            },
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Produccion",
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Años",
                },
              },
            ],
          },
        },
      });
    });

   
    

    //acumulada

    const selecAnios2 = document.getElementById("anio2");
    var f = 0;
    for (let i = 1; i <= rango; i++) {
      //// cambiar valores el 15 por los años
      let option = document.createElement("option");
      option.value = i;
      option.innerHTML = inicio + f; //// cambiar valores año de incio 2025 por el incio
      f += 1;
      selecAnios2.appendChild(option);
    }

    const formulario2 = document.getElementById("visualizar2");
    formulario2.addEventListener("submit", function (e) {
      e.preventDefault();

      var contenedor = document.getElementById("canvas2");
      contenedor.innerHTML = " ";
      contenedor.innerHTML = `
  
      <canvas id="acumulado" width="600" height="400"></canvas>
  
      `;

      //leer el año seleccionado del <select>
      const anio = document.getElementById("anio2");
      const anioSeleccionado = anio.options[anio.selectedIndex].value;
      const anioMotrar =
        inicio + parseInt(anio.options[anio.selectedIndex].value) - 1; //// cambiar valores
      //acumulado

      var etiquetas = function (inicio, fin) {
        let etiquetas = [];
        let años = fin - inicio;
        for (let index = 0; index <= años; index++) {
          etiquetas[index] = inicio + index;
        }
        return etiquetas;
      };

      function años(inicio, vector) {
        var años = [];
        if (inicio == 1) {
          for (let index = inicio; index < vector.length; index++) {
            años[index - 1] = vector[index];
          }
        } else if (inicio == 2) {
          for (let index = 1; index < vector.length; index++) {
            años[index] = vector[index];
          }
        } else {
          let corrimiento = inicio - 2;
          for (let index = corrimiento; index < vector.length; index++) {
            años[index] = vector[index - corrimiento];
          }
        }

        return años;
      }

      var etiquetas = etiquetas(inicio, fin); //// cambiar valores
      //var años = años(anioSeleccionado, ff);
      Chart.defaults.global.defaultFontFamily = "Lato";
      Chart.defaults.global.defaultFontSize = 18;

      const densityData = {
        label: "Producción anual acumulada",
        data: años(anioSeleccionado, gg),

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      };

      var densityCanvas = document.getElementById("acumulado");

      const barChart = new Chart(densityCanvas, {
        type: "bar",
        data: {
          labels: etiquetas,
          datasets: [densityData],
        },
        options: {
          title: {
            display: true,
            text: `Pozos perforados en ${anioMotrar}`,
          },
          hover: false,
          tooltips: {
            mode: "nearest",
          },
          intersect: false,
          legend: {
            display: false,
            position: "bottom",
            labels: {
              fontColor: "#000080",
            },
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Produccion",
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Años",
                },
              },
            ],
          },
        },
      });
    });

    //acumulada totdal
    var speedCanvas = document.getElementById("total");

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;

    var etiquetas = function (inicio, fin) {
      let etiquetas = [];
      let años = fin - inicio;
      for (let index = 0; index <= años; index++) {
        etiquetas[index] = inicio + index;
      }
      return etiquetas;
    };
    var etiquetas = etiquetas(inicio, fin); //// cambiar valores
    var speedData = {
      labels: etiquetas,
      datasets: [
        {
          label: "Produccion acumulada de todos los pozos",
          data: totalsuma,
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          borderColor: "rgba(255, 206, 86, 1)",
        },
      ],
    };

    var chartOptions = {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 80,
          fontColor: "black",
        },
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Produccion",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Años",
            },
          },
        ],
      },
    };

    var lineChart = new Chart(speedCanvas, {
      type: "line",
      data: speedData,
      options: chartOptions,
    });

    // ECONOMICOS PROYECTO CRUDO

    
    var speedCanvas = document.getElementById("economicoscrudo");

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;

    var etiquetas = function (inicio, fin) {
      let etiquetas = [];
      let años = fin - inicio;
      for (let index = 0; index <= años; index++) {
        etiquetas[index] = inicio + index;
      }
      return etiquetas;
    };

    var etiquetas = etiquetas(inicio, fin);
    var speedData = {
      labels: etiquetas, 

      datasets: [
        {
          label: "Análisis económico de la producción de crudo",
          data: eco, 
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
         
        },
      ],
    };

    var chartOptions = {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 80,
          fontColor: "black",
        },
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "USD/BBL",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Años",
            },
          },
        ],
      },
    };
  


    var lineChart = new Chart(speedCanvas, {
      type: "line",
      data: speedData,
      options: chartOptions,
    });


  
   
    // ECONOMICOS PROYECTO TOTALES

    
    var speedCanvas = document.getElementById("economicostotales");

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;

    
    var etiquetas = function (inicio, fin) {
      let etiquetas = [];
      let años = fin - inicio;
      for (let index = 0; index <= años; index++) {
        etiquetas[index] = inicio + index;
      }
      return etiquetas;
    };

    var etiquetas = etiquetas(inicio, fin);
    var speedData = {
      labels: etiquetas, 
      datasets: [
        {
          label: "Análisis económico producción total",
          data: sumaeco, 
          backgroundColor: [
            
            "rgba(54, 162, 235, 0.2)",
           
          ],
         
        },
      ],
    };

    var chartOptions = {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 80,
          fontColor: "black",
        },
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "USD/BBL",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Años",
            },
          },
        ],
      },
    };
    

    
    

    

    

    var lineChart = new Chart(speedCanvas, {
      type: "line",
      data: speedData,
      options: chartOptions,
    });

    const selecAnios3 = document.getElementById("anio3");
    var f = 0;
    for (let i = 1; i <= rango; i++) {
      //// cambiar valores el 15 por los años
      let option = document.createElement("option");
      option.value = i;
      option.innerHTML = inicio + f; //// cambiar valores año de incio 2025 por el incio
      f += 1;
      selecAnios3.appendChild(option);
    }


    
  
    const mostrarAño = document.getElementById("ver_años");
    mostrarAño.addEventListener("submit", (e) => {
      e.preventDefault();

   

      let valor;
      const anio3 = document.getElementById("anio3");
      const anioSeleccionado = anio3.options[anio3.selectedIndex].value;
      valor = gg[anioSeleccionado ] * preciocrudo;
      console.log(valor);
      const div = document.getElementById("div_mostrar_valor");
      div.innerHTML = `${valor}`;
    });
  });
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

var test = function () {
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
};

//######################################################################################
//######################################################################################
//######################################################################################
//######################################################################################
//######################################################################################
//######################################################################################
