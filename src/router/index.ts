import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Play from "../views/Play.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/play",
    component: Play,
    children: [
      {
        path: "vs-player",
        name: "PlayVsPlayer",
        component: () => import("../views/PlayOnline.vue"),
      },
      {
        path: "vs-computer",
        name: "PlayVsComputer",
        component: () => import("../views/PlayComputer.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
