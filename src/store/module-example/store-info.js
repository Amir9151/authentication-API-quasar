import { api } from 'boot/axios'
import {LocalStorage} from 'quasar'

const state={
info:{},
first_name:"",
last_name:"",
province:"",
shahr:"",
address:"",
postal_code:"",
gender:"",
school:"",
major:"",
grade:"",
email:"",
information:"",
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
  state.address=userData.address
  state.postal_code=userData.postal_code
  state.gender=userData.gender
  state.school=userData.school
  state.major=userData.major
  state.grade=userData.grade
  state.email=userData.email
  state.information=userData.info
},

updateUserData:(state,userData)=>{
  state.first_name=userData.first_name
  state.last_name=userData.last_name
  state.province=userData.province
  state.shahr=userData.shahr_id
  state.address=userData.address
  state.postal_code=userData.postal_code
  state.gender=userData.gender
  state.school=userData.school
  state.major=userData.major
  state.grade=userData.grade
  state.email=userData.email
  state.information=userData.information
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
    console.log("getData:",userData.id)
     commit("getUserData",userData)
     LocalStorage.set("userId",userData.id)
  },


  async updateUserData({commit},user){
  console.log("updateUserData:",user)
    let id=LocalStorage.getItem("userId")
     console.log("id:",id)
    let config = {
      headers:{
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
         'Access-Control-Allow-Headers': 'Content-Type, Authorization'

      }

   }
       let response = await api.put(`/user/${id}`,user,config)
        console.log("response:",response)
 },



  }





export default {
  namespaced:true,
  getters,
  mutations,
  actions,
  state
}
