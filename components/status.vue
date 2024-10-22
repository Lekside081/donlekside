<template>
    <div class="basis-10/12 min-h-screen bg-gray-50 px-">
        <!-- Top Bar -->
        <div class="flex items-center space-x-96 ml-6 py-6">
          <NuxtLink to="/dashboard">
            <button class="text-gray-500 hover:text-gray-700">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            </NuxtLink>
            <h2 class="text-3xl font-medium">Referral</h2>
          </div>
          <hr class="border-t border-gray-300 mr-4 ml-4 py-2" />
    
        <!-- Tab Navigation -->
        <div class="flex space-x-4 mt-4 ml-12">
            <NuxtLink to="/referral">
            <button class="px-4 py-2 bg-gray-200 text-gray-600 rounded-md">Invite</button>
            </NuxtLink>
            <button class="px-4 py-2 bg-blue-800 text-white rounded-md">Status</button>
        </div>
    
        <!-- Staking Balances -->
        <div class="mt-6">
            <h2 class="text-lg mb-4 ml-5">Referral Status</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            </div>
        </div>
        </div>
</template>