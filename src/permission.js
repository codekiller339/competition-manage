import router from "./router";

const WHITE_LIST = ['/login'];
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if(token) {
    next();
  }else {
    if(WHITE_LIST.includes(to.path)) {
      next();
    } else {
      next('/login');
    }
  }
}) 
 