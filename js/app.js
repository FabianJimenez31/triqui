	//Declaracion de variables y objetos

	var turno =1; 
	var sig_turno;
	var arreglo_triqui= new Array (9);
	var celdas=document.getElementsByClassName("triqui");
	var contador=0;

	//Declaracion de funciones 
	 function ganaJugar (letra)
	 
	{
		if (
			(arreglo_triqui[0]==letra && arreglo_triqui[1]==letra && arreglo_triqui[2]==letra)||
			(arreglo_triqui[3]==letra && arreglo_triqui[4]==letra && arreglo_triqui[5]==letra)||
			(arreglo_triqui[6]==letra && arreglo_triqui[7]==letra && arreglo_triqui[8]==letra)||
			(arreglo_triqui[0]==letra && arreglo_triqui[3]==letra && arreglo_triqui[6]==letra)||
			(arreglo_triqui[1]==letra && arreglo_triqui[4]==letra && arreglo_triqui[7]==letra)||
			(arreglo_triqui[2]==letra && arreglo_triqui[5]==letra && arreglo_triqui[8]==letra)||
			(arreglo_triqui[0]==letra && arreglo_triqui[4]==letra && arreglo_triqui[8]==letra)||
			(arreglo_triqui[2]==letra && arreglo_triqui[4]==letra && arreglo_triqui[6]==letra)
			)
	  {
	  		alert("Jugador " +" "+ letra + " Gana");
	  		window.location.reload();

	  }
	}





	//Aqui ejecuto la funcionalidad del juego
	 function triqui (evento)

	{
		var celda = evento.target;
		var idCelda=evento.target.id;
		//alert (idCelda.length[1]);
		var posicionAMarcar=idCelda[1]-1;
		console.log(posicionAMarcar);
		//alert (idCelda);
		sig_turno =turno%2;
		

		if (sig_turno!=0)
		{
			celda.innerHTML="X";
			celda.style.background ="#EC673A";
			arreglo_triqui[posicionAMarcar] = "X";
			ganaJugar("X");
		
		}

			else if (sig_turno==0)
		
		{
			celda.innerHTML ="O";
			celda.style.background ="#1C5F81";
			arreglo_triqui[posicionAMarcar] = "O";
			ganaJugar("O");
		}

		console.log (arreglo_triqui)

		if (turno==9)
	{
		alert("empate");
		window.location.reload();
	}

		else { 
		
		turno++;
	}


	}



	//Aqui recibo la informacion del evento del usuario al cargar el documento

	 		function cargarDocumento()

	{
				while (contador<celdas.length)

			{ 
				celdas[contador].addEventListener("click",triqui);
				contador++; 
			}


	 }

	//Asignación de eventos

	window.addEventListener("load",cargarDocumento);
