<template>
  <div class="position">
    <img src="../assets/img/Logo.png" height="180" width="180" alt="icon"/>
    <h1>个人网盘管理系统</h1>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "home",
})
</script>

<style scoped>
.position{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.position > img{
  position: absolute;
  top: 15%;
}
.position > h1{
  position: absolute;
  font-size: 50px;
  top: 40%;
}
</style>