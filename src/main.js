
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//引入element plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

//图标
import '@/assets/icon/iconfont.css'
import '@/assets/base.scss'

//引入cookies
import VueCookies from 'vue-cookies'

//引入校验工具类
import Utils from '@/utils/Verify'

//自定义组件
import Dialog from '@/components/Dialog.vue'

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

app.component("Dialog", Dialog)
app.mount("#app");
