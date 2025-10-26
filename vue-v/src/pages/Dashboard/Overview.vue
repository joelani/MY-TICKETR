<template>
  <div class="p-6 text-gray-100">
    <h2 class="text-3xl font-bold mb-2">Welcome back, {{ user?.name || 'User' }} 👋</h2>
    <p class="text-gray-400 mb-6">Here’s a quick summary of your ticket activity.</p>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div class="bg-gray-800 p-5 rounded-xl shadow">
        <h3 class="text-gray-400 text-sm">Total Tickets</h3>
        <p class="text-3xl font-bold">{{ total }}</p>
      </div>
      <div class="bg-gray-800 p-5 rounded-xl shadow">
        <h3 class="text-gray-400 text-sm">Open</h3>
        <p class="text-3xl font-bold text-green-400">{{ open }}</p>
      </div>
      <div class="bg-gray-800 p-5 rounded-xl shadow">
        <h3 class="text-gray-400 text-sm">In Progress</h3>
        <p class="text-3xl font-bold text-yellow-400">{{ inProgress }}</p>
      </div>
      <div class="bg-gray-800 p-5 rounded-xl shadow">
        <h3 class="text-gray-400 text-sm">Closed</h3>
        <p class="text-3xl font-bold text-gray-400">{{ closed }}</p>
      </div>
    </div>

    <h3 class="text-xl font-semibold mb-3">Recent Tickets</h3>
    <div v-if="tickets.length === 0" class="text-gray-400">No tickets found.</div>
    <div v-else class="bg-gray-800 rounded-lg overflow-hidden shadow">
      <table class="w-full text-left text-gray-300">
        <thead class="bg-gray-700 text-sm uppercase">
          <tr>
            <th class="p-3">Title</th>
            <th class="p-3">Status</th>
            <th class="p-3">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="t in recent" :key="t.id" class="border-b border-gray-700">
            <td class="p-3">{{ t.title }}</td>
            <td class="p-3">
              <span :class="statusClass(t.status)">{{ formatStatus(t.status) }}</span>
            </td>
            <td class="p-3 text-sm text-gray-400">
              {{
                t.createdAt
                  ? new Date(t.createdAt).toLocaleDateString()
                  : new Date(t.id * 1).toLocaleDateString()
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { getTickets } from '../../services/ticketService'
import { useAuth } from '../../composables/useAuth'

const { user } = useAuth()
const tickets = ref([])

onMounted(() => {
  tickets.value = getTickets()
})

const total = computed(() => tickets.value.length)
const open = computed(() => tickets.value.filter((t) => t.status === 'open').length)
const inProgress = computed(() => tickets.value.filter((t) => t.status === 'in_progress').length)
const closed = computed(() => tickets.value.filter((t) => t.status === 'closed').length)
const recent = computed(() => tickets.value.slice(-5).reverse())

function statusClass(s) {
  return `px-2 py-1 text-xs rounded-full ${s === 'open' ? 'bg-green-600' : s === 'in_progress' ? 'bg-yellow-600' : 'bg-gray-500'}`
}
function formatStatus(s) {
  return s.replace('_', ' ')
}
</script>
