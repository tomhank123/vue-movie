import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Admin from "../views/Admin.vue";
import Orders from "../views/Orders.vue";
import Overview from "../views/Overview.vue";
import Profile from "../views/Profile.vue";
import Products from "../views/Products.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/admin",
    component: Admin,
    children: [
      {
        path: 'overview',
        component: Overview
      },
      {
        path: 'profile',
        component: Profile
      },
      {
        path: 'products',
        component: Products
      },
      {
        path: 'orders',
        component: Orders
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
