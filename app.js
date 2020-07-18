particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

$(document).ready(function () {
    $('body').bootstrapMaterialDesign();
});

$(document).ready(function(){
    $(".extracurr-btn").click(function(){
        if ($(this).hasClass('active')){
            $('#' + this.hash.substr(1).toLowerCase()).toggleClass('active');
        }
    });
});