let facil = document.getElementById("facil");
let medio = document.getElementById("medio");
let dificil = document.getElementById("dificil");

let juego = document.getElementById("juego");

let ganar = document.getElementById("win");

//Array con las imagenes y los nombres de estas

let tablero = [
    {
        name: "perro",
        img: "img/perro.jpg",
        sonido:"audio/perro.mp3"

    },
    {
        name: "perro",
        img: "img/perro.jpg",
        sonido:"audio/perro.mp3"

    },
    {
        name:"ardilla",
        img: "img/ardilla.jpg",
        sonido:"audio/ardilla.mp3"
    },
    {
        name:"ardilla",
        img: "img/ardilla.jpg",
        sonido:"audio/ardilla.mp3"
    },
    {
        name:"conejo",
        img:"img/conejo.jpg",
        sonido:"audio/conejo.mp3"
    },
    {
        name:"conejo",
        img:"img/conejo.jpg",
        sonido:"audio/conejo.mp3"
    },
    {
        name:"gato",
        img: "img/gato.jpg",
        sonido:"audio/gato.mp3"
    },
    {
        name:"gato",
        img: "img/gato.jpg",
        sonido:"audio/gato.mp3"
    },
    {
        name:"koala",
        img:"img/koala.jpg",
        sonido:"audio/koala.mp3"
    },
    {
        name:"koala",
        img:"img/koala.jpg",
        sonido:"audio/koala.mp3"
    },
    {
        name:"mapache",
        img:"img/mapache.jpg",
        sonido:"audio/mapache.mp3"
    },
    {
        name:"mapache",
        img:"img/mapache.jpg",
        sonido:"audio/mapache.mp3"
    },
    {
        name:"oveja",
        img:"img/oveja.jpg",
        sonido:"audio/oveja.mp3"
    },
    {
        name:"oveja",
        img:"img/oveja.jpg",
        sonido:"audio/oveja.mp3"
    },
    {
        name:"panda",
        img:"img/panda.jpg",
        sonido:"audio/panda.mp3"
    },
    {
        name:"panda",
        img:"img/panda.jpg",
        sonido:"audio/panda.mp3"
    },
    {
        name:"rana",
        img:"img/rana.jpg",
        sonido:"audio/rana.mp3"
    },
    {
        name:"rana",
        img:"img/rana.jpg",
        sonido:"audio/rana.mp3"
    },
    {
        name:"tigre",
        img:"img/tigre.jpg",
        sonido:"audio/tigre.mp3"
    },
    {
        name:"tigre",
        img:"img/tigre.jpg",
        sonido:"audio/tigre.mp3"
    }

];

// Al pulsar saca las cartas
facil.addEventListener("click", crearCartas);
medio.addEventListener("click", crearCartas);
dificil.addEventListener("click", crearCartas);


 // Para guardar el id de la carta en un array
 let cartaElegida = [];
 let cartaElegidaId = [];
 let idCarta = [];

 //Creas un array vacio y el resultado lo vacias
var comp = [];
var resultado = "";

//Crear las cartas y el tablero

function crearCartas(){

    //Vacia el contenedor juego para que no se sumen las imagenes
    juego.innerHTML = "";

    //El boton tiene un value por defecto en el HTML y con esto lo pillamos
    let valor = this.value;

    //Cortamos el array a el numero del valor para que se desordenen las img
    //Resta, osea si valor es 8, el largo del array es 12
   arrCorto = tablero.slice(0,valor);


    //Desordenar el array

    //Math.random() ordena entre 0 y 1 ,sin incluir el 1. Al restar -0.5 nos genera números negativos y positivos 
    //para que la función sort() nos re-ordene el array y nos genere de forma aleatoria colocando un elemento delante otro detrás
    arrCorto.sort(() => Math.random() - 0.5);

    //El for recorre el array, si la longitud del array es mayor a i, suma lo que le metamos
    for (let i = 0; i < arrCorto.length; i++) {

        //crear cada carta
       const carta = document.createElement("img");

        const audio = document.createElement("audio");

        //Metes el atributo src y le metes la img del reverso de las cartas
        carta.setAttribute("src","img/reverso.jpg");
        
        //Metemos un atributo con el nombre de data-id y de valor la i
        carta.setAttribute("data-id",i);

        audio.setAttribute("data-id",i);

        //Meter alt
        let nombre = arrCorto[i].name;
        carta.setAttribute("alt",nombre);
        
        //Al hacer click llama a la funcion darVuelta
        carta.addEventListener("click", darVuelta);

        //Añade en el div de nombre juego, las cartas
        juego.appendChild(carta);

            juego.appendChild(audio);

    } 

    //Metemos aqui la funcion para que pille el array corto nuevo que hemos creado

    function darVuelta(){

        //Guardar en idCarta el data-id de la carta que clikemos
        idCarta = this.getAttribute("data-id");

        //Con esto añadimos la carta al array cartaElegida
        cartaElegida.push(arrCorto[idCarta].name);
   
        //Con esto añadimos el data-id al array
        cartaElegidaId.push(idCarta);
   
        //Añadimos a la carta que hemos clikado la imagen
        this.setAttribute("src", arrCorto[idCarta].img);
        

             //Seleccionar audio

             //Convertir en array la nodeList
             const sonidos = Array.from(document.querySelectorAll("audio"));

             //Seleccionar el audio que tenga el mismo data-id que la img
             let sonidosIndice= sonidos[idCarta];
             let voz = sonidosIndice.getAttribute("data-id");
             
            //  console.log("hey" + idCarta)
            //  console.log("hola" + hola)

            //Si el id es el mismo me mete el src y el autoplay a el audio
             if(voz == idCarta){
                 sonidosIndice.setAttribute("src", arrCorto[idCarta].sonido);
                 sonidosIndice.setAttribute("autoplay","true");
             }
   
    comparacion();
    };

    //Fuera de la función para que lo sume
    let contador=0;
   
    // Hacer la comparación

    function comparacion(){

    //Creamos un array con todas las img
    //querySelector() Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
    const cartas = document.querySelectorAll("img");
    // console.log(cartas);
    
            //Metes el resultado en la posicion 0 y en la 1 del array y lo comparas 
            if (!comp[0]) {

           resultado = arrCorto[idCarta].name;
           comp[0] = resultado;

           //Guardas en una variable el data-id para poder seleccionar la img
           uno = cartaElegidaId[0]
        //    console.log("uno"+dos)
        //    console.log("uno"+uno)
            
       } else {

           resultado=arrCorto[idCarta].name;
           comp[1] = resultado;
           dos = cartaElegidaId[1]

        //    console.log("dos"+dos)
        //    console.log("dos"+uno)

           if (comp[0] == comp[1]) {
            //coincide

            //Desactivamos la funcion click darVuelta
                cartas[uno].removeEventListener("click",darVuelta); 
                cartas[dos].removeEventListener("click",darVuelta); 

                //vaciamos la variable
               cartaElegidaId=[];
               
                //Añadimos contador
                contador++;
        
           } else {

          //"no coincide"

               setTimeout(() => {
                cartas[uno].setAttribute("src","img/reverso.jpg");
                cartas[dos].setAttribute("src","img/reverso.jpg");

                //vaciamos la variable
                cartaElegidaId=[];
               }, 500);
               
           }
          

           //vacias el array y el resultado
           comp = [];
           resultado = '';
           cartaElegidaId=[];
       
       }

       if(contador == (valor/2)){

        ganar.style.display = "flex";

        setTimeout(() => {
            location.reload();
        }, 2000);

       }

    //    console.log(comp[0]);
    //    console.log(comp[1]);
  
       };
       
       
    };


