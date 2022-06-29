
import axios from 'axios'
import {LocalStorage} from 'quasar'


export const setAuthToken = (token) => {

  if (token) {

    LocalStorage.set("token", token);

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  } else {

    LocalStorage.remove("token");

    delete axios.defaults.headers.common["Authorization"];

  }

};

export const checkAuth = () => {

  if (LocalStorage.getItem("token")) {

    return true;

  } else {

    return false;

  }

};
