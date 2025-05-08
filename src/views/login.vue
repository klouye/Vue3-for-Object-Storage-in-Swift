<template>
  <div class="box">
    <img class="logo" src="../assets/img/Logo.png" alt="icon"/>
    <h2>网盘登录</h2>
    <el-form :model="form">
      <div class="box1">
        <div class="username">
          <p>用户名：</p>
        </div>
        <el-form-item prop="username" :rules="[
            {required: true, message: '账号不能为空', trigger: 'change'}
            ]">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <div class="pwd">
          <p>密码：</p>
        </div>
        <el-form-item prop="password" :rules="[
            {required: true, message: '密码不能为空', trigger: 'change'}
        ]">
          <el-input v-model="form.password" placeholder="请输入密码" type="password" show-password></el-input>
        </el-form-item>
          <el-button style="background-color: #009f9f; color: white" @click="submit">登录</el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";

defineOptions({
  name: "Login",
})
import {ref} from 'vue'
import {login} from '@/api/auth'
const form = ref({username:'', password:''})
const submit = async () => {
  try {
    await login(form.value.username,form.value.password)
    await router.push('/dashboard')
  } catch (error) {
    console.error('login error!!',error)
    await router.push('/loginError')
  }
}
</script>

<style scoped>
.logo{
  padding-top: 30px;
  width: 8%;
  height: 8%;
  margin: auto;
}
.box{
  text-align: center;
  margin: auto;
}
.box1{
  width: 300px;
  margin: auto;
  border: #BCBCBC 1px solid;
  border-radius: 10px;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #F6F8FA;
}
.box1 > button{
  margin-top: 15px;
  width: 100%;
}
.username{
  color: #2c2c2c;
  font-size: 13px;
  position: relative;
}
.username > p{
  margin-bottom: 10px;
  text-align: left;
}
.pwd{
  color: #2c2c2c;
  display: flex;
  flex-direction: row;
  font-size: 13px;
  margin-top: 10px;
  position: relative;
}
.pwd > p{
  flex: 1;
  text-align: left;
  margin-bottom: 10px;
}
</style>
