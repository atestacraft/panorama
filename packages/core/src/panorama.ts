import {
  CubeTextureLoader,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import type { PanoramaImagesPath, PanoramaOptions } from './types.js'

const DEFAULT_OPTIONS: Required<PanoramaOptions> = {
  rotateSpeed: 0.3,
  enablePan: false,
  enableRotate: false,
  cameraFov: 100,
  cameraNear: 0.1,
  cameraFar: 1000,
}

export class Panorama {
  private raf: ReturnType<typeof requestAnimationFrame> | null = null
  private camera: PerspectiveCamera
  private scene: Scene
  private renderer: WebGLRenderer
  private controls: OrbitControls
  private options: Required<PanoramaOptions>

  constructor(
    private readonly container: HTMLElement,
    options: PanoramaOptions,
  ) {
    this.setOptions({ ...DEFAULT_OPTIONS, ...options })
  }

  init(imagePath: PanoramaImagesPath): void {
    if (this.raf) return

    const images = [
      'panorama_1',
      'panorama_3',
      'panorama_4',
      'panorama_5',
      'panorama_0',
      'panorama_2',
    ].map((fileName) => `${imagePath.replace(/\/$/, '')}/${fileName}.png`)

    this.camera = new PerspectiveCamera(
      this.options.cameraFov,
      window.innerWidth / window.innerHeight,
      this.options.cameraNear,
      this.options.cameraFar,
    )
    this.cameraPosition(0.2, 0.2, -1)

    this.scene = new Scene()
    this.scene.add(this.camera)

    const textureLoader = new CubeTextureLoader()
    textureLoader.load(images, (textureCube) => {
      this.scene.background = textureCube
    })

    this.renderer = new WebGLRenderer({ antialias: true })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio)

    this.container.appendChild(this.renderer.domElement)

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enabled = this.options.enablePan
    this.controls.enablePan = false
    this.controls.enableZoom = false
    this.controls.enableDamping = true
    this.controls.autoRotate = this.options.enableRotate
    this.controls.autoRotateSpeed = this.options.rotateSpeed

    this.render = this.render.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)

    window.addEventListener('resize', this.onWindowResize)
    this.render()
  }

  setOptions(options: Partial<PanoramaOptions>) {
    this.options = { ...this.options, ...options }

    if (this.camera) {
      const {
        cameraFov,
        cameraNear,
        cameraFar,
      } = this.options

      this.camera.fov = cameraFov
      this.camera.near = cameraNear
      this.camera.far = cameraFar
    }
  }

  cameraPosition(x: number, y: number, z: number) {
    this.camera.position.set(x, y, z)
  }

  dispose() {
    if (!this.raf) return
    window.removeEventListener('resize', this.onWindowResize)
    cancelAnimationFrame(this.raf)
    this.raf = null
    this.renderer.domElement.remove()
  }

  private render(): void {
    this.raf = requestAnimationFrame(this.render)
    this.controls.update()
    this.renderer.render(this.scene, this.camera)
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }
}
