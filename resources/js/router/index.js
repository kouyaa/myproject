import { createWebHistory, createRouter} from "vue-router";
import Login from '../page/Login.vue';
import Register from '../page/Register.vue';
import Store from '../page/Store.vue';
import Pos from '../page/Pos.vue';
import Report from '../page/Report.vue';
import Transection from '../page/Transection.vue';
import Nopage from '../page/Nopage.vue';
import { useStore } from '../store/auth'
//middleware ກວດສອບຂໍ້ມູນ
const authMiddleware = (to,from,next)=>{
    const token = localStorage.getItem('web_token');
    const user = localStorage.getItem('web_user');
    const store = useStore();

    if(!token){
        next({
            path:'/login',
            replace: true
        })
    } else {
        //ຂຽນຂໍ້ມູນເຂົ້າ pinia
        store.set_token(token);
        store.set_user(user);

        next();
    }

}
export const routes =[
   {
       path:'/',
       redirect:'/store',
       meta:{
        middleware: [authMiddleware]
    }
   },
    {
        name:'login',
        path:'/login',
        component: Login
    },
    {
        name:'register',
        path:'/register',
        component: Register,
    },
    {
        name:'store',
        path:'/store',
        component: Store,
        meta:{
            middleware: [authMiddleware]
        }
    },
    {
        name:'pos',
        path:'/pos',
        component: Pos,
        meta:{
            middleware: [authMiddleware]
        }
    },
    {
        name:'transection',
        path:'/transection',
        component: Transection,
        meta:{
            middleware: [authMiddleware]
        }
    },
    {
        name:'report',
        path:'/report',
        component: Report,
        meta:{
            middleware: [authMiddleware]
        }
    },
    {
        name:'no_page',
        path:'/:pathMactch(.*)*',
        component: Nopage,
     
    },
];
const router = createRouter({
    history:createWebHistory(),
    routes:routes,
    scrollBehavior(){
        window.scrollTo(0,0)
    }
});
router.beforeEach((to,from,next)=>{
    const token = localStorage.getItem('web_token');

    if(to.meta.middleware){
        to.meta.middleware.beforeEach (middleware => middleware(to,from,next))
    }else{
        if(to.path == '/login' || to.path == '/'){
            if(token){
                next({
                    path:'/store',
                    replace: true
                })
            }else{
                next();
            }
        }else{
                next();
            }
    }
});
export default router;