<template>
<main>
    <div class="flex justify-between items-center mb-4 border-b-[0.5px] border-gray-100 pb-4">
        <h2 class="text-lg font-medium text-[#687181]">Transaction list</h2>
        <div class="flex items-center space-x-2">
          <button @click="showFilterModal = true" id="filter" class="text-gray-500 hover:text-gray-700">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M22.8828 7.5C22.8828 8.32843 22.2112 9 21.3828 9H4.38281C3.55439 9 2.88281 8.32843 2.88281 7.5C2.88281 6.67157 3.55439 6 4.38281 6H21.3828C22.2112 6 22.8828 6.67157 22.8828 7.5Z"
                fill="#DD3636" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M20.8828 12.5C20.8828 13.3284 20.2112 14 19.3828 14H6.38281C5.55439 14 4.88281 13.3284 4.88281 12.5C4.88281 11.6716 5.55439 11 6.38281 11H19.3828C20.2112 11 20.8828 11.6716 20.8828 12.5Z"
                fill="#DD3636" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M18.8828 17.5C18.8828 18.3284 18.2112 19 17.3828 19H8.38281C7.55439 19 6.88281 18.3284 6.88281 17.5C6.88281 16.6716 7.55439 16 8.38281 16H17.38281C18.2112 16 18.8828 16.6716 18.8828 17.5Z"
                fill="#DD3636" />
            </svg>
          </button>
          <select v-model="selectedFilter" class="border-[0.5px] border-gray-100 rounded-md outline-none  text-gray-700 py-2 text-sm px-2">
            <option>All</option>
            <option>Bank transfer</option>
            <option>Card payment</option>
          </select>
        </div>
      </div>
      <PaymentFilterModal v-if="showFilterModal" @close="showFilterModal = false" />
</main>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  const showFilterModal = ref(false);
  const selectedFilter = ref('All');
  </script>
  
  <style scoped>
  /* Add any custom styles if necessary */
  </style>
  