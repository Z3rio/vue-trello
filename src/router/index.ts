import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import SignUpView from "../views/SignUpView.vue";
import LoginView from "../views/LoginView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import DashboardView from "../views/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        footer: 1,
        topnav: 1,
      },
      component: HomeView,
    },
    {
      path: "/home",
      name: "home2",
      meta: {
        footer: 1,
        topnav: 1,
      },
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      meta: {
        footer: 2,
        background: "#f9fafc",
      },
      component: LoginView,
    },
    {
      path: "/signup",
      name: "signup",
      meta: {
        footer: 2,
        background: "#f9fafc",
      },
      component: SignUpView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      meta: {
        topnav: 2,
      },
      component: DashboardView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      meta: {
        footer: 1,
        topnav: 1,
      },
      component: NotFoundView,
    },
  ],
});

export default router;
