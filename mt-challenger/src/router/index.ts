import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Generator from "../views/Generator.vue";
import Documentation from "../views/Documentation.vue";
import EditSentence from "../views/EditSentence.vue";
import SelectSentence from "../views/SelectSentence.vue";
import ValidateSentences from "../views/ValidateSentences.vue";
import SelectTestSet from "../views/SelectTestSet.vue";
import TestItem from "../views/TestItem.vue";

const routes: RouteRecordRaw[] = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "testitem",
    path: "/testitem",
    component: TestItem,
  },
  {
    name: "generator",
    path: "/generator",
    component: Generator,
  },
  {
    name: "select-test-set",
    path: "/generator/select-test-set",
    component: SelectTestSet,
  },
  {
    name: "select-sentence",
    path: "/generator/:setid/select-sentence",
    component: SelectSentence,
  },
  {
    name: "edit-sentence",
    path: "/generator/:setid/:itemid/edit-sentence",
    component: EditSentence,
  },
  {
    name: "validate-sentences",
    path: "/generator/:setid/:itemid/validate-sentences",
    component: ValidateSentences,
  },
  {
    name: "documentation",
    path: "/documentation",
    component: Documentation,
  },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
