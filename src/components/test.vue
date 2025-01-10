<template>
  <div class="full">
    <button @click="getContainer">获取容器列表</button>
    <button @click="token">获取token</button>
    <button @click="url">获取url</button>
    <button @click="fetchData">测试封装</button>
    <button @click="displayData">显示数据</button>
    <button @click="fetchObjectData">获取对象数据</button>
<!--    <button @click="triggerUpload">上传文件</button>-->
<!--    <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none"/>-->
<!--    <button @click="downloadFile">下载文件</button>-->
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import Cookies from "js-cookie";
import {get, put} from "@/api/request";
import {ref} from "vue";

defineOptions({
  name: "Test"
})
// 获取容器列表
function getContainer() {
  axios(
      {
        method: "get",
        url: `/api/v1/${Cookies.get("spc")}`,
        headers: {"X-AUTH-TOKEN": Cookies.get("token")},
      }
  )
      .then((response) => {
        const data = response.data;
        console.log(data);
      })
}
// 获取token
function token(){
  console.log(Cookies.get("token"));
}
// 获取url
function url(){
  console.log(Cookies.get("spc"));
}
// 测试封装
const result = ref()
const fetchData = async () => {
  result.value = await get('')
}
// 显示封装数据
function displayData(){
  console.log(result.value);
}
// 获取对象数据
function fetchObjectData(){
  console.log(get('123?delimiter=%2F'))
}
// 上传文件
// const fileInput:any = ref(null)
// const triggerUpload = () => {
//   fileInput.value.click();
// }
// const handleFileUpload = async (event: Event) => {
//   const file = event.target.files[0]
//   const fileName = file.name
//   const data = new Blob([file], { type: file.type });
//   const config = {headers: {'Content-Type': file.type}};
//   await put(`123456/${fileName}`, data, config);
//   // console.log(data)
//   // console.log(data.type)
//   // console.log(file)
// }
// // 下载文件
// const downloadFile = async (event: Event) => {
//   try {
//     const url = '123456/1734330679773.jpg'
//     const blob:any = await get(url, {responseType: 'blob'});
//     const link:any = document.createElement("a");
//     link.href = window.URL.createObjectURL(blob);
//     link.download = url.split("/").at(-1)
//     link.click();
//     window.URL.revokeObjectURL(link.href);
//   } catch (error) {
//     console.log('download failed',error)
//   }
// }
</script>

<style scoped>
.full{
  width: 100%;
  height: 100%;
  background-color: #2c2c2c;
}
</style>