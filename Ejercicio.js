
function apiJson(){

    var body = document.querySelector("#conten");

    
    var id = document.querySelector("#id");
    var name = document.querySelector("#name");
    var email = document.querySelector("#email");
    var comment = document.querySelector("#description");


    


    $.ajax({


        type: "GET",
        url: "https://jsonplaceholder.typicode.com/comments",
        success: function(data)
        {

            for (var i = 0; i < data.length; i++)
            {

                var h4id = document.createElement("h4");
                var h4name = document.createElement("h4");
                var h4email = document.createElement("h4");
                var h4comment = document.createElement("h4");

                conten.appendChild(h4id);
                conten.appendChild(h4name);
                conten.appendChild(h4email);
                conten.appendChild(h4comment);

                h4id.innerHTML += "ID : " + data[i].id;
                h4name.innerHTML += "Nombre : " + data[i].name;
                h4email.innerHTML += "Correo : " + data[i].email;
                h4comment.innerHTML += "Comentario : " + data[i].body;
               
            }



            

        },



    }).done(function(){});


    


}
var btn = document.querySelector("#btn");
btn.addEventListener("click", apiJson)