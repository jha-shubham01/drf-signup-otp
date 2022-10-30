import Vue from "vue";
import VueRouter from "vue-router";
import SignUp from "../views/SignUp.vue";
import VerifyOTP from "../views/VerifyOTP.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/verify_otp",
    name: "VerifyOTP",
    component: VerifyOTP,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
