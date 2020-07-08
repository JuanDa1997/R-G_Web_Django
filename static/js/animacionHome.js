let slider = document.querySelector('.slider-contenedor');
let sliderInd = document.querySelectorAll('.slider-test');
let contador = 1;
let tamañoWidth = sliderInd[0].clientWidth; 
let intervalo = 4000;

window.addEventListener("resize", function(){
    tamañoWidth=sliderInd[0].clientWidth;
})
setInterval(function tiempo(){
    slides();
}, intervalo);

function slides(){

    slider.style.transform = 'translate('+(-tamañoWidth * contador) + 'px)';
    slider.style.transition = 'transform 1s';
    contador++;

    if(contador == sliderInd.length){
        contador=0;
        setTimeout(function(){
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 0s';
        },intervalo)
    }
}

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
            html: '<div style="text-align:justify;"><li>Pertenencia</li><li>Ejecutivos</li><li>Desembargos</li><li>Entre otros</li></div>',
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
            html: '<div style="text-align: justify;"><li>Derecho de familia</li><li>Fijación de alimentos</li><li>Custodia</li><li>salida del país</li></div>',
            imageUrl: '../static/img/help.png',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Custom image',
            footer: '<a href="http://127.0.0.1:8000/Contact/#SecContact">¡Haz click aquí para agendar una cita!</a>'
        });
    }

}

// scrool



// let ubicacionPrincipal = window.pageYOffest;
AOS.init();

// window.addEventListener("scroll", function(){
//     let desplazamientoActual = window.pageXOffset;
//     if(ubicacionPrincipal>=desplazamientoActual){
//         document.getElementsByTagName("menu")[0].style.top = "0px"
//     }else{
//         document.getElementsByTagName("menu")[0].style.top = "-100px"
//     }
//     ubicacionPrincipal=desplazamientoActual;
// })

function link(){
    console.log("entro");
    elemento=event.target.id;

    if (elemento =="instagram") {
        window.location="https://www.instagram.com/juandavidruizz/";
    }if (elemento == "whatsapp") {
       window.location= "https://api.whatsapp.com/send?phone=573104878925&text=Hola me gustaría cotizar un sitio Web"
    }
   
}