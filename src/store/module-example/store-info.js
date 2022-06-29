import { api, axios } from 'boot/axios'
//import {LocalStorage} from 'quasar'

const state={
info:{},
first_name:"",
last_name:"",
province:"",
shahr:"",
}
const getters={
//Option Information
provinces:(state)=>state.info.provinces,
cities:(state)=>state.info.cities,
genders:(state)=>state.info.genders,
majors:(state)=>state.info.majors,
grades:(state)=>state.info.grades,

  }


const mutations={
setInfo:(state,data)=> state.info=data,


getUserData:(state,userData)=>{
  state.first_name=userData.first_name
  state.last_name=userData.last_name
  state.province=userData.province
  state.shahr=userData.shahr
},

updateUserData:(state,userData)=>{
  state.first_name=userData.first_name
  state.last_name=userData.last_name
  state.province=userData.province
  state.shahr=userData.shahr_id
}
//update:(state,data)=>state.info=data
}



const actions={
  async fetchData({commit}){
    let response=await api.get("/megaroute/getUserFormData")
    console.log("fetchData:",response.data.data)
    commit("setInfo",response.data.data)
  },


  getUserData({commit},userData){
    console.log("getData:",userData)
     commit("getUserData",userData)
  },


  updateUserData({commit},userData){
  console.log("updateUserData:",userData)
  //console.log("updateData province:",userData.province)
   //commit("updateUserData",userData)
}
//   async update({ commit },user) {
//     console.log("updateUser://",user)
//     let data=LocalStorage.getItem("data")
//     //LocalStorage.set("data",user)
//     //console.log("value",value)
//     let userId=data.id
//     let config = {
//       headers:{
//          'Access-Control-Allow-Origin': '*',
//          'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
//          'Access-Control-Allow-Headers': 'Content-Type, Authorization'

//       }

//    }
//        let response = await api.put(`/user/${userId}`,user,config)
//         console.log("response:",response)
//     // commit("update", response.data)
// },



  }





export default {
  namespaced:true,
  getters,
  mutations,
  actions,
  state
}
