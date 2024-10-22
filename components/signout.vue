<template>
    <div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <!-- Icon and Heading -->
          <div class="flex flex-col items-center">
            <div class="text-orange-500 text-5xl mb-4">
              <i class="fas fa-exclamation-circle"></i>
            </div>
            <h2 class="text-2xl font-semibold text-gray-800">Uhhhh! 😓</h2>
            <p class="text-gray-600 mt-2">Are you sure you want to log out?</p>
          </div>
      
          <!-- Buttons -->
          <div class="flex justify-center space-x-4 mt-6">
            <NuxtLink to="/cancel">
            <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Yes, logout!
            </button>
            </NuxtLink>
            <NuxtLink to="/dashboard">
            <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Cancel
            </button>
            </NuxtLink>
          </div>
        </div>
      </div>
      
</template>