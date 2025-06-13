import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      component: () => import("@/views/login.vue"),
    },
    {
      path: "/loginError",
      component: () => import("@/views/loginError.vue"),
    },
    {
      path: "/dashboard",
      component: () => import("@/views/dashboard.vue"),
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
