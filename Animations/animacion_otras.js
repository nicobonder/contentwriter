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
 