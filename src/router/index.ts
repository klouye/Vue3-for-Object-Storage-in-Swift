import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/login.vue";
import Dashboard from "@/views/dashboard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/loginError",
      component: () => import("@/views/loginError.vue"),
    },
    {
      path: "/notLogin",
      component: () => import("@/views/notLogin.vue"),
    },
    {
      path: "/tokenExpired",
      component: () => import("@/views/tokenExpired.vue"),
    },
    {
      path: "/dashboard",
      component: Dashboard,
      children: [
        {
          path: "",
          redirect: "/dashboard/home"
        },
        {
          path: "home",
          component: () => import("@/components/home.vue"),
        },
        {
          path: "containers",
          component: () => import("@/components/containers.vue"),
        },
        // {
        // path: "picture",
        //   component: () => import("@/components/picture.vue"),
        // },
        // {
        //   path: "video",
        //   component: () => import("@/components/video.vue"),
        // },
        // {
        //   path: "music",
        //   component: () => import("@/components/music.vue"),
        // },
        // {
        //   path: "document",
        //   component: () => import("@/components/document.vue"),
        // },
        // {
        //   path: "others",
        //   component: () => import("@/components/others.vue"),
        // },
        // {
        //   path: "recycle",
        //   component: () => import("@/components/recycle.vue"),
        // },
        {
          path: "test",
          component: () => import("@/components/test.vue"),
        }
      ]
    }
    ]
});
export default router;
