import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from '../views/About.vue'
import Social from '../views/Social.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/social",
    name: "Social",
    component: Social
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
