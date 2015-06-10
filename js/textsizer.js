
function ts( trgt,inc ) {
	$( ".crecer" ).each(function() {
		var actual=$(this).css("font-size"); 
		var current=parseInt(actual.replace("px", "")); 
		$(this).css("font-size",(current+inc)+"px");
	});
}