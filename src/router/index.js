import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import BlogEdit from '../views/BlogEdit.vue'
import BlogDetail from '../views/BlogDetail.vue'
import Messages from '../views/Messages'
import Tools from '../views/Tools'
import ManageBlogs from "../views/back/ManageBlogs";
import ManageCategories from "../views/back/ManageCategories";
import ManageTags from "../views/back/ManageTags";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/blogs',
    name: 'Index2',
    redirect: {name: "Index"}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/blog/add',
    name: 'BlogAdd',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/blog/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/blog/:blogId/edit',
    name: 'BlogEdit',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  },
  {
    path: '/back/blogs',
    name: 'ManageBlogs',
    component: ManageBlogs,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/back/categories',
    name: 'ManageCategories',
    component: ManageCategories,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/back/tags',
    name: 'ManageTags',
    component: ManageTags,
    meta: {
      requireAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
