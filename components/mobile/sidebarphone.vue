<template>
    <div class="basis-1/5 mt-2">
        <aside id="" class=" w- h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div class="h-full px- py-10 overflow-y-auto dark:bg-gray-800">
                <ul class="space-y-1 clip-rule font-medium ">

                    <div class="flex justify-end mr-4">
                        <NuxtLink to="/dashboardphone">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                                </path>
                            </svg>
                        </NuxtLink>
                    </div>
                    <div class="flex justify-center py-3">
                        <svg class="w-[84px] h-[74px] text-gray-400 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex justify-center font-bold">Lekside081</div>
                    <div class="flex justify-center font-normal">Lawalholamilekan@gmail.com</div>
                    <div class="py-4">
                    <hr class="border-t border-gray-300" />
                    </div>

                    <li>
                        <a href="/dashboard"
                            class="flex items-center p-2 bg-blue-900 dark:text-white dark:hover:bg-gray-700 group">
                            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z"
                                    clip-rule="evenodd" />
                            </svg>

                            <span class="ms-3 text-1xl text-white">Dashboard <br /> <span
                                    class="font-extralight text-xs">Overview of your
                                    SamzugaGPT</span></span>
                        </a>
                    </li>
                    <li>
                        <a href="/deposite"
                            class="flex items-center p-2 dark:text-white dark:hover:bg-gray-700 group hover:bg-blue-600">
                            <svg class="w-[31px] h-[31px] text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 6H5m2 3H5m2 3H5m2 3H5m2 3H5m11-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2M7 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                            </svg>
                            <span class="ms-3 text-1xl">Deposit <br /> <span
                                    class="font-extralight text-xs text-gray-400">Fund your
                                    SamzugaGPT</span></span>
                        </a>
                    </li>
                    <li>
                        <a href="/staking"
                            class="flex items-center p-2 dark:text-white dark:hover:bg-gray-700 group hover:bg-blue-600">
                            <svg class="w-[31px] h-[31px] text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" />
                            </svg>
                            <span class="ms-3 text-1xl">Staking <br /> <span
                                    class="font-extralight text-xs text-gray-400">Earn
                                    rewards by
                                    staking funds</span></span>
                        </a>
                    </li>
                    <li>
                        <a href="withdrawal"
                            class="flex items-center p-2 dark:text-white dark:hover:bg-gray-700 group hover:bg-blue-600">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                                    d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                            </svg>
                            <span class="ms-3 text-1xl">Withdrawal<br /> <span
                                    class="font-extralight text-xs text-gray-400">Send out
                                    your
                                    staking rewards</span></span>
                        </a>
                    </li>
                    <li>
                        <a href="/swap"
                            class="flex items-center p-2 dark:text-white dark:hover:bg-gray-700 group hover:bg-blue-600">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4" />
                            </svg>
                            <span class="ms-3 text-1xl">Swap<br /> <span class="font-extralight text-xs text-gray-400">Swap
                                    your
                                    currencies</span></span>
                        </a>
                    </li>
                    <li>
                        <a href="/referral"
                            class="flex items-center p-2 dark:text-white dark:hover:bg-gray-700 group hover:bg-blue-600">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M17.5 3a3.5 3.5 0 0 0-3.456 4.06L8.143 9.704a3.5 3.5 0 1 0-.01 4.6l5.91 2.65a3.5 3.5 0 1 0 .863-1.805l-5.94-2.662a3.53 3.53 0 0 0 .002-.961l5.948-2.667A3.5 3.5 0 1 0 17.5 3Z" />
                            </svg>
                            <span class="ms-3 text-1xl">Refer and Earn<br /> <span
                                    class="font-extralight text-xs text-gray-400">Earn
                                    amazing
                                    bonuses</span></span>
                        </a>
                    </li>
                    <li>
                        <a href="/transaction"
                            class="flex items-center p-2 dark:text-white dark:hover:bg-gray-700 group hover:bg-blue-600">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z" />
                            </svg>
                            <span class="ms-3 text-1xl">Transaction History<br /> <span
                                    class="font-extralight text-xs text-gray-400">See
                                    transactions you've made</span></span>
                        </a>
                    </li>
                    <li>
                        <a href="/personal-info"
                            class="flex items-center p-2 dark:text-white dark:hover:bg-gray-700 group hover:bg-blue-600">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="ms-3 text-1xl">Personal Information<br /> <span
                                    class="font-extralight text-xs text-gray-400">Your
                                    profile settings</span></span>
                        </a>
                    </li>
                    <li>
                        <a href="/helpsupport"
                            class="flex items-center p-2 dark:text-white dark:hover:bg-gray-700 group hover:bg-blue-600">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <span class="ms-3 text-1xl">Help & Support<br /> <span
                                    class="font-extralight text-xs text-gray-400">Make
                                    Enquiries/resolve issues</span></span>
                        </a>
                    </li>
                    <li>
                        <a href="/signout"
                            class="flex items-center p-2 dark:text-white dark:hover:bg-gray-700 group hover:bg-blue-600">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                            </svg>
                            <span class="ms-3 text-1xl">Sign Out<br /> <span
                                    class="font-extralight text-xs text-gray-400">Sign
                                    Out</span></span>
                        </a>
                    </li>
                </ul>
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
    background: #414867;
    /* Color of the track */
}

::-webkit-scrollbar-thumb {
    background-color: #f75454;
    /* Color of the scrollbar thumb */
    border-radius: 4px;
    /* Roundness of the scrollbar thumb */
    border: 2px solid #7061f9;
    /* Optional: adds space around the thumb */
}

::-webkit-scrollbar-thumb:hover {
    background: #cbbdbd;
    /* Darker on hover */
}

/* For Firefox */
html {
    scrollbar-width: thin;
    /* Width of the scrollbar */
    scrollbar-color: #fb4747 #dd1919;
    /* Scrollbar thumb color and track color */
}

/* For chrome */
html {
    scrollbar-width: thin;
    /* Width of the scrollbar */
    scrollbar-color: #fb4747 #dd1919;
    /* Scrollbar thumb color and track color */
}</style>
