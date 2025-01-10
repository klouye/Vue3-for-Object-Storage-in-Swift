<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <div class="common-layout">
    <el-container style="height: 100vh;">
      <el-header style="height: 10vh; background: linear-gradient( to right,#00caca 200px, #009f9f 200px)">
        <el-row :gutter="20">
          <div class="logo" style="width: 190px; height: 60px">
            <img class="logo" src="../assets/img/Inverted_Logo.png" alt="icon"/>
          </div>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px" style="height: 100%; background-color: #00caca">
          <el-menu :default-active="$route.path"
                   class="el-menu-vertical-demo"
                   active-text-color="orange"
                   background-color="#00caca"
                   text-color="#fff"
                   router
                   accordion>
            <el-menu-item index="/dashboard/home" class="menu_item">首页</el-menu-item>
            <el-sub-menu index="2">
              <template #title>
                <span>文件管理</span>
              </template>
              <el-menu-item index="/dashboard/containers" class="sub_menu">容器</el-menu-item>
<!--              <el-menu-item index="/dashboard/picture" class="sub_menu">图片</el-menu-item>-->
<!--              <el-menu-item index="/dashboard/video" class="sub_menu">视频</el-menu-item>-->
<!--              <el-menu-item index="/dashboard/music" class="sub_menu">音乐</el-menu-item>-->
<!--              <el-menu-item index="/dashboard/document" class="sub_menu">文档</el-menu-item>-->
<!--              <el-menu-item index="/dashboard/others" class="sub_menu">其他</el-menu-item>-->
            </el-sub-menu>
<!--              <el-menu-item index="/dashboard/recycle" class="menu_item">回收站</el-menu-item>-->
          </el-menu>
        </el-aside>
        <el-main style="height: 90vh">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: "Dashboard",
})
import {ElMain} from "element-plus";
import {ElSubMenu} from "element-plus";
</script>
<style scoped>
.logo{
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sub_menu{
  background-color: #00c1c1;
  color: #fff;
}
.menu_item{
  background-color: #00caca;
  color: #fff;
}
.el-menu-vertical-demo {
  width: 100%;
  border-radius: 0;
}
</style>