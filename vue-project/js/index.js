  //  Vue是构造函数
  console.log(Vue);
  Vue.component ("my-header" , {
          name: "my-header",
          template:`
                  <div>
                      <div class="my-header-left">
                          <a href="#" @click="$emit('handle-children',chidrenMessage)">登录</a>
                          <a href="#">注册</a>
                      </div>
                      <div class="my-header-right">
                          <a href="#">购物车</a>
                          <a href="#" @click="handlePropsData">查看</a>
                      </div>
                      <p>{{ todo }} {{ childrenMessage }}</p>

                  </div>

                  `,
                  data: function () {
                    return{
                        headerMessage:"我是header组件",
                        propsData: "",
                        childrenMessage:"我是子组件数据",
                        propsDataChildren: null
                    }
                  },
                  props: {
                      todo: {
                          type: String,
                          default: ""
                      },
                      childrenMessage: {
                          type: String,
                          default: ""
                      }
                  }


  });
  var vm = new Vue ({
      el: "#warp", 
      // el是管理dom节点
      //  data管理数据
      data: function () {
          return {
              message: "我是warp",
              myPMessage:"我是p标签",
              myContainer: "我是Container标签",
              myTitle: "我是title",
              flag: true,
              list: [
                  { id: 1, value: "香蕉" },
                  { id: 2, value: "苹果"},
                  { id: 3, value: "橘子"}
              ],
              activaClass: "my-common-class",
              commonClass: "my-font-common-class",
              flagClass: false,
              inputValue: "",
              todo: "欢迎进入"
          }
      },
      // methods管理行为， 函数， 方法。
      methods: {
          handleFunction: function () {
              //  this指向的通过new关键字创建下的实例
              console.log(this);
              console.log(this.message);
              this.flag = !this.flag;

              this.handleMyFunction();

              console.log("父盒子事件触发了");
              
          },
          handleMyFunction () {
              this.message = "欢迎学习vue";
          },
          // keyup是键盘事件，键盘离键的时候触发
          // keydown是键盘按下触发
          handleKeyUp: function () {
              console.log("我是表单按下事件")
          },
          handleChildrenClick: function (e) {
              //  e是事件对象
              // e.stopPropagation() 是阻止事件冒泡
              // e.stopPropagation();
              console.log("子盒子触发事件")
          },
          handleKeyDown: function () {
              console.log("键盘按下事件")
          },
          handleParent: function (data) {
             console.log(data,"data");
          },
          handlePropsData: function  () {
              console.log(this.todo,"todo");
              this.propsDataChildren = this.todo;
              this.propsDataChildren = this.headerMessage;
              console.log(this.propsDataChildren,"this.propsDataChildren")
          }
      },

      // 计算属性: computed对象管理所有的计算属性。
      // 计算属性是个方法，通过return关键字返回出来重新计算结果。
      computed: {
          // B数据
          resverseMessage: function () {
              // A数据 this.message发生变化时， 
              return this.flag;
          }
      },
     
      // watch
      watch: {
          flag: function (oldValue, newValue) {
              console.log(oldValue, "旧值",  newValue, "新值")
          }
      },
  });
      