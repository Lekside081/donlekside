<template>
    <div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <!-- Icon and Heading -->
          <div class="flex flex-col items-center">
            <div class="text-green-400 text-5xl mb-4">
              <i class="fas fa-check-circle"></i>
            </div>
            <h2 class="text-2xl font-semibold text-gray-800">Woo hoo! 😖</h2>
            <p class="text-gray-600 mt-2">Logged out successfully</p>
          </div>
      
          <!-- Button -->
          <div class="flex justify-center mt-6">
            <NuxtLink to="/login">
            <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded">
              Ok!
            </button>
            </NuxtLink>
          </div>
        </div>
      </div>
      
</template>