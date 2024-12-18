<template>
  <div
    v-show="isShow"
    ref="panoramaRef"
    class="panorama"
  />
  <select
    v-model="currentVersion"
    class="version"
    :disabled="!isShow"
  >
    <option
      v-for="version of versions"
      :key="version"
      :value="version"
    >
      {{ version }}
    </option>
  </select>
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
const versions = [
  'classic',
  '1.13',
  '1.13b',
  '1.14',
  '1.14b',
  '1.15',
  '1.16',
  '1.17',
  '1.18',
  '1.19',
  '1.20',
  '24w14potato',
  '1.21',
  '1.21.4',
  'holiday2017b',
  'halloween21',
  'halloween22',
]

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

body {
  background-color: #000;
}

.panorama > canvas {
  animation: fadeIn 2s;
}

.version {
  position: absolute;
  top: 8px;
  right: 8px;
  outline: none;
}

option:checked {
  color: #fff;
  background-color: #000;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
