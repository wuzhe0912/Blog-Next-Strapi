import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/Todo.vue'),
  },
  {
    path: '/photos',
    name: 'Photos',
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/Photos.vue'),
  },
  {
    path: '/video',
    name: 'Video',
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/Video.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
