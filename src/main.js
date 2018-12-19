import Vue from 'vue'
// 引入全部mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入mui
import mui from './lib/mui/css/mui.min.css'

import app from './router/App.vue'

Vue.use(MintUI)


const vm=new Vue({
  el:'#app',
  data:{

  },
  render: c=>c(app)
})