//下拉导航
(function(){


	var time = null;
	var list = $("#navlist");
	var box = $("#navbox");
	var lista = list.find("a");
	
	for(var i=0,j=lista.length;i<j;i++){
		if(lista[i].className == "now"){
			var olda = i;
		}
	}
	
	var box_show = function(hei){
		box.stop().animate({
			height:hei,
			opacity:1
		},400);
	}
	
	var box_hide = function(){
		box.stop().animate({
			height:0,
			opacity:0
		},400);
	}
	
	lista.hover(function(){
		lista.removeClass("now");
		$(this).addClass("now");
		clearTimeout(time);
		var index = list.find("a").index($(this));
		box.find(".children").hide().eq(index).show();
		var _height = box.find(".children").eq(index).height()+0;
		box_show(_height)
	},function(){
		time = setTimeout(function(){	
			box.find(".children").hide();
			box_hide();
		},50);
		lista.removeClass("now");
		lista.eq(olda).addClass("now");
	});
	
	box.find(".children").hover(function(){
		var _index = box.find(".children").index($(this));
		lista.removeClass("now");
		lista.eq(_index).addClass("now");
		clearTimeout(time);
		$(this).show();
		var _height = $(this).height()+0;
		box_show(_height);
	},function(){
		time = setTimeout(function(){		
			$(this).hide();
			box_hide();
		},50);
		lista.removeClass("now");
		lista.eq(olda).addClass("now");
	});

})();

function setContentTab(name, curr, n) {
    for (i = 1; i <= n; i++) {
        var menu = document.getElementById(name + i);
        var cont = document.getElementById("con_" + name + "_" + i);
        menu.className = i == curr ? "up" : "";
        if (i == curr) {
            cont.style.display = "block";
        } else {
            cont.style.display = "none";
        }
    }
}

	//置顶
	function DoTop(){

		$(".go-top").click(function(){
			$("body,html").animate({
				"scrollTop":"0px"
			},300)
		});
		
	}

	DoTop();

$(".wapnav .item-has-child").mouseenter(
	function(){
		var th=$(this);st=setTimeout(function(){th.children(".dropdown").slideDown(200);},200)
	}
	
	).mouseleave(function(){clearTimeout(st);$(this).children(".dropdown").slideUp(200);}
)



$(".nav-toggle").click(function(){
  $(".wapnav").toggle(200);
});
var kuan=document.body.clientWidth;

if(kuan<980){
	$(".link li").removeAttr("style"); 
}



$(window).scroll(function(){

			var windowScrollTop = $(window).scrollTop();
			var windowH = $(window).outerHeight();

			if(windowScrollTop>windowH-windowH/2){

				$(".online-service").fadeIn();
				
			}else{
				$(".online-service").fadeOut();
			}


		});