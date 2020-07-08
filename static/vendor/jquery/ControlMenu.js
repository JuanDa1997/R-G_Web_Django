function Show(){
    $("#Separador").show();
    

    // todas las animaciones de botones se programan aquí
    elemento=event.target.id;
    if (elemento=="Boton-Conciliaciones") {
        $("#Conciliaciones").show();
        $("#Conciliaciones").animate({right: '200px'});
        $("#Civil").removeAttr('style');
        $("#Notarial").removeAttr('style');
        $("#Pensiones").removeAttr('style');
        $("#OtrosServicios").removeAttr('style');
        $("#Civil").hide();
        $("#Notarial").hide();
        $("#Pensiones").hide();
        $("#OtrosServicios").hide();
        $("#Separador").show();
        
    }if (elemento=="Boton-Civil"){
        $("#Civil").show();
        $("#Civil").animate({right: '200px'});
        $("#Conciliaciones").removeAttr('style');
        $("#Notarial").removeAttr('style');
        $("#Pensiones").removeAttr('style');
        $("#OtrosServicios").removeAttr('style');
        $("#Conciliaciones").hide();
        $("#Notarial").hide();
        $("#Pensiones").hide();
        $("#OtrosServicios").hide();
    }if (elemento=="Boton-Notarial"){
        $("#Notarial").show();
        $("#Notarial").animate({right: '200px'});
        $("#Civil").removeAttr('style');
        $("#Conciliaciones").removeAttr('style');
        $("#Pensiones").removeAttr('style');
        $("#OtrosServicios").removeAttr('style');
        $("#Conciliaciones").hide();
        $("#Civil").hide();   
        $("#Pensiones").hide();
        $("#OtrosServicios").hide();
    }if (elemento=="Boton-Pensiones"){
        $("#Pensiones").show();
        $("#Pensiones").animate({right: '200px'});
        $("#Civil").removeAttr('style');
        $("#Conciliaciones").removeAttr('style');
        $("#Notarial").removeAttr('style');
        $("#OtrosServicios").removeAttr('style');
        $("#Conciliaciones").hide();
        $("#Civil").hide();   
        $("#Notarial").hide(); 
        $("#OtrosServicios").hide();           
    }if (elemento=="Boton-Otros"){
        $("#OtrosServicios").show();
        $("#OtrosServicios").animate({right: '200px'});
        // $("#Separador").animate({left: '250px'});
        $("#Civil").removeAttr('style');
        $("#Conciliaciones").removeAttr('style');
        $("#Notarial").removeAttr('style');
        $("#Pensiones").removeAttr('style');
        $("#Conciliaciones").hide();
        $("#Civil").hide();   
        $("#Notarial").hide();
        $("#Pensiones").hide();   
    }
}

function epa(){
    // $("#slider1").show();

    elemento=event.target.id;
    console.log(elemento);
    if (elemento=="boton1") {
        $("#slider1").show();
        $("#slider2").hide();
        $("#slider3").hide();
        $("#boton1").css("background-color","#9b873e");
        $("#boton2").removeAttr('style');
        $("#boton3").removeAttr('style');


    }  
    if (elemento=="boton2") {
        $("#slider2").show();
        $("#slider1").hide();
        $("#slider3").hide();
        $("#boton2").css("background-color","#9b873e");
        $("#boton1").removeAttr('style');
        $("#boton3").removeAttr('style');




    }  
    if (elemento=="boton3") {
        $("#slider3").show();
        $("#slider1").hide();
        $("#slider2").hide();
        $("#boton3").css("background-color","#9b873e");
        $("#boton2").removeAttr('style');
        $("#boton1").removeAttr('style');



    }  

    // $("#subpanel").slideUp();
    // $("#info").show();


    // $("#panel").fadeIn("slow");
    // $("panel").fadeIn(3000);
}