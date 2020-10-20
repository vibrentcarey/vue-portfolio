import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Hobbies from '../views/Hobbies.vue'
import Social from '../views/Social.vue'
import Albert from '../components/Albert.vue'
import HobbyList from '../views/HobbyList.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/hobbies",
    name: "HobbyList",
    component: HobbyList,
    children: [
      {path: '', component: Hobbies},
      {path:'/hobbies/albert',component: Albert }
    ]
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
