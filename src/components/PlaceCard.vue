<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

const modules = [Pagination];
// Props
defineProps({
  place: Object,
});

// Emits (optional if you want to sync outside)
// const emit = defineEmits<{
//   (e: "toggle-like", liked: boolean): void;
// }>();

const liked = ref(false);

function toggleLiked() {
  liked.value = !liked.value;
  //   emit("toggle-like", liked.value);
}
</script>
<template>
  <div class="relative lg:w-[300px] rounded-2xl overflow-hidden bg-white">
    <!-- Top badge and like icon -->

    <div
      class="absolute top-0 left-0 w-full p-4 z-10 flex justify-between items-center"
    >
      <div
        class="text-sm px-3 py-1.5 bg-white rounded-full flex gap-1 items-center shadow"
      >
        <span>{{ place.action }}</span>
        <img
          v-if="liked"
          src="/src/images/liked.png"
          alt="Liked"
          class="w-4 h-4"
        />
      </div>
      <img
        :src="liked ? '/src/images/liked.png' : '/src/images/like.png'"
        alt="Toggle like"
        class="w-5 h-5 cursor-pointer"
        @click="toggleLiked"
      />
    </div>
    <router-link :to="`/places/${place.id}`">
      <!-- Image slider -->
      <div class="relative w-full h-[318px]">
        <swiper
          :pagination="{
            dynamicBullets: true,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="(img, index) in place.images" :key="index">
            <img
              :src="img"
              alt="Place image"
              class="place w-full h-full object-cover"
            />
          </swiper-slide>
        </swiper>
      </div>

      <!-- Info Section -->
      <div class="p-4 flex flex-col gap-2">
        <div class="flex justify-between items-center w-full">
          <p class="font-medium text-sm">{{ place.title }}</p>
          <div class="flex items-center gap-1 text-sm">
            <img src="/src/images/star.png" alt="Rating star" class="w-4 h-4" />
            <span class="font-[sfproregular]">{{
              place.rating.toFixed(2)
            }}</span>
          </div>
        </div>
        <p class="text-[#5E5E5E] text-sm font-[sfproregular]">
          {{ place.location }}
        </p>
        <p class="text-sm">
          {{ place.price.toLocaleString() }} uzs
          <span class="font-[sfproregular]">/ kuniga</span>
        </p>
      </div>
    </router-link>
  </div>
</template>
