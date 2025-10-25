<template>
  <div class="p-4 md:p-6 max-w-4xl mx-auto">
    <h2 class="text-2xl font-bold mb-4">🎟️ Ticket Management</h2>

    <form @submit.prevent="handleSubmit" class="bg-gray-800 p-4 rounded-xl shadow-md mb-6">
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm mb-1">Title *</label>
          <input
            v-model="form.title"
            type="text"
            class="w-full p-2 rounded bg-gray-700 border border-gray-600"
          />
        </div>
        <div>
          <label class="block text-sm mb-1">Status *</label>
          <select
            v-model="form.status"
            class="w-full p-2 rounded bg-gray-700 border border-gray-600"
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>
      <div class="mt-3">
        <label class="block text-sm mb-1">Description</label>
        <textarea
          v-model="form.description"
          class="w-full p-2 rounded bg-gray-700 border border-gray-600"
        ></textarea>
      </div>

      <button type="submit" class="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
        {{ editing ? 'Update Ticket' : 'Create Ticket' }}
      </button>
    </form>

    <div class="space-y-4">
      <div v-if="tickets.length === 0" class="text-gray-400">No tickets yet.</div>

      <div
        v-else
        v-for="t in tickets"
        :key="t.id"
        class="bg-gray-800 p-4 rounded-xl shadow-md flex justify-between items-start"
      >
        <div>
          <h3 class="text-lg font-semibold">{{ t.title }}</h3>
          <p class="text-sm text-gray-400">{{ t.description }}</p>
          <span :class="statusClass(t.status)" class="inline-block mt-2 text-xs rounded-full">{{
            t.status
          }}</span>
        </div>

        <div class="space-x-2">
          <button @click="editTicket(t)" class="text-blue-400 hover:text-blue-300">Edit</button>
          <button @click="deleteTicketConfirm(t.id)" class="text-red-400 hover:text-red-300">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getTickets, addTicket, updateTicket, deleteTicket } from '../../services/ticketService'
import { toast } from 'vue3-toastify'
import { useAuth } from '../../composables/useAuth'

const tickets = ref([])
const { user } = useAuth()

const form = ref({ title: '', description: '', status: 'open' })
const editing = ref(null)

onMounted(() => {
  if (user.value) tickets.value = getTickets(user.value.email)
})

function refresh() {
  tickets.value = getTickets(user.value.email)
}

function handleSubmit() {
  if (!form.value.title.trim()) return toast.error('Title required')

  if (editing.value) {
    updateTicket(editing.value, form.value)
    toast.success('Ticket updated!')
    editing.value = null
  } else {
    addTicket(form.value, user.value.email)
    toast.success('Ticket created!')
  }

  form.value = { title: '', description: '', status: 'open' }
  refresh()
}

function editTicket(t) {
  editing.value = t.id
  form.value = { title: t.title, description: t.description, status: t.status }
}

function deleteTicketConfirm(id) {
  if (confirm('Delete ticket?')) {
    deleteTicket(id)
    toast.success('Ticket deleted')
    refresh()
  }
}

function statusClass(s) {
  return `px-2 py-1 text-xs rounded-full ${s === 'open' ? 'bg-green-600' : s === 'in_progress' ? 'bg-yellow-600' : 'bg-gray-500'}`
}
</script>
