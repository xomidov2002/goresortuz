<script setup>
import ServiceColumn from './ServiceColumn.vue'
  const serviceGroups = [
    {
      title: 'Xizmatlarimiz',
      services: ['Sanatoriyalar', 'Dacha', 'Mexmonxonalar'],
    },
    {
      title: 'Xizmatlarimiz',
      services: ['Sanatoriyalar', 'Dacha', 'Mexmonxonalar'],
    },
    {
      title: 'Xizmatlarimiz',
      services: ['Sanatoriyalar', 'Dacha', 'Mexmonxonalar'],
    },
    {
      title: 'Xizmatlarimiz',
      services: ['Sanatoriyalar', 'Dacha', 'Mexmonxonalar'],
    },
  ];
</script>
<template>
    <footer class="w-full bg-[#0F4C8A] text-white py-20 px-10">
      <div class="mb-6">
        <img src="/src/images/logo-white.png" alt="Logo" />
      </div>
  
      <div class="w-full flex flex-wrap justify-between items-start gap-10">
        <div class="flex flex-col gap-10 max-w-sm">
          <p>
            Reference site about Lorem Ipsum, giving information on its origins,
            as well as a random Lipsum generator.
          </p>
          <p>All rights are reserved ©</p>
          <p class="font-medium">Bizni kuzatib boring</p>
        </div>
  
        <ServiceColumn
          v-for="(group, index) in serviceGroups"
          :key="index"
          :title="group.title"
          :services="group.services"
        />
      </div>
    </footer>
  </template>
  <style scoped>
  </style>
  