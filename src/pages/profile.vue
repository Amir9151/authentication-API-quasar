<template>
  <div class="q-pa-md q-ma-xl q-mx-auto" style="max-width: 700px">
    <q-form @submit.prevent="onSubmit">
      <div class="q-mb-lg">
        <q-input
          color="primary"
          label-color="primary"
          outlined
          v-model="user.first_name"
          label="First Name"
          @input="updateUser"
        >
          <template v-slot:append>
            <q-icon name="badge" color="primary" />
          </template>
        </q-input>
      </div>
        <div class="q-mb-lg">
        <q-input
          color="primary"
          label-color="primary"
          outlined
          v-model="user.last_name"
          label="Last Name"
          @input="updateUser"
        >
          <template v-slot:append>
            <q-icon name="badge" color="primary" />
          </template>
        </q-input>
      </div>
        <div class="q-mb-lg">
        <q-select
          color="primary"
          outlined
          label-color="primary"
          v-model="user.province"
          :options="provinces"
          option-value="id"
          option-label="title"
          label="Province"
          emit-value
          map-options
          @input="change"
          options-cover
        >
          <template v-slot:append>
            <q-icon name="near_me" color="primary" />
          </template>
        </q-select>
      </div>

        <div class="q-mb-lg">
        <q-select
          color="primary"
          outlined
          label-color="primary"
          v-model="user.shahr_id"
          :options="cities"
          label="City"
          option-value="id"
          option-label="title"
          emit-value
          map-options
          @input="updateUser"
        >
          <template v-slot:append>
            <q-icon name="near_me" color="primary" />
          </template>
        </q-select>
      </div>

       <!--<div class="q-mb-lg">
        <q-input
          color="primary"
          label-color="primary"
          outlined
          v-model="user.address"
          label="Address"
        >
          <template v-slot:append>
            <q-icon name="near_me" color="primary" />
          </template>
        </q-input>
      </div>
      <div class="q-mb-lg">
        <q-input
          color="primary"
          label-color="primary"
          outlined
          v-model="user.postal_code"
          label="Postcode"
          type="number"
        >
          <template v-slot:append>
            <q-icon name="inbox" color="primary" />
          </template>
        </q-input>
      </div>

      <div class=" q-mb-lg">
        <q-select
          color="primary"
          outlined
          label-color="primary"
          v-model="user.gender"
          :options="genders"
          label="Gender"
          map-options
          emit-value
          option-value="id"
          option-label="title"

        >
          <template v-slot:append>
            <q-icon name="person" color="primary" />
          </template>
        </q-select>
      </div>

        <div class="q-mb-lg">
        <q-input
          color="primary"
          label-color="primary"
          outlined
          v-model="user.school"
          label="School"
        >
          <template v-slot:append>
            <q-icon name="school" color="primary" />
          </template>
        </q-input>
      </div>

        <div class="q-mb-lg">
        <q-select
          color="primary"
          outlined
          label-color="primary"
          v-model="user.major"
          :options="majors"
          label="Major"
          map-options
          emit-value
          option-value="id"
          option-label="title"
        >
          <template v-slot:append>
            <q-icon name="person" color="primary" />
          </template>
        </q-select>
      </div>

       <div class="q-mb-lg">
        <q-select
          color="primary"
          outlined
          label-color="primary"
          v-model="user.grade_id"
          :options="grades"
          label="Grade"
          map-options
          emit-value
          option-label="title"
          option-value="id"
        >
          <template v-slot:append>
            <q-icon name="school" color="primary" />
          </template>
        </q-select>
      </div>
       <div class="q-mb-lg">
        <q-input
          color="primary"
          label-color="primary"
          outlined
          type="email"
          v-model="user.email"
          label="Email"

        lazy-rules
        >
          <template v-slot:append>
            <q-icon name="email" color="primary" />
          </template>
        </q-input>
      </div>

      <div class="q-mb-lg">
        <q-input
          type="textarea"
          color="primary"
          label-color="primary"
          outlined
          v-model="user.info"
          label="Information"
        >
        </q-input>
      </div>-->

      <div class="row">
        <q-space></q-space>
        <q-btn label="confirm" type="submit" color="indigo-10" icon="check" />
      </div>
    </q-form>
  </div>
</template>
<script>
import {mapGetters,mapActions,mapState} from "vuex"
export default {
  data () {
    return {
      user:{
        first_name:"",
        last_name:"",
        address:"",
        school:"",
        major_id:null,
        grade_id:null,
        gender_id:null,
        shahr_id:null,
        province:"",
        postal_code:"",
        email:"",
        info:"",
      },

      provinceId:"",
  }
},
computed:{
  ...mapGetters("info",["provinces","cities","genders","majors","grades"]),
  ...mapState("info",["first_name","last_name","province","shahr"])

},
methods:{
  ...mapActions("info",["updateUserData"]),
  updateUser(){
    this.updateUserData(this.user)

  },



async change(value){
  this.provinceId=await value
  this.updateUser()
  console.log("provinceId",this.provinceId)
},

// cityValue(item){
// if(true){
// if(item.province.id==this.provinceId){
//  return item.id
// }else{null}


// }
// //else{return null}
// },

//  cityLabel(item){
// if(true){
//   /*console.log("item::::",item.province.title)
//   console.nclog("provinceId:",this.provinceId)*/
// if(item.provie.id==this.provinceId){
//  return item.title
// }
// else{
//   return(null)
//   }


// }
// else{

//   return null}

// },
isValidEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },


// onSubmit(){
// this.update(this.user)
// }

},
mounted(){
// let userInfo=this.$q.localStorage.getItem("data")
  this.user.first_name=this.first_name
  this.user.last_name=this.last_name
  this.user.province=this.province
  this.user.shahr_id=this.shahr
  console.log("shahr//",this.shahr)
// this.user.shahr_id=userInfo.city
// this.user.address=userInfo.address
// this.user.postal_code=userInfo.postal_code
// this.user.gender_id=userInfo.gender
// this.user.school=userInfo.school
// this.user.major_id=userInfo.major
// this.user.grade_id=userInfo.grade
// this.user.email=userInfo.email
// this.user.info=userInfo.info
// console.log(userInfo)
}
}
</script>
