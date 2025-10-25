<template>
  <AuthLayout title="Welcome Back">
    <form @submit.prevent="onSubmit" class="space-y-4">
      <div>
        <label class="block text-gray-700 mb-1">Email</label>
        <input
          v-model="form.email"
          type="email"
          required
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label class="block text-gray-700 mb-1">Password</label>
        <input
          v-model="form.password"
          type="password"
          required
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Login
      </button>
    </form>

    <p class="text-center text-sm text-gray-600 mt-4">
      Don’t have an account?
      <router-link to="/signup" class="text-blue-600 hover:underline"> Sign up</router-link>
    </p>
  </AuthLayout>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../../composables/useAuth'
import AuthLayout from './AuthLayout.vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const router = useRouter()
const { login, user } = useAuth()

const form = reactive({ email: '', password: '' })

function onSubmit() {
  const res = login(form.email, form.password)
  if (!res.success) {
    toast.error(res.message)
    return
  }
  toast.success('Login successful!')
  // navigate when user is set (user is reactive)
}

// watch user and navigate when set
watch(user, (val) => {
  if (val) router.push('/dashboard')
})
</script>
