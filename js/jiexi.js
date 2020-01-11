$(function(){
	$("button").click(function(){
			$("iframe").css("display","block");
			$("#readme").css("display","none");
			$("iframe").attr("src",$(this).attr("data-url")+$("#input input").val());
		
	})
})