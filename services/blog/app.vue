<!-- Blog Service Homepage -->
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <span class="text-2xl font-bold text-indigo-600">Blog Service</span>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Welcome to the Blog Service
        </h1>
        <p class="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          This is a microservice running on blog.localhost
        </p>
      </div>

      <!-- Sample Blog Posts -->
      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="i in 3" :key="i" class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg class="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Sample Blog Post {{ i }}</h3>
                <p class="mt-1 text-sm text-gray-500">
                  This is a sample blog post description that demonstrates the layout.
                </p>
              </div>
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
            &copy; 2024 Blog Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>
