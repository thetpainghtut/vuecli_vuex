import Vue from 'vue'
import VueRouter from 'vue-router'

import ItemCreate from './views/ItemCreate.vue'
import ItemList from './views/ItemList.vue'
import ItemShow from './views/ItemShow.vue'
import ShoppingCart from './views/ShoppingCart.vue'

// Vue Router
Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/items',
      name: 'item-list',
      component: ItemList
    },
    {
      path: '/item/create',
      name: 'item-create',
      component: ItemCreate
    },
    {
      path: '/item/:id',
      name: 'item-show',
      component: ItemShow
    },
    {
      path: '/cart',
      name: 'cart',
      component: ShoppingCart
    }
  ],
  mode: 'history' // abstract
})
export default router