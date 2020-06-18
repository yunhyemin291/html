$(function(){  
    $('html').scrollTop(0);
    $('.banner-close').click(function(e){        
        $('.box-whale').addClass('display-none');
        //3일동안 보지 않기를 클릭했을 때 URL에 #이 붙는걸 방지
        e.preventDefault();
    })

    $('.arw').click(function(){
        $('.icon-arw').toggleClass('icon-arw-up');
        $('.auto-frame').toggleClass('display-block');
    })
    $('.words-turnoff').hover(function(){
        $('.words-turnon').toggleClass('display-inline')
    })
    $('.words-turnoff').click(function(e){
        $('.arw').click();
        e.preventDefault();
    })
})