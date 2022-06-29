<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: 'App',
  methods:{
    ...mapActions("auth",["stateOfLogin"]),
    ...mapActions("info",["fetchData"])
  },
  mounted(){
     this.fetchData()
    this.stateOfLogin()
  }
}
</script>
