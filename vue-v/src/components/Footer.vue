<template>
  <footer
    class="flex flex-col bg-blue-100 items-center mt-24 justify-around w-full py-16 text-sm text-gray-800/70"
  >
    <div class="flex items-center gap-8">
      <a href="#" class="font-medium text-gray-500 hover:text-black transition-all"> Home </a>
      <a href="#" class="font-medium text-gray-500 hover:text-black transition-all"> About </a>
      <a href="#" class="font-medium text-gray-500 hover:text-black transition-all"> Services </a>
      <a href="#" class="font-medium text-gray-500 hover:text-black transition-all"> Contact </a>
      <a href="#" class="font-medium text-gray-500 hover:text-black transition-all"> Help </a>
    </div>
    <div class="flex items-center gap-4 mt-8 text-indigo-500">
      <a href="#" class="hover:-translate-y-0.5 transition-all duration-300">
        <Linkedin
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#fff"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </a>
      <a href="#" class="hover:-translate-y-0.5 transition-all duration-300">
        <Instagram
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#fff"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </a>
      <a href="#" class="hover:-translate-y-0.5 transition-all duration-300">
        <Github
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#fff"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </a>
      <a href="#" class="hover:-translate-y-0.5 transition-all duration-300">
        <Twitter
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#fff"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </a>
    </div>
    <p class="mt-8 text-center">Copyright © 2025 <a href="/">Lani</a>. All rights reservered.</p>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}
</style>
<script setup>
import { Github, Instagram, Linkedin, Twitter } from 'lucide-vue-next'
</script>
