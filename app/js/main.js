
//图片延迟加载
$(function () {
	//全局图片懒加载
	$.fn.lazyload && $("img.lazy").lazyload({
		effect: "fadeIn",
		threshold: __baseREM * 1.355,
		container: '.content' //default:window,change to '.content' by johon at 20170206
	});
	
	
	//导航菜单
	$(".box02_2").bind("click", function () {
		var $box02 = $(".box02").toggleClass("box02_h");
		if (!$box02.hasClass('.box02_h')) {
			$box02.find('ul').childCentered('.hover');
		}
	});
	
	

	//头部下滑搜索

	var $slideSearchBtn = $('#slideSearchBtn');
	if ($slideSearchBtn) {
		$('[data-slide-search]').html(search_tmpl);
		var $slideSearch = $('.slide_search');
		$slideSearchBtn.click(function () {
			$slideSearch.slideToggle(150, function () {
				$(this).find('input[type="search"]').focus();
			});
		});
		$slideSearch.on('click', '.slide-search-close i', function () {
			$slideSearch.slideUp(150);
		});
	}
});
