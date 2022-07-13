import { createApp } from 'vue'
// 引入App.vue这个入口文件
import App from './App.vue'
// 引入路由
// import router from './router'
// 引入ant的一个组件
import { Button } from 'ant-design-vue'

const app = createApp(App);

app.use(Button)
    // .use(router)
    .mount('#app')
