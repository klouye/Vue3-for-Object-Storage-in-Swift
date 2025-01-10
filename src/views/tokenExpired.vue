<template>
  <div style="text-align: center">
    <div style="height: 30vh"></div>
    <h1>令牌已过期</h1>
    <router-link to="/login">
      <button>返回登录界面</button>
    </router-link>
  </div>

</template>

<script setup lang="ts">
defineOptions({
  name: "TokenExpired",
})
</script>

<style scoped>
button {
  margin-top: 2%;
  font-size: 30px;
  color: #fff;
  background: #00d1d1;
  border: none;
  border-radius: 40px;
  padding: 20px;
}
</style>