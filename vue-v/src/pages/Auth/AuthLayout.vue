<template>
  <div
    class="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-white px-4"
  >
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <h2 class="text-2xl font-semibold text-center mb-6">{{ title }}</h2>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({ title: String })
</script>
