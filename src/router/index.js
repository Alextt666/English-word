import { createRouter, createWebHistory } from "vue-router";
import Dashbord from "@/views/Dashbord.vue";
import Begin from "@/views/Begin.vue";
import Help from "@/views/Help.vue";

const routes = [
  { path: "/", redirect: "/General" },
  { path: "/General", name: "General", component: Dashbord },
  { path: "/Begin", name: "Begin", component: Begin },
  { path: "/Help", name: "Help", component: Help },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
