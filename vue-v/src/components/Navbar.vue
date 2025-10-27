<template>
  <div class="relative z-999 w-full">
    <nav
      class="max-w-[1200px] w-full mt-6 flex items-center justify-between border border-blue-900 px-6 py-4 rounded-full text-gray-800 text-sm bg-white/70 backdrop-blur-md relative shadow-sm mx-auto"
    >
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2">
        <TicketCheck width="28" height="28" class="text-blue-700" />
        <h1 class="text-lg font-semibold">My TicketR</h1>
      </RouterLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8 ml-8">
        <RouterLink to="/" class="relative overflow-hidden h-6 group font-medium">
          <span class="block group-hover:-translate-y-full transition-transform duration-300">
            Home
          </span>
          <span
            class="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300"
          >
            Home
          </span>
        </RouterLink>

        <RouterLink to="/dashboard" class="relative overflow-hidden h-6 group font-medium">
          <span class="block group-hover:-translate-y-full transition-transform duration-300">
            Dashboard
          </span>
          <span
            class="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300"
          >
            Dashboard
          </span>
        </RouterLink>

        <RouterLink
          :to="{ path: '/dashboard', query: { t: 'tickets' } }"
          class="relative overflow-hidden h-6 group font-medium"
        >
          <span class="block group-hover:-translate-y-full transition-transform duration-300">
            My Tickets
          </span>
          <span
            class="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300"
          >
            My Tickets
          </span>
        </RouterLink>
      </div>

      <!-- Desktop Buttons -->
      <div class="hidden md:flex items-center gap-4">
        <!-- Show Get Started if not logged in -->
        <RouterLink
          v-if="!isLoggedIn"
          to="/signup"
          class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition duration-300 shadow"
        >
          Get Started
        </RouterLink>

        <!-- Show Logout if logged in -->
        <button
          v-else
          @click="doLogout"
          class="flex items-center gap-2 bg-red-300 hover:bg-red-400 text-red-600 px-5 py-2 rounded-lg text-sm font-medium transition duration-300 shadow"
        >
          <span>Logout</span>
          <LogOut class="w-5 h-5 text-red-600" />
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden text-gray-600 focus:outline-none">
        <svg
          v-if="isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Mobile Menu -->
      <div
        v-if="isOpen"
        class="absolute top-20 z-50 left-0 w-full h-screen bg-white/95 backdrop-blur-md shadow-md flex flex-col items-center gap-5 py-6 md:hidden text-base"
      >
        <RouterLink to="/" @click="toggleMenu" class="hover:text-blue-600">Home</RouterLink>
        <RouterLink to="/dashboard" @click="toggleMenu" class="hover:text-blue-600">
          Dashboard
        </RouterLink>
        <RouterLink
          :to="{ path: '/dashboard', query: { t: 'tickets' } }"
          @click="toggleMenu"
          class="hover:text-blue-600"
        >
          My Tickets
        </RouterLink>

        <!-- ✅ Conditional Button -->
        <RouterLink
          v-if="!isLoggedIn"
          to="/signup"
          @click="toggleMenu"
          class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition"
        >
          Get Started
        </RouterLink>

        <button
          v-else
          @click="doLogout"
          class="mt-auto mb-25 flex bg-red-300 hover:bg-red-400 text-red-600 gap-3 px-5 py-2 rounded-lg font-medium transition"
        >
          <span>Logout</span>
          <LogOut class="w-7 h-7 text-red-600" />
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { LogOut, TicketCheck } from 'lucide-vue-next'

const isOpen = ref(false)
const isLoggedIn = ref(false)
const router = useRouter()

// Toggle mobile menu
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// Simulate logout logic
function logout() {
  localStorage.removeItem('ticketapp_session')
  isLoggedIn.value = false
}

function doLogout() {
  if (confirm('Logout?')) {
    logout()
    router.push('/login')
  }
}

// Check login state on mount
onMounted(() => {
  const session = localStorage.getItem('ticketapp_session')
  isLoggedIn.value = !!session
})
</script>
