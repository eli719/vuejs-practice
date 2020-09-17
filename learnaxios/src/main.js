import Vue from 'vue'
import App from './App'
import axios from 'axios'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


// axios({
// 	url:'http://123.207.32.32:8000/home/multidata'
// }).then(res=>{
// 	console.log(res);
// })


// axios({
// 	url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{
// 	console.log(res);
// })


// //2.并发请求
// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }),

// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// })]).then(res=>{
//   console.log(res);
//   console.log(res[0]);
//   console.log(res[1]);
// })

// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }),

// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// })]).then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2);
// })
// )

//3.使用全局的配置
// axios.defaults.baseURL='http://123.207.32.32:8000'
// axios.defaults.timeout=5000

// axios.all([axios({
//   url:'/home/multidata'
// }),

// axios({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// })]).then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2);
// })
// )

//4.创建对应的axios实例
// const instance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })

// instance1({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res);
// })


// const instance2 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000,
//   // header:{}
// })


//5.封装request模块
import {request} from './network/request.js'

request({
  url:'/home/data'
},res=>{
  console.log(res);
},err=>{
  console.log(err);
})