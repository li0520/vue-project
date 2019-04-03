Vue.component ("my-header" , {
	name: "my-header",
	template:`
	<div class="container">
	<div id="mymodal" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
				<form action="#" class="form-horizontal">
					<div class="modal-header">
						<button class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<span class="col-sm-2 col-sm-offset-2 text-center" v-bind:message="message">{{message}}</span>
						</div>
						<div class="form-group">
							<div class="col-sm-3 col-sm-offset-3">
								<input type="button" value="确定" data-dismiss="modal" class="btn btn-default"/>
							</div>
							<div class="col-sm-3">
								<input type="button" value="取消" data-dismiss="modal" class="btn btn-danger" />
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<input type="text" v-model="message" placeholder="请输入" />
	<button data-target="#mymodal" class="btn btn-default" data-toggle="modal">点击</button>
</div>
			`,
			data:{
				message:""
			},
			props: ["message"]
		});
var vm = new Vue({
				el: "#app",
				data: {
					message: ""

				},
			});