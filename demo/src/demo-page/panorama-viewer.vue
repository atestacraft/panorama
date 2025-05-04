<template>
  <div
    ref="containerRef"
    class="panorama-container"
  />
</template>

<script setup lang="ts">
import { Panorama } from '@atestacraft/panorama'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps<{
  path: string
  fileExt?: string
  options?: Partial<Parameters<typeof Panorama.prototype.init>[2]>
}>()

const containerRef = ref<HTMLElement | null>(null)
const panorama = ref<Panorama | null>(null)

onMounted(() => {
  if (!containerRef.value) return
  initPanorama()
})

onUnmounted(() => {
  disposePanorama()
})

watch(() => [props.path, props.fileExt, props.options], () => {
  recreatePanorama()
})

function initPanorama() {
  if (!containerRef.value) return

  panorama.value = new Panorama(containerRef.value)
  panorama.value.init(
    props.path,
    props.fileExt,
    props.options,
  )
}

function disposePanorama() {
  if (panorama.value) {
    panorama.value.dispose()
    panorama.value = null
  }
}

function recreatePanorama() {
  disposePanorama()
  initPanorama()
}
</script>

<style scoped>
.panorama-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
</style>
