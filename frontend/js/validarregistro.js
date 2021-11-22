function validar(){
    const usuario=document.getElementById('usuario');
    const email=document.getElementById('email');
    const clave=document.getElementById('clave');
    const clave2=document.getElementById('clave2');
    const expReg = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if(usuario.value.length==0){
        alert("Ingreses un nombre de usuario")
        usuario.focus();
        return 0;
    }
    if(email.value.length==0){
        alert("Ingreses un correo electronico")
        email.focus();
        return 0;
    }
    if(expReg.test(email.value)==false){
        alert("Ingrese un email válido");
        email.focus();
        return 0;
    }
    if(clave.value.length==0){
        alert("Ingrese una contraseña")
        clave.focus();
        return 0;
    }
    if(clave.value.length<6){
        alert("La Contraseña debe tener más de 6 caracteres")
        clave.focus();
        return 0;
    }
    if(clave2.value.length==0){
        alert("Confirme su contraseña")
        clave2.focus();
        return 0;
    }
    if(clave.value!=clave2.value){
        alert("Las constraseñas no coiciden")
        clave.focus();
        return 0;
    }
}