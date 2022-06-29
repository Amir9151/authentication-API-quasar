
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('src/pages/home.vue'),meta:{guest:true}},
      { path: '/login', component: () => import('src/pages/login.vue'),meta:{guest:true}},
      { path: '/profile', component: () => import('src/pages/profile.vue'),
      meta:{requiresAuth: true}}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
