<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { ElButton, ElMessage } from 'element-plus'

const onClick = () => ElMessage.info({ message: 'Hello World!' })
</script>

<template>
  <section>
    <h1 class="text-red-400">Home</h1>
    <HelloWorld />
    <el-button type="primary" size="small" @click="onClick"> 按钮 </el-button>
  </section>
</template>
