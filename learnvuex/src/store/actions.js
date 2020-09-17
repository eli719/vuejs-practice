export default {
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
    }
