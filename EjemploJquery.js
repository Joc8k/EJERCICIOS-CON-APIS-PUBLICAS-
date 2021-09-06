
// OBTENER DATOS DE API PUBLICA 

var nombre = document.querySelector('#name');
var apellido = document.querySelector('#lastName');
var correo = document.querySelector('#email');

function obtener(){
    
    $.ajax({
        type: 'GET',
        url: 'https://reqres.in/api/users/2',
        success: function(data){
            nombre.innerHTML = "NOMBRE :  " + data.data.first_name;
            apellido.innerHTML = "APELLIDO : " + data.data.last_name;
            correo.innerHTML = "CORREO : " + data.data.email;
        },
        data: {
            

            
        },
        
           
    }).done(function(){});
}

var boton = document.querySelector('#btn');

boton.addEventListener('click', obtener);


// CREAR DATOS EN API PUBLICA 
var nombre2 = document.querySelector('#nombre');
var trabajo = document.querySelector('#trabajo');

function crear(){ 

    var name_login = document.querySelector('#name_login');
    var trabajo_login = document.querySelector('#trabajo_login')
    $.ajax({
        type: 'POST',
        url:'https://reqres.in/api/users', 
        success: function(data){
            console.log(data);
            
        },
        data:{
    
            name:nombre2.value,
            job: trabajo.value,
        
        }
        
    }).done(function(){});
}
var btn = document.querySelector('#crear_user');
var btn_mostrar_registro = document.querySelector('#mostrar_login');
btn.addEventListener('click', crear);



