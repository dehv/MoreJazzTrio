$(document).ready(function() {
    
   $('#fullpage').fullpage(); 
    x = 0;
    setInterval(function() {
        x-=1;
        $('.home').css('background-position', x + 'px 0');
    }, 30);
});