import allCards from "../pages/allCards.vue";
import createCard from "../pages/createCard.vue";

export default [
  {
    path: "/",
    name: "allCards",
    component: allCards,
  },

  {
    path: "/createCard",
    name: "createCard",
    component: createCard,
  },

  {
    path: "/card/:card",
    name: "userCard",
    component: () => import("../pages/userCard.vue"),
    meta: {
      key: "path",
    },
  },
];
