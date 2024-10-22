<template>
    <div class="basis-full min-h-screen bg-gray-100 px-4 items-center p-4 md:p-6 lg:p-0 w-full md:w-1/2 lg:w-1/3 mx-auto">
      <!-- Back Button -->
      <div class="flex items-center space-x-96 ml-6 py-6">
        <NuxtLink to="/dashboard">
        <button class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        </NuxtLink>
        <h2 class="text-3xl font-medium">Withdrawal</h2>
      </div>
      <hr class="border-t border-gray-300 mr-4 ml-4 py-2" />
  
      <!-- Withdrawal Form Card -->
      <div class="flex flex-row">
        <div class="basis-full bg-white mt-4 mr-2 ml-2 py-6 px-6">
        <!-- Select Wallet Dropdown -->
        <div class="mb-4">
          
          <div class="relative">
            <select id="wallet" class="block appearance-none w-full bg-white border border-gray-300 rounded-md 
            py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Select Wallet</option>
              <div class="flex">
                <div class="basis-10/12 bg-sky-700">
              <option>USDT</option>
              <option>USDT Main</option>
              </div>
              </div>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
  
        <!-- Enter Wallet Address -->
        <div class="mb-4">
          <div class="relative">
            <input id="wallet-address" type="text" placeholder="Enter wallet Address" class="w-full border border-gray-300 rounded-md py-2.5 px- text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <button class="absolute right-0 top-0 mt-1 mr-1 bg-blue-900 text-white py-1.5 px-4 rounded-md">Paste</button>
          </div>
        </div>
  
        <!-- Enter Amount -->
        <div class="mb-6 mt-10">
          <div class="relative">
            <input id="amount" type="number" placeholder="Enter Amount" class="w-full border border-gray-300 rounded-md py-2.5 px- text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <button class="absolute right-0 top-1 mt- mr-1 bg-blue-900 text-white py-1.5 px-4 rounded-md ">Max</button>
          </div>
        </div>
  
        <!-- Withdraw Button -->
        <div>
          <button class="w-full bg-gray-400 text-white py-2.5 px-6 rounded-md focus:outline-none">Withdraw</button>
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Withdrawal",
  };
  </script>
  