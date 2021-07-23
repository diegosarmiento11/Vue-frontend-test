import Vue from "vue";
import VueRouter from "vue-router";
import Menu from "../views/Menu.vue";
import Login from "../views/Login.vue";
import Products from "../views/Products.vue";


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
  {
    path: "/Products",
    name: "Products",
    component: Products,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
