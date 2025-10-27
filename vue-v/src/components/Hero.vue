<template>
  <section class="relative flex flex-col justify-center items-center text-center mt-24 px-6 z-20">
    <!-- Circles -->
    <div
      class="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-40"
    >
      <div class="w-48 h-48 bg-blue-300 rounded-full absolute animate-pulse"></div>
    </div>
    <div
      class="absolute top-2/3 right-1/4 transform translate-x-1/2 translate-y-1/2 z-10 opacity-40"
    >
      <div class="w-40 h-40 bg-yellow-200 rounded-full absolute animate-pulse"></div>
    </div>

    <!-- Text -->
    <h1 class="text-5xl font-bold text-gray-800 mb-4 z-10">My TicketR</h1>
    <p class="text-lg text-gray-600 mb-8 max-w-md z-10">
      Streamline your workflow and manage tickets effortlessly with our all-in-one management
      system.
    </p>

    <!-- Buttons -->
    <div v-if="!isLoggedIn" class="flex gap-4 z-10">
      <RouterLink
        to="/login"
        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition"
      >
        Login
      </RouterLink>
      <RouterLink
        to="/signup"
        class="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg shadow transition"
      >
        Get Started
      </RouterLink>
    </div>

    <!--Dashboard button if logged in -->
    <div v-else class="z-10">
      <RouterLink
        to="/dashboard"
        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition"
      >
        Go to Dashboard
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const isLoggedIn = ref(false)

onMounted(() => {
  const session = localStorage.getItem('ticketapp_session')
  isLoggedIn.value = !!session
})
</script>
