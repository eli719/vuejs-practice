export default {
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
    }
