import Vue from "vue";
import Router from "vue-router";
import Inscription from "@/pages/Inscription";
import Connexion from "@/pages/Connexion";
import Home from "@/pages/Home";
import Questions from "@/pages/Questions";
import Question from "@/components/questions/Question";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/signup",
      name: "Inscription",
      component: Inscription
    },
    {
      path: "/login",
      name: "Connexion",
      component: Connexion,
      props: true
    },
    {
      path: "/",
      name: "Home",
      component: Home,
      props: true
    },
    {
      path: "/question",
      name: "Questions",
      component: Questions,
      children: [
        {
          name: "Question",
          path: ":id",
          component: Question
        }
      ]
    }
  ]
});
