import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'


//加载根组件
import App from './App.vue'
//加载必要样式
import './style/index.less'
import './style/font-awesome/css/font-awesome.min.css'
const app = createApp(App)
//引入router
import router from './router/index'

app.use(ElementPlus,{
    locale: zhCn,
})

app.use(router)

app.mount('#root')
