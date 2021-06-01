// File for your custom JavaScript

// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a.smoothscroll").on('click', function(event) {
//
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();
//
//       // Store hash
//       var hash = this.hash;
//
//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 2000, function(){
//
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });


// Otros JS

(function($){
    "use strict";

// JS para hacer que el tab avance solo automaticamente
        //tab progress animation
            var activetabs = $('#myTab.nav-tabs > li.active');
            var active1 = activetabs.filter('.active');

            // Tab-Pane change function
            var tabChange = function(){
                var tabs = $('#myTab.nav-tabs > li');
                var active = tabs.filter('.active');
                var nextli = active.next('li').length? active.next('li') : tabs.filter(':first-child');
                var nexta = active.next('li').length? active.next('li').find('a') : tabs.filter(':first-child').find('a');

                $(active).removeClass('active');
                $(nextli).addClass('active');
                nexta.tab('show');
            };
            var tabCycle = setInterval(tabChange, 3000);
            // Tab click event handler
            $(function(){
                $('#myTab.nav-tabs > li a').click(function(e) {
                    e.preventDefault();
                    // Parar o loop
                    clearInterval(tabCycle);
                    var prev_tabs = $('#myTab.nav-tabs > li');
                    var prev_active = prev_tabs.filter('.active');


                    $(prev_active).removeClass('active');
                    $(this).closest('li').addClass('active');
                    // mosta o tab clicado, default bootstrap
                    $(this).tab('show');


                    //setInterval(tabChange, 8000);
                    setTimeout(function(){
                        tabCycle = setInterval(tabChange, 3000);
                    }, 0);
                });
            });


// JS para hacer cambio de estado automatico en sección flujo
        setInterval(function()
    {
        // Remove .active class from the active li, select next li sibling.
        var next = $('.setup_inner .setup_item.active').removeClass('active').next('.setup_item');

        // Did we reach the last element? Of so: select first sibling
        if (!next.length) next = next.prevObject.siblings(':first');

        // Add .active class to the li next in line.
        next.addClass('active');
    }, 3000);



})(jQuery)
