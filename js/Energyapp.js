gg
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
var costopozo;
var costototal;
var declinaciondia;
var economicototal;
var pneumatic;
var silos_arena;
var tanques_agua;
var dirty_volume;
var unidades_bombeo;
var viajes;
var finance;
var npv;
var inversion;
var tasapozo;
var unidad_testing;
var trabajos_indirectos;
var personal_testing;
var personal_tie;

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
  costopozo = document.getElementById("costopozo").value;
  tasapozo= document.getElementById("tasapozo").value;
  inversion = document.getElementById("inversion").value;



  

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
  costototal = parseFloat(costototal);
  costopozo = parseFloat(costopozo);

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
  var camiones_cemento = Math.ceil((cemento* 1.44 * equipos_perforacion) / 38);
  // numero de cargas de cementi
  var viajes = Math.ceil(cemento_usado/38);
  // cantidad de Pneumatic tractor trailers
  var pneumatic = Math.ceil(arena/22.6796)* equipos_perforacion;
  // cantidad de silos de almacenamiento
  var silos_arena = Math.ceil((arena*equipos_perforacion)/600);
  // Tanques para almacenar agua
  var tanques_agua = Math.ceil((agua*6.29)/500);
  // Unidades de bombeo para fracturamiento
  var dirty_volume = ((agua*6.29));



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
  // ---------------------------------------------- Testing and Cleanup ----------------------------------------------
  var unidad_testing = equipos_perforacion;
  // ---------------------------------------------- Locación ----------------------------------------------
  // Tamaño del terreno
  var tamaño_terreno_toda_locacion = Math.ceil(Math.pow(cabezal / 1000, 2) * pozos);
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
  var personal_testing = 8 * equipos_perforacion * años;
  var personal_tie = 10 * equipos_perforacion * años;
  var trabajos_indirectos = (personal_perfo+personal_completamiento+personal_soporte+personal_testing+personal_testing)*3;
 
 
  

  //----------------------------------------------- Acumulado --------------------------------------------

  años = visualizar - inicio;
  añosTotales = fin - inicio;

  //----------------------------------------------- Producción --------------------------------------------

  arranque = Drowback + perfo;
  declinacionpor = declinacion / 100;
  var declinaciondia = declinacionpor/365;
  console.log(declinaciondia);

  rango = fin - inicio + 1;
  diastotales = rango * 365;  
  var costototal = costopozo * pozos;

  
  // Mandamos el html al index para los datos de perforación
    // Personal
    document.getElementById("resultados_logistica").innerHTML =
    '<div class="card_d my-5"><div class="card_header" id="solper"><h3>Workers <b>' +
    visualizar +
    '</b></h3></div><div class="card_body"><p class="mb-0">Total Drilling Staff: <span><b>' +
    team1 * años * equipos_perforacion +
    '</b></span> </p><hr class="my-2"><p class="mb-0">Total Completion Staff: <span><b>' +
    team2 * años * equipos_completamiento  +
    '</b></span> </p><hr class="my-2"><p class="mb-0">Total Testing and Cleanup Staff: <span><b>' +
    8 * equipos_perforacion * años  +
    '</b></span> </p><hr class="my-2"><p class="mb-0">Total Tie-in Staff: <span><b>' +
    10 * equipos_perforacion * años  +
    '</b></span></p><hr class="my-2"><p class="mb-0">Total support staff: <span><b>' +
    team3 * años * equipos_completamiento+
    '</b></span></p><hr class="my-2"><p class="mb-0">Direct Jobs: <span><b>' +
    ((team1 * años * equipos_perforacion )+(team2 * años * equipos_completamiento)+( 8 * equipos_perforacion * años )+(10 * equipos_perforacion * años)+(team3 * años * equipos_completamiento))+
    '</b></span></p><hr class="my-2"><p class="mb-0">Indirect Jobs: <span><b>' +
    ((team1 * años * equipos_perforacion )+(team2 * años * equipos_completamiento)+( 8 * equipos_perforacion * años )+(10 * equipos_perforacion * años)+(team3 * años * equipos_completamiento))*3 +
    "</b></span> </p></div></div>";
  // Perforación
  document.getElementById("resultados_perforacion").innerHTML =
    '<div class="card_d my-5"><div class="card_header" id="solperforacion"><h3>Drilling <b>' +
    visualizar +
    '</b> </h3></div><div class="card_body"><p class="mb-0">Drilling equipment: <span><b>' +
    equipos_perforacion +
    '</b></span></p><hr class="my-2"><p class="mb-0">Drilling pipes [45 ft]: <span><b>' +
    tuberias + " Sections"  +
    '</b></span></p><hr class="my-2"><p class="mb-0">Casing Pipes [ 45 ft]: <span><b>' +
    cantidad_tubos + " Sections" +
    '</b></span></p><hr class="my-2"><p class="mb-0">Cement : <span><b>' +
    cemento_usado + " Ton" +
    '</b></span></p><hr class="my-2"><p class="mb-0">Trucks to transport cement[38 ton]: <span><b>' +
    camiones_cemento +
    '</b></span></p><hr class="my-2"><p class="mb-0">Number of Cement Trips: <span><b>' +
    viajes +
    '</b></span></p><h4 class="text-primary mt-4">Accumulated ------------------------------------------</h4><p class="mb-0">Drilling equipment: <span><b>' +
    equipos_perforacion * años +
    '</b></span></p><hr class="my-2"><p class="mb-0">Drilling pipes [ 45 ft]: <span><b>' +
    tuberias * años + " Sections" +
    '</b></span></p><hr class="my-2"><p class="mb-0">Casing Pipes[45 ft]: <span><b>' +
    cantidad_tubos * años + " Sections" +
    '</b></span></p><hr class="my-2"><p class="mb-0">Cement  [ m<sup>3</sup> ]: <span><b>' +
    cemento_usado * años + " Ton" +
    '</b></span></p><hr class="my-2"><p class="mb-0">Trucks to transport cement [38 ton]: <span><b>' +
    camiones_cemento * años +
    '</b></span></p><hr class="my-2"><p class="mb-0">Number of Cement Trips: <span><b>' +
    viajes +
    "</b></span></p></div></div>";
  

    // Completamiento
  document.getElementById("resultados_completamiento").innerHTML =
  '<div class="card_d my-5"><div class="card_header" id="solcomple"><h3>Completion<b>' +
  visualizar +
  '</b></h3></div><div class="card_body"><p class="mb-0">Completion Crews: <span><b>' +
  equipos_completamiento +
  '</b></h3></div><div class="card_body"><p class="mb-0">Volume water consumed : <span><b>' +
  agua_total + "  m<sup>3</sup> " +
  '</b></span></p><hr class="my-2"><p class="mb-0">Volume of fresh water required : <span><b>' +
  agua_fresca + "  m<sup>3</sup> " +
  '</b></span></p><hr class="my-2"><p class="mb-0">Volume of recycled return water : <span><b>' +
  agua_retorno + "  m<sup>3</sup> "+
  '</b></span></p><hr class="my-2"><p class="mb-0">Proppant : <span><b>' +
  propante + " Ton"+
  '</b></span></p><hr class="my-2"><p class="mb-0">Number of Pneumatic tractor trailers [Capacity de 22.679 Ton]: <span><b>' + 
  pneumatic +
  '</b></span></p><hr class="my-2"><p class="mb-0">Number of silos for storage [Capacity  de 600 Ton]: <span><b>' +
  silos_arena +
  '</b></span></p><hr class="my-2"><p class="mb-0">Number of water storage tanks [Capacity  de 500 bbl]: <span><b>' +
  tanques_agua +
  
 
  '</b></span></p><h4 class="text-primary mt-4">Accumulated  ------------------------------------------</h4><p class="mb-0">Completion Crews: <span><b>' +
  equipos_completamiento * años +
  '</b></h3></div><div class="card_body"><p class="mb-0">Total quantity of water consumed : <span><b>' +
  agua_total * años + "  m<sup>3</sup> "+
  '</b></span></p><hr class="my-2"><p class="mb-0">Volume of fresh water required: <span><b>' +
  agua_fresca * años + "  m<sup>3</sup> "+
  '</b></span></p><hr class="my-2"><p class="mb-0">Volume of recycled return water: <span><b>' +
  agua_retorno * años + "  m<sup>3</sup> " +
  '</b></span></p><hr class="my-2"><p class="mb-0">Proppant : <span><b>' +
  propante * años + " Ton"+
  '</b></span></p><hr class="my-2"><p class="mb-0">Number of Pneumatic tractor trailers [Capacity  de 22.679 Ton]: <span><b>' +
  pneumatic * años+
  '</b></span></p><hr class="my-2"><p class="mb-0">Number of silos for storage [Capacity  de 600 Ton]: <span><b>' +
  silos_arena * años+
  '</b></span></p><hr class="my-2"><p class="mb-0">Number of water storage tanks [Capacity  de 500 bbl]: <span><b>'+ 
  tanques_agua * años  +
  "</b></span></p></div></div>";
 

  
  // Tabla quimicos
  document.getElementById("tabla_quimicos").style.display = "block";
  
  // testing and Cleanup
  document.getElementById("resultados_testing and Cleanup").innerHTML =
    '<div class="card_d my-5"><div class="card_header" id="soltesting"><h3> Testing and Cleanup<b>' +
    visualizar +
    '</b></h3></div><div class="card_body"><p class="mb-0">CALIBR Unit: <span><b>' +
    unidad_testing +
    '</b></span></p><h4 class="text-primary mt-4">Accumulated  ------------------------------------------</h4><p class="mb-0">CALIBR Unit: <span><b>' +
    unidad_testing * años +
    "</b></span></p></div></div>";
   


  // Locación
  document.getElementById("resultados_locacion").innerHTML =
    '<div class="card_d my-5"><div class="card_header" id="solloc"><h3>Location <b>' +
    visualizar +
    '</b></h3></div><div class="card_body"><p class="mb-0">Field Dimension : <span><b>' +
    tamaño_terreno_toda_locacion + "  km<sup>2</sup> " +
    '</b></span> </p><hr class="my-2"><p class="mb-0">Extension of Main roads: <span><b>' +
    total_vias + " km" +
    '</b></span> </p><hr class="my-2"><p class="mb-0">Extension of Connecting Routes : <span><b>' +
    pozos + " km" +
    '</b></span> </p><h4 class="text-primary mt-4">Accumulated  ------------------------------------------</h4><p class="mb-0">Field Dimension : <span><b>' +
    tamaño_terreno_toda_locacion * años + "  km<sup>2</sup> "+
    '</b></span> </p><hr class="my-2"><p class="mb-0">Extension of Main Roads : <span><b>' +
    total_vias * años + " km" +
    '</b></span> </p><hr class="my-2"><p class="mb-0">Extension of Connecting Routes : <span><b>' +
    pozos * años + " km" +
    "</b></span> </p></div></div>";

  // Tabla personal
  document.getElementById("tabla_logistica").style.display = "block";
  // Producción
  document.getElementById("produccion").innerHTML =
    '<h1 class="text-primary mt-5" id="solprod"> Production </h1> <P>In this section you will find the oil and gas production for each year of drilling.  </P><h2 class="text-primary mt-5" > Note <sup>*</sup>  </h2><p>To visualize the global economic analysis you can find it by clicking on the button " Oil Production".<br>Remember to press the gas production button first.</p><button type="button"  id="btngas"value="Enviar" class="btn btn-dark px-5 float-md-left mt-3">Click to see the gas production</button > <br> <br> <button type="button"  id="btncrudo"value="Enviar" class="btn btn-dark px-5 float-md-left mt-3">Click to see the oil production</button > <br> <br>';
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
    
    <p><h2 class="text-center" style="color:#7c2307">Production</h2></p>
    <p><h2 class="text-center" style="color:#7c2307">Gas</h2></p>
</div>

<div class="container">
  <div class="row">
    <div class="col">
      
      <h2 class="text-center" style="color:#7c2307">Individual Gas Production</h2>
      <form action="#" id="visualizar3">
        <div class="form-group">
          <label for="anio">Year:</label>
          <select class="form-control" id="anio"> </select>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-outline-info btn-lg btn-block">
            Visualize 
          </button>
        </div>
      </form>
      <div class="container" id='canvas1' >
        <canvas id="individual" width="600" height="400"></canvas>
      </div>  
     
    </div>
    <div class="col">
      <h2 class="text-center" style="color:#7c2307">Accumulated Gas Production</h2>
      <form action="#" id="visualizar2">
        <div class="form-group">
          <label for="anio2">Year:</label>
          <select class="form-control" id="anio2"> </select>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-outline-info btn-lg btn-block">
            Visualize 
          </button>
        </div>
      </form>
      <div class="container" id='canvas2' >
        <canvas id="acumulado" width="600" height="400"></canvas>
      </div> 
    </div> 
    <div class="w-100">
      <h2 class="text-center" style="color:#7c2307">Total Gas Production</h2>
      <div class="col"><canvas id="total" width="600" height="400"></canvas></div>
    </div>

    <div class="container" id='mostar_total_años'>
    <div >
     <h2 class="text-center" style="color:#7c2307">Gas Revenue </h2>
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
      declinaciondia,
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
        label: "Individual Annual Production",
        data: años(anioSeleccionado, ff),

        backgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
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
            text: `Drilled Wells in ${anioMotrar}`,
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
                  labelString: "Production [Mscf]",
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Year",
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
        label: "Accumulated Annual Production",
        data: años(anioSeleccionado, gg),

        backgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
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
            text: `Drilled Wells in ${anioMotrar}`,
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
                  labelString: "Production  [Mscf]",
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Years",
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
          label: "Accumulated Production of all Wells",
          data: totalsuma,
          backgroundColor: "rgba(153, 102, 255,0.4)",
          borderColor: "rgba(153, 102, 255,1)",
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
              labelString: "Production  [Mscf]",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Years",
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
          label: "Economic Analysis of Gas Production",
          data: ecogas, 
          backgroundColor: [
            "rgba(255, 99, 132, 0.4)",
            "rgba(54, 162, 235, 0.4)",
            "rgba(255, 206, 86, 0.4)",
            "rgba(75, 192, 192, 0.4)",
            "rgba(153, 102, 255, 0.4)",
            "rgba(255, 159, 64, 0.4)",
            "rgba(255, 99, 132, 0.4)",
            "rgba(54, 162, 235, 0.4)",
            "rgba(255, 206, 86, 0.4)",
            "rgba(75, 192, 192, 0.4)",
            "rgba(153, 102, 255, 0.4)",
            "rgba(255, 159, 64, 0.4)",
            "rgba(255, 99, 132, 0.4)",
            "rgba(54, 162, 235, 0.4)",
            "rgba(255, 206, 86, 0.4)",
            "rgba(75, 192, 192, 0.4)",
            "rgba(153, 102, 255, 0.4)",
            "rgba(255, 159, 64, 0.4)",
            "rgba(255, 159, 64, 0.4)",
            "rgba(255, 99, 132, 0.4)",
            "rgba(54, 162, 235, 0.4)",
            "rgba(255, 206, 86, 0.4)",
            "rgba(75, 192, 192, 0.4)",
            "rgba(153, 102, 255, 0.4)",
            "rgba(255, 159, 64, 0.4)",
            "rgba(255, 99, 132, 0.4)",
            "rgba(54, 162, 235, 0.4)",
            "rgba(255, 206, 86, 0.4)",
            "rgba(75, 192, 192, 0.4)",
            "rgba(153, 102, 255, 0.4)",
            "rgba(255, 159, 64, 0.4)",
            "rgba(54, 162, 235, 0.4)",
            "rgba(255, 206, 86, 0.4)",
            "rgba(75, 192, 192, 0.4)",
            "rgba(153, 102, 255, 0.4)",
            "rgba(255, 159, 64, 0.4)",
            "rgba(255, 159, 64, 0.4)",
            "rgba(255, 99, 132, 0.4)",
            "rgba(54, 162, 235, 0.4)",
            "rgba(255, 206, 86, 0.4)",
            "rgba(75, 192, 192, 0.4)",
            "rgba(153, 102, 255, 0.4)",
            "rgba(255, 159, 64, 0.4)",
            "rgba(255, 99, 132, 0.4)",
            "rgba(54, 162, 235, 0.4)",
            "rgba(255, 206, 86, 0.4)",
            "rgba(75, 192, 192, 0.4)",
            "rgba(153, 102, 255, 0.4)",
            "rgba(255, 159, 64, 0.4)",
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
              labelString: "USD",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Years",
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
    
    <p><h2 class="text-center" style="color:#7c2307">Production</h2></p>
    <p><h2 class="text-center" style="color:#7c2307">Oil</h2></p>
</div>

<div class="container">
  <div class="row">
    <div class="col" id= "produccioncrudo">
      
      <h2 class="text-center" style="color:#7c2307">Individual Oil Production </h2>
      <form action="#" id="visualizar3">
        <div class="form-group">
          <label for="anio">Year:</label>
          <select class="form-control" id="anio"> </select>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-outline-info btn-lg btn-block">
            Visualize

          </button>
        </div>
      </form>
      <div class="container" id='canvas1' >
        <canvas id="individual" width="600" height="400"></canvas>
      </div>  
     
    </div>
    <div class="col">
      <h2 class="text-center" style="color:#7c2307">Accumulated Oil Production</h2>
      <form action="#" id="visualizar2">
        <div class="form-group">
          <label for="anio2">Year:</label>
          <select class="form-control" id="anio2"> </select>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-outline-info btn-lg btn-block">
           Visualize

          </button>
        </div>
      </form>
      <div class="container" id='canvas2' >
        <canvas id="acumulado" width="600" height="400"></canvas>
      </div> 
    </div> 
    <div class="w-100">
    <h2 class="text-center" style="color:#7c2307">Total Oil Production</h2>
    <div class="col"><canvas id="total" width="600" height="400"></canvas></div>

  </div>

    <div class="container" id='mostar_total_años'>
       <div >
        <h2 class="text-center" style="color:#7c2307">Oil Revenue</h2>
        <div class="col"><canvas id="economicoscrudo" ></canvas>
       </div>

       <div >
        <h2 class="text-center" id="soleconomico" style="color:#7c2307">TOTAL ECONOMIC ANALYSIS OF THE PROJECT</h2>
        
        <div class="col"><canvas id="economicostotales" ></canvas>
       </div>
       <div >
       

      </form>
    </div>
    <div class="center">
      <div class="col-sm">
         <form action="#" id="ver_años">
          <div class="form-group">
            <label for="anio">Year:</label>
            <select class="form-control" id="anio3"> </select>
          </div>
          <div class="form-group">
          <button type="submit" class="btn btn-outline-info btn-lg btn-block">
            Visualize
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
      declinaciondia,
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
    
    economicototal = [];

    for (let g = 0; g < rango; g++) {
      //// cambiar valores (los años)

      economicototal[g] = sumaeco[g] - costototal;
    }
    console.log(economicototal);



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
        label: "Individual annual production",
        data: años(anioSeleccionado, ff),
        backgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
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
            text: `Drilled Wells in ${anioMotrar}`,
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
                  labelString: "Production  [Bbl]",
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Years",
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
        label: "Accumulated annual production",
        data: años(anioSeleccionado, gg),

        backgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)",
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
            text: `Drilled wells in ${anioMotrar}`,
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
                  labelString: "Production [Bbl]",
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Years",
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
          label: "Accumulated production of all wells",
          data: totalsuma,
          backgroundColor: "rgba(153, 102, 255, 0.4)",
          borderColor: "rgba(153, 102, 255,1)",
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
              labelString: "Production  [Bbl]",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Years",
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
          label: "Economic Analysis of Oil Production",
          data: eco, 
          backgroundColor: [
            "rgba(255, 99, 132, 0.4)",
            "rgba(54, 162, 235, 0.4)",
            "rgba(255, 206, 86, 0.4)",
            "rgba(75, 192, 192, 0.4)",
            "rgba(153, 102, 255, 0.4)",
            "rgba(255, 159, 64, 0.4)",
            "rgba(255, 99, 132, 0.4)",
            "rgba(54, 162, 235, 0.4)",
            "rgba(255, 206, 86, 0.4)",
            "rgba(75, 192, 192, 0.4)",
            "rgba(153, 102, 255, 0.4)",
            "rgba(255, 159, 64, 0.4)",
            "rgba(255, 99, 132, 0.4)",
            "rgba(54, 162, 235, 0.4)",
            "rgba(255, 206, 86, 0.4)",
            "rgba(75, 192, 192, 0.4)",
            "rgba(153, 102, 255, 0.4)",
            "rgba(255, 159, 64, 0.4)",
            "rgba(255, 159, 64, 0.4)",
            "rgba(255, 99, 132, 0.4)",
            "rgba(54, 162, 235, 0.4)",
            "rgba(255, 206, 86, 0.4)",
            "rgba(75, 192, 192, 0.4)",
            "rgba(153, 102, 255, 0.4)",
            "rgba(255, 159, 64, 0.4)",
            "rgba(255, 99, 132, 0.4)",
            "rgba(54, 162, 235, 0.4)",
            "rgba(255, 206, 86, 0.4)",
            "rgba(75, 192, 192, 0.4)",
            "rgba(153, 102, 255, 0.4)",
            "rgba(255, 159, 64, 0.4)",
            "rgba(54, 162, 235, 0.4)",
            "rgba(255, 206, 86, 0.4)",
            "rgba(75, 192, 192, 0.4)",
            "rgba(153, 102, 255, 0.4)",
            "rgba(255, 159, 64, 0.4)",
            "rgba(255, 159, 64, 0.4)",
            "rgba(255, 99, 132, 0.4)",
            "rgba(54, 162, 235, 0.4)",
            "rgba(255, 206, 86, 0.4)",
            "rgba(75, 192, 192, 0.4)",
            "rgba(153, 102, 255, 0.4)",
            "rgba(255, 159, 64, 0.4)",
            "rgba(255, 99, 132, 0.4)",
            "rgba(54, 162, 235, 0.4)",
            "rgba(255, 206, 86, 0.4)",
            "rgba(75, 192, 192, 0.4)",
            "rgba(153, 102, 255, 0.4)",
            "rgba(255, 159, 64, 0.4)",
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
              labelString: "USD",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Years",
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
          label: "Total Production Economic Analysis",
          data: economicototal, 
          backgroundColor: [
            
            "rgba(54, 162, 235, 0.4)",
           
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
              labelString: "USD",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Years",
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
      valor = economicototal[anioSeleccionado-1 ];
      console.log(valor);
      const div = document.getElementById("div_mostrar_valor");
      div.innerHTML = `Net Present Value: ${getNPV(rate, initialCost, cashFlows)} USD`;
      
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

//----------------------------------------------- Valor presente neto --------------------------------------------
  /**
 * Calculates the Net Present Value of a given initial investment
 * cost and an array of cash flow values with the specified discount rate.
 *
 * @param {Function} rate - The discount rate percentage
 * @param {string} initialCost - The initial investment
 * @param {array} cashFlows - An array of future payment amounts
 * @return {number} The calculated Net Present Value
 */
function getNPV(rate, initialCost, cashFlows) {
  var npv = initialCost;

  for (var i = 0; i < cashFlows.length; i++) {
    npv += cashFlows[i] / Math.pow(rate / 100 + 1, i + 1);
  }

  return npv;
}
/**
 * Calculates the Net Present Value of a given initial investment
 * cost and an array of cash flow values with the specified discount rate.
 *
 * @param {number} rate - The discount rate percentage
 * @param {number} initialCost - The initial investment
 * @param {array} cashFlows - An array of future payment amounts
 * @return {number} The calculated Net Present Value
 */
function getNPV(rate, initialCost, cashFlows) {
  return cashFlows.reduce(
    (accumulator, currentValue, index) =>
      accumulator + currentValue / Math.pow(rate / 100 + 1, index + 1),
    initialCost
  );
}


var rate = 10;
var initialCost = 1000000000;
p = [-1754669950.06352, -224491158.97619867, 1202228511.3165593, 2532484184.3505974, 3772798026.2955446, 4929251223.7560835,6007513799.476066,7012872412.130135,7950256276.5036335,8824261331.145895,9639172771.989574,10398986062.416983,11107426522.784586,11767967595.451979,12383847874.867685,12958086986.20931];
var cashFlows = p;
//var cashFlows = economicototal;
//var cashFlows = [-1754669950.06352, -224491158.97619867, 1202228511.3165593, 2532484184.3505974, 3772798026.2955446, 4929251223.7560835,6007513799.476066,7012872412.130135,7950256276.5036335,8824261331.145895,9639172771.989574,10398986062.416983,11107426522.784586,11767967595.451979,12383847874.867685,12958086986.20931];
console.log();
// expected output: 56004.77488497429


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
