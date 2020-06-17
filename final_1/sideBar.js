$(function() {
  // $('#sideBar').addClass('sideHide');
  $(window).scroll(function() {
    if ($(this).scrollTop() > 695)  {          /* 要滑動到選單的距離 */
       $('#sideBar').removeClass('sideHide');   /* show sideBar */
    } else {
      $('#sideBar').addClass('sideHide'); /* hide sideBar */
    }
  });
});

//滑動特效
$(function(){
	
	$("#fast,#btn_hp").click(function(){
		console.log($("#fastFashion").offset().top)
    $("html,body").animate({scrollTop:$("#fastFashion").offset().top+10},900);
    return false;
  });

		//$("html,body").animate({scrollTop:0},900,"easeOutBounce");

  $("#slow").click(function(){

    $("html,body").animate({scrollTop:$("#slowFashion").offset().top-110},900);
    return false;
  });

  $("#spirit").click(function(){

    $("html,body").animate({scrollTop:$("#spiritFashion").offset().top-100},900); 
    return false;
  });
     
  $("#about").click(function(){

    $("html,body").animate({scrollTop:$("#aboutFashion").offset().top-100},900);
		return false;

	});

 

});