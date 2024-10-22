<template>
    <div class="basis-10/12 bg-slate-50">
        <!-- Back Arrow -->
        <div class="flex items-center space-x-96 ml-6 py-6">
            <button class="text-gray-500 hover:text-gray-700">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
          </div>
          <hr class="border-t border-gray-300 mr-4 ml-4 py-2" />

    <div class=" ml-5 mr-5">
        <!-- Heading -->
        <h2 class="text-lx font-bold text-gray-800 mb-2">Change Password?</h2>
        <p class="text-gray-600 mb-6">Send change password instructions to the email you used while creating your account.</p>
    
        <!-- Email Input -->
        <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" type="email" value="lawaholamilekan@gmail.com" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        </div>
    
        <!-- Send Button -->
        <div class="mb-4">
            <button class="w-full bg-blue-900 text-white font-bold py-2 px-4 rounded">
                Send
            </button>
        </div>
    
        <!-- Go Back Button -->
        <div>
            <NuxtLink to="/personal-info">
            <button class="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-bold py-2 px-4 rounded">
                Go Back
            </button>
            </NuxtLink>
        </div>
    </div>
    </div>
</template>