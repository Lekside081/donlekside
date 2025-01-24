<template>
  <div class="basis-full min-h-screen bg-gray-100 px-4 items-center p-4 md:p-6 lg:p- w-full md:w-1/2 lg:w-1/3 mx-auto">
    <!-- Back Button -->
    <div class="flex items-center space-x-96 ml-6 py-6">
      <NuxtLink to="/dashboard">
        <button class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
      </NuxtLink>
      <h2 class="text-3xl font-medium">Swap</h2>
    </div>
    <hr class="border-t border-gray-300 mr-4 ml-4 py-2" />

    <div class="">
      <div class="basis-full bg-white mt- mr-2 ml-2 py-6 px-6">
        <div class="flex flex-row">
          <div class="basis-1/3">
            <UDropdown :items="items" :popper="{ arrow: true }">
              <UButton color="white" icon="i-heroicons-pencil-square-20-solid" label="USTD Main" trailing-icon="i-heroicons-chevron-down-20-solid" />
            </UDropdown>
          </div>

          <div class="basis-1/3 mt-10">
            <div class="flex justify-end font-light">Enter Amount</div>
          </div>
          <div class="basis-1/3 justify-end">
            <div class="flex justify-end mt-8">
              <NuxtLink to="">
                <div class="basis-1/7 bg-blue-950 text-white py-1 px-2.5 rounded-lg">max</div>
              </NuxtLink>
            </div>
            <div class="flex justify-end text-sm">
              <div>Balance: USD₮ 0</div>
            </div>
          </div>
        </div>

        <div class="relative flex items-center mt-4">
          <!-- Horizontal line -->
          <div class="w-full border-t border-gray-300"></div>
          <!-- Icon on the right side of the line -->
          <div class="absolute right-0 flex items-center justify-center w-8 h-8 bg-blue-900 rounded-full">
            <!-- Icon inside the circle (use an actual icon or SVG here) -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>

        <div class="flex">
          <div class="basis-1/2 mt-6">
            <UDropdown :items="items2" mode="hover" :popper="{ placement: 'bottom-start' }">
              <UButton color="white" icon="i-heroicons-pencil-square-20-solid" label="SZCB Main" trailing-icon="i-heroicons-chevron-down-20-solid" />
            </UDropdown>
          </div>

          <div class="basis-1/2">
            <div class="ml-36 mt-12">0</div>
          </div>
        </div>

        <div class="flex justify-end mt-4">
          <div class="text-sm">Balance: SZCB 0</div>
        </div>

      </div>

      <!-- Percentage Buttons -->
      <div class="mb-6 flex justify-center space-x-4">
        <button class="bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200">25%</button>
        <button class="bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200">50%</button>
        <button class="bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200">75%</button>
        <button class="bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200">100%</button>
      </div>

      <!-- Confirm Swap Button -->
      <div class="">
        <button
          class="w-full bg-gray-500 text-white py-3 px-6 rounded-md hover:bg-gray-600 focus:outline-none text-sm">Confirm
          Swap</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = ref([
  [{
    label: 'USTD Main',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }], 
  [{
    label: 'BNB Main',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }],
  [{
    label: 'SZCB Referral Bonus',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }],
  [{
    label: 'USTD Referral Bonus',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }],
  [{
    label: 'USTD Staking interest',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }],
  [{
    label: 'BNB Referral Bonus',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }],
  [{
    label: 'SZC Main',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }],
  [{
    label: 'SUSD',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }],
])
const items2 = ref([
  [{
    label: 'SZCB Main',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }], 
])
</script>