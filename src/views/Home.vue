<script setup>
import { Check, Delete, Edit, Message, Search, Star, Loading, Share } from '@element-plus/icons-vue'
import { defineComponent } from 'vue'
defineComponent({ name: 'HomePage' })
</script>

<template>
  <div class="flex flex-col items-center pt-14">
    <img alt="Vue logo" src="../assets/imgs/logo.svg" width="125" height="125" />
    <h1 class="text-lg text-red-600">This is an home page</h1>
    <el-divider></el-divider>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
    </el-row>

    <el-row>
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
    </el-row>
    <el-divider></el-divider>
    <div class="flex gap-4">
      <el-icon :size="20">
        <Edit />
      </el-icon>
      <el-icon :size="20" color="#409EFC" class="no-inherit">
        <Share />
      </el-icon>
      <el-icon :size="20">
        <Delete />
      </el-icon>
      <el-icon :size="20" class="is-loading">
        <Loading />
      </el-icon>
    </div>
    <el-divider></el-divider>
    <div style="font-size: 20px" class="flex">
      <!-- 由于SVG图标默认不携带任何属性 -->
      <!-- 你需要直接提供它们 -->
      <Edit style="width: 1em; height: 1em; margin-right: 8px" />
      <Share style="width: 1em; height: 1em; margin-right: 8px" />
      <Delete style="width: 1em; height: 1em; margin-right: 8px" />
      <Search style="width: 1em; height: 1em; margin-right: 8px" />
    </div>
  </div>
</template>
