<script setup>
const activeTab = ref('home') // Track active tab
const currentSlide = ref(0)
const slides = ref([
  {
    image: '/hero1.png',
    title: 'Richird Norton photorealistic rendering as real photos',
    date: '08.08.2021',
    description: 'Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.'
  },
  {
    image: '/hero2.png',
    title: 'Richird Norton photorealistic rendering as real photos',
    date: '08.08.2021',
    description: 'Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.'
  },
  {
    image: '/hero3.png',
    title: 'Richird Norton photorealistic rendering as real photos',
    date: '08.08.2021',
    description: 'Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.'
  }
  // Add more slides as needed
])

const isChanging = ref(false)
const direction = ref('right') // Track slide direction
const setSlide = (index) => {
  if (currentSlide.value === index) return
  direction.value = index > currentSlide.value ? 'right' : 'left'
  isChanging.value = true
  setTimeout(() => {
    currentSlide.value = index
    setTimeout(() => {
      isChanging.value = false
    }, 500) // Increased delay for smoother transition
  }, 10) // Reduced initial delay
}
</script>

<template>
  <div class="relative">
    <!-- Header with transparency -->
    <header class="absolute w-full top-0 z-50 bg-black/20 px-16">
      <div class="container mx-auto px-4">
        <nav class="flex items-center justify-between py-6">
          <div class="font-lora text-2xl font-bold text-white">
            RUNO
          </div>
          <ul class="flex space-x-6">
            <li>
              <NavItem 
                text="Home" 
                :is-selected="activeTab === 'home'"
                @select="activeTab = 'home'"
              />
            </li>
            <li>
              <NavItem 
                text="About" 
                :is-selected="activeTab === 'about'"
                @select="activeTab = 'about'"
              />
            </li>
            <li>
              <NavItem 
                text="Articles" 
                :is-selected="activeTab === 'articles'"
                @select="activeTab = 'articles'"
              />
            </li>
            <li>
              <NavItem 
                text="Contact Us" 
                :is-selected="activeTab === 'contact us'"
                @select="activeTab = 'contact us'"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Hero Section with full-screen image -->
    <div class="relative h-screen w-full overflow-hidden">
      <!-- Current Slide -->
      <img 
        :src="slides[currentSlide].image" 
        alt="Hero Image"
        class="absolute w-full h-full object-cover transition-transform duration-500 ease-in-out"
        :class="[
          isChanging ? 
            direction === 'right' ? '-translate-x-full' : 'translate-x-full'
            : 'translate-x-0'
        ]"
      />
      
      <!-- Next/Previous Slide (prevents white flash) -->
      <img 
        :src="slides[(currentSlide + (direction === 'right' ? 1 : -1) + slides.length) % slides.length].image"
        alt="Next Hero Image"
        class="absolute w-full h-full object-cover transition-transform duration-500 ease-in-out"
        :class="[
          isChanging ? 
            'translate-x-0' 
            : direction === 'right' ? 'translate-x-full' : '-translate-x-full'
        ]"
      />

      <div 
        class="absolute top-1/2 left-[38%] transform -translate-x-1/2 -translate-y-1/2 text-white text-left transition-all duration-700 ease-in-out"
        
      >
        <h1 class="text-4xl font-bold mb-4 tracking-wide max-w-xl">
          {{ slides[currentSlide].title }}
        </h1>
        <div class="flex items-center space-x-4 mb-4 text-lg font-thin">
          <span>{{ slides[currentSlide].date }}</span>
          <div class="h-[1px] w-16 bg-white"></div>
          <p class="max-w-3xl">
            {{ slides[currentSlide].description }}
          </p>
        </div>
      </div>
      <!-- Dot Indicators -->
      <div class="absolute bottom-8 left-8 flex space-x-2">
        <button 
          v-for="(slide, index) in slides" 
          :key="index"
          @click="setSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-300 border border-white"
          :class="currentSlide === index ? 'bg-white scale-110' : 'bg-transparent hover:bg-white/50'"
          aria-label="Go to slide"
        ></button>
      </div>
    </div>

    <!-- Main content -->
    <main>  
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.transform {
  will-change: transform;
}
</style>