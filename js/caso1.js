function verdatos()
{
	var nom=document.getElementById('nombre').value;
	var ed=document.getElementById('edad').value;
	alert("Tu nombres es " +nom);
	alert("Tu edad es " +ed);
}
function verificar()
{
	clave=document.getElementById("clave").value;
	if (clave.length<4) 
	{
		alert("La clave es muy debil, debe contener al menor 4 caracteres");
	} 
	else 
	{
		alert("Clave adecuada");
	}	
}

function cambiarColor()
{
	var seleccion=document.getElementById("select1");
	document.getElementById('text1').value=seleccion.selectedIndex;

	document.getElementById('text2').value=seleccion.options[seleccion.selectedIndex].text;

	document.getElementById('text3').value=seleccion.options[seleccion.selectedIndex].value;

}

function contarDistritos()

{
	var cant=0;
	if (document.getElementById('checkbox1').checked)
	{
		cant++;
	}
	if (document.getElementById('checkbox2').checked)
	{
		cant++;
	}
	alert("Conoces "+ cant + "distritos")
}

function mostrarCarrera()
{
	if (document.getElementById('radio1').checked)
	{
		alert("Computacion");
	}
	if (document.getElementById('radio2').checked)
	{
		alert("Electonica");
	}
	if (document.getElementById('radio3').checked)
	{
		alert("Contabilidad");
	}
}

function  caracteres()
{
	if (document.getElementById('mensaje').value.length>30)
	{
		alert("mensaje muy largo")

	} 
	else 
	{
		alert("mensaje correcto")
	}
}


