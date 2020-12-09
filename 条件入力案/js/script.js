
$(function () {

  //
  // ナビメニュー（ヘッダー）
  //

    var scrollElm;
    var scrollpos;

    $('.zdo_drawer_button').click(function () {

      $(this).toggleClass('active');

      if ($('.zdo_drawer_button').hasClass('active')){
        scrollElm = document.scrollingElement;

        if (scrollElm == null){
          scrollpos = $('html').scrollTop();
          $('html').addClass('noscroll').css({'top': -scrollpos});
        }else{
          scrollpos = scrollElm.scrollTop;
          $(scrollElm).addClass('noscroll').css({'top': -scrollpos});
        }

        $('.zdo_drawer_bg').fadeIn();
        $('nav').addClass('open');
      }else{
        if (scrollElm == null){
          $('html').removeClass('noscroll');
          $('html').scrollTop(scrollpos);
        }else{
          $(scrollElm).removeClass('noscroll');
          scrollElm.scrollTop = scrollpos;
        }
        $('.zdo_drawer_bg').fadeOut();
        $('nav').removeClass('open');
      }

    })
    $('.zdo_drawer_bg').click(function () {
      $(this).fadeOut();
      $('.zdo_drawer_button').removeClass('active');
      $('nav').removeClass('open');
      $('html,body').removeClass('noscroll');
    });
    $(".zdo_drawer_nav").children("li").children("span").on("click", function () {
      $(this).next("ul.sub_menu").slideToggle();
      $(this).toggleClass("active");
    });





  /*----------------------------------------------------------*/
  /* ページの先頭に戻るボタンの制御                           */
  /*----------------------------------------------------------*/
  
  	var topBtn=$('#pageTop');
	topBtn.hide();
	 
	//◇ボタンの表示設定
	$(window).scroll(function(){
	  if($(this).scrollTop()>80){
		//---- 画面を80pxスクロールしたら、ボタンを表示する
		topBtn.fadeIn();
	  }else{
		//---- 画面が80pxより上なら、ボタンを表示しない
		topBtn.fadeOut();
	  } 
	});
	 
	// ◇ボタンをクリックしたら、スクロールして上に戻る
	topBtn.click(function(){
	  $('body,html').animate({
	  scrollTop: 0},500);
	  return false;
	});


  //
  // ページTOPへ戻る
  //

    var topBtn = $('#pageTop');
    topBtn.hide();

    //ボタンをクリックしたら、スクロールして上に戻る
    topBtn.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });


	//アコーディオン
	$(".choose_box dt").click(function(){
		$(this).next().slideToggle();
		title = $(this);
		$(title).toggleClass("open")
	});

	$(document).keydown(function(e){
		if(e.which==13){
			return false;
		};
	});


});
