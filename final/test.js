
$(function() {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 695)  {          /* 要滑動到選單的距離 */
       $('#navBar').removeClass('navHide');  /* show navBar */
       $('#icon_bar').removeClass('iconHide'); 
    

    } else {
      $('#navBar').addClass('navHide'); /* hide navBar */
      $('#icon_bar').addClass('iconHide');

    }
  });
});

//active 特效for slide~ qq又沒抓到了 抓到了><
$(document).ready(function() {
	$('input[name="r"]').bind('click', function(event) {
 
		console.log($('input[name="r"]:checked').attr('id'))
		$('.select label').removeClass('active')
		$('.select label[for="'+$('input[name="r"]:checked').attr('id')+'"]').addClass('active')
	});
});

//觀察器我完全可能不太懂吧:))
//omg 有大bug:))

var options ={
	threshold:[0],//if threshold= [0,0.2,0.4,0.6,0.8,1] scroll back 時會有bug
};
let prevRatio = 0;//這是啥咚咚啦:))
const callback =(entries, observer) =>{
	entries.forEach(entry => {

		const {intersectionRatio,target} = entry;
		if (intersectionRatio > prevRatio){
			document.getElementById(entry.target.dataset.target).style.color='white'
		}else{
			
			document.getElementById(entry.target.dataset.target).style.color='#717273'
		}
		prevRatio = intersectionRatio;
	})
}
console.log(prevRatio)

var observer= new IntersectionObserver(callback,options);

var part_ff = document.getElementById('part_ff');//這個是快時尚那裡的東東
var part_sf = document.getElementById('part_sf');//這個是slow時尚那裡的東東
var part_sp = document.getElementById('part_sp');//這個是sp時尚那裡的東東
var part_au = document.getElementById('part_au');//這個是au時尚那裡的東東


observer.observe(part_ff);//去給我觀察part_ff:)
observer.observe(part_sf);//去給我觀察part_sf:)
observer.observe(part_sp);//去給我觀察part_sp:)
observer.observe(part_au);//去給我觀察part_au:)
