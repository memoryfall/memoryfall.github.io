$(document).ready(function () {
            $(".panel-body").hide();
			
			$(".zhankai").click(function () {
			    $(this).parent().parent().next().slideToggle("slow");
            });
			
			
        });