<template>
    <div class="basis-full bg-slate-50 items-center md:p-6 lg:p-0 w-full md:w-1/2 lg:w-1/3 mx-auto">
      <aside id="" class=" w- h-screen sm:translate-x-0 overflow-y-auto" aria-label="Sidebar">
        <!-- Back Arrow -->
        <div class="flex items-center space-x-96 ml-6 py-6">
            <button class="text-gray-500 hover:text-gray-700">
              <NuxtLink to="/dashboard">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </NuxtLink>
            </button>
            <h2 class="text-2xl font-bold">Deposit</h2>
          </div>
          <hr class="border-t border-gray-300 mr-4 ml-4 py-2" />

    <div class="min-h-screen flex items-">
        <div class="w-full ml-6 mr-6 p-6 bg-white rounded-lg">
      
          <!-- Wallet Selection -->
          <div class="mb-4">
            <label for="wallet" class="block text-sm font-medium text-gray-700">Select Wallet</label>
            <select id="wallet" class="mt-1 block w-full p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>BNB</option>
              <option>USDT</option>
              <option>SZCB</option>
              <!-- Add more options as needed -->
            </select>
          </div>
      
          <!-- QR Code -->
          <div class="flex justify-center">
            <div class="rounded-lg">
              <img src="/public/code.png" alt="QR Code" class="w-72 h-72">
            </div>
          </div>
      
          <!-- Instructions -->
          <div class="text-center text-sm text-gray-600 md:text-base">
            <p class="text-lg">Only send <span class="font-bold">SZCB, USDT</span> and <span class="font-bold">BNB</span> to this address.</p>
            <p class="text-lg">Sending any other asset to this address may result in the loss of your deposit!</p>
            <p class="text-red-500 text-lg">Please note, <span class="font-bold">minimum deposit</span> is <span class="font-bold">$1</span> worth of <span class="font-bold">SZCB, USDT</span> and <span class="font-bold">BNB</span></p>
            </div>
            <div class="text-xs text-pink-900 mt-2 sm:text-sm md:text-base md:w-1/2 lg:w-1/2 mx-72">Note: We Only Support BEP20</div>
            <div class="flex">
            <div class="basis-7/12 text-xl rounded-lg bg-gray-200 p-2 mx-72">
              <code>0x5e02dfc1348e44d6d40b9ed1a60a6b83fdcf2cef</code>
           </div>
           </div>
            <div class="flex justify-center mt-2">
              <NuxtLink to="">
              <div class="basis-1/7 bg-blue-950 text-white py-3 px-6 rounded-lg">copy</div></NuxtLink>
            </div>
            <div>
              <NuxtLink to="/dashboard">
              <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-
               focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600
                dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Go Back</button>
                </NuxtLink>
            </div>
        </div>
      </div>
      </aside>
      </div>
</template>

<script>
  export default {
    name: "Sidebar"
  };
  </script>
  
  <style scoped>
/* For WebKit browsers */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: #414867; /* Color of the track */
}

::-webkit-scrollbar-thumb {
  background-color: #f75454; /* Color of the scrollbar thumb */
  border-radius: 4px; /* Roundness of the scrollbar thumb */
  border: 2px solid #7061f9; /* Optional: adds space around the thumb */
}

::-webkit-scrollbar-thumb:hover {
  background: #cbbdbd; /* Darker on hover */
}

/* For Firefox */
html {
  scrollbar-width: thin; /* Width of the scrollbar */
  scrollbar-color: #fb4747 #dd1919; /* Scrollbar thumb color and track color */
}
/* For chrome */
html {
    scrollbar-width: thin; /* Width of the scrollbar */
    scrollbar-color: #fb4747 #dd1919; /* Scrollbar thumb color and track color */
}
</style>
