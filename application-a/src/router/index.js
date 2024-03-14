import Vue from 'vue'
import VueRouter from 'vue-router'
// import routes from "./routes";
import { importRemote } from '@module-federation/utilities';



Vue.use(VueRouter)

const router = new VueRouter({})

// const routes = () => importRemote({
//   url: 'http://localhost:9002',
//   scope: 'hello_world',
//   module: 'routes'
// })
// .then(helloWorldRoutes => {
//   console.log(helloWorldRoutes)
// })

const routes = importRemote({
  url: 'http://localhost:9002',
  scope: 'hello_world',
  module: 'routes'
})
.then(helloWorldRoutes => {
  console.log(helloWorldRoutes)
  helloWorldRoutes.default.forEach(r => router.addRoute(r))
})

console.log(routes)

router.beforeResolve(async (to, from, next) => {
  if (!to.matched.length) {
    await routes;
    if (router.resolve(to.fullPath).route.matched.length > 0) {
      next({ path: to.fullPath });
      return;
    }

    next({ path: '/not-found' });
    return;
  }
  next();
});

export default router
