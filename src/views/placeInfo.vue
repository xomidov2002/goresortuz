<script setup>
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
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
]);
const route = useRoute();
const placeId = parseInt(route.params.id);
const place = computed(() => places.value.find((p) => p.id === placeId));
</script>
<template>
  <div class="p-6 container mx-auto">
    <h1 class="text-2xl font-bold mb-4">{{ place?.title }}</h1>
    <p class="text-gray-600">{{ place?.location }}</p>
    <p class="text-lg font-semibold mt-2">
      {{ place?.price.toLocaleString() }} uzs / kuniga
    </p>
    <p class="mt-2 text-yellow-600">Rating: {{ place?.rating }}</p>
    <img
      :src="place?.images[0]"
      class="mt-4 w-full max-w-md rounded-xl"
      alt="Place image"
    />
  </div>
</template>
