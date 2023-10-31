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
          <h1 class="mb-2 d-flex justify-content-center">ສະບາຍດີ👋</h1>
          <p class="mb-4 d-flex justify-content-center">ຍິນດີຕ້ອນຮັບ,ກະລຸນາເຂົ້າສູ່ລະບົບ</p>


            <div class="mb-3 ">
              <label for="email" class="form-label">ມີເມວສ໌:</label>
              <input type="text" class="form-control" id="email" name="email-username" placeholder="ມີເມວສ໌ຂອງທ່ານ" autofocus="">
            </div>
            <div class="mb-3 form-password-toggle">
              <div class="d-flex justify-content-between">
                <label class="form-label" for="password">ລະຫັດຜ່ານ:</label>
                <a href="auth-forgot-password-basic.html">
                  <small>ລືມລະຫັດ?</small>
                </a>
              </div>
              <div class="input-group input-group-merge">
                <input type="password" id="password" class="form-control" name="password" placeholder="············" aria-describedby="password">
                <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
              </div>
            </div>
        
            <div class="mb-3">
              <button class="btn btn-primary d-grid w-100" type="submit">ເຂົ້າສູ່ລະບົບ</button>
            </div>
      

          <p class="text-center">
            <span>ບໍ່ມີບັນຊີຜູ້ໃຊ້?</span>
            <router-link to="register">
              <span>ລົງທະບຽນ</span>
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
    name: 'ProjectLogin',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>