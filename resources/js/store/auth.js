import { defineStore } from 'pinia';

export const useStore = defineStore('auth',{
state:()=>({
   token:null,
   user:null,
}),
getters:{
   get_taken: (state)=>state.token,
   get_user: (state)=>state.user,
},
action: {
set_token(new_token){
    this.token = new_token
},
set_user(new_user){
    this.user = new_user
},
    romeve_token(){
        this.token = null
    },
    romeve_user(){
        this.user = null
    }
    
}
});