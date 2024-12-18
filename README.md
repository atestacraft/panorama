# @atestacraft/panorama

> A library for creating a panoramic 3D effect on web pages, similar to the effect in the main menu of Minecraft.

## Demo
You can view a live demo of the panorama effect [here](https://atestacraft.github.io/panorama/).

## Installation

```bash
npm install @atestacraft/panorama
```

```bash
yarn add @atestacraft/panorama
```

```bash
pnpm add @atestacraft/panorama
```

## Usage

The panorama effect requires 6 images to function correctly, named `panorama_0` through `panorama_5` (e.g., `panorama_0.png`, `panorama_1.png`, etc.).
These images can be found in the panorama images of [this directory](./demo/public/images/), or you can use your own images with the same file names.

To use the images from this repository, you can clone or download them and place them in your project folder (e.g., `images/`).

```ts
import { Panorama } from '@atestacraft/panorama'

const container = document.querySelector('.panorama')
const panorama = new Panorama(container)
panorama.init('path/to/panorama')
```

## Example for Vue

```vue
<template>
  <div ref="panoramaRef" />
</template>

<script setup lang="ts">
import { Panorama } from '@atestacraft/panorama'
import { onMounted, onUnmounted, shallowRef, useTemplateRef } from 'vue'

const panorama = shallowRef<Panorama>()
const panoramaRef = useTemplateRef('panoramaRef')

onMounted(() => {
  if (!panoramaRef.value) return
  panorama.value = new Panorama(panoramaRef.value)
  panorama.value.init('path/to/panorama')
})

onUnmounted(() => {
  if (!panorama.value) return
  panorama.value.dispose()
})
</script>
```

## API

### `Panorama(container: HTMLElement, options: PanoramaOptions)`

Creates a panorama instance.

**Parameters:**

- `container` *(HTMLElement)* – The container in which the panorama will be displayed.
- `options` *(PanoramaOptions)* – An object containing the options (optional).

### `PanoramaOptions`

| Property           | Type          | Description                                                       | Default Value          |
|--------------------|---------------|-------------------------------------------------------------------|------------------------|
| `enablePan`        | `boolean`     | Enable movement by panning (dragging the mouse).                  | `false`                |
| `enableRotate`     | `boolean`     | Enable automatic rotation of the scene.                           | `true`                 |
| `rotateSpeed`      | `number`      | Rotation speed when `enableRotate` is true.                       | `0.3`                  |
| `cameraFov`        | `number`      | Camera field of view (from 30 to 120 degrees).                    | `100`                  |

### Methods

| Method | Description |
|-|-|
| `init(path: string, fileExt: string = 'png', options: PanoramaOptions = {})` | Initializes the panorama with the specified image path and options. The path should contain 6 panorama images (panorama_0 to panorama_5). The `fileExt` specifies the image file extension (default: 'png'). If called again after initialization, the call will be ignored. |
| `dispose()` | Removes the panorama from the DOM, stops the render loop, and cleans up event listeners and resources. |
| `updateOptions(options: PanoramaOptions)` | Updates the panorama options after initialization. This method applies changes immediately if the panorama is already initialized, otherwise, it applies the options when `init()` is called. |
| `cameraPosition(x: number, y: number, z: number)` | Sets the position of the camera in 3D space. Takes three arguments: `x`, `y`, and `z` to specify the camera's coordinates. |

### Events

| Event            | Description                                           |
|------------------|------------------------------------------------------|
| `load`           | Triggered after the panorama scene is loaded.        |

## License

This project is licensed under the [MIT License](./LICENSE).
Built using [Three.js](https://threejs.org).
