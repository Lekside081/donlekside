<template>
    <div class="basis-full min-h-screen bg-gray-100 px-0 items-center p-4 md:p-6 lg:p-0 w-full md:w-1/2 lg:w-1/3 mx-auto">
        <aside id="" class=" w- h-screen transition-transform sm:translate-x-0 overflow-y-auto" aria-label="Sidebar">
        <!-- Top Bar -->
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
    
        <!-- Tab Navigation -->
        <div class="flex space-x-4 mt-4 ml-12">
          <NuxtLink to="/staking">
            <button class="px-4 py-2 bg-blue-900 text-white rounded-md">Stake</button>
            </NuxtLink>
            <NuxtLink to="history">
            <button class="px-4 py-2 bg-gray-200 text-gray-600 rounded-md">History</button>
            </NuxtLink>
        </div>
    
        <!-- Staking Balances -->
        <div class="mt-6">
            <h2 class="text-lg font-semibold mb-4 ml-5">Staking Balances</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            </div>
        </div>

        <div class="flex space-x-4 ml-5 mr-5">
            <div class="basis-2/12 bg-zinc-200 rounded-lg">
                <div class="flex justify-between ml-2 mr-2 mt-2">
                <div class="text-sm">SZCB Main</div>
                <div><svg class="w-[19px] h-[19px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z"/>
                    <path fill-rule="evenodd" d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M17.657 4.811a.988.988 0 0 1 1.414 0A10.224 10.224 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.988.988 0 0 1-1.414 0 1.029 1.029 0 0 1 0-1.438A8.173 8.173 0 0 0 20 12a8.173 8.173 0 0 0-2.343-5.751 1.029 1.029 0 0 1 0-1.438Z" clip-rule="evenodd"/>
                  </svg>
                  </div>
                  </div>
                  <div class="mt-2 ml-2 font-bold">SZCB</div>
                  <div class="ml-2">0</div>
            </div>
            <div class="basis-2/12 bg-zinc-200 rounded-lg">
                <div class="flex justify-between ml-2 mr-2 mt-2">
                <div class="text-xs">SZCB STAKING<br/><span>LOCKED</span></div>
                <div><svg class="w-[19px] h-[19px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z"/>
                    <path fill-rule="evenodd" d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M17.657 4.811a.988.988 0 0 1 1.414 0A10.224 10.224 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.988.988 0 0 1-1.414 0 1.029 1.029 0 0 1 0-1.438A8.173 8.173 0 0 0 20 12a8.173 8.173 0 0 0-2.343-5.751 1.029 1.029 0 0 1 0-1.438Z" clip-rule="evenodd"/>
                  </svg></div>
                </div>
                <div class="font-bold ml-2 mt-2">SZCB STAKING<br/><span>LOCKED</span></div>
                <div class="ml-2 mb-2">10010</div>
            </div>

            <div class="basis-2/12 bg-zinc-200 rounded-lg">
                <div class="flex justify-between ml-2 mr-2 mt-2">
                <div class="text-sm">SZC</div>
                <div><svg class="w-[19px] h-[19px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z"/>
                    <path fill-rule="evenodd" d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M17.657 4.811a.988.988 0 0 1 1.414 0A10.224 10.224 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.988.988 0 0 1-1.414 0 1.029 1.029 0 0 1 0-1.438A8.173 8.173 0 0 0 20 12a8.173 8.173 0 0 0-2.343-5.751 1.029 1.029 0 0 1 0-1.438Z" clip-rule="evenodd"/>
                  </svg></div>
                </div>
                <div class="font-bold ml-2">SZC</div>
                <div class="ml-2">0.00</div>
            </div>

            <div class="basis-2/12 bg-zinc-200 rounded-lg">
                <div class="flex ml-4 mt-2">
                    <div class="text-xs">SZC-STAKING-LOCKED</div>
                    <div><svg class="w-[19px] h-[19px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z"/>
                        <path fill-rule="evenodd" d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M17.657 4.811a.988.988 0 0 1 1.414 0A10.224 10.224 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.988.988 0 0 1-1.414 0 1.029 1.029 0 0 1 0-1.438A8.173 8.173 0 0 0 20 12a8.173 8.173 0 0 0-2.343-5.751 1.029 1.029 0 0 1 0-1.438Z" clip-rule="evenodd"/>
                      </svg>
                      </div>
                </div>
                <div class="font-bold mt-2 ml-4">SZC LOCKED</div>
                <div class="ml-4">0.00</div>
             </div>

            <div class="basis-2/12 bg-zinc-200 rounded-lg">
                <div class="flex justify-between ml-2 mr-2 mt-2">
                    <div class="text-xs">SUSD</div>
                    <div><svg class="w-[19px] h-[19px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z"/>
                        <path fill-rule="evenodd" d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M17.657 4.811a.988.988 0 0 1 1.414 0A10.224 10.224 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.988.988 0 0 1-1.414 0 1.029 1.029 0 0 1 0-1.438A8.173 8.173 0 0 0 20 12a8.173 8.173 0 0 0-2.343-5.751 1.029 1.029 0 0 1 0-1.438Z" clip-rule="evenodd"/>
                      </svg>
                      </div>
                </div>
                <dv class="font-bold ml-2">SUSD</dv>
                <div class="ml-2">0.00</div>
            </div>

            <div class="basis-2/12 bg-zinc-200 rounded-lg">
                <div class="flex justify-between ml-2 mr-2 mt-2">
                    <div class="text-xs">SUSD_LOCKED</div>
                    <div><svg class="w-[19px] h-[19px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z"/>
                        <path fill-rule="evenodd" d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M17.657 4.811a.988.988 0 0 1 1.414 0A10.224 10.224 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.988.988 0 0 1-1.414 0 1.029 1.029 0 0 1 0-1.438A8.173 8.173 0 0 0 20 12a8.173 8.173 0 0 0-2.343-5.751 1.029 1.029 0 0 1 0-1.438Z" clip-rule="evenodd"/>
                      </svg>
                      </div>
                </div>
                <div class="font-bold ml-2 mt-2">SUSD LOCKED</div>
                <div class="ml-2">0.00</div>
            </div>
        </div>
    
        <!-- Input and Action Section -->
        <div class="basis-full bg-white mt-4 mr-5 ml-5 py-6 px-6">
            <div class="text-sm">Enter Amount (in SZCB)</div>
            <div class="text-red-500 text-sm mt-2 text-end">
                * Insuffient balance to stake in SZCB wallet
            </div>
        <div class="mt-">
            <div class="relative">
                <input id="amount" type="number" placeholder="Enter Amount" class="w-full border border-gray-300 rounded-md py-1.5 px- text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <button class="absolute right-0 top- mt- mr-1 bg-blue-900 text-white py-2.5 px-4 rounded-md text-xs font-bold">Max</button>
              </div>
            <div class="text-red-500 text-sm mt-2">
                The amount in szcb field must be 5 or more
            </div>
    
            <!-- Stake Button -->
            <button class="w-full mt-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Stake</button>
        </div>
    </div>

    <div class="basis-full bg-white mt-4 mr-2 ml-2 py-6 px-6 mb-6">
        <div class="text-center font-bold">HOW TO STAKE</div>
        <p>1. Deposit USDT or SZCB to your account using your address on the <NuxtLink to="#"> <span class="hover:underline text-blue-600">deposit page</span> </NuxtLink></p>
        <p class="mt-2">2. If you deposited USDT, you will need to swap your USDT to SZCB first, if you deposited SZCB, you will not need to swap</p>
        <p class="mt-2">3. You can then stake your SZCB on this page by clicking the Stake Button</p>
        <p class="mt-2">4. You will be paid your staking interest & rewards to your <span class="font-bold">USDT Interest Ledger Wallet everyday.</span></p>
        <p class="mt-2">5.You can swap your USDT Interest & rewards to SZCB for restaking or USDT which you can then withdraw.</p>
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
