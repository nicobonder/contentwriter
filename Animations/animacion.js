//efecto escritura
const typed = new Typed('.typed', { //ese '.typed' se refiere a la class que tengo en el html
	strings: [
		'<i class="texto">blogs</i>', //pongo <i> pa que este en italica
		'<i class="texto">diarios y revistas</i>', 
		'<i class="texto">libros</i>',
		'<i class="texto">redes y videos</i>'
	],

	typeSpeed: 85, // Velocidad en mlisegundos para poner una letra,
	startDelay: 250, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 85, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto. 
	shuffle: false, // Alterar el orden en el que escribe las palabras. Si pusiera true, el orden de las palabras seria al azar
	backDelay: 1200, // Tiempo de espera despues de que termina de escribir una palabra. 
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite. 
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' para texto sin formato
});

// Que giren los servicios

  AOS.init({
	disable: 'mobile'
  });

 // Que se despliegue el menu con un click
let opcionesMenu = document.querySelectorAll(".opciones_menu")[0];
let modos = true;

document.querySelectorAll(".btn_menu")[0].addEventListener("click", function(){
	if(modos){
		document.querySelectorAll(".btn_menu")[0].style.color = "#43C6AC";
		modos = false;
	}else{
		document.querySelectorAll(".btn_menu")[0].style.color = "rgba(28, 25, 94, 0.35)";
        modos= true;	
	}
	opcionesMenu.classList.toggle("menudos")
})
