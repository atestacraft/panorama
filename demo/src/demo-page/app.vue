<template>
  <div class="app">
    <header class="header">
      <div class="logo">
        Panorama
      </div>
      <nav class="nav">
        <a href="#">Demo</a>
        <a href="#">Usage</a>
        <a href="#">API</a>
      </nav>
    </header>

    <div class="main">
      <aside class="sidebar">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </aside>

      <main class="content">
        <h1>Panorama example</h1>
        <div
          v-show="isShow"
          ref="panoramaRef"
          class="panorama"
        />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Panorama } from '@atestacraft/panorama'
import {
  onMounted,
  onUnmounted,
  ref,
  shallowRef,
  useTemplateRef,
  watch,
} from 'vue'

const currentVersion = ref('1.15')

const isShow = ref(false)
const panoramaRef = useTemplateRef('panoramaRef')
const panorama = shallowRef<Panorama>()

onMounted(() => {
  if (!panoramaRef.value) return
  panorama.value = new Panorama(panoramaRef.value)
  panorama.value.addEventListener('load', () => isShow.value = true)
  panorama.value.init(`images/${currentVersion.value}`)
})

onUnmounted(() => {
  if (!panorama.value) return
  panorama.value.dispose()
})

watch(currentVersion, (version) => {
  if (!panorama.value) return
  isShow.value = false
  panorama.value.dispose()
  panorama.value.init(`images/${version}`)
})
</script>

<style>
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
}

.panorama {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.panorama > canvas {
  animation: fadeIn 2s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: sans-serif;
  background-color: #f4f4f4;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav a {
  margin-left: 1.5rem;
  text-decoration: none;
  color: #333;
}

.nav a:hover {
  color: #007BFF;
}

.main {
  display: flex;
  flex: 1;
}

.sidebar {
  min-width: 200px;
  background: white;
  padding: 1rem;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.05);
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 1rem;
}

.sidebar a {
  text-decoration: none;
  color: #333;
}

.sidebar a:hover {
  color: #007BFF;
}

.content {
  flex: 1;
  padding: 2rem;
}

.content h1 {
  margin-bottom: 1rem;
}

.content p {
  color: #555;
}
</style>
