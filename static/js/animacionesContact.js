AOS.init();
function link(){
    console.log("entro");
    elemento=event.target.id;

    if (elemento =="instagram") {
        window.location="https://www.instagram.com/juandavidruizz/";
    }if (elemento == "whatsapp") {
       window.location= "https://api.whatsapp.com/send?phone=573104878925&text=Hola me gustaría cotizar un sitio Web"
    }if (elemento == "facebook"){
        window.location = "https://www.facebook.com/MediaKing-104698787986444";
    }
   
}

function SlideMenu(){
    console.log("entro");
    document.getElementById('btn-menu').checked = false;
}   
