<template>
  <div class="min-h-screen flex bg-gray-950 text-gray-100">
    <!-- Sidebar -->
    <aside class="bg-gray-900 p-4 md:w-64 w-20 flex flex-col">
      <RouterLink
        to="/"
        class="flex items-center gap-3 text-left text-xl font-bold mb-8 text-white hover:text-yellow-400 transition"
      >
        <TicketCheck class="w-7 h-7 max-md:mx-auto text-yellow-500" />
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

      <button
        @click="doLogout"
        class="mt-auto flex items-center gap-3 text-left py-2 px-3 rounded hover:bg-red-700 text-red-400"
      >
        <LogOut class="w-7 h-7 text-red-500" />
        <span class="hidden md:inline">Logout</span>
      </button>
    </aside>

    <!-- Main Section -->
    <main class="flex-1 p-6 overflow-auto">
      <component :is="currentComponent" />
    </main>
  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { LayoutDashboard, Ticket, LogOut, TicketCheck } from 'lucide-vue-next'
import Overview from './Overview.vue'
import Tickets from './Tickets.vue'
import { useAuth } from '../../composables/useAuth'

const { logout } = useAuth()
const router = useRouter()
const route = useRoute() // ✅ Missing before

const active = ref('overview')

function setActive(name) {
  active.value = name
}

onMounted(() => {
  if (route.query.t === 'tickets') {
    active.value = 'tickets'
  }
})

watch(
  () => route.query.t,
  (newTab) => {
    if (newTab) active.value = newTab
  },
)

const currentComponent = computed(() => (active.value === 'overview' ? Overview : Tickets))

function doLogout() {
  if (confirm('Logout?')) {
    logout()
    router.push('/login')
  }
}

function btnClass(name) {
  return `flex items-center gap-3 text-left text-gray-300 text-lg py-2 px-3 rounded ${
    active.value === name ? 'bg-gray-700' : 'hover:bg-gray-800'
  }`
}
</script>
