<script setup>
import { defineComponent, reactive } from 'vue'
defineComponent({ name: 'LoginPage' })
const loginForm = reactive({
  user: '',
  pass: ''
})
const submitForm = (form) => {
  console.log('form: ', form)
}
const resetForm = (form) => {
  console.log('form: ', form)
}
</script>
<template>
  <div class="h-full w-full flex flex-col items-center justify-center">
    <img alt="Vue logo" src="../assets/imgs/logo.svg" width="150" height="150" />
    <div class="py-10">
      <span class="text-2xl font-bold">Login Page</span>
    </div>

    <el-form :model="loginForm" label-position="top" size="large" class="w-[600px]">
      <el-form-item label="UserName:" size="large" prop="user">
        <el-input v-model="loginForm.user" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Password:" size="large" prop="user">
        <el-input v-model="loginForm.user" type="password" autocomplete="off" />
      </el-form-item>
    </el-form>
    <el-row class="pb-32">
      <el-button type="primary" @click="submitForm(loginForm)">Submit</el-button>
      <el-button @click="resetForm(loginForm)">Reset</el-button>
    </el-row>
  </div>
</template>
