<template>
  <AuthLayout title="Create Account">
    <form @submit.prevent="onSubmit" class="space-y-4">
      <div>
        <label class="block text-gray-700 mb-1">Name</label>
        <input
          v-model="form.name"
          type="text"
          required
          class="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>
      <div>
        <label class="block text-gray-700 mb-1">Email</label>
        <input
          v-model="form.email"
          type="email"
          required
          class="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>
      <div>
        <label class="block text-gray-700 mb-1">Password</label>
        <input
          v-model="form.password"
          type="password"
          required
          class="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Sign Up
      </button>
    </form>

    <p class="text-center text-sm text-gray-600 mt-4">
      Already have an account?
      <router-link to="/login" class="text-blue-600 hover:underline"> Login</router-link>
    </p>
  </AuthLayout>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../../composables/useAuth'
import AuthLayout from './AuthLayout.vue'
import { toast } from 'vue3-toastify'

const router = useRouter()
const { signup, user } = useAuth()
const form = reactive({ name: '', email: '', password: '' })

function onSubmit() {
  const res = signup(form.name, form.email, form.password)
  if (!res.success) {
    toast.error(res.message)
    return
  }
  toast.success('Account created! Logging you in...')
  // user becomes set; watch below will redirect
}

watch(user, (val) => {
  if (val) router.push('/dashboard')
})
</script>
