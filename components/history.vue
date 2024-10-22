<template>
    <div class="basis-10/12 bg-slate-50">
        <!-- Back Button -->
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
        <div class="flex justify-start space-x-2 mb-4 mt-2 ml-6">
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
      
        <!-- Staking Card -->
        <div class="bg-gray-100 p-4 mb-4 flex items-center justify-between ml-4 mr-4">
          <div class="flex items-center space-x-2">
            <!-- Lock Icon -->
            <div class="bg-red-400 rounded-lg p-2">
              <svg class="w-6 h-6 text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C8.686 2 6 4.686 6 8v4H4v10h16V12h-2V8c0-3.314-2.686-6-6-6zm0 2c2.206 0 4 1.794 4 4v4H8V8c0-2.206 1.794-4 4-4zm-5 8h10v8H7v-8zm3 2v4h2v-4h-2z"></path>
              </svg>
            </div>
            <!-- Staking Info -->
            <div>
              <p class="font-semibold text-gray-800">10010 szcb - <span class="text-gray-400">#118167</span></p>
              <p class="text-gray-500 text-sm">1 Year (Mature: 02 July 2025 09:34 AM)</p>
            </div>
          </div>
      
          <!-- View Button -->
          <button class="text-blue-700 font-semibold">View</button>
        </div>
      
        <!-- Next Button -->
        <div class="ml-4">
            <NuxtLink to="/next2">
          <button class="px-4 py-2.5 bg-blue-900 text-white rounded-lg">
            Next 2
          </button>
          </NuxtLink>
        </div>
      </div>
      
</template>