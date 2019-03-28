<template>
    <div class="page-register">
        <div class="header">
            <header>
                <a href="#" class="site-logo"></a>
                <div class="login">
                    <span>已有美团账号</span>
                    <router-link :to="{name: 'login'}">登录</router-link>
                </div>
            </header>
        </div>
        <div class="content">
            <el-form :model="registerForm"
                     status-icon
                     :rules="rules"
                     ref="registerForm"
                      label-width="100px"
                     class="demo-ruleForm">
                <el-form-item label="用户名" prop="userName">
                    <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" >
                    <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <div>
                    <div :class="['bar', strengthClass]"></div>
                    <div class="letter">
                        
                    </div>
                </div>
                <el-form-item label="确认密码" prop="rePassword">
                    <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
                </el-form-item>
                
                <el-form-item>
                    <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
                    
                </el-form-item>
            </el-form>
        </div>
        <footer></footer>
    </div>
</template>

<script>
export default {
  data() {
    var validateUser = (rule, value, callback)=>{
        if(value === ""){
            callback(new Error("请输入用户名"))
        } else if(value.length < 4 || value.length > 16) {
        callback(new Error("用户名4-16位"));
      }else{
          callback();
      }

    }
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }else{
          if (this.registerForm.rePassword !== '') {
            this.$refs.registerForm.validateField('rePassword');
          }
          callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      strengthClass: "",
      rules: {
          userName: [
              { validator: validateUser, trigger: "blur"}
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          rePassword: [
            { validator: validatePass2, trigger: 'blur' }
          ]

        }
    };
  },
  methods: {
    submitForm() {
        if(this.password == this.rePassword){
            this.$router.push({name:'login'})
        }else{
            this.userName=""
        }
    },
    // input(){
    //     if(this.password.length>15) {
    //         this.strengthClass="strong"
    //     }
    // }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>