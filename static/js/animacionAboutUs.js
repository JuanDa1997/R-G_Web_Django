AOS.init();
function epa(){
    elemento=event.target.id;
    console.log(elemento); 
    
    if (elemento == "Notarial") { 
        Swal.fire({
            title: 'Derecho Notarial',
            html:'<div style="text-align: justify;"><li>Escrituración</li><li>Asesoría de compra y venta de bienes inmuebles</li><li>Hipotecas</li><li>Sucesiones</li></div>',
            imageUrl: '../static/img/law.png',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Custom image',
            footer: '<a href="http://127.0.0.1:8000/Contact/#SecContact">¡Haz click aquí para agendar una cita!</a>'
        });
    }if (elemento == "Civil"){
        Swal.fire({
            title: 'Derecho Civil',
            html: '<div style="text-align:justify;"><li>Sucesiones</li><li>Pertenencia</li><li>Ejecutivos</li><li>Desembargos</li><li>Entre otros</li></div>',
            imageUrl: '../static/img/law (1).png',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Custom image',
            footer: '<a href="http://127.0.0.1:8000/Contact/#SecContact">¡Haz click aquí para agendar una cita!</a>'
        });
    }if (elemento == "Pension"){
        Swal.fire({
            title: 'Pensión',
            html: '<div style="text-align: justify;"><li>Sustitución pensional</li><li>Sobrevivencia</li><li>Invalidez</li><li>Indemnización sustitutiva</li><li>Devolución de aportes</li><li>vejez</li></div>',
            imageUrl: '../static/img/retirement.png',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Custom image',
            footer: '<a href="http://127.0.0.1:8000/Contact/#SecContact">¡Haz click aquí para agendar una cita!</a>'
        });
    }if (elemento == "Laboral"){
        Swal.fire({
            title: 'Derecho Laboral',
            html: '<div><li>De única instancia</li><li>Primera instancia</li></div>',
            imageUrl: '../static/img/worker.png',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Custom image',
            footer: '<a href="http://127.0.0.1:8000/Contact/#SecContact">¡Haz click aquí para agendar una cita!</a>'
        });
    }
    if (elemento == "Conciliaciones"){
        Swal.fire({
            title: 'Conciliaciones',
            html: '<div style="text-align: justify;"><li>Derecho de familia</li><li>Fijación de alimentos</li><li>Custodia</li><li>salida del país</li><li>Derecho comercial</li><li>Divorcio</li><li>Liquidación de sociedad conyugal</li><li>Insolvencia persona natural no comerciante</li></div>',
            imageUrl: '../static/img/help.png',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Custom image',
            footer: '<a href="http://127.0.0.1:8000/Contact/#SecContact">¡Haz click aquí para agendar una cita!</a>'
        });
    }
}

function SlideMenu(){
    console.log("entro");
    document.getElementById('btn-menu').checked = false;  
}   

function link(){
    elemento=event.target.id;
    if (elemento =="instagram") {
        window.location="https://www.instagram.com/juandavidruizz/";
    }if (elemento == "whatsapp") {
       window.location= "https://api.whatsapp.com/send?phone=573104878925&text=Hola me gustaría cotizar un sitio Web"
    }if (elemento == "facebook"){
        window.location = "https://www.facebook.com/MediaKing-104698787986444";
    }  
}