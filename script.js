var entrar = 1;
function cambiar(link){
    if(entrar == 0){
        document.getElementById("sign-in").className = "sign-in salir";
        document.getElementById("sign-up").className = "sign-up mostrar";
        entrar = 1;
        link.innerHTML ="Iniciar Sesion";
    }else{
        document.getElementById("sign-in").className = "sign-in mostrar";
        document.getElementById("sign-up").className = "sign-up salir";
        entrar = 0;
        link.innerHTML ="Crear Cuenta";
    }
}