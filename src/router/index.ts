// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import OverviewView from "../views/OverviewView.vue";
import ServersView from "../views/ServersView.vue";
import ServerView from "../views/ServerView.vue";

const routes = [
  {
    path: "/",
    name: "overview",
    component: OverviewView,
  },
  {
    path: "/servers",
    name: "servers",
    component: ServersView,
  },
  {
    path: "/server/:id",
    name: "server",
    component: ServerView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
