var vm = new Vue({
	el: "#main",
	data: function() {
		return {
			message: "您已选购以下商品",
			textOne: "商品名",
			list: [{
					Ablue: "私募（首部披露资本博弈秘密的金融...",
					jiFei: 123,
					jiaGeOne: "150",
					jiaGeTow: "121",
					blueDel: "删除"
				},
				{
					Ablue: "私募（首部披露资本博弈秘密的金融...",
					jiFei: 123,
					jiaGeOne: "150",
					jiaGeTow: "121",
					blueDel: "删除"
				},
				{
					Ablue: "私募（首部披露资本博弈秘密的金融...",
					jiFei: 123,
					jiaGeOne: "150",
					jiaGeTow: "121",
					blueDel: "删除"
				},
				{
					Ablue: "私募（首部披露资本博弈秘密的金融...",
					jiFei: 123,
					jiaGeOne: "150",
					jiaGeTow: "121",
					blueDel: "删除"
				}
			]
		}
	},
	methods: {
		handleDelete: function(index) {
			this.list.splice(index, 1);
		},
		sq: function(value) {
			console.log(this.values());
		},
		hq: function(value) {
			console.log("22");
		}
	},
});