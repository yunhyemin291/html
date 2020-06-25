var tmpMenu = [];
$(function(){  
    var defaultMenu = ['사전','뉴스','증권','부동산','지도','영화','뮤직','책','웹툰'];
	var defaultMenuLink 
	= ['https://dict.naver.com/',
		'https://news.naver.com/',
		'https://finance.naver.com/',
		'https://land.naver.com/',
		'https://map.naver.com/v5/?c=14139734.6171725,4507639.6434387,15,0,0,0,dh',
		'https://movie.naver.com/',
		'https://vibe.naver.com/about',
		'https://book.naver.com/',
		'https://comic.naver.com/index.nhn'
	]
	var selectMenu = [];
	var selectMenuLink = [];
	var allMenuLink = ['모든 링크가 위에처럼 있어야함'];
	var tmpMenu = [];
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
    //더보기버튼
    $('.more-btn').click(function(){
        
        $('.service-nav.set').toggleClass('display-none');
		$('.box-service-menu.set').toggleClass('display');
        $('.more-btn').toggleClass('display-none');
        
        
    })
    $('.service-data-check').click(function(){
        var selMenu = $(this).text();
        if(tmpMenu.indexOf(selMenu)>=0){
            tmpMenu.splice(tmpMenu.indexOf(selMenu),1);
            $(this).find('input').prop('checked',false);
        }else{
            if(tmpMenu.length==5){
                alert('최대 5개까지 설정할 수 있습니다.')
                return;
            }
            tmpMenu.push(selMenu);
            $(this).find('input').prop('checked',true);
        }
        $(this).find('icon-check').toggleClass('checked');
        var cnt=0;
        var max=5;
    })
    //메뉴 설정 버튼 클릭
    $('.btn-menu-set').click(function(){
		$('.box-service-menu.display').addClass('display-none');
		$('.box-service-menu.set').removeClass('display-none');
		$('.service-nav.set').addClass('display-none');
        $('.service-nav.display-none').removeClass('display-none');
        $('.list-nav.display').addClass('display-none');
        $('.list-nav.type-empty.display-none').removeClass('display-none');
		//검은색 메뉴 박스 부분
		var cnt = 0;
		var max = 5;
		$('.box-menu-black').each(function(){
			if(cnt < selectMenu.length){

			}
			else if(cnt < max){
				if(selectMenu.length == cnt)
					$(this).addClass('select');	
				$(this).addClass('box-empty');
				$(this).find('.link-menu-black').text('');
				$(this).removeClass('display-none');
			}else{
				$(this).addClass('display-none')
			}
			cnt++;
		})
		$('.box-serivce-check input').each(function(){
			var isChecked = $(this).prop('checked');
			if(isChecked){
				$(this).siblings('.icon-check').addClass('checked')
			}
		})
    })
    $('.btn-set').click(function(){
        if(!$(this).hasClass('not')){
            $('.btn-set>i').removeClass('set');
            $(this).find('i').addClass('set');
        }
       
    })
    $('.thumb-box').hover(function(){
        $(this).find('img').toggleClass('display-none');
        $(this).find('.popup-wrap').toggleClass('display');
    })
    $('.popup-wrap>a').hover(function(){
        $(this).toggleClass('active');
        $(this).siblings().toggleClass('disable');
    })
$('.btn-prev').click(function(){
    $('.eg-flick-panel').children().last().detach().prependTo('.eg-flick-panel').css('margin-left','-281px')
    $('.eg-flick-panel').children().first().animate({'margin-left':'0'},400)      
    
})
$('.btn-next').click(function(){
    $('.eg-flick-panel').children().first().animate({'margin-left':'-281px'},400,function(){
        $(this).detach().appendTo('.eg-flick-panel').removeAttr('style');
    })
})

})