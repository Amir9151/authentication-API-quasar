import { api } from "boot/axios";
import { setAuthToken, checkAuth } from "src/function/auth-function";

const state = {
  login: false,

};
const getters = {};

const mutations = {
  setLogin(state, value) {
    state.login = value;
  },
};

const actions = {
  async login({commit,dispatch}, body) {
      let resp = await api.post("/login", body);
      const token = resp.data.data.access_token;
       //console.log("token(action):",resp.data.data.access_token)
      setAuthToken(token);
      this.$router.push("/profile");
      commit("setLogin", true);
      dispatch("stateOfLogin")
      dispatch("info/getUserData",resp.data.data.user,{root:true})
  },
  logOut({ commit }) {
    setAuthToken();
    this.$router.replace("/login");
    commit("setLogin", false);
    //LocalStorage.remove("data")
  },

     stateOfLogin({commit}) {
    let value = checkAuth();
    commit("setLogin", value);
  },

};



export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state,
};
