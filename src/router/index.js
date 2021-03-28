import Vue from "vue";
import VueRouter from "vue-router";
import auth from "../middleware/auth";
// import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    meta: {
      middleware: auth,
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Home.vue"),
  },
  {
    path: "/expense",
    name: "expense",
    meta: {
      middleware: auth,
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Expense.vue"),
  },
  {
    path: "/deposit",
    name: "deposit",
    meta: {
      middleware: auth,
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Deposit.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
});

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router;
