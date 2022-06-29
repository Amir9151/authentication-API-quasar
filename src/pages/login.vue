<template>
  <div class="q-pa-md q-mx-auto q-mt-xl" style="max-width: 400px">
    <header-login></header-login>
    <q-form
      @submit.prevent="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="password"
        label="Your Identity Number *"
        hint="IDN and mobile"
        lazy-rules
        :rules="[ val => val && val.length==10  || 'Please type IDN']"
      />

      <q-input
        filled
        v-model="mobile"
        label="Your mobile number *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your mobile Number',
          val => val.length==11 && val.charAt(0)==0 && val.charAt(1)==9  || 'Please type a real mobile number'
        ]"
      />
      <div class="row">
        <q-space></q-space>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>

  </div>
</template>

<script>
import{mapActions} from "vuex"

export default {
  data () {
    return {
      password: null,
      mobile:null,

    }
  },
  components:{
     headerLogin: require("src/components/header.vue").default,
  },

  methods: {
    ...mapActions("auth",["login"]),
    onSubmit () {

        const body = {
        password:this.password,
        mobile:this.mobile,
      };
      this.login(body)
      }





  }
}
</script>
