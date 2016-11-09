$(function(){
    var width=$(window).width();

    $(window).resize(function () {
        width=$(window).width();

    })
    var num=0;
    var next=0
 /*   function move(type){
        type=type||"next";
        if(type=="pre") {
            num--;
            if(num<0){
                num=$(".banner .images li").length-1;
            }
            $(".banner .images ul>li").eq(num).css("left","0")
            $(".banner .images ul>li").eq(next).animate({left:width})

        }else if(type=="next"){
            num++;
            if(num>$(".banner .images li").length){
                num=0;
            }
            $(".banner .images ul>li").eq(num).css("left","0")
            $(".banner .images ul>li").eq(next).animate({left:"-"+width})
        }
        next=num;
    }*/
    var t =  setInterval(move,1000)
})