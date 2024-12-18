import {
  CubeTextureLoader,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import type { PanoramaOptions } from './types.js'

const DEFAULT_OPTIONS: Required<PanoramaOptions> = {
  rotateSpeed: 0.3,
  enablePan: false,
  enableRotate: true,
  cameraFov: 100,
}

export class Panorama extends EventTarget {
  /** @internal */
  private raf: ReturnType<typeof requestAnimationFrame> | null = null

  /** @internal */
  private camera: PerspectiveCamera

  /** @internal */
  private scene: Scene

  /** @internal */
  private renderer: WebGLRenderer

  /** @internal */
  private controls: OrbitControls

  /** @internal */
  private container: HTMLElement

  /** @internal */
  private options: Required<PanoramaOptions>

  constructor(
    container: HTMLElement,
    options: PanoramaOptions = {},
  ) {
    super()
    this.container = container
    this.updateOptions({ ...DEFAULT_OPTIONS, ...options })
  }

  /**
   * Initializes the panorama.
   *
   * @param path - The path to panorama images, includes files `panorama_0` to `panorama_5` (6 images). (https://minecraft.wiki/w/Panorama)
   * @param fileExt - The file extension of the panorama images.
   * @param options - The options for the panorama.
   *
   * This method will only be called once, and subsequent calls will be ignored.
   * The camera will be positioned at the specified position, and the scene will
   * be added to the container element. The renderer will be set up to render to
   * the container element, and the controls will be set up to control the camera.
   * The render loop will be started, and the options will be applied.
   */
  init(
    path: string,
    fileExt = 'png',
    options: PanoramaOptions = {},
  ): void {
    if (this.raf !== null) return

    const images = [
      'panorama_1',
      'panorama_3',
      'panorama_4',
      'panorama_5',
      'panorama_0',
      'panorama_2',
    ].map((fileName) => `${path.replace(/\/$/, '')}/${fileName}.${fileExt}`)

    this.camera = new PerspectiveCamera(
      this.options.cameraFov,
      window.innerWidth / window.innerHeight,
      0.1,
    )
    this.cameraPosition(0.2, 0.2, -1)

    this.scene = new Scene()
    this.scene.add(this.camera)

    const textureLoader = new CubeTextureLoader()
    textureLoader.load(images, async (textureCube) => {
      this.dispatchEvent(new Event('load'))
      this.scene.background = textureCube
    })

    this.renderer = new WebGLRenderer({ antialias: true })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio)

    this.container.appendChild(this.renderer.domElement)

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enablePan = false
    this.controls.enableZoom = false
    this.controls.enableDamping = true

    this.render = this.render.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)

    window.addEventListener('resize', this.onWindowResize)
    this.render()
    this.updateOptions(options)
  }

  /**
   * Disposes the panorama.
   *
   * This method removes the canvas element, stops the rendering loop, and
   * removes the event listener for window resizes.
   */
  dispose() {
    if (this.raf === null) return
    window.removeEventListener('resize', this.onWindowResize)
    cancelAnimationFrame(this.raf)
    this.raf = null
    this.renderer.domElement.remove()
  }

  /**
   * Updates the options of the panorama.
   *
   * @param options - The new options to apply.
   *
   * If the panorama is already initialized, the options will be applied immediately.
   * Otherwise, the options will be used when the panorama is initialized.
   */
  updateOptions(options: PanoramaOptions) {
    this.options = { ...this.options, ...options }

    if (this.raf !== null) {
      const {
        cameraFov,
        enablePan,
        enableRotate,
        rotateSpeed,
      } = this.options

      this.camera.fov = cameraFov
      this.controls.enabled = enablePan
      this.controls.autoRotate = enableRotate
      this.controls.autoRotateSpeed = rotateSpeed
    }
  }

  /**
   * Sets the position of the camera in 3D space.
   *
   * @param x - The x-coordinate of the camera position.
   * @param y - The y-coordinate of the camera position.
   * @param z - The z-coordinate of the camera position.
   */
  cameraPosition(x: number, y: number, z: number) {
    this.camera.position.set(x, y, z)
  }

  /** @internal */
  private render(): void {
    this.raf = requestAnimationFrame(this.render)
    this.controls.update()
    this.renderer.render(this.scene, this.camera)
  }

  /** @internal */
  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }
}
