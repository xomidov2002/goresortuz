<script setup>
import { CircleUserRound, Menu, Globe, Search } from "lucide-vue-next";
import { ref, computed, onMounted, onUnmounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";
// import Datepicker from "@vuepic/vue-datepicker";
// import "@vuepic/vue-datepicker/dist/main.css";

const active = ref("");
const location = ref("");
const checkInDate = ref(null);
const checkOutDate = ref(null);
const guestCounts = ref({ kattalar: 1, bolalar: 0, oilaviy: 0 });

const isAnyActive = computed(() => active.value !== "");

function activate(tab) {
  active.value = tab;
  isAtTop.value = true;
}

const isAtTop = ref(true);

function handleScroll() {
  isAtTop.value = window.scrollY === 0;
  active.value = "";
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const searchBoxRef = ref(null);

function handleClickOutside(event) {
  if (
    searchBoxRef.value &&
    !searchBoxRef.value.contains(event.target) &&
    active.value !== ''
  ) {
    active.value = "";
  }
}

onMounted(() => {
  document.addEventListener("mousedown", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousedown", handleClickOutside);
});

const activeMenu = ref(true);
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white border border-[#F7F7F7] transition-transform duration-1000 ease-in"
  >
    <nav class="py-4 container m-auto">
      <div class="flex justify-between items-center">
        <router-link to="/">
          <img src="/src/images/logo.png" alt="brand" />
        </router-link>
        <!-- menus -->
        <div
          class="p-2 border border-[#EBEBEB] rounded-[500px] flex items-center transition-transform duration-500 origin-bottom"
          :class="{ 'scale-0': isAtTop, 'scale-100': !isAtTop }"
        >
          <p
            @click="activate('location')"
            class="text-sm px-4 border-r border-r-[#EBEBEB] cursor-pointer"
          >
            Sihatgoh
          </p>
          <p
            @click="activate('checkin')"
            class="text-sm px-4 border-r border-r-[#EBEBEB] cursor-pointer"
          >
            Hafta
          </p>
          <p
            @click="activate('people')"
            class="text-sm px-4 text-[#5E5E5E] cursor-pointer"
          >
            Dam oluvchilar soni
          </p>
          <div
            @click="activate('people')"
            class="p-2 bg-[#0456AA] rounded-full cursor-pointer"
          >
            <Search class="w-5 h-5" color="white" />
          </div>
        </div>
        <div class="flex gap-6 items-center text-sm">
          <p>Sihatgoh egasi uchun</p>
          <Globe color="#222222" class="w-5 h-5" />
          <div
            class="flex items-center gap-4 px-2 py-0.5 border border-[#EBEBEB] rounded-4xl"
          >
            <Menu color="#222222" class="w-5 h-5" />
            <CircleUserRound color="#717171" class="w-8 h-8" />
          </div>
        </div>
      </div>
    </nav>
    <!-- Search Box -->
    <div
      class="container mx-auto flex justify-center pb-8 transition-transform duration-300 origin-top"
      :class="{
        'scale-0 absolute -top-full': !isAtTop,
        'scale-100 relative': isAtTop,
      }"
      ref="searchBoxRef"
    >
      <div 
        class="border border-[#D3D3D3] rounded-[500px] flex items-center relative"
        :class="{'bg-amber-100' : active !== ''}"
      >
        <div
          @click="activate('location')"
          class="flex flex-col cursor-pointer px-[24px] h-full justify-center rounded-[500px]"
          :class="[active === 'location' ? 'bg-amber-500 hover:bg-none' : 'hover:bg-amber-100']"
        >
          <label class="text-xs">Sihatgoh</label>
          <input
            v-model="location"
            placeholder="Sihatgoh nomini kiriting"
            class="outline-none text-sm"
          />
        </div>
        <div
          @click="activate('checkin')"
          class="flex flex-col cursor-pointer px-[24px] h-full justify-center rounded-[500px]"
          :class="[active === 'checkin' ? 'bg-amber-500 hover:bg-none' : 'hover:bg-amber-100']"
        >
          <label class="text-xs">Kirish</label>
          <div class="text-[#717171] text-sm">
            {{ checkInDate || "Sanani tanlang" }}
          </div>
        </div>
        <div
          @click="activate('checkout')"
          class="flex flex-col cursor-pointer px-[24px] h-full justify-center rounded-[500px]"
          :class="[active === 'checkout' ? 'bg-amber-500 hover:bg-none' : 'hover:bg-amber-100']"
        >
          <label class="text-xs">Chiqib ketish</label>
          <div class="text-[#717171] text-sm">
            {{ checkOutDate || "Sanani tanlang" }}
          </div>
        </div>
        <div
          @click="activate('people')"
          class="flex items-center cursor-pointer pl-[24px] gap-16 h-full justify-center rounded-[500px]"
          :class="[active === 'people' ? 'bg-amber-500 hover:bg-none' : 'hover:bg-amber-100']"
        >
          <div class="flex flex-col">
            <label class="text-xs">Dam oluvchi soni</label>
            <div class="text-[#717171] text-sm">
              {{
                guestCounts.kattalar + guestCounts.bolalar + guestCounts.oilaviy
              }}
              ta
            </div>
          </div>
          <div
            class="bg-[#0456AA] h-[48px] rounded-full m-1 py-2 px-4 flex items-center gap-1 transition-all duration-300 overflow-hidden"
            :class="{
              'w-[48px]': !isAnyActive,
              'w-[100px]': isAnyActive,
            }"
          >
            <p
              v-show="isAnyActive"
              class="text-xs text-white transition-opacity duration-300 delay-100"
            >
              Qidirish
            </p>
            <Search class="w-5 h-5" color="white" />
          </div>
        </div>
        <Transition name="fade" mode="out-in">
          <div
            v-if="isAnyActive"
            
            class="absolute top-[120%] h-[300px] bg-white border border-[#D3D3D3] rounded-3xl transition-all duration-500 ease-in-out"
            :class="{
              'left-0 w-[500px]': active === 'location',
              'w-full left-0': active === 'checkin' || active === 'checkout',
              'w-[500px] right-0': active === 'people',
            }"
          ></div>
        </Transition>
      </div>

      <!-- Searchbox -->
      <!-- <div 
        ref="searchBoxRef"
        class="absolute top-full h-[300px] bg-white border rounded-3xl transition-all duration-500 ease-in-out"
        v-if="isAnyActive"
        :class="{'left-0 w-[500px]' : active === 'location', 'w-full left-0' : active === 'checkin' || active === 'checkout', 'w-[500px] right-0' : active === 'people'}"
      > -->
      <!-- </div> -->
    </div>
  </header>
</template>

<style scoped>
.menu {
  @apply flex flex-col cursor-pointer px-[24px];
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
