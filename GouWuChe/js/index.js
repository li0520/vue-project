;
(function($) {

	function myprice() {
		var percents = 0, //积分
			prePrices = 0, //原价
			prices = 0; //现价
		$("#myTableProduct").find("tr").each(function(i, ele) {
			var num = $(ele).find(".shopping_product_list_5").find("input").val(); //数量
			percents += parseInt($(ele).find(".shopping_product_list_2").text()) * num;
			var price = parseInt($(ele).find(".shopping_product_list_4").find("label").text().replace(".", "")) * num;
			prices += price;
			var prePrice = parseInt($(ele).find(".shopping_product_list_3").find("label").text().replace(".", "")) * num;
			prePrices += prePrice;
		});
		$(".swt-integral").text(percents);
		$("#product_total").text(prices / 100);
		$(".savemoney").text((prePrices - prices) / 100);
		return prices / 100;
	}
	myprice();

	$("#myTableProduct").focusout(function(e) {
		var thisF = e.target;

		if(thisF.type === "text") {
			myprice();
		}

	})

	//删除事件↓

	$("#myTableProduct").on(("click"), function(e) {
		//		console.log(e);
		var thisClick = e.target;

		if(thisClick.type === "delete") {
			var mydel = confirm("确定删除吗?");
			if(mydel === true) {
				$(thisClick).parent().parent().remove();
				myprice();

			} else {
				alert("已取消操作")
			}

		}

	})
	//清空购物车事件

	$("#removeAllProduct").on("click", function() {

		$("tr").remove(".shopping_product_list");
		$(".ooooo").hide();
		$(".clearhide").hide()
		$("body").append("<span id='span-swt-one'>" + "还没有挑选商品，" + "<a>" + "去挑选看看>>" + "</a></span>");
		//$("#span-swt-one").css("display","block");
	})

})($);