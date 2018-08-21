import Vue from 'vue';
import Router from 'vue-router';

import Hom from "./components/list/hom.vue"
import Commodity from './components/list/commodity.vue'
import Order from './components/list/order.vue'
import Stock from './components/list/stock.vue'
import User from './components/list/user.vue'
import Promotion from './components/list/promotion.vue'
import Operate from './components/list/operate.vue'
import Content from './components/list/content.vue'
import Statistics from './components/list/statistics.vue'
import Finance from './components/list/finance.vue'
import Setup from './components/list/setup.vue'
import Jurisdiction from './components/list/jurisdiction.vue'
import Commoditytype from "./components/indext/commoditytype.vue" 
 

import Homepage from "./components/indext/homepage.vue"
import Account from "./components/indext/account.vue"
import System from "./components/indext/system.vue"
import Logonlog from "./components/indext/logonlog.vue"
import Listofgoods from "./components/indext/listofgoods.vue"
import Recovery from "./components/indext/recovery.vue"
import Classification from "./components/indext/classification.vue"
import Manage from "./components/indext/manage.vue"

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      components:{
        default : Homepage,
        left : Hom,
      }
    }, 
    {
      path: '/account',
      name: 'Account',
      components:{
        default : Account,
        left : Hom,
      }
    },
    {
      path: '/system',
      name: 'System',
      components:{
        default : System,
        left : Hom,
      }
    },
    {
      path: '/logonlog',
      name: 'Logonlog',
      components:{
        default : Logonlog,
        left : Hom,
      }
    },
    {
      path: '/commodity/listofgoods',
      name: 'Commodity',
      components:{
        default : Listofgoods,
        left : Commodity,
      }
    },
    {
      path: '/commodity/recovery',
      name: 'Recovery',
      components:{
        default : Recovery,
        left : Commodity,
      }
    },
    {
      path: '/commodity/classification',
      name: 'Classification',
      components:{
        default : Classification,
        left : Commodity,
      }
    },
    {
      path: '/commodity/commoditytype',
      name: 'Commoditytype',
      components:{
        default : Commoditytype,
        left : Commodity,
      }
    },
    {
      path: '/commodity/manage',
      name: 'Manage',
      components:{
        default : Manage,
        left : Commodity,
      }
    },
    {
      path:'/order',
      name: 'Order',
      components:{
        default:Order,
      }
    },
    {
      path:'/stock',
      name:'Stock',
      components:{
        default:Stock,
      }
    },
    {
      path:'/user',
      name:'User',
      components:{
        default:User,
      }
    },
    {
      path:'/promotion',
      name:'Promotion',
      components:{
        default:Promotion,
      }
    },
    {
      path:'/operate',
      name:'Operate',
      components:{
        default:Operate,
      }
    },
    {
      path:'/content',
      name:'Content',
      components:{
        default:Content,
      }
    },
    {
      path:'/statistics',
      name:'Statistics',
      components:{
        default:Statistics,
      }
    },
    {
      path:'/finance',
      name:'Finance',
      components:{
        default:Finance,
      }
    },
    {
      path:'/setup',
      name:'Setup',
      components:{
        default:Setup,
      }
    },
    {
      path:'/jurisdiction',
      name:'Jurisdiction',
      components:{
        default:Jurisdiction,
      }
    },
    
  ]
})
