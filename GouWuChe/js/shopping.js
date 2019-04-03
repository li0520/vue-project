$(function($) {
	//显示和隐藏
	$("#shopping_commend_arrow").click(function() {
		if($("#shopping_commend_sort").css("display") == "none") {
			$(this).attr("src", "images/shopping_arrow_up.gif");
		} else {
			$(this).attr("src", "images/shopping_arrow_down.gif");
		}
		$("#shopping_commend_sort").toggle();
	});
	//商品隔行变色
	//  $("#myTableProduct").find("tr:odd").css("backgroundColor","#ffebcd");
	//商品变色
	$("#myTableProduct").find("tr").mouseover(function() {
		$(this).css("backgroundColor", "#fff");
	}).mouseout(function() {
		if($("#myTableProduct").find("tr").index($(this)) % 2 == 1) { //判断是否奇数行
			$(this).css("backgroundColor", "#ffebcd");
		} else {
			$(this).css("backgroundColor", "#fefbf2");
		}
	});
});