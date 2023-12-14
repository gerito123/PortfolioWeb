let boton_derecha = document.getElementById("boton2");
let boton_izquierda = document.getElementById("boton1");
let boton_derecha_basicos = document.getElementById("boton2_basico");
let boton_izquierda_basicos = document.getElementById("boton1_basico");

let menu = document.getElementById("menu");

let bandera = true;
menu.addEventListener("click", ()=>{
  let lis = document.querySelector("ul");
  if(bandera){
  lis.style.display = "flex";
  bandera = !bandera;
}
  else{

 
    lis.style.display = "none";
    
    bandera = !bandera;
  }


});

  /* logos.forEach((logo)=> {
        
        let prox = logo.nextElementSibling;
        let proxClass = prox.classList[1];

        console.log(proxClass);
        logo.classList.remove(logo.classList[1]);
       /* if(proxClass[1] == undefined){
            logo.classList.add(logo.classList[1]);
            i++;          
            if(i>3)i=0;
        }
        
        logo.classList.add(proxClass);
        logos[0].classList.add(logos[3].classList);  
        
        //IGUALAR EL ULTIMO ELEMENTO DEL ARRA AL PRIMERO Y MANIPULARLO DESDE EL ARRAY
});*/
let clases = ["logo2", "logo_principal", "logo3", "logo4"];
let logos = document.querySelectorAll(".logos");


boton_derecha.addEventListener("click", ()=>{
    let primera = clases[0];
    
   for(let i=0; i<clases.length; i++){
   
    clases[i] = clases[i+1]
    if(i == 3) clases[i] = primera;
    logos[i].classList.remove(logos[i].classList[1]);
    logos[i].classList.add(clases[i]); 
   
    
}
console.log(clases);
  /*  if(proximoElemento){
    
    logo.classList.remove(logo.classList[1]);
    logo.classList.add(proximoElemento.classList[1]); 
    
    console.log(proximoElemento.classList[1]);
  }
  
else{
    console.log(clases[x]);
    logo.classList.remove(logo.classList[1]);
    logo.classList.add(clases[x]);
    x++;
    if(x>=logos.length)x=0;
}*/

});
boton_izquierda.addEventListener("click", ()=>{

   // let logos = document.querySelectorAll(".logos");
 
   let ultima = clases[3];
 
    for(let i=3; i>=0; i--){
        
    clases[i] = clases[i-1]
    if(i == 0) clases[i] = ultima;
    logos[i].classList.remove(logos[i].classList[1]);
    logos[i].classList.add(clases[i]); 
    }
    /* let logo = logos[i];
     let proximoElemento = logos[i - 1];
     if(proximoElemento){
     
     logo.classList.remove(logo.classList[1]);
     logo.classList.add(proximoElemento.classList[1]); 

 }  
 else{
     console.log(clases[x]);
     logo.classList.remove(logo.classList[1]);
     logo.classList.add(clases[x]);
     x++;
     if(x>=logos.length)x=0;
 }
}
});



*/
});


let clases_basicos = ["logo_basico1", "logo_basico_principal", "logo_basico3"];
boton_derecha_basicos.addEventListener("click", ()=>{
 
    let logos = document.querySelectorAll(".logos_basicos");
    let primera = clases_basicos[0];
    
    for(let i=0; i<clases_basicos.length; i++){
    
     clases_basicos[i] = clases_basicos[i+1]
     if(i == 2) clases_basicos[i] = primera;
     logos[i].classList.remove(logos[i].classList[1]);
     logos[i].classList.add(clases_basicos[i]); 
   }
});
    /*let logo = logos[i];
    let proximoElemento = logos[i + 1];
    
    if(proximoElemento){
    
    logo.classList.remove(logo.classList[1]);
    logo.classList.add(proximoElemento.classList[1]); 
    
 
  }
  
else{
    console.log(clases[y]);
    logo.classList.remove(logo.classList[1]);
    logo.classList.add(clases[y]);
    y++;
    if(y>2)y=0;
}
}
});*/
boton_izquierda_basicos.addEventListener("click", ()=>{

 
    let logos = document.querySelectorAll(".logos_basicos");
    let ultima = clases_basicos[2];
    
    for(let i=2; i>=0; i--){
    
     clases_basicos[i] = clases_basicos[i-1]
     if(i == 0) clases_basicos[i] = ultima;
     logos[i].classList.remove(logos[i].classList[1]);
     logos[i].classList.add(clases_basicos[i]); 
   }
});/*
     if(proximoElemento){
     
     logo.classList.remove(logo.classList[1]);
     logo.classList.add(proximoElemento.classList[1]); 
     
    
 }  
 else{
     console.log(clases[y]);
     logo.classList.remove(logo.classList[1]);
     logo.classList.add(clases[y]);
     y++;
     if(y>2)y=0;
 }
}*/

