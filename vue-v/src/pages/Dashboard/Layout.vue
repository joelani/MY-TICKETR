<template>
  <div class="min-h-screen flex bg-gray-950 text-gray-100">
    <aside class="bg-gray-900 p-4 md:w-64 w-20 flex flex-col">
      <RouterLink
        to="/"
        class="flex items-center gap-3 text-left text-xl font-bold mb-8 text-white hover:text-yellow-400 transition"
      >
        <TicketCheck class="w-5 h-5 text-yellow-500" />
        <span class="hidden md:block">My TicketR</span>
      </RouterLink>

      <nav class="flex flex-col gap-2">
        <button @click="setActive('overview')" :class="btnClass('overview')">
          <LayoutDashboard class="w-7 h-7 text-blue-500" />
          <span class="hidden md:inline">Overview</span>
        </button>

        <button @click="setActive('tickets')" :class="btnClass('tickets')">
          <Ticket class="w-7 h-7 text-green-500" />

          <span class="hidden md:inline">Tickets</span>
        </button>
      </nav>
      <!-- import { LayoutDashboard, Ticket, LogOut, TicketCheck } from "lucide-react"; -->
      <button
        @click="doLogout"
        class="mt-auto flex items-center gap-3 text-left py-2 px-3 rounded hover:bg-red-700 text-red-400"
      >
        <!-- <svg class="w-5 h-5"></svg> -->
        <LogOut class="w-7 h-7 text-red-500" />
        <span class="hidden md:inline">Logout</span>
      </button>
    </aside>

    <main class="flex-1 p-6 overflow-auto">
      <!-- <h1 class="text-2xl font-bold mb-4">Welcome, {{ user?.name }}</h1> -->
      <component :is="currentComponent" />
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import Overview from './Overview.vue'
import Tickets from './Tickets.vue'
import { useAuth } from '../../composables/useAuth'
import { useRouter } from 'vue-router'
import { LayoutDashboard, Ticket, LogOut, TicketCheck } from 'lucide-vue-next'

const { user, logout } = useAuth()
const router = useRouter()

const active = ref('overview')
function setActive(n) {
  active.value = n
}

// map active to component
const currentComponent = computed(() => (active.value === 'overview' ? Overview : Tickets))

function doLogout() {
  if (confirm('Logout?')) {
    logout()
    router.push('/login')
  }
}

function btnClass(name) {
  return `flex items-center gap-3 text-left text-gray-300 text-lg py-2 px-3 rounded ${active.value === name ? 'bg-gray-700' : 'hover:bg-gray-800'}`
}
</script>
