import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/reset.css'
import '@/assets/style/border.css'
import '@/assets/font/iconfont.css'
import 'lib-flexible'

const app = createApp(App)

// vant组件注册
import {
  Button,
  Image,
  Grid,
  GridItem,
  Tag,
  List,
  PullRefresh,
  Popup,
  Form,
  Swipe,
  SwipeItem,
  Switch,
  Rate,
  Uploader,
  ShareSheet,
  SwipeCell,
  Empty,
  Progress,
} from 'vant'
app
  .use(Button)
  .use(Image)
  .use(Grid)
  .use(GridItem)
  .use(Tag)
  .use(List)
  .use(PullRefresh)
  .use(Popup)
  .use(Form)
  .use(Swipe)
  .use(SwipeItem)
  .use(Switch)
  .use(Rate)
  .use(Uploader)
  .use(ShareSheet)
  .use(SwipeCell)
  .use(Empty)
  .use(Progress)

app.use(store).use(router).mount('#app')
