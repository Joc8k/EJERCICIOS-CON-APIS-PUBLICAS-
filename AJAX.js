var divAJAX = document.querySelector('#contenedor')
var btn = document.querySelector('#btn');

function llamado(){

    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        success: function(data){


            for (var i=0; i< data.length; i++){

                var json = JSON.stringify(data[4]);
                divAJAX.innerHTML = json;
                console.log(json);
            }

        },

        

    }).done(function(){


        mnsj();

    });


}
function mnsj(){ 
    alert('EJECUCION CORRECTA');
}

function llamado2(){ 

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))


}

btn.addEventListener('click', llamado);