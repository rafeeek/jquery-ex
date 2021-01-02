let taroffset = $("#second_section").offset().top;



$(window).scroll(function() {
    let mainoffset = $(window).scrollTop();
    if(mainoffset>=taroffset){
        $(".navbar").addClass("nav_color")
        $(".navbar").removeClass("py-3")
        $(".over_lay div").eq(1).removeClass("container")
    }else{
        $(".navbar").removeClass("nav_color")
        $(".navbar").addClass("py-3")
        $(".over_lay div").eq(1).addClass("container")
    }
})


$(".coloreContainer i").click(function () {
    let xwithe = $(".boxColor").outerWidth()
    console.log(xwithe)
    let x = $(".coloreContainer").css("left")
    if(x < "0px"){
        $(".coloreContainer").animate({left : "0"} , 1000)
    }else{
        $(".coloreContainer").animate({left : `-${xwithe}`} , 1000)
    }

})

$(document).ready(function () {
    $(".intro").fadeOut(500)
});