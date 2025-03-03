<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['select'])
</script>

<template>
  <div class="relative">
    <a 
      href="#" 
      class="text-white hover:text-gray-300 transition-colors duration-200 pb-2 block"
      @click.prevent="emit('select')"
    >
      {{ text }}
    </a>
    <div 
      class="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4A373] transition-all duration-300 ease-out origin-left"
      :class="isSelected ? 'scale-x-100' : 'scale-x-0'"
    ></div>
  </div>
</template>