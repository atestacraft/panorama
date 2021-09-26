class Panorama {
  constructor({ cube, options }) {
    this.renderProgress()

    this.filters = [
      'none',
      'blur(4px)',
      'brightness(1.5)',
      'contrast(1.5)',
      'grayscale(1)',
      'hue-rotate(180deg)',
      'invert(1)',
      'sepia(1)'
    ]

    // 1,  3,  4,  5,  0,  2
    // px, nx, py, ny, pz, nz
    this.panorama = new PANOLENS.CubePanorama(cube)
    this.viewer = new PANOLENS.Viewer(options)

    this.panorama.addEventListener('progress', this.onProgress.bind(this))
    this.panorama.addEventListener('enter', this.onEnter.bind(this))
    this.panorama.addEventListener('click', this.onClick.bind(this))
    this.panorama.addEventListener('load', () => document.body.style.filter = 'none')
  }

  start() {
    this.viewer.add(this.panorama)
  }

  renderProgress() {
    this.progress = document.createElement('div')
    this.progress.classList.add('progress')
    document.body.appendChild(this.progress)
  }


  onEnter(event) {
    this.progress.style.width = 0
    this.progress.classList.remove('finish')
  }

  onClick(event) {
    if (event.mouseEvent.which === 2) {
      document.body.style.filter = this.filters[this.randomInt(0, this.filters.length - 1)]
    }
  }

  onProgress(event) {
    const progress = event.progress.loaded / event.progress.total * 100
    this.progress.style.width = progress + '%'

    if (progress === 100) {
      this.progress.classList.add('finish')
    }
  }

  randomInt(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
  }
}

const query = new URLSearchParams(window.location.search)
const version = query.get('version') || '1.17'
const url = new URL(location.href)
url.searchParams.set('version', version)
history.pushState(null, '', url)

const path = `images/${version}/`
const format = '.png'

// initial background
document.body.style.backgroundImage = `url(${path}background${format})`

const panorama = new Panorama({
  cube: [
    path + 'panorama_1' + format,
    path + 'panorama_3' + format,
    path + 'panorama_4' + format,
    path + 'panorama_5' + format,
    path + 'panorama_0' + format,
    path + 'panorama_2' + format
  ],
  options: {
    horizontalView: true,
    controlBar: false,
    autoRotate: true,
    cameraFov: 100,
    autoRotateSpeed: 0.5,
    autoRotateActivationDuration: 1,
    initialLookAt: new THREE.Vector3(-1, 2, 2)
  }
})

panorama.start()