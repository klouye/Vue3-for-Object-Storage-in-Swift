import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import element from "element-plus"
import "@/assets/index.scss"
import "element-plus/dist/index.css"

const app = createApp(App);
app.use(element);
app.use(router);
app.mount("#app");
