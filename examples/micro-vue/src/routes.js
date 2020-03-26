import Vue from 'vue';
import VueRouter from 'vue-router';
import About from './components/about';
import HelloWorld from './components/HelloWorld';

Vue.use(VueRouter);

const routes = [
  {
    path: '/hw',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
];

export default routes;
