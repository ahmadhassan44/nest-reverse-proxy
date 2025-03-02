<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">x
            <span class="text-2xl font-bold text-blue-600">Payments Service</span>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Secure & Seamless Payments
        </h1>
        <p class="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          A microservice dedicated to fast and reliable transactions.
        </p>
      </div>

      <!-- Payment Options -->
      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(payment, index) in paymentMethods" :key="index" class="bg-white overflow-hidden shadow-lg rounded-lg">
          <div class="h-48 flex items-center justify-center bg-blue-100">
            <component :is="payment.icon" class="h-16 w-16 text-blue-600" />
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-medium text-gray-900">{{ payment.name }}</h3>
              <span class="text-blue-600 font-semibold">No Fees</span>
            </div>
            <p class="mt-2 text-sm text-gray-500">
              {{ payment.description }}
            </p>
            <div class="mt-4">
              <button class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Pay Now
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
            &copy; 2024 Payments Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { defineComponent, h } from "vue";

// Payment method data
const paymentMethods = [
  {
    name: "Credit Card",
    description: "Pay securely using Visa, MasterCard, or AMEX.",
    icon: defineComponent(() =>
      h("svg", { class: "h-16 w-16", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
        h("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 10H3M16 20H8M21 16H3M4 4h16c.5 0 1 .5 1 1v14c0 .5-.5 1-1 1H4c-.5 0-1-.5-1-1V5c0-.5.5-1 1-1z" })
      ])
    ),
  },
  {
    name: "PayPal",
    description: "Checkout quickly and securely using PayPal.",
    icon: defineComponent(() =>
      h("svg", { class: "h-16 w-16", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
        h("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 8c2.28 0 4 1.5 4 3.5S14.28 15 12 15H9v-7m4 7h1a2 2 0 100-4h-1" })
      ])
    ),
  },
  {
    name: "Cryptocurrency",
    description: "Use Bitcoin, Ethereum, and more.",
    icon: defineComponent(() =>
      h("svg", { class: "h-16 w-16", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
        h("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14.5V18m-2-2.5V18m2-8V7m2 3h-4m4 2h-4" })
      ])
    ),
  },
];
</script>
