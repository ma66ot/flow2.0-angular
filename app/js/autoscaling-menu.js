/*!
*
* Auto Scaling Menu 0.1
*
* Modify navigations' elements' width to fit the navigation width.
*
* Copyright (c) 2011 Łukasz Kliś (klis.pl)
*
* License: Creative Commons CC-BY-SA 3.0
*
* GitHub: http://github.com/lukaszklis/AutoScalingMenu
*
*/

(function($){
  
  $.fn.autoScalingMenu = function(options){

    var $menu = $(this[0]),
        $menuWidth = $menu.width(),
        $links = $menu.children('li'),
        $linksWidth = 0,
        $widerLinksWidth = 0;
    
    var settings = {
      tag: 'a', // Assign a tag which should be resized, anchors by default
      spacing: 1 // Spacing between each navigation's item, 0 by default
    }
    $.extend(settings, options);
    
    $menu.addClass('scaling');
    
    $links.each(function(){
      var $el = $(this).find(settings.tag);
          $elWidth = $el.width() + settings.spacing;
      
      $linksWidth += $elWidth;
    });
    
    var $padding = Math.floor(($menuWidth - $linksWidth) / $links.length);
    
    $links.each(function(){
      var $el = $(this).find(settings.tag),
          $currentWidth = $el.width(),
          $newWidth = $currentWidth + $padding;
      
      $el.css('width', $newWidth);
      
      $widerLinksWidth += $newWidth;
    });
        
    if ($widerLinksWidth < $menuWidth) {
      var $difference = $menuWidth - $widerLinksWidth - $links.length * settings.spacing;
      
      $links.last()
            .find(settings.tag)
            .css('width', '+=' + $difference);
    }

  }

})(jQuery);
$(function(){
			$('.navbar-nav').autoScalingMenu();
		});
		$(window).resize(function() {
			setTimeout(function(){
				$('.navbar-nav').autoScalingMenu()},250);
			
		});
		$(window).scroll(function() {
			setTimeout(function(){
				$('.navbar-nav').autoScalingMenu()},250);
			
		});