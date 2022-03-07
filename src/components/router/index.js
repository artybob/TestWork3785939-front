import PostsPage from "@/pages/PostsPage";
import PostAction from "@/pages/PostAction";
import PageNotFound from "@/pages/PageNotFound";

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: PostsPage,
    },
    {
      path: '/action/:id',
      name: 'PostsActionEdit',
      component: PostAction,
    },
    {
      path: '/action',
      name: 'PostsActionCreate',
      component: PostAction,
    },
    {
      path: "/:pathMatch(.*)*",
      component: PageNotFound,
      meta: {
        title: "404",
        theme: "dark"
      },
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    // },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: Register
    // }
  ]
})



