<template>
  <AuthLayout title="Create Account">
    <form @submit.prevent="onSubmit" class="space-y-4">
      <!-- Name -->
      <div>
        <label class="block text-gray-700 mb-1">Name</label>
        <input
          v-model="form.name"
          type="text"
          required
          class="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block text-gray-700 mb-1">Email</label>
        <input
          v-model="form.email"
          type="email"
          required
          class="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>

      <!-- Password -->
      <div>
        <label class="block text-gray-700 mb-1">Password</label>
        <input
          v-model="form.password"
          type="password"
          required
          class="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
        <p v-if="passwordError" class="text-red-600 text-sm mt-1">
          {{ passwordError }}
        </p>
      </div>

      <!-- Confirm Password -->
      <div>
        <label class="block text-gray-700 mb-1">Confirm Password</label>
        <input
          v-model="form.confirmPassword"
          type="password"
          required
          class="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
        <p v-if="confirmError" class="text-red-600 text-sm mt-1">
          {{ confirmError }}
        </p>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Sign Up
      </button>
    </form>

    <p class="text-center text-sm text-gray-600 mt-4">
      Already have an account?
      <router-link to="/login" class="text-blue-600 hover:underline"> Login </router-link>
    </p>
  </AuthLayout>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../../composables/useAuth'
import AuthLayout from './AuthLayout.vue'
import { toast } from 'vue3-toastify'

const router = useRouter()
const { signup, user } = useAuth()
const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})
const passwordError = ref('')
const confirmError = ref('')

// --- Password Validation ---
function validatePassword(password) {
  const minLength = 8
  const hasUpper = /[A-Z]/.test(password)
  const hasLower = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)

  if (password.length < minLength) return 'Password must be at least 8 characters long.'
  if (!hasUpper) return 'Password must include at least one uppercase letter.'
  if (!hasLower) return 'Password must include at least one lowercase letter.'
  if (!hasNumber) return 'Password must include at least one number.'
  return ''
}

// --- Submit Logic ---
function onSubmit() {
  passwordError.value = validatePassword(form.password)
  if (passwordError.value) return

  if (form.password !== form.confirmPassword) {
    confirmError.value = "Passwords don't match."
    return
  } else {
    confirmError.value = ''
  }

  const res = signup(form.name, form.email, form.password)
  if (!res.success) return toast.error(res.message)

  toast.success('Account created! Logging you in...')
}

watch(user, (val) => {
  if (val) router.push('/dashboard')
})
</script>
