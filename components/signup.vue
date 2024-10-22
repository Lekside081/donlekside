<template>
    <aside id="" class=" w- h-screen transition-transform -translate-x-full sm:translate-x-0 overflow-y-auto" aria-label="Sidebar">
<div class="flex">
    <div class="basis-1/2">
        <img src="/public/3d.webp" alt="Blocks Image">
    </div>

    <div class="basis-1/2">
  
    
    <!-- Header Section -->
    <div class="bg-blue-900 text-center rounded-b-full py-4">
      <h1 class="text-white text-2xl font-bold">DONLEKSIDE</h1>
      <p class="text-white text-sm">Level up your web3 experience.<br> Join the Donlekside revolution!</p>
    </div>
    
    <!-- Form Section -->
    <div class="w-full max-w-lg bg-white ml-20 rounded-lg">
    <h2 class="text-center text-2xl font-semibold">Create Account</h2>
    <p class="text-center text-gray-600">Already have an account? <a href="/login" class="text-blue-600 hover:underline">Login</a></p>
    
    <form class="mt-6 space-y-4">
      
      <!-- First and Last Name -->
      <div class="flex space-x-4">
        <input type="text" placeholder="First Name" class="w-80 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <input type="text" placeholder="Last Name" class="w-80 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>
      
      <!-- Email -->
      <input type="email" placeholder="Email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
      
      <!-- Username -->
      <input type="text" placeholder="Username" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
      
      <!-- Phone Number -->
      <input type="text" placeholder="Phone Number" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
      
      <!-- Referrer -->
      <input type="text" placeholder="Referrer" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
      
      <!-- Password -->
      <div class="relative">
        <input type="password" placeholder="Password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <button type="button" class="absolute inset-y-0 right-0 px-3 py-2 text-gray-600">
          <!-- Eye Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
      </div>
      
      <!-- Agreement -->
      <div class="flex items-center space-x-2">
        <input type="checkbox" id="terms" class="form-checkbox text-blue-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        <label for="terms" class="text-sm text-gray-600">I agree to Samzuga GPT <a href="#" class="text-blue-600 hover:underline">Terms of service</a> and <a href="#" class="text-blue-600 hover:underline">Privacy policy</a></label>
      </div>
      
      <!-- Submit Button -->
      <NuxtLink to="">
      <button type="submit" class="w-full bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg">
        Create Account
      </button>
      </NuxtLink>
    </form>
  </div>
</div>
  
</div>
</aside>
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
  width: px;
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
  background-color: #6c757d;
  color: #fff;
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