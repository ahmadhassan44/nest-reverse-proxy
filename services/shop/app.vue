<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <span class="text-2xl font-bold text-purple-600">Shop Service</span>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Welcome to Our Shop
        </h1>
        <p class="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          This is a microservice running on shop.localhost
        </p>
      </div>

      <!-- Featured Products -->
      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="i in 3" :key="i" class="bg-white overflow-hidden shadow rounded-lg">
          <div class="relative pb-2/3">
            <div class="h-48 bg-purple-100 flex items-center justify-center">
              <svg class="h-12 w-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-medium text-gray-900">Product {{ i }}</h3>
              <span class="text-purple-600 font-semibold">$99.99</span>
            </div>
            <p class="mt-2 text-sm text-gray-500">
              This is a sample product description showcasing our shop's offerings.
            </p>
            <div class="mt-4">
              <button class="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-white mt-12">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div class="mt-8 md:mt-0 md:order-1">
          <p class="text-center text-base text-gray-400">
            &copy; 2024 Shop Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Add any required script logic here
</script>
