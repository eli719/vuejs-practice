<template>
  <div id="app">
    <h2>------------Modules---------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改name</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">修改asyncUpdateName</button>



    <h2>------------修改---------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改</button>

    <h2>------------APP---------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addcount(5)">+5</button>
    <button @click="addcount(10)">+10</button>
    <button @click="addStudent">添加</button>

    <h2>-------------APP:Getter------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(21)}}</h2>
    <h2>------------Vuex---------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex.vue'
  import {
    INCREMENT
  } from './store/mutations-types.js'
  export default {
    name: 'App',
    data() {
      return {
        message: '1111'
      }
    },
    components: {
      HelloVuex
    },
    // computed:{
    //   more20stu(){
    //     return this.$store.state.students.filter(s=>s.age>=20)
    //   }
    // },
    methods: {
      addition() {
        this.$store.commit(INCREMENT)
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addcount(count) {
        //payload：负载
        //1.普通的提交封装
        this.$store.commit('incrementCount', count)

        //2.特殊的提交封装
        // this.$store.commit({
        //   type:'incrementCount',
        //   count
        // })
      },
      addStudent() {
        const stu = {
          id: 4,
          name: 'qwe',
          age: 21
        }
        this.$store.commit('addStudent', stu)
      },
      updateInfo() {
        // this.$store.commit('updateInfo')
        // this.$store.dispatch('aUpdateInfo',{
        //   message:'asdasd',
        //   success: ()=>{
        //     console.log('里面完成');
        //   }
        // })

        this.$store.dispatch('aUpdateInfo', 'asdasd').then(res => {
          console.log('里面完成');
          console.log(res);
        })
      },
      updateName() {
        this.$store.commit('updateName', 'updateName')
      },

      asyncUpdateName(){
        this.$store.dispatch('aUpdateName')
      }
    }
  }
</script>

<style>
</style>
