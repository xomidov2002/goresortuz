<script setup>
import Diseases from "@/components/Diseases.vue";
import Card from "@/components/PlaceCard.vue";
import { ref } from "vue";
const places = ref([
  {
    id: 1,
    action: "most viewed",
    images: [
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
    ],
    title: "Zomin Sanatoriyasi",
    rating: 4.9,
    location: "Jizzax viloyati, Zomin tumani, Duoba m.f.y.",
    price: 230000,
  },
  {
    id: 2,
    action: "most viewed",
    images: [
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
    ],
    title: "Yangiobod Dam Olish Maskani",
    rating: 4.7,
    location: "Jizzax viloyati, Yangiobod tumani",
    price: 200000,
  },
  {
    id: 3,
    action: "most viewed",
    images: [
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
    ],
    title: "Zaamin Eco Park",
    rating: 4.8,
    location: "Jizzax viloyati, Zomin tog'lari",
    price: 250000,
  },
  {
    id: 4,
    action: "most viewed",
    images: [
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
    ],
    title: "Forish Resort",
    rating: 4.85,
    location: "Jizzax viloyati, Forish tumani",
    price: 220000,
  },
  {
    id: 5,
    action: "most viewed",
    images: [
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
    ],
    title: "Zomin Sanatoriyasi",
    rating: 4.9,
    location: "Jizzax viloyati, Zomin tumani, Duoba m.f.y.",
    price: 230000,
  },
  {
    id: 6,
    action: "most viewed",
    images: [
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
    ],
    title: "Yangiobod Dam Olish Maskani",
    rating: 4.7,
    location: "Jizzax viloyati, Yangiobod tumani",
    price: 200000,
  },
  {
    id: 7,
    action: "most viewed",
    images: [
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
    ],
    title: "Zaamin Eco Park",
    rating: 4.8,
    location: "Jizzax viloyati, Zomin tog'lari",
    price: 250000,
  },
  {
    id: 8,
    action: "most viewed",
    images: [
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
      "/src/images/place.png",
    ],
    title: "Forish Resort",
    rating: 4.85,
    location: "Jizzax viloyati, Forish tumani",
    price: 220000,
  },
]);
</script>
<template>
  <div>
    <Diseases />
    <div class="pb-16 container mx-auto">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <Card v-for="place in places" :key="place.id" :place="place" />
      </div>
      <div class="flex flex-col items-center justify-center gap-6 mt-14">
        <p class="text-sm">
          Ko’proq sihatgohlarni qidirish uchun qidiruv tugmasini bosing
        </p>
        <button
          class="text-center px-5 py-3.5 bg-[#222222] text-white text-[16px] rounded-[8px] cursor-pointer"
        >
          Ko'proq ko'rish
        </button>
      </div>
    </div>
    <div class="py-56 bg-[#D3D3D3] flex justify-center items-center">
      <button class="text-6xl cursor-pointer -tracking-[2%]">
        O’z sihatgohingizni qo’shing
      </button>
    </div>
  </div>
</template>
