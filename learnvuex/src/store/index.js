import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
}from './mutations-types.js'


import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
import moduleA from './modules/moduleA.js'

Vue.use(Vuex)

const state = {
      counter:1000,
      students:[
        {id:1,name:'a',age:2},
        {id:2,name:'asa',age:23},
        {id:3,name:'aas',age:21}
      ],
      info:{
        name:'as',
        address:'zc'
      }
    }

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        a:moduleA
    }

})

export default store;
