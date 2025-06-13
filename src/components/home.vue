<template>
  <div class="position">
    <img src="../assets/img/Logo.png" alt="icon"/>
    <h1>个人网盘管理系统</h1>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "home",
})
</script>

<style scoped>
:root {
  margin: 0;
  padding: 0;
}
.position{
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.position > img{
  height: 180px;
  width: 180px;
}
.position > h1{
  font-size: 50px;
}
</style>