import { ref } from 'vue'

const SESSION_KEY = 'ticketapp_session'
const USERS_KEY = 'ticketapp_users'

const user = ref(JSON.parse(localStorage.getItem(SESSION_KEY)) || null)

function signup(name, email, password) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || []
  if (users.some((u) => u.email === email)) {
    return { success: false, message: 'User already exists' }
  }
  const newUser = { name, email, password }
  users.push(newUser)
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
  localStorage.setItem(SESSION_KEY, JSON.stringify(newUser))
  user.value = newUser
  return { success: true }
}

function login(email, password) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || []
  const found = users.find((u) => u.email === email && u.password === password)
  if (!found) return { success: false, message: 'Invalid credentials' }
  localStorage.setItem(SESSION_KEY, JSON.stringify(found))
  user.value = found
  return { success: true }
}

function logout() {
  localStorage.removeItem(SESSION_KEY)
  user.value = null
}

export function useAuth() {
  return { user, signup, login, logout }
}
