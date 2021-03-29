import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
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
  // history: createWebHistory(process.env.BASE_URL), // history模式 去不到 notfound页面？
  history: createWebHistory(),
  // history: createWebHashHistory(), // hash模式  可以去到 notfound页面？
  routes,
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
