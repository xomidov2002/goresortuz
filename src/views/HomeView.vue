<script setup>
import Diseases from "@/components/Diseases.vue";
import Card from "@/components/PlaceCard.vue";
import { ref } from 'vue'
const places = ref([
  {
    id: 1,
    action: 'most viewed',
    images: [
      '/src/images/place.png',
      '/src/images/place.png',
      '/src/images/place.png',
      '/src/images/place.png',
      '/src/images/place.png'
    ],
    title: 'Zomin Sanatoriyasi',
    rating: 4.9,
    location: 'Jizzax viloyati, Zomin tumani, Duoba m.f.y.',
    price: 230000
  },
  {
    id: 2,
    action: 'most viewed',
    images: [
      '/src/images/place.png',
      '/src/images/place.png',
      '/src/images/place.png',
      '/src/images/place.png',
      '/src/images/place.png'
    ],
    title: 'Yangiobod Dam Olish Maskani',
    rating: 4.7,
    location: 'Jizzax viloyati, Yangiobod tumani',
    price: 200000
  },
  {
    id: 3,
    action: 'most viewed',
    images: [
      '/src/images/place.png',
      '/src/images/place.png',
      '/src/images/place.png',
      '/src/images/place.png',
      '/src/images/place.png'
    ],
    title: 'Zaamin Eco Park',
    rating: 4.8,
    location: 'Jizzax viloyati, Zomin tog\'lari',
    price: 250000
  },
  {
    id: 4,
    action: 'most viewed',
    images: [
      '/src/images/place.png',
      '/src/images/place.png',
      '/src/images/place.png',
      '/src/images/place.png',
      '/src/images/place.png'
    ],
    title: 'Forish Resort',
    rating: 4.85,
    location: 'Jizzax viloyati, Forish tumani',
    price: 220000
  }
]);
</script>
<template>
  <div class="container mx-auto">
    <Diseases />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card v-for="place in places" :key="place.id" :place="place" />
    </div>
  </div>
</template>
