<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-tabs
        v-model="tab"
        class="bg-primary text-white"
        indicator-color="transparent"
        inline-label
      >
        <q-route-tab name="Home" icon="home" to="/" exact  label="Home"  />
        <q-route-tab name="profile" icon="person" to="/profile" exact  label="Profile"  />

      </q-tabs>
      <q-toolbar-title class="absolute-center text-h6">
          Authentication Project
        </q-toolbar-title>

        <q-btn
          to='/login'
          v-if="!login"
          class="absolute-right text-white"
          flat   icon-right="login"
          label="LOG IN" />
        <q-btn
          @click="logOut"
          v-else
          class="absolute-right text-white"
          flat   icon-right="logout"
          label="LOG Out" />

      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {mapState,mapActions} from "vuex"

export default {
  name: 'MainLayout',
  computed: {
    ...mapState("auth",["login"])
  },
  methods:{
    ...mapActions("auth",["logOut"])
  },
  data () {
    return {
      tab:'profile'
    }
  }

}
</script>
