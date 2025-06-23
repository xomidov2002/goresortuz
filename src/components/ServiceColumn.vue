<template>
    <div class="flex flex-col gap-5">
      <p class="uppercase text-sm font-bold">{{ title }}</p>
      <p
        v-for="(service, index) in services"
        :key="index"
        class="text-sm font-medium"
      >
        {{ service }}
      </p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    services: Array,
  });
  </script>
  
  <style scoped>

  </style>
  