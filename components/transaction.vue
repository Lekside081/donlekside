<template>
    <div class="basis-full bg-gray-50 shadow-lg rounded-lg items-center p-4 md:p-6 lg:p- w-full md:w-1/2 lg:w-1/3 mx-auto">
        <!-- Back Button -->
        <div class="flex items-center space-x-96 ml-6 py-6">
          <NuxtLink to="/dashboard">
            <button class="text-gray-500 hover:text-gray-700">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            </NuxtLink>
            <h2 class="text-2xl font-medium">Transaction History</h2>
          </div>
          <hr class="border-t border-gray-300 mr-4 ml-4 py-2" />
          
        <!-- Transaction Items -->
        <div class="space-y-4">
          <!-- Transaction Item 1 -->
          <div class="flex justify-between items-center p-2 bg-gray-100 rounded-lg shadow-sm">
            <div class="flex items-center space-x-3">
              <!-- Green icon for credit -->
              <span class="text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12l5 5L20 7" />
                </svg>
              </span>
              <div>
                <p class="text-gray-800 font-medium">CREDIT #118167 ~ Staking Locked</p>
                <p class="text-gray-500 text-sm">Monday, July 1, 2024 9:34AM</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-gray-800 font-semibold">10010</p>
              <p class="text-gray-500 text-sm">szcb_staking_locked</p>
            </div>
          </div>
      
          <!-- Transaction Item 2 -->
          <div class="flex justify-between items-center p-2 bg-gray-100 rounded-lg shadow-sm">
            <div class="flex items-center space-x-3">
              <!-- Red icon for debit -->
              <span class="text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div>
                <p class="text-gray-800 font-medium">DEBIT #118166 ~ Staking Request</p>
                <p class="text-gray-500 text-sm">Monday, July 1, 2024 9:34AM</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-gray-800 font-semibold">10010</p>
              <p class="text-gray-500 text-sm">szcb</p>
            </div>
          </div>
      
          <!-- Transaction Item 3 -->
          <div class="flex justify-between items-center p-2 bg-gray-100 rounded-lg shadow-sm">
            <div class="flex items-center space-x-3">
              <!-- Green icon for credit -->
              <span class="text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12l5 5L20 7" />
                </svg>
              </span>
              <div>
                <p class="text-gray-800 font-medium">CREDIT #118127 ~ Swap Credit ~ usdt to szcb</p>
                <p class="text-gray-500 text-sm">Monday, July 1, 2024 8:36AM</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-gray-800 font-semibold">10010</p>
              <p class="text-gray-500 text-sm">szcb</p>
            </div>
          </div>
        </div>
      
        <!-- Pagination -->
        <div class="flex justify-between items-center mt-6">
          <button class="bg-gray-600 text-white font-semibold py-2 px-4 rounded">Previous 0</button>
          <button class="bg-gray-600 text-white font-semibold py-2 px-4 rounded">Next 2</button>
        </div>
      </div>
      
</template>