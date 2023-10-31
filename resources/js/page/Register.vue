<template>
   <div class="container-xxl d-flex  justify-content-center">


  <div class="authentication-wrapper authentication-basic container-p-y col-md-4">
    <div class="authentication-inner">
      <!-- Register -->
      <div class="card">
        <div class="card-body">
          <!-- Logo -->
          <div class="app-brand justify-content-center">
            <a href="index.html" class="app-brand-link gap-2">
              <span class="app-brand-logo demo">

</span>
              
            </a>
          </div>
          <!-- /Logo -->
          <h4 class="mb-2 d-flex justify-content-center">ລົງທະບຽນໃໝ່</h4>

              <div class="mb-3 ">
              <label  class="form-label">ຊື່ຜູ້ໃຊ້:</label>
              <input type="text" class="form-control" id="name" placeholder="ກະລຸນາປ້ອມຊື່  "  v-model="user_name">
            </div>
            <div class="mb-3 ">
              <label for="email" class="form-label">ມີເມວສ໌:</label>
              <input type="text" class="form-control" id="email"  placeholder="ມີເມວສ໌ຂອງທ່ານ" v-model="email">
            </div>
            <div class="mb-3 form-password-toggle">
              <div class="d-flex justify-content-between">
                <label class="form-label" >ລະຫັດຜ່ານ:</label>
                <a href="auth-forgot-password-basic.html">
                </a>
              </div>
              <div class="input-group input-group-merge">
                <input type="password"  class="form-control"  placeholder="············" v-model="password">
                <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
              </div>
              
            </div>
              <div class="mb-3 form-password-toggle">
              <div class="d-flex justify-content-between">
                <label class="form-label">ຢັ້ງຢືນລະຫັດຜ່ານ</label>
                <a href="auth-forgot-password-basic.html">
                </a>
              </div>
              <div class="input-group input-group-merge">
                <input type="password"  class="form-control"  placeholder="············" v-model="password2">
                <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
              </div>
              
            </div>    
               <div class="alert alert-warning" role="alert" v-if="show_error">
             {{text_error}}
         </div>
            <div class="mb-3">
              <button class="btn btn-primary d-grid w-100" @click="Register()">ລົງທະບຽນ</button>
            </div>
      

          <p class="text-center">
            <span>ມີບັນຊີຜູ້ໃຊ້ແລ້ວ</span>
            <router-link to="/login">
              <span>ເຂົ້າສູ່ລະບົບ</span>
            </router-link>
          </p>
        </div>
      </div>
      <!-- /Register -->
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'ProjectRegister',

    data() {
        return {
            user_name:'',
            email:'',
            password:'',
            password2:'',
            show_error:false,
            text_error:''

        };
    },

    mounted() {
        
    },

    methods: {
         
           
        Register(){   if(this.user_name == '' || this.email =='' || this.password ==''){
              this.show_error = true;
              this.text_error = "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ!";
            } 
            else{
              if(this.password == this.password2){
                 this.show_error = false;
                 this.show_error = "";
                 //ກວດສອບຄວາມຖືກຕ້ອງ
              }
              else
                { this.show_error = true;
                  this.text_error = "ລະຫັດຜ່ານບໍ່ກົງກັນ!";
                }
            }
       },
   }
};
</script>

<style lang="scss" scoped>

</style>