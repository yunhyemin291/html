$(function(){
    setInterval(function(){
        $('.box-rolling-news').first().animate({'margin-top':'-24px'},700,function(){
            $(this).detach().appendTo('.box-rolling-newslist').css('margin-top','0px').removeAttr('style');
        });
    },2000)

    
    var cardRollingNum=cardRolling();
    $('.card-wrap').hover(function(){
        //마우스가 요소 안으로 들어갈때
        clearInterval(cardRollingNum);
    },function(){
        //마우스가 요소 밖으로 나갈때
        cardRollingNum = cardRolling();
    })


    function cardRolling(){
        return setInterval(function(){
            $('.eg-flick-panel').children().first().animate({'margin-left':'-281px'},400,function(){
                $(this).detach().appendTo('.eg-flick-panel').removeAttr('style');
            });
        },3000)
    }    
})