import {checkAuth} from 'src/function/auth-function'

export default  ({router}) => {
  router.beforeEach((to,from,next) => {
    let logedin=checkAuth()
     if(!logedin && to.path!=="/login" && to.path!=='/'){
      next('/login')
    }
    else{
      next()
    }
})
}

