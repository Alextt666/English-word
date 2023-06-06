import { createRouter, createWebHistory } from "vue-router";
import Dashbord from "@/views/Dashbord.vue";

const routes = [{ path: "/", component: Dashbord }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;