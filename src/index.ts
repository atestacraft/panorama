import {
  BackSide,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  TextureLoader,
  WebGLRenderer
} from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new Scene()
const version = '1.15'
const images = [
  'panorama_1',
  'panorama_3',
  'panorama_4',
  'panorama_5',
  'panorama_0',
  'panorama_2'
].map((fileName) => `images/${version}/${fileName}.png`)

const cubeGeometry = new BoxGeometry(1000, 1000, 1000)
const textureLoader = new TextureLoader()
const cubeMaterials = images.map((image) => {
  return new MeshBasicMaterial({
    map: textureLoader.load(image),
    side: BackSide
  })
})
const cube = new Mesh(cubeGeometry, cubeMaterials)
scene.add(cube)

const camera = new PerspectiveCamera(
  85,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.set(-1, 0, -1)
scene.add(camera)

const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

const container = document.querySelector('.container')!
container.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableRotate = false
controls.enableZoom = false

function animate(): void {
  requestAnimationFrame(animate)
  camera.rotation.y += 0.0003
  renderer.render(scene, camera)
}

animate()
