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
$('.box-theme-wrap .btn-tab').click(function(e){
    e.preventDefault();
    $('.box-theme-wrap .btn-tab').attr('aria-selected','false');
    $(this).attr('aria-selected','true');
    themeBtnView();
    themeBodyView();
    /* 
    $(선택자).attr('속성명',값A') : 해당 요소의 속성의 값을 값A로 설정
    $(선택자).attr('속성명') : 해당 요소의 속성의 값을 가져옴
    $(선택자).prop('속성명',값A') : 해당 요소의 속성의 값을 값A로 설정
    $(선택자).prop('속성명') : 해당 요소의 속성의 값을 가져옴
    */
})
$('.tm-btn-prev').click(function(e){
    e.preventDefault();
    if($('.btn-tab[aria-selected=true]').hasClass('tab-job')){
        $('.list-category').animate({'margin-left':'0px'},400)
    }
    if($('.btn-tab[aria-selected=true]').hasClass('tab-book')){
        $('.list-category').animate({'margin-left':'-750px'},400)
    }
    if($('.btn-tab[aria-selected=true]').hasClass('tab-show')){
        $('.list-category').animate({'margin-left':'-1500px'},400)
    }
    $('.btn-tab[aria-selected=true]').attr('aria-selected','false').
        parent().prev().find('.btn-tab').attr('aria-selected','true');
    themeBtnView();
    themeBodyView();
})
$('.tm-btn-next').click(function(e){
    e.preventDefault();
    if($('.btn-tab[aria-selected=true]').hasClass('tab-movie')){
        $('.list-category').animate({'margin-left':'-750px'},400)
    }
    if($('.btn-tab[aria-selected=true]').hasClass('tab-marry')){
        $('.list-category').animate({'margin-left':'-1500px'},400)
    }
    if($('.btn-tab[aria-selected=true]').hasClass('tab-farm')){
        $('.list-category').animate({'margin-left':'-2250px'},400)
    }
    $('.btn-tab[aria-selected=true]').attr('aria-selected','false').
        parent().next().find('.btn-tab').attr('aria-selected','true');
    themeBtnView();
    themeBodyView();
    
    
})
    themeBodyView();
    function themeBodyView(){
        var target = $('.btn-tab[aria-selected=true]').attr('data-target');
        $('.box-theme-body .box-body').addClass('display-none');
        $('.box-theme-body>.'+target).removeClass('display-none');
    }
    themeBtnView();
    function themeBtnView(){
        $('.tm-btn-prev').removeClass('display-none');
        $('.tm-btn-next').removeClass('display-none');
        if($('.box-theme-wrap .btn-tab').first().attr('aria-selected')=='true'){
            $('.tm-btn-prev').addClass('display-none');
        }
        if($('.box-theme-wrap .btn-tab').last().attr('aria-selected')=='true'){
            $('.tm-btn-next').addClass('display-none');
        }
    }
    $('.shop-header .tab').click(function(e){
        e.preventDefault();
        $('.shop-header .tab').attr('aria-selected','false');
        $(this).attr('aria-selected','true');
        shopView();
        var target = $(this).attr('data-target');
        if(target=='mall'){
            $('.group-mall').addClass('display-none');
        }else{
            $('.group-mall').removeClass('display-none');
        }

    })
    /* 오른쪽 3번째 컨텐츠에서 상품/쇼핑몰/MEN이 선택되면
    선택된 내용에 맞는 body가 보이도록 하는 함수 */ 
    function shopView(){
        var target= $('.shop-header .tab[aria-selected=true]').attr('data-target');
        $('.box-shop-body>div').addClass('display-none');
        $('.box-shop-body>.'+target).removeClass('display-none')
    }
    shopView();
    tabRandom();
    function tabRandom(){
        var arr=[];
        $('.link-mall').removeClass('random');
        for( ;arr.length < 4; ){
            var r = getRandom(1,12);
            if(arr.indexOf(r)>=0){
                continue;
            }
            arr.push(r);
            if(r<=6){
                $('.box-mall').eq(0).find('.link-mall').eq(r-1).addClass('random');
            }else{
                $('.box-mall').eq(1).find('.link-mall').eq(r-7).addClass('random');
            }
        }
    }
    function getRandom(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }


})