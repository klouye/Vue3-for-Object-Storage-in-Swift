<template>
  <div class="container">
    <div class="content">
      <h1>{{ hint }}</h1>
      <router-link to="/login">
        <button>返回登录界面</button>
      </router-link>
    </div>
  </div>

</template>

<script setup lang="ts">
import {ref} from "vue";

defineOptions({
  name: "LoginError",
})
const hint = ref()
const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get("value"));
switch (urlParams.get("value")) {
  case "notLogin":
    hint.value = "未登录";
    break;
  case "tokenExpired":
    hint.value = "认证已过期";
    break;
  case "loginError":
    hint.value = "登录失败，请检查用户名或密码是否正确";
    break;
  default:
    hint.value = "登录失败";
}
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
}
.content {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content h1 {
  margin-bottom: 30px;
}
.content button {
  font-size: 30px;
  color: #fff;
  background: #00d1d1;
  border: none;
  border-radius: 50px;
  padding: 20px;
  cursor: pointer;
}
</style>