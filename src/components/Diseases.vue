<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const categories = [
  { label: 'Asab kasalliklari', image: '/src/images/disease.png' },
  { label: 'Yurak kasalliklari', image: '/src/images/disease.png' },
  { label: 'Teri kasalliklari', image: '/src/images/disease.png' },
  { label: 'Ko‘z muammolari', image: '/src/images/disease.png' },
  { label: 'Tish muammolari', image: '/src/images/disease.png' },
  { label: 'Ginekologiya', image: '/src/images/disease.png' },
  { label: 'Psixiatriya', image: '/src/images/disease.png' },
  { label: 'Gastroenterologiya', image: '/src/images/disease.png' },
  { label: 'Ortopediya', image: '/src/images/disease.png' },
  { label: 'Nevrologiya', image: '/src/images/disease.png' },
];

const showModal = ref(false);

// Close modal on outside click
const modalRef = ref(null);

const handleClickOutside = (e) => {
  if (modalRef.value && !modalRef.value.contains(e.target)) {
    showModal.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>

<template>
  <div class="flex justify-center items-center gap-[36px] flex-wrap relative py-[32px]">
    <!-- All Button -->
    <button
      @click="showModal = true"
      class="flex flex-col items-center gap-2 focus:outline-none"
    >
      <img src="/src/images/showall.png" alt="Hammasi" class="w-8 h-8 object-contain" />
      <p class="text-xs font-medium">Hammasi</p>
    </button>

    <!-- Category Items (visible inline, e.g., first 5) -->
    <div
      v-for="(item, index) in categories.slice(0, 5)"
      :key="index"
      class="flex flex-col items-center gap-2 min-w-[70px]"
    >
      <div class="w-8 h-8 overflow-hidden rounded-full">
        <img :src="item.image" :alt="item.label" class="object-cover w-full h-full" />
      </div>
      <p class="text-xs font-medium text-center">{{ item.label }}</p>
    </div>

    <!-- Advanced Search Button -->
    <button
      class="flex items-center gap-3 border border-[#2222224D] rounded-lg px-4 py-3 hover:bg-gray-100 transition"
    >
      <img src="/src/images/Frame.png" alt="Search" class="w-4 h-4" />
      <span class="text-sm font-medium">Kengaytirilgan qidiruv</span>
    </button>

    <!-- Modal -->
    <transition name="fade">
      <div
        v-if="showModal"
        class="absolute top-0 left-1/2 -translate-x-1/2 z-50 translate-y-1/4"
      >
        <div
          ref="modalRef"
          class="bg-white rounded-xl border border-[#2222224D] p-6 max-w-3xl w-full mx-4 max-h-[80vh] overflow-y-auto"
        >
          <h2 class="text-lg font-semibold mb-4 text-center">Barcha toifalar</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div
              v-for="(item, index) in categories"
              :key="index"
              class="flex flex-col items-center gap-2"
            >
              <div class="w-10 h-10 overflow-hidden rounded-full">
                <img :src="item.image" :alt="item.label" class="object-cover w-full h-full" />
              </div>
              <p class="text-xs font-medium text-center">{{ item.label }}</p>
            </div>
          </div>
          <div class="flex justify-center mt-6">
            <button
              @click="showModal = false"
              class="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition text-sm"
            >
              Yopish
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
