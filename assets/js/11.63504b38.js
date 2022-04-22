(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{581:function(t,e,a){"use strict";a.r(e);var n=a(17),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("h1",{attrs:{id:"如何简单、快速的理解vuex-花10分钟看看下面这篇文章你就知道了。话不多说-直接进入主题。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何简单、快速的理解vuex-花10分钟看看下面这篇文章你就知道了。话不多说-直接进入主题。"}},[t._v("#")]),t._v(" 如何简单、快速的理解vuex,花10分钟看看下面这篇文章你就知道了。话不多说，直接进入主题。")])]),t._v(" "),a("h1",{attrs:{id:"一、什么是vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是vuex"}},[t._v("#")]),t._v(" 一、什么是vuex")]),t._v(" "),a("p",[t._v("我们要了解一门技术是什么，最直接的就是去它的官网看看。我们可以清晰的看到它是一个"),a("strong",[t._v("状态管理模式")]),t._v("。\n那什么是状态管理模式呢？它是以相应的规则保证状态以一种可预测的方式发生变化。听起来很绕对吧，看完下面，你或许能有自己对vuex的理解。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/04b6978db34a4df5a7be8c4880d20e66~tplv-k3u1fbpfcp-watermark.image?",alt:"0GF1VXPQZVO.png"}})]),t._v(" "),a("h1",{attrs:{id:"二-、-为什么要用vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-、-为什么要用vuex"}},[t._v("#")]),t._v(" 二 、 为什么要用vuex")]),t._v(" "),a("p",[t._v("想象一下，当我们在做项目的时候，我们会创建很多的页面（组件/试图）。这个时候就涉及到了组件通信和页面之间的多级嵌套。此时我们就会遇到两个问题：")]),t._v(" "),a("ul",[a("li",[t._v("多个试图依赖同一个状态")]),t._v(" "),a("li",[t._v("不同的试图行为需要变更为同一个状态\n对于页面嵌套我们可以用父子组件通信来解决。但是对于兄弟组件间的通信或其他更复杂的关系，这个就显得捉襟见肘了。那我们可不可以有一个类似"),a("strong",[t._v("仓库")]),t._v("的东西，把"),a("strong",[t._v("各个组件都需要依赖的同一个状态抽取出来")]),t._v("，在全局使用单例模式进行管理。在这种模式下，"),a("strong",[t._v("任何组件都可以直接访问到这个状态")]),t._v("，或者当状态发生改变时，所有的组件都获得更新。")])]),t._v(" "),a("h1",{attrs:{id:"三-、-如何使用vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-、-如何使用vuex"}},[t._v("#")]),t._v(" 三 、 如何使用vuex")]),t._v(" "),a("p",[a("strong",[t._v("1. 安装")])]),t._v(" "),a("blockquote",[a("p",[t._v("npm install vuex --save")])]),t._v(" "),a("p",[a("strong",[t._v("2. 配置")])]),t._v(" "),a("p",[a("strong",[t._v("先在src下创建store文件夹，然后在其下创建index.js,引入vuex，完成配置如下：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import Vue from 'vue'\nimport Vuex from 'vuex'\n\n\nVue.use(Vuex)\n\nconst store =  new Vuex.Store({\n  state: {\n   // 定义一个num，以供全局使用\n   num:1,\n   // 定义一个name，以供全局使用\n   name: '小黄同学', \n   // 定义一个age，以供全局使用\n   age: 18, \n\n  },\n  mutations: {\n  },\n  actions: {\n  },\n  getters:{\n  },\n  modules: {\n  }\n})\nexport default  store\n")])])]),a("p",[a("strong",[t._v("然后在main.js 中引入，并挂载到vue实例上:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import Vue from 'vue'\nimport App from './App.vue'\nimport store from './store'  //引入store\n\nVue.config.productionTip = false\n\nnew Vue({\n  store,     //挂载到vue实例上\n  render: h => h(App)\n}).$mount('#app')\n\n")])])]),a("p",[a("strong",[t._v("最后可以在组件中直接使用了")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<template>\n  <div id="app">\n    <p>{{this.$store.state.name }}</p>\n  </div>\n</template>\n')])])]),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fb714e96efb4476884ed923c3387f86f~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("p",[a("strong",[t._v("那对vuex的基本了解和基本使用我们已经知道了，接下来我们就要对vuex的原理进行剖析，在store文件夹下创建myStore.js.让我们的myStore.js具备和vuex 一样的作用。")])]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("首先我们对myStore.js的结构进行分析，它要new Vuex.Store(),说明Vuex.store是一个类。并且它可以Vue.use(Vuex)，说明Vuex上具备inStall方法。我们就可以先写出Vuex的总体框架了。")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import Vue from "vue"\n\nclass Store{\n  constructor(){}\n    \n}\n\nlet Vuex = {\n  Store,\n  install\n}\n\nexport default Vuex\n')])])]),a("blockquote",[a("p",[a("strong",[t._v("2. inStall函数")])]),t._v(" "),a("p",[t._v("inStall函数的作用就是在Vue.use(Vuex)后，每个组件上都具有store方法，以此来达到任何组件都可以直接访问到这个状态")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("let install = function(Vue){\n  Vue.mixin({//让每个组件都具有store方法\n    beforeCreate() {\n      if(this.$options && this.$options.store){  // $options获取根组件\n        this.$store = this.$options.store\n      }else{  //如果是子组件的话\n        this.$store = this.$parent && this.$parent.$store  //去父组件上找\n      }\n    },\n  })\n}\n")])])]),a("h2",{attrs:{id:"_1-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-state"}},[t._v("#")]),t._v(" "),a("strong",[t._v("1. state")])]),t._v(" "),a("p",[t._v("state作为一个“唯一数据源”而存在,而且它的数据在vuex中是响应式的，那么我们如何实现这种响应式呢，这时候我们就能想到 new Vue({})中的数据也是响应式的，state就可以重写出来了。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import Vue from "vue"\n\nclass Store{\n  constructor(options){  //options 代表 new Vuex.store({}) 中的整个实例对象\n    //state\n    this.vm = new Vue({  \n      data:{\n        state : options.state || {}\n      },\n    })\n  }\n    \n}\n\nlet Vuex = {\n  Store,\n  install\n}\n\nexport default Vuex\n')])])]),a("p",[t._v("这样我们就能在组件中使用vuex里面的数据了，我们使用用自己写的myVuex.js,在组件中:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5f311a16ac784ec987198444e3a49d63~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8df310cea4c248d09cbe7f1dad0f505c~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("p",[t._v("不过我们一般为了使用方便，会用代理")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import Vue from "vue"\n\nclass Store{\n  constructor(options){  //options 代表 new Vuex.store({}) 中的整个实例对象\n    //state\n    this.vm = new Vue({  \n      data:{\n        state : options.state || {}\n      },\n    })\n  }\n  \n    get state(){  // 函数前面加get，当我们要取函数内部的返回值时，只需要写函数名state就可以\n    return this.vm.state\n  }    \n}\n\nlet Vuex = {\n  Store,\n  install\n}\n\nexport default Vuex\n')])])]),a("p",[t._v("就可以少写一层vm了\n"),a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0a865ce71de44225ab828acdbcbc653f~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"_2-getters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-getters"}},[t._v("#")]),t._v(" "),a("strong",[t._v("2. Getters")])]),t._v(" "),a("p",[t._v("从state派生出一些状态，并进行计算和测量。Getters的实现原理就是先获取 Getters对象内所有的函数名，然后数据劫持forEach遍历每一个函数并调用掉。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  //getters\n let getters = options.getters || {} \n this.getters = {}\n Object.keys(getters).forEach(getterName =>{//得到了所有函数的函数名\n Object.defineProperty(this.getters,getterName,{ \n      get:()=>{\n        return  getters[getterName](this.state)  //返回并调用每一个函数\n      }\n    })\n    })  \n")])])]),a("p",[t._v("在Getters里面写入一个函数：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import Vue from 'vue'\nimport Vuex from './myVuex.js'\nVue.use(Vuex)\n\nconst store =  new Vuex.Store({\n  state: {\n    num:1,\n    name:'小黄同学',\n    age:18\n  },\n\n  getters:{\n    getNum(state){    \n      return state.num * 10\n    }\n  },\n\n})\nexport default  store\n")])])]),a("p",[t._v("在组件中使用：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2141b584ea644c1e8a39dd18eb262db5~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd074529226c4c1aa269feb7c8da8a6f~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"_3-mutation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-mutation"}},[t._v("#")]),t._v(" "),a("strong",[t._v("3. Mutation")])]),t._v(" "),a("p",[t._v("用于更改vuex中的状态，类似于事件 第一个参数为state，第二个参数为自己传入的值。并且想要在组件中调用Mutation的函数，要用commit调用。实现原理和Getters类似，但是可以不用数据劫持，直接重写函数即可：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//mutations\n let mutations = options.mutations || {}\n this.mutations = {}\n \n Object.keys(mutations).forEach(mutationName =>{\n this.mutations[mutationName] = (arg) =>{//将mutations中的函数重写成函数调用\n    mutations[mutationName](this.state,arg)\n     }\n    })\n    \n  commit = (method,arg) =>{    //用commit开启函数的调用，要写成箭头函数，\n   this.mutations[method](arg) // 不然后面Actions中会出现this执向错误\n  }\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import Vue from 'vue'\nimport Vuex from './myVuex.js'\n\nVue.use(Vuex)\n\nconst store =  new Vuex.Store({\n  state: {\n    num:1,\n    name:'小黄同学',\n    age:18\n  },\n  mutations: {\n    incre(state,arg){\n      state.num += arg\n    }\n  },\n\n})\n")])])]),a("p",[t._v("在组件中使用：点击后发生变化")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4cc393913e684282862db6a2aba09f21~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d74979cf33934923a517eca4ffa905c8~tplv-k3u1fbpfcp-watermark.image?",alt:"Actions.gif"}})]),t._v(" "),a("h2",{attrs:{id:"_4-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-actions"}},[t._v("#")]),t._v(" "),a("strong",[t._v("4.Actions")])]),t._v(" "),a("p",[t._v("Action 类似于mutation ，Action 提交的是 mutation，而不是直接变更状态。用法同mutation基一致，并且可以执行异步操作，用dispatch调用：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    //actions\n    let actions = options.actions || {}\n    this.actions = {}\n    Object.keys(actions).forEach(actionName =>{\n      this.actions[actionName] = (arg) =>{\n        actions[actionName](this,arg)\n      }\n    })\n  }\n\n  dispatch(method,arg ){\n      this.actions[method](arg)\n  }\n")])])]),a("p",[t._v("我们可以在组件中使用，可以看到，俩秒后才出现结果")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b0d69c1afc946028e824dfd27d4cf41~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}}),t._v(" "),a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2b6fd48cef048639e5bdf58a3aebb5c~tplv-k3u1fbpfcp-watermark.image?",alt:"555.gif"}})]),t._v(" "),a("h2",{attrs:{id:"_5-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-module"}},[t._v("#")]),t._v(" "),a("strong",[t._v("5. Module")])]),t._v(" "),a("p",[t._v("将 store 分割成"),a("strong",[t._v("模块（module）")]),t._v(" 。每个模块拥有自己的 state、mutation、action、getter,防止store对象太大变得臃肿。\n这个作者就不对其复写了。")]),t._v(" "),a("blockquote",[a("p",[a("em",[a("strong",[a("strong",[t._v("关于vuex分享到这里就结束了，希望看完这篇文章能对你产生帮助。如果文章有不对或者是任何问题，欢迎点评和指出")])])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);