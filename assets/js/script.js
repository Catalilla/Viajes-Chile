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
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl){
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    //Desaparecer contenido tarjetas//
    $(".card-title").click(function() {
        $(".card-text").toggle("slow");
      });
      

});