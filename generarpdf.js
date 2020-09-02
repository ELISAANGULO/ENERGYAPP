$(document).ready(function(){

	var specialElementHandler = {
		"#editor":function(element,renderer){
			return true;
		}
	};
	
	

	$("#PDF").click(function(){
	
		var pdf = new jsPDF('p', 'pt', 'letter');
		
		{pdf.setFontSize(20)
			pdf.setTextColor(0,0,0)
			pdf.text(200, 60, "ENERGY APP REPORT")
		}


		pdf.fromHTML($("#resultados_perforacion").html(),50,100,{
			"width":170,
			"elementHandlers" : specialElementHandler
		});
		pdf.addPage()

		pdf.fromHTML($("#resultados_completamiento").html(),50,60,{
			"width":170,
			"elementHandlers" : specialElementHandler
		});
		
		
		
		pdf.addPage()

		pdf.fromHTML($("#resultados_locacion").html(),50,60,{
			"width":170,
			"elementHandlers" : specialElementHandler
		});

		pdf.fromHTML($("#resultados_logistica").html(),50,320,{
			"width":170,
			"elementHandlers" : specialElementHandler
		});


		


		pdf.save("ENERGY APP REPORT.pdf");
	});
});