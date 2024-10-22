<template>
    <div class="basis-full min-h-screen bg-gray-50 px- items-center p-4 md:p-6 lg:p-0 w-full md:w-1/2 lg:w-1/3 mx-auto">
      <!-- Top Bar -->
      <div class="flex items-center space-x-96 ml-6 py-6">
        <NuxtLink to="/dashboard">
        <button class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        </NuxtLink>
        <h2 class="text-2xl font-medium">Help And Support</h2>
      </div>
      <hr class="border-t border-gray-300 mr-4 ml-4 py-2" /> 
      
      <div class="flex justify-center h-64 mt-10">
        <img src="/public/help and surport.5d873255.svg" alt="help & support">
      </div>
      <div class="flex justify-center mt-10">
        <p>Kindly Click on the <span class="text-green-400">green chat head</span> at the bottom right corner of this page to start a</p>
      </div>
      <p class="flex justify-center">chat with our support staff.</p>
      <p class="flex justify-center text-red-600">It might take a little while for the green chat head to be initialized.</p>
    </div>
</template>