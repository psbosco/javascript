


let CodigoRegalo = "AB476HA";
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
let producto1=45000
let producto2=45000
let producto3=45000
let producto4=45000

let exito = Ingreso();

 if (exito) {
     let opcion = prompt(
     "Elegí una opción: \n1- Batidora Para mayonesa. \n2 - Secador de secadores de pelo. \n3 - Panquequera para perros. \n4 - Gel frio y caliente para pasar la noche. \nPresioná X para finalizar."
    );
 
    while (opcion != "X" && opcion != "x") {
      switch (opcion) {
        case "1":
          alert("vas a canjear  " + producto1 + " Puntos de tus " + PuntosRegalos + " Puntos acumulados por una Batidora para mayonesa");
            let choose1=prompt(
              "Estás a puntos de canjear tus puntos. es correcto? \n1 SI  \n2 NO ")
               switch (choose1) {
                 case "1":
                   alert("canje exitoso, te quedan " + (PuntosRegalos - producto1) + " puntos para usar");
                   let ContadorPuntos = PuntosRegalo - producto1
                   break;
                 case "2":
                  let opcion = prompt(
                    "Elegí una opción: \n1- Batidora Para mayonesa. \n2 - Secador de secadores de pelo. \n3 - Panquequera para perros. \n4 - Gel frio y caliente para pasar la noche. \nPresioná X para finalizar."
                   );
   
                 }
               
                 break;
        case "2":
          alert("vas a canjear  " + producto2 + " Puntos de tus " + PuntosRegalos + " Puntos acumulados por un secador de secadores de pelo");
            let choose2=prompt(
              "Estás a puntos de canjear tus puntos. es correcto? \n1 SI  \n2 NO ")
               switch (choose2) {
                 case "1":
                   alert("canje exitoso, te quedan " + (PuntosRegalos - producto2) + " puntos para usar");
                   let ContadorPuntos = PuntosRegalo - producto2
                   break;
                 case "2":
                  let opcion = prompt(
                    "Elegí una opción: \n1- Batidora Para mayonesa. \n2 - Secador de secadores de pelo. \n3 - Panquequera para perros. \n4 - Gel frio y caliente para pasar la noche. \nPresioná X para finalizar."
                   );
   
                 }
               
                 break;

        case "3":
          alert("vas a canjear  " + producto3 + " Puntos de tus " + PuntosRegalos + " Puntos acumulados por una panquequera para perros");
            let choose3=prompt(
              "Estás a puntos de canjear tus puntos. es correcto? \n1 SI  \n2 NO ")
               switch (choose3) {
                 case "1":
                  
                   alert("canje exitoso, te quedan " + (PuntosRegalos - producto3) + " puntos para usar");
                   let ContadorPuntos = PuntosRegalo - producto3
                   break;
                 case "2":
                  let opcion = prompt(
                    "Elegí una opción: \n1- Batidora Para mayonesa. \n2 - Secador de secadores de pelo. \n3 - Panquequera para perros. \n4 - Gel frio y caliente para pasar la noche. \nPresioná X para finalizar."
                   );
   
                 }
               
                 break;

                 case "4":
                  alert("vas a canjear  " + producto4 + " Puntos de tus " + PuntosRegalos + " Puntos acumulados por un gel frio para pasar la noche");
                    let choose4=prompt(
                      "Estás a puntos de canjear tus puntos. es correcto? \n1 SI  \n2 NO ")
                       switch (choose3) {
                         case "1":
                          
                           alert("canje exitoso, te quedan " + (PuntosRegalos - producto4) + " puntos para usar");
                           let ContadorPuntos = PuntosRegalo - producto4
                           break;
                         case "2":
                          let opcion = prompt(
                            "Elegí una opción: \n1- Batidora Para mayonesa. \n2 - Secador de secadores de pelo. \n3 - Panquequera para perros. \n4 - Gel frio y caliente para pasar la noche. \nPresioná X para finalizar."
                           );
           
                         }
                       
                         break;
     

     }
     
     break; 
     
    }
  } else {
    alert("SI NO PODES RETENER UN FUCKING CODIGO NO TE MERECES UN PREMIO");
  }
  

