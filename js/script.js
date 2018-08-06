$(document).ready(function() {
	$('li.point').click(function(event) {
		$('li.point').removeClass('active');
		$(this).addClass('active');
		var pos = $(this).index()+1;
		$('.show').addClass('move-to-left').one('webkitAnimationEnd', function(event) {
			$('.move-to-left').removeClass('show');
			$('.move-to-left').removeClass('move-to-left');
		});;
		$('.slide:nth-child('+pos+')').addClass('show').addClass('rotate-from-left').one('webkitAnimationEnd', function(event) {
			$('.rotate-from-left').removeClass('rotate-from-left');
		});;
	});

	$('a.nav-link').click(function(event) {
		$('a.nav-link').removeClass('active');
		$(this).addClass('active');
		var id_pos = $(this).attr('href');
		var pos = $(id_pos).offset().top;
		$('html, body').animate({scrollTop: pos-100},1400,'easeOutBack');
	});

});