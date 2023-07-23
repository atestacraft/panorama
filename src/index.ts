import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const versions = [
  '1.13',
  '1.14',
  '1.15',
  '1.16',
  '1.17',
  '1.18',
  '1.19',
  '1.20'
]

const searchParams = new URLSearchParams(location.search)
const version = searchParams.get('version') ?? '1.17'

if (!versions.includes(version)) {
  location.href = '/'
}

const url = new URL(location.href)
url.searchParams.set('version', version)
history.pushState(null, '', url)

const filePath = `images/${version}`
document.body.style.backgroundImage = `url(${filePath}/background.png)`

const images = [
  'panorama_1',
  'panorama_3',
  'panorama_4',
  'panorama_5',
  'panorama_0',
  'panorama_2'
].map((fileName) => `${filePath}/${fileName}.png`)

const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.set(0.2, 0.2, -1)

const scene = new THREE.Scene()
scene.add(camera)

const textureCube = await new THREE.CubeTextureLoader().loadAsync(images)
scene.background = textureCube

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)

const container = document.querySelector('.container')!
container.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableRotate = false
controls.enableZoom = false

function render(): void {
  requestAnimationFrame(render)
  camera.rotation.y += 0.0004
  renderer.render(scene, camera)
}

render()
