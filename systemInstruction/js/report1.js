$(function(){
	$("#left_list li").click(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	})
    var mk=$(".r_part_box");
    var kk=0;
    console.log(mk);
    console.log($("#left_list li"))
    $(window).scroll(function(){
        kk = document.documentElement.scrollTop || document.body.scrollTop;
        for(var i =0;i<mk.length;i++){
            if(kk>mk.eq(i).offset().top){
                $(".selectable.active").removeClass("active");
                $("#left_list li").eq(i).addClass('active');
            }
        }
    });
    //向下滚动左侧导航固定位置
	
	var left_height = $("#left_list").width()+30;  //固定
	//确定右边内容的宽度
	var nav_width_first = $("#content1").width()*0.95-left_height-10;
	$(".b_right").css("width",nav_width_first+"px");

	//当浏览器宽度变化的时候，改变内容的宽度
	$(window).resize(checkRightWidth);
    $(window).scroll(function(){
        var nav_height = $(".top").height() + $(".b_title").height();
        var height = $(window).scrollTop();
		$("#hide_box").css("width",left_height+"px");

    });

});

//===========================函数========================

//改变右边报告主体内容的宽度
function checkRightWidth(){
	var left_height = $("#left_list").width()+30;  //固定
	//left_height
	var nav_width = $("#content1").width()*0.99-left_height-10;
	$(".b_right").css("width",nav_width+"px");
};