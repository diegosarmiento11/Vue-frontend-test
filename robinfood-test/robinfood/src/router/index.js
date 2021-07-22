import Vue from "vue";
import VueRouter from "vue-router";
import Menu from "../views/Menu.vue";
import Login from "../views/Login.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Menu",
    name: "Menu",
    component: Menu,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
