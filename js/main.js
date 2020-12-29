let navewidth =$(".leftnave").outerWidth()
$(".menuicon").click(function(){
    let leftnave = $(".leftnave").css("left")
    if(leftnave<"0px"){
        $(".leftnave").animate({left : 0} , 500)
        $(".weltext").animate({left : 150} , 800)
    }else{
        $(".leftnave").animate({left : -`${navewidth}`} , 500)
        $(".weltext").animate({left : -`${0}`} , 800)
    }
    console.log(leftnave)
})
$(".closeicon").click(function test(){
    $(".leftnave").animate({left : -`${navewidth}`} , 500)
    $(".weltext").animate({left : -`${0}`} , 800)
})


$(".h4anddiv div").eq(0).css("display","block")
$(".h4anddiv h4").click(function () {
    $(this).next().slideToggle(500)
    $(".h4anddiv div").not($(this).next()).slideUp(500);
})


let countdowner = new Date("jan 23 2021 18:32:00").getTime();

let z = setInterval(() => {
    console.log(new Date())
    let now = new Date().getTime();
    let timebetwen = countdowner- now
    let day = Math.floor(timebetwen / (1000 * 60 * 60 *24))
    let hours = Math.floor((timebetwen % (1000 * 60 * 60 *24)/(1000*60*60)))
    var minutes = Math.floor((timebetwen % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timebetwen % (1000 * 60)) / 1000);
    if(day<= 0 && hours <= 0 && minutes<= 0 && seconds<= 0){
        $(".mainback").html(`<span class="mt-5">time is out</span>`)
    }else{
        $(".alltoshow div").eq(0).html(day+"d")
        $(".alltoshow1 div").eq(0).html(hours+"h")
        $(".alltoshow2 div").eq(0).html(minutes+"m")
        $(".alltoshow3 div").eq(0).html(seconds+"s")
    }
}, 1000);


$("#textarieame").keyup(function () {
    let value = this.value;
    let length = value.length
    let distance = 100 - length
    if (distance == 0 ){
        $(".form-group label").html(`<span class="text-danger">your available character finished</span> Characyer Reamining`)
    }else{
        $(".form-group label").html(`${distance} Characyer Reamining`)
    }
})

