import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios


    // const headers= {
    //    'Access-Control-Allow-Origin': '*',
    //    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    //    'Access-Control-Allow-Headers': 'Content-Type, Authorization'

    // }


const api = axios.create({ baseURL: 'https://alaatv.com/api/v2'})
Vue.prototype.$api = api
// ^ ^ ^ this will allow you to use this.$api
//       so you can easily perform requests against your app's API

export { axios, api }
