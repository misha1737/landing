 $(window).load(function() { 
  $(".loader_inner").fadeOut(); 
  $(".loader").delay(200).fadeOut("slow"); 
});

$(function() {
		width=document.body.clientWidth;
		console.log(width);

if (width>768){
		$(".forma").removeClass("panel");
		$(".umovi").removeClass("panel");
		$(".polit").removeClass("panel");
	}


	$(".panel").css({
		"height":$(window).height()
	});
	var timer;

	

	$(window).resize(function() {
		clearTimeout(timer);
		timer = setTimeout(function() {
			$(".panel").css({
				"height":$(window).height()
			});
		},40);
	});


	$.scrollify({
		section:".panel",
		offset: 0
	});
	
		

	$(".scroll").click(function(e) {
		e.preventDefault();
		$.scrollify("move",$(this).attr("href"));
	});

});
