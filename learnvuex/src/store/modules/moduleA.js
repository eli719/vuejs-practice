export default {
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
      console.log(context);
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
  }
}