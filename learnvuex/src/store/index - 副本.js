import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
}from './mutations-types.js'
Vue.use(Vuex)

const moduleA = {
  state:{
    name:'moduleA'
  },
  mutations:{
    updateName(state,payload){
      state.name=payload
    }
  },
  actions:{
    aUpdateName(context){
      setTimeout(()=>{
        context.commit('updateName','aUpdateName')
      },1000)
    }
  },
  getters:{
    fullName(state){
      return state.name+'123'
    },
    fullName2(state,getters){
      return getters.fullName+'234'
    },
    fullName3(state,getters,rootState){
      return rootState.counter+getters.fullName2
    }
  },
}

const store = new Vuex.Store({
    state:{
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
    },
    mutations:{
      //方法
      [INCREMENT](state){
        state.counter++
      },
      decrement(state){
        state.counter--
      },
      incrementCount(state,count){
        state.counter+=count
      },
      addStudent(state,stu){
         state.students.push(stu)
      },
      updateInfo(state){
        // state.info['address']='qwe'
        //不能进行异步操作
        // setTimeout(()=>{
        //  state.info.name='qwe'
        // },1000)
        // Vue.set(state.info,'address','zxc')
        // Vue.delete(state.info,'name')
      }
    },
    actions:{
      aUpdateInfo(context,payload){
        // setTimeout(()=>{
        //   context.commit('updateInfo')
        //   console.log(payload.message);
        //   payload.success()
        // },1000)

        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            context.commit('updateInfo')
            console.log(payload);
          },1000)
          resolve()
        })
      }
    },
    getters:{
      powerCounter(state){
        return state.counter*state.counter;
      },
      more20stu(state){
        return state.students.filter(s=>s.age>=20)
      },
      more20stuLength(state,getters){
        return getters.more20stu.length
      },
      moreAgeStu(state){
        return age => state.students.filter(s=>s.age>age)
      }
    },
    modules:{
        a:moduleA
    }

})

export default store;
