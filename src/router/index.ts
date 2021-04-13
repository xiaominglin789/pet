import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
  RouterScrollBehavior,
} from 'vue-router'
import Home from '../views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/found',
    name: 'Found',
    component: () => import('@/views/found/index.vue'),
  },
  {
    path: '/serve',
    name: 'Serve',
    component: () => import('@/views/serve/index.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user/index.vue'),
  },
  {
    path: '/404',
    name: 'not-found',
    component: () => import('@/views/404/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL), // history模式 去不到 notfound页面
  routes,
  linkExactActiveClass: 'link-exact-active-class',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition?.top) {
      // 浏览器前进后退时,回到当前页自动滚动到记录点
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('300ms后滚动')
          resolve(savedPosition)
        }, 100)
      })
    } else {
      return { left: 0, top: 0 }
    }
  },
})

/** 处理路由找不到页面处理 */
router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
  ) => {
    if (to.matched.length === 0) {
      // 404
      return next({ path: '404' })
    }
    next()
  },
)

export default router
