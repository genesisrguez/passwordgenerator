
let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');


const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generar(){
    
    //Convertimos el input en número
    let numeroDigitado = parseInt (cantidad.value);

    //Validamos que el número ingresado sea mínimo 8
    if(numeroDigitado < 8 ){
        alert('La cantidad de caracteres tiene que ser minimo de 8');
    }

    //Variable que inicia vacia para empezarla a construir con el for
    let password = '';

    //Creamos un bucle for para generar números aleatorios con base en el número ingresado.    
    for (let i = 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)]; 
        console.log(caracterAleatorio);

        //Se concatena y se asigna al mismo tiempo
        password+=caracterAleatorio;
    }

    contrasena.value = password;
}

let texto = "texto";
console.log(typeof texto);







