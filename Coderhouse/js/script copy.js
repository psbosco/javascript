


let CodigoRegalo = "1";
function Ingreso() {
  let ingresar = false;
  for (let i = 4; i >= 0; i--) {
    let ingresoCodigoregalo = prompt(
      "Ingresá tu codigo de regalo tenes " + (i + 1) + " oportunidades"
    );
    if (ingresoCodigoregalo === CodigoRegalo) {
      alert("Bienvenido ingreso exitoso, tenes " + PuntosRegalos + " Puntos Para canjear tu regalo en el Showroom" );
      ingresar = true;
      break;
    } else {
      alert("Error, Podes meter bien los dedos?");
    }
  }

  return ingresar;
}

const PuntosRegalos = 45000 

function Producto(nombre, precio, stock){
  this.nombre=nombre;
  this.precio= parseFloat(precio);
  this.stock= stock;
}

const producto1 = new Producto("Batidora Para mayonesa.", 60000, 12);
const producto2 = new Producto("Secador de secadores de pelo.", 25000, 12);
const producto3 = new Producto("Panquequera para perros.", 45000, 12);
const producto4 = new Producto("Gel frio y caliente para los dolores.", 10000, 12);

const ListadoProductos = [producto1.nombre,producto2.nombre,producto3.nombre,producto4.nombre];

console.log (ListadoProductos);

let exito = Ingreso();

 if (exito) {
     let opcion = prompt(
      "Elegí una opción: \n1 - " + producto1.nombre + "\n2 - " + producto2.nombre +  "\n3 - " + producto3.nombre +  "\n4 - " + producto4.nombre + "\n Presioná X para finalizar."
      );
 
    while (opcion != "X" && opcion != "x") {
      switch (opcion) {
        case "1":
          alert("vas a canjear  " + producto1.precio + " Puntos de tus " + PuntosRegalos + " Puntos acumulados por " + producto1.nombre);
            let choose1=prompt(
              "Estás a puntos de canjear tus puntos. es correcto? \n1 SI  \n2 NO ")
               switch (choose1) {
                 case "1":
                  let CalculadoraPuntos = PuntosRegalos - producto1.precio;
                  console.log(CalculadoraPuntos);    
                  if (CalculadoraPuntos >= producto1.precio) {            
                   alert("canje exitoso, te quedan " + (PuntosRegalos - producto1.precio) + " puntos para usar");
                   break;
                  } 
                    else {
                    alert("No te alcanzan tus puntos");
                    }
                 case "2":
                  let opcion = prompt(
                    "Elegí una opción: \n1 - " + producto1.nombre + "\n2 - " + producto2.nombre +  "\n3 - " + producto2.nombre +  "\n4 - " + producto4.nombre + "\n Presioná X para finalizar."
                    );
   
                 }
               
                 break;
        case "2":
          alert("vas a canjear  " + producto2.precio + " Puntos de tus " + PuntosRegalos + " Puntos acumulados por " + producto1.nombre);
            let choose2=prompt(
              "Estás a puntos de canjear tus puntos. es correcto? \n1 SI  \n2 NO ")
               switch (choose2) {
                 case "1":
                  let CalculadoraPuntos = PuntosRegalos - producto2.precio;
                  console.log(CalculadoraPuntos);
                  if (CalculadoraPuntos >= producto2.precio) {            
                  alert("canje exitoso, te quedan " + (PuntosRegalos - producto2.precio) + " puntos para usar");
                   break;
                  } 
                  else {
                  alert("No te alcanzan tus puntos");
                  }
                 case "2":
                  let opcion = prompt(
                    "Elegí una opción: \n1 - " + producto1.nombre + "\n2 - " + producto2.nombre +  "\n3 - " + producto3.nombre +  "\n4 - " + producto4.nombre + "\n Presioná X para finalizar."
                    );
   
                 }
               
                 break;

        case "3":
          alert("vas a canjear  " + producto3.precio + " Puntos de tus " + PuntosRegalos + " Puntos acumulados por " + producto3.nombre);
            let choose3=prompt(
              "Estás a puntos de canjear tus puntos. es correcto? \n1 SI  \n2 NO ")
               switch (choose3) {
                 case "1":
                  let CalculadoraPuntos = PuntosRegalos - producto3.precio;
                  console.log(CalculadoraPuntos);
                  if (CalculadoraPuntos >= producto3.precio) {            
                  alert("canje exitoso, te quedan " + (PuntosRegalos - producto3.precio) + " puntos para usar");
                   break;
                  } 
                  else {
                  alert("No te alcanzan tus puntos");
                  }
                 case "2":
                  let opcion = prompt(
                    "Elegí una opción: \n1 - " + producto1.nombre + "\n2 - " + producto2.nombre +  "\n3 - " + producto3.nombre +  "\n4 - " + producto4.nombre + "\n Presioná X para finalizar."
                    );
   
                 }   
               
                 break;

         case "4":
           alert("vas a canjear  " + producto4.precio + " Puntos de tus " + PuntosRegalos + " Puntos acumulados por " + producto4.nombre);
              let choose4=prompt(
                "Estás a puntos de canjear tus puntos. es correcto? \n1 SI  \n2 NO ")
                switch (choose4) {
                   case "1":
                   let CalculadoraPuntos = PuntosRegalos - producto4.precio;
                   console.log(CalculadoraPuntos);
                  if (CalculadoraPuntos >= producto4.precio) {            
                  alert("canje exitoso, te quedan " + (PuntosRegalos - producto4.precio) + " puntos para usar");
                   break;
                  } 
                  else {
                  alert("No te alcanzan tus puntos");
                  }
                         case "2":
                          let opcion = prompt(
                            "Elegí una opción: \n1 - " + producto1.nombre + "\n2 - " + producto2.nombre +  "\n3 - " + producto3.nombre +  "\n4 - " + producto4.nombre + "\n Presioná X para finalizar."
                            );
           
                         }
                       
                       break;
             

     }
     
     break; 
     
    }
  } else {
    alert("SI NO PODES RETENER UN FUCKING CODIGO NO TE MERECES UN PREMIO");
  }
  

