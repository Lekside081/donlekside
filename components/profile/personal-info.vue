<template>
    <div class="basis-full bg-slate-50 items-center p-4 md:p-6 lg:p-0 w-full md:w-1/2 lg:w-1/3 mx-auto">
        <!-- Back Arrow -->
        <div class="flex items-center space-x-96 ml-6 py-6">
            <NuxtLink to="/dashboard">
            <button class="text-gray-500 hover:text-gray-700">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            </NuxtLink>
            <h2 class="text-3xl font-semibold">Personal Information</h2>
          </div>
          <hr class="border-t border-gray-300 mr-4 ml-4 py-2" />

    <div class="bg-white shadow-lg rounded-lg p-6 ml-5 mr-5">
     
            <div class="flex justify-center">
                <div class="h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center uppercase text-3xl font-bold">L</div>
            </div>

            <div class="flex justify-center mt-2">
                <p class="text-gray-900 font-bold">Lekside081<span class="text-xs text-emerald-400">verified</span></p>
            </div>
            <div class="flex justify-center">
                <p class="text-gray-500 font-medium">lawaholamiiekan@gmail.com</p>
            </div>
            <div class="flex justify-center">
                <p class="text-gray-500 font-medium">08168807853</p>
            </div>
        
        <div class="flex justify-center">
                <div class="text-gray-600 font-medium">Referred by: Flogab</div>
        </div>
        <div class="flex justify-center font-medium">
            <p>Registered as community member: <span class="bg-gray-200 text-xs">registered</span></p>
        </div>
        <div class="flex justify-center">
            <div class="text-gray-600 font-medium">Logged in at: Sep 17, 2024 01:10pm</div>
        </div>
        <div class="flex justify-center mt-8">
            <NuxtLink to="/change-password">
            <button class="bg-blue-900 text-white font-bold py-3 px-5 rounded text-sm">
                Change Password
            </button>
            </NuxtLink>
        </div>
    </div>
    </div>
</template>