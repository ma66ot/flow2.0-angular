jQuery(document).ready(function($){
	jQuery.fn.exists = function(){return this.length>0;}
	if ($('#slideshow-01').exists()) {
		$('#slideshow-01').flexslider({
			animation: "slide",
			directionNav: false,
			pauseOnHover:true,
			useCSS : false
		});
	}
	if ($('#slideshow-02').exists()) {
		$('#slideshow-02').flexslider({
			animation: "slide",
			directionNav: false
		});
	}
	if ($('#slideshow-03').exists()) {
		$('#slideshow-03').flexslider({
			animation: "slide",
			directionNav: false
		});
	}
	if ($('.two-cols .column-left .frame, .two-cols .right-column').exists()) {
		$(window).load(function() {
			equalheight('.two-cols .column-left .frame, .two-cols .right-column');
		});
		$(window).resize(function(){
			equalheight('.two-cols .column-left .frame, .two-cols .right-column');
		});
	}
	if ($('#content .frame, #sidebar').exists()) {
		$(window).load(function() {
			equalheight('#content .frame, #sidebar');
		});
		$(window).resize(function(){
			equalheight('#content .frame, #sidebar');
		});
	}
	if ($('.tooltip-area').exists()) {
		$('.tooltip-area').tooltip();
	}
	if (window.PIE) {
		$('.ie-fix, .steps .number em, .steps .number span, .steps .active .number, .info-section .box .frame').each(function() {
			PIE.attach(this);
		});
	}
	if ($('.equal-height').exists()) {
		$('[data-equal-height]').make_children_equal_height();
		$('body').on(
			'resize',
			$('[data-equal-height]').make_children_equal_height()
		);
	}
})