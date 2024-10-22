<template>
    <div class="basis-10/12 bg-slate-50 ">
        <!-- Back Button and Title -->
        <div class="flex items-center space-x-96 ml-6 py-6">
            <button class="text-gray-500 hover:text-gray-700">
              <NuxtLink to="/dashboard">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              </NuxtLink>
            </button>
            <h2 class="text-3xl font-medium">Staking</h2>
          </div>
          <hr class="border-t border-gray-300 mr-4 ml-4 py-2" />
      
        <!-- Tabs -->
        <div class="space-x-4 mb-4 mt-2 ml-6">
            <NuxtLink to="/staking">
          <button class="px-4 py-2 bg-gray-100 text-gray-600 rounded-md">
            Stake
          </button>
          </NuxtLink>
          <NuxtLink to="/history">
          <button class="px-4 py-2 bg-blue-900 text-white rounded-md">
            History
          </button>
          </NuxtLink>
        </div>
        <!-- Pagination Buttons -->
        <div class="flex justify-between mt-8 ml-5 mr-5">
            <NuxtLink to="/history">
          <button class="px-4 py-2.5 bg-blue-900 text-white rounded-md">
            Previous 1
          </button>
          </NuxtLink>
          <NuxtLink to="/next3">
          <button class="px-4 py-2.5 bg-blue-900 text-white rounded-md">
            Next 3
          </button>
          </NuxtLink>
        </div>
      </div>
      
</template>