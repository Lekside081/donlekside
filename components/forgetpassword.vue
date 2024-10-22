<template>
    <div class="items-center p- md:p-6 lg:p-0 w-full mx-auto">
    <aside id="" class=" w- h-screen transition-transform sm:translate-x-0 overflow-y-auto" aria-label="Sidebar">
    <div class="login-container">
      <div class="login-box">
        <div class="image-container">
          <img src="/public/3d.webp" alt="Blocks Image">
        </div>
        <div class="login-form">
          <div class="bg-blue-900 rounded-b-full ">
            <div class="py-6 mt-4">
          <div class="text-center font-extrabold text-4xl text-white">DONLEKSIDE</div>
          <div class="text-center text-white">Level up your web3 experience.</div>
          <div class="text-center text-white">Join the donlekside revolution!</div>
             </div>
          </div>
          <div class="mb-4">
          <h2 class=" ml-5 mt-20 font-bold text-xl">Forgot Password</h2>
          <p class="ml-5">Enter the email you used to create your account so we can send you instructions</p>
          <p class="ml-5">on how to reset your password.</p>
          </div>
          <div class="justify-center px-6">
          <form @submit.prevent="login">
            <div class="input-group">
                Email
              <input type="email" v-model="email" placeholder="Enter email" required>
            </div>
            </form></div>
            <form class="px-6">
             
            <div class="actions">
               <nuxt-link to="/dashboard" type="submit" class="login-button">Send</nuxt-link>
            </div>
            <NuxtLink to="/login">
            <div class="flex justify-center mt-6">
                <button class="w-full md:w-1/ lg:w-1/ border border-gray-300 text-gray-700 py-2 rounded-lg">
                  Back To Login
                </button>
              </div>
              </NuxtLink>
          </form>
        </div>
      </div>
    </div>
  </aside>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        // Handle login logic here
        console.log('Email:', this.email);
        console.log('Password:', this.password);
      }
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f9fa;
  }
  
  .login-box {
    display: flex;
    width: 4000px;
    height: 700px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
  }
  
  .image-container {
    flex: 1;
    background-color: #e7eaf3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: px;
  }
  
  .login-form {
    flex: 1;
    padding: px;
  }
  
  .title {
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .subtitle {
    font-size: 16px;
    margin-bottom: 30px;
  }
  
  .input-group {
    margin-bottom: 20px;
  }
  
  .input-group input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .forgot-password {
    color: #0c0c0d;
  }
  
  .login-button {
    padding: 10px 300px;
    background-color: #5412efc8;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  /* For WebKit browsers */
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: #414867; /* Color of the track */
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #f75454; /* Color of the scrollbar thumb */
    border-radius: 4px; /* Roundness of the scrollbar thumb */
    border: 3px solid #7061f9; /* Optional: adds space around the thumb */
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
  