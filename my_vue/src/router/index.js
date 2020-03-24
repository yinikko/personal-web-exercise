import Vue from 'vue';
import Router from 'vue-router';
// import Cart from 'pages/cart/';
// import Home from 'pages/home/';
// import Category from 'pages/category/';
// import Personal from 'pages/personal/';
// import Search from 'pages/search/';
// import Product from 'pages/product';

Vue.use(Router);

/* eslint-disable */
const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import ('pages/home'),
    children: [
      {
        path: 'product/:id',
        name: 'home-product',
        component: () => import ('pages/product')
      }
    ]
  }, {
    path: '/category',
    name: 'category',
    component: () => import ('pages/category')
  }, {
    path: '/cart',
    name: 'cart',
    component: () => import ('pages/cart')
  }, {
    path: '/search',
    name: 'search',
    component: () => import ('pages/search')
  }, {
    path: '/personal',
    name: 'personal',
    component:  () => import ('pages/personal')
  }, {
    path: '*',
    redirect: '/home'
  }
];

export default new Router({
  routes
});
