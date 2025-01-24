<template>
    <div class="basis-full min-h-screen bg-gray-50 px- items-center p- md:p-6 lg:p-0 w-full md:w-1/2 lg:w-1/3 mx-auto">
        <aside id="" class=" w- h-screen transition-transform sm:translate-x-0 overflow-y-auto" aria-label="Sidebar">
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
            <button class="px-4 py-2 bg-gray-200 text-gray-600 rounded-md">Invite</button>
          <NuxtLink to="/status">
            <button class="px-4 py-2 bg-blue-800 rounded-md text-white">Status</button>
          </NuxtLink>
        </div>
    
        <!-- Staking Balances -->
        <div class="mt-6">
            <h2 class="text-lg font-semibold mb-4 ml-5">Referral Bonus Balances</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            </div>
        </div>

        <div class="flex space-x-4 ml-5 mr-5">
            <div class="basis-1/3 bg-zinc-200 rounded-lg py-2">
                <div class="flex justify-between ml-2 mr-2">
                    <div class="text-sm">SZCB Referral Bonus</div>
                    <div><svg class="w-[19px] h-[19px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z"/>
                        <path fill-rule="evenodd" d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M17.657 4.811a.988.988 0 0 1 1.414 0A10.224 10.224 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.988.988 0 0 1-1.414 0 1.029 1.029 0 0 1 0-1.438A8.173 8.173 0 0 0 20 12a8.173 8.173 0 0 0-2.343-5.751 1.029 1.029 0 0 1 0-1.438Z" clip-rule="evenodd"/>
                      </svg></div>
                </div>
                <div class="font-bold ml-2 mt-2">SZCB REFERRAL BONUS</div>
                <div class="ml-2">0</div>
            </div>

            <div class="basis-1/3 bg-zinc-200 rounded-lg py-2">
                <div class="flex justify-between ml-2 mr-2">
                    <div class="text-sm">USDT Referral Bonus</div>
                    <div><svg class="w-[19px] h-[19px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z"/>
                        <path fill-rule="evenodd" d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M17.657 4.811a.988.988 0 0 1 1.414 0A10.224 10.224 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.988.988 0 0 1-1.414 0 1.029 1.029 0 0 1 0-1.438A8.173 8.173 0 0 0 20 12a8.173 8.173 0 0 0-2.343-5.751 1.029 1.029 0 0 1 0-1.438Z" clip-rule="evenodd"/>
                      </svg></div>
                </div>
                <div class="font-bold ml-2 mt-2">REFERRAL BONUSUSDT</div>
                <div class="ml-2">0</div>
            </div>

            <div class="basis-1/3 bg-zinc-200 rounded-lg py-2">
                <div class="flex justify-between ml-2 mr-2">
                    <div class="text-sm">BNB Referral Bonus</div>
                    <div><svg class="w-[19px] h-[19px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z"/>
                        <path fill-rule="evenodd" d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M17.657 4.811a.988.988 0 0 1 1.414 0A10.224 10.224 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.988.988 0 0 1-1.414 0 1.029 1.029 0 0 1 0-1.438A8.173 8.173 0 0 0 20 12a8.173 8.173 0 0 0-2.343-5.751 1.029 1.029 0 0 1 0-1.438Z" clip-rule="evenodd"/>
                      </svg></div>
                </div>
                <div class="font-bold ml-2 mt-2">BNB REFERRAL BONUS</div>
                <div class="ml-2">0</div>
            </div>
        </div>

        <div class="flex justify-center">
            <img src="/public/referral.2f8d2a1c.svg" alt="referral">
        </div>
        <div class="flex justify-center">
        <p>Copy your referral link below and share with your friends, you will earn <span class="font-bold">5%</span> on the first deposit of every person you referred, other amazing</p>
        </div>
        <div class="flex justify-center">
        <p>bonuses awaits as you refer more people.</p>
        </div>
        <div class="flex justify-center mt-4">
           <div class="basis-10/1 bg-zinc-200 px-2 py-2.5 rounded-lg text-xl">
            https://app.samzugagpt.com/register?ref=Lekside081
            </div>
        </div>
        <div class="flex justify-center mt-4 py">
            <div class="basis-1/12 bg-blue-900 text-white rounded-lg text-center py-3">
                copy
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