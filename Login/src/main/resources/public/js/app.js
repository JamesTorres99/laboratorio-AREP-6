var controlador = (function(){
    
    var registrar = function(){
        var nombre = document.getElementById("nombre").value;
        var correo = document.getElementById("correo").value;
        var telefono = document.getElementById("telefono").value;
        var fecha = document.getElementById("fecha").value;
        var password = document.getElementById("password").value;
        
        var data = {};
        data.name = nombre;
        data.email = correo;
        data.date = fecha;
        data.phone = telefono;
        data.password = password;
        
        console.log(data);
        
        // Local: 'http://localhost:8080/subastauction'
        // Heroku: 'https://subastauction.herokuapp.com/subastauction'
        fetch('https://subastauction.herokuapp.com/subastauction', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
            })
            .then(response => console.log("registrado"))
            .catch(err => {
                console.log(err);
            });   
    };
    
    var crearEvento = function(){
        
        var nombre = document.getElementById("nombre").value;
        var descripcion = document.getElementById("descripcion").value;
        var fechaInicio = document.getElementById("fechaInicio").value;
        var fechaFin = document.getElementById("fechaFin").value;
        var ofertaInicial = document.getElementById("ofertaInicial").value;
        
        var data = {};
        data.name = nombre;
        data.description = descripcion;
        data.startDate = fechaInicio;
        data.endDate = fechaFin;
        data.initialOffer = ofertaInicial;
        
        // Local: 'http://localhost:8080/subastauction/crearEvento'
        // Heroku: 'https://subastauction.herokuapp.com/subastauction/crearEvento'
        fetch('https://subastauction.herokuapp.com/subastauction/crearEvento', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
            })
            .then(response => console.log("registrado"))
            .catch(err => {
                console.log(err);
            }); 
        
    };
    
    var init = function(){
        
        // Local: 'http://localhost:8080/subastauction/consultarEventos'
        // Heroku: 'https://subastauction.herokuapp.com/subastauction/consultarEventos'
        fetch('https://subastauction.herokuapp.com/subastauction/consultarEventos')
            .then(response => response.json())
            .then(json => viewEvents(json))
            .catch(err => {
                console.log(err);
            });
        
    };
    
    var viewEvents = function(json){
        
        var name;
        var description;
        
        for(var i in json){
            name = json[i].name;
            description = json[i].description;
            
            var s = "<div class='col-lg-3 col-md-6 mb-4 mb-lg-0'>" +
                    "<div class='card rounded shadow-sm border-0'>" +
                    "<div class='card-body p-4'>" +
                    "<img src='https://res.cloudinary.com/mhmd/image/upload/v1556485078/shoes-4_vgfjy9.jpg' alt='' class='img-fluid d-block mx-auto mb-3'>" +
                    "<h5>"+name+"</h5>" +
                    "<p class='small text-muted font-italic'>"+description+"</p>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
            
            $("#divEvents").append(s);
        }
        
    };
    
    return{
        registrar: registrar,
        crearEvento: crearEvento,
        init: init
    };
    
})();

