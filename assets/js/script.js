$(document).ready(function(){
    
    //smooth scroll//
    $(".nav-link").click(function(event){
    if (this.hash !=="") {
        event.preventDefault();
        var gato = this.hash;
    
        $("html, body").animate({
            scrollTop: $(gato).offset().top
        }, 800, function(){
            window.location.hash = gato;
        });
        }
    });

    //Tooltip en Footer//
    $('[data-bs-toggle="tooltip"]').tooltip();

    //Aparecer contenido de tarjetas//
    $(".card-title").click(function(){
		$(".card-text").removeClass("d-none");
	});

});