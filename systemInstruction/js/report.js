$(function(){

    //左边导航鼠标悬停
    var allList = $(".selectable");
	for(var i=0;i<allList.length;i++){
		allList[i].index = i;
		
		$(allList[i]).click(function(){
			var div_name = $(this).children().attr("class");
			//var h = $(div_name).offset().top;
			$('html, body').animate({  
				scrollTop: $(div_name).offset().top-162
			}, 0);  			
			//console.log(h);
		});
		$(allList[i]).mouseover(function(e) {  
			addNavStyle(this.index,allList);
		});
		$(allList[i]).mouseout(function(e) {  
			removeNavStyle(this.index,allList);
		}); 
	};
	
    //向下滚动左侧导航固定位置
	
	var left_height = $("#left_list").width()+30;  //固定
	//确定右边内容的宽度
	var nav_width_first = $("#content1").width()*0.95-left_height-10;
	console.log(nav_width_first);
	$(".b_right").css("width",nav_width_first+"px");

	//当浏览器宽度变化的时候，改变内容的宽度
	$(window).resize(checkRightWidth);
    $(window).scroll(function(){
        var nav_height = $(".top").height() + $(".b_title").height();
        var height = $(window).scrollTop();
		$("#hide_box").css("width",left_height+"px");

    });

   


	//dataTable
	//无排序的表格
	$('.table_basic').DataTable({
		
		"paging":   false,
		"info":     false,
		"ordering": false,
		"searching":false,
		"sScrollX": "100%",
		"sScrollXInner": "100%", 
	});  
	
	
    for(var i=0 ; i<p_n.length;i++){
		var name = p_n[i];
		$("."+name+" .carousel").jCarouselLite({
			btnNext: "."+name+" .next",
			btnPrev: "."+name+" .prev",
			mouseWheel: true,
			circular: false,
			visible: 1,
			afterEnd: function(){
				var style = $(this).attr("style").split(";");
				var len = style.length;
				var left = style[len-2];
				
				var re = /\d+/g;
				var num = re.exec(left)[0];
				var num = num/480+1;

				var name = $(this).attr("class");
				$("#"+name).text(num);
			}
		});
	}
	$("a#examplex").fancybox({
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over"><font color="white">' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</font></span>';
		}		
	});		
	
	//
	$(".next").click(function(){
		
	});
});


//左边导航的滚动监听
$(function(){

    $(window).scroll(function(){
        var top = $(document).scrollTop();
        var list = $(".selectable");           //定义变量，左边导航          //定义变量，获取滚动条的高度
        var p_list = $(".r_part_box");    //定义变量，查找.item
		//滚动时导航变化
		p_list.each(function(i){  
			var m = p_list[i];  
			var p_listTop = m.offsetTop-162;
			var h=$(m).parent().height();
            var top1 = 0;   
            
			if (typeof(top) == "object"){
				top1 = top.scrollY;
			}else{
				top1 = top;	
			};  
                
			if(  p_listTop-2 < top1 && top1< (p_listTop+h+30)){
				$(".selectable.active").removeClass("active");
				$(list[i]).addClass("active");
			};

		});
    });
});
//===========================函数========================

//左边导航的控制
function addNavStyle(i,allList){
	$(allList[i]).attr("style","background:#fff");
};
function removeNavStyle(i,allList){
	$(allList[i]).attr("style","");
};
//改变右边报告主体内容的宽度
function checkRightWidth(){
	var left_height = $("#left_list").width()+30;  //固定
	//left_height
	var nav_width = $("#content1").width()*0.99-left_height-10;
	$(".b_right").css("width",nav_width+"px");
};