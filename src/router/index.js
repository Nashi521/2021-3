import Vue from "vue";
import VueRouter from "vue-router";
import SpreadJS from "../views/SpreadJS.vue";
import SpreadSheets from "../views/SpreadSheets";
import WorkSheet from "../views/WorkSheet";
import Table from "../views/Table";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/SpreadJS"
  },
  {
    path: "/SpreadJS",
    name: "SpreadJS",
    component: SpreadJS
  },
  {
    path: "/GC-Spread-Sheets",
    name: "GC-Spread-Sheets",
    component: SpreadSheets
  },
  {
    path: "/WorkSheet",
    name: "WorkSheet",
    component: WorkSheet
  },
  {
    path: "/Table",
    name: "Table",
    component: Table
  }
];

const router = new VueRouter({
  routes
});

export default router;
