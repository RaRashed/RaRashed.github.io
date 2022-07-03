//nav bar color changed
$(window).scroll(function(){
    $(".navbar").toggleClass('scrolled',$(this).scrollTop()>20)

});

//navbar color changed end

//text effect
var typed = new Typed('.title',{
    strings: ["I am Rashedul Aziz Rashed",'A Laravel Developer'],
    typeSpeed:100,
    loop:true
});
//text effect end