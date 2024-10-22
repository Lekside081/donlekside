<template>
    <div class="basis-full bg-slate-50 items-center p-4 md:p-6 lg:p-8 w-full md:w-1/2 lg:w-1/3 mx-auto">
        <div class="mb-4">
           <!-- Dropdown for BNB -->
           <select class="p-2 border rounded w-full">
              <option>BNB</option>
              <!-- Add more options here -->
           </select>
        </div>
     
        <div class="mb-4 flex justify-center">
           <!-- QR code image -->
           <img src="public/code.png" alt="QR Code" class="w-32 h-32 md:w-40 md:h-40">
        </div>
     
        <div class="text-center">
           <p class="text-sm md:text-base">
              Only send <strong>SZCB, USDT, and BNB</strong> to this address.
              <br>Sending any other asset to this address may result in the loss of your deposit!
           </p>
           <p class="text-red-500 font-bold mt-2 text-sm md:text-base">
              Please note, minimum deposit is $1 worth of SZCB, USDT, and BNB.
           </p>
           <p class="text-xs md:text-sm mt-1">Note: We only support BEP20</p>
        </div>
     
        <div class="mt-4 p-2 bg-gray-200 text-sm md:text-base">
           <code>0x5e02dfc13....</code>
        </div>
     </div>
     
</template>