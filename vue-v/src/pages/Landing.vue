<template>
  <main
    class="min-h-screen flex flex-col items-center justify-between bg-linear-to-b from-blue-100 to-white pt-6 overflow-hidden"
  >
    <Navbar />
    <!-- Hero Section -->
    <Hero />

    <!-- Features Section -->
    <Features />

    <!-- Footer Section -->
    <Footer />

    <!-- Wavy Footer SVG -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg viewBox="0 0 1440 320" class="w-full h-40 text-blue-200" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,160L48,165.3C96,171,192,181,288,160C384,139,480,85,576,80C672,75,768,117,864,154.7C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96V320H0Z"
        ></path>
      </svg>
    </div>
  </main>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import Features from '../components/Features.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>
