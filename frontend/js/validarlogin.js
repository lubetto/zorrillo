function validar(){
    const usuario=document.getElementById('usuario');
    const clave=document.getElementById('clave');
    if(usuario.value.length==0){
        alert("Ingreses su usuario")
        usuario.focus();
        return 0;
    }
    if(clave.value.length==0){
        alert("Ingrese su contraseña")
        clave.focus();
        return 0;
    }
    
}