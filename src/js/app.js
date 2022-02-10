class App {
  textures = {}
  versions = [
    '1.13',
    '1.14',
    '1.15',
    '1.16',
    '1.17',
    '1.18'
  ]

  constructor() {
    this.params = new URLSearchParams(window.location.search)
    this.interval = this.getInterval()
    this.control = this.getControl()

    this.initOptions()
    document.body.style.backgroundImage = `url(${this.path}background${this.ext})`

    this.panorama = new Panorama({
      cube: [
        this.path + 'panorama_1' + this.ext,
        this.path + 'panorama_3' + this.ext,
        this.path + 'panorama_4' + this.ext,
        this.path + 'panorama_5' + this.ext,
        this.path + 'panorama_0' + this.ext,
        this.path + 'panorama_2' + this.ext
      ],
      options: {
        controlBar: this.control,
        autoRotate: true,
        cameraFov: 85,
        autoRotateSpeed: 0.3,
        autoRotateActivationDuration: 0,
        initialLookAt: new THREE.Vector3(0, 0, 2)
      }
    })
  }

  getInterval() {
    const defaultInterval = 15
    const interval = this.params.get('interval')

    return interval === null ?
      defaultInterval :
      isNaN(interval) ?
        defaultInterval :
        Number(interval)
  }

  getControl() {
    const defaultControl = false
    const control = this.params.get('control')

    return control === null ?
      defaultControl :
      control == 'true'
  }

  loadTextures(version) {
    if (!this.textures[version]) {
      const ext = '.png'
      const path = `src/images/${version}/`
      const texture = new PANOLENS.CubeTextureLoader.load(
        [
          path + 'panorama_1' + ext,
          path + 'panorama_3' + ext,
          path + 'panorama_4' + ext,
          path + 'panorama_5' + ext,
          path + 'panorama_0' + ext,
          path + 'panorama_2' + ext
        ],
        () => {
          this.panorama.updateTextures(texture)
        }
      )

      this.textures[version] = texture
    } else {
      this.panorama.updateTextures(this.textures[version])
    }
  }

  initOptions() {
    if (this.panorama) {
      const currentVersionIdx = Object.values(this.versions)
        .findIndex((version) => this.selectedVersion === version)

      if (currentVersionIdx === 0) {
        this.selectedVersion = this.versions[this.versions.length - 1]
      } else {
        this.selectedVersion = this.versions[currentVersionIdx - 1]
      }
    } else {
      const query = this.params.get('version')
      const version = this.versions.includes(query) ?
        query :
        this.versions[this.versions.length - 1]

      this.url = new URL(location.href)
      this.selectedVersion = version
    }

    this.url.searchParams.set('version', this.selectedVersion)
    this.url.searchParams.set('interval', this.interval)
    this.url.searchParams.set('control', this.control)
    history.pushState(null, '', this.url)

    this.path = `src/images/${this.selectedVersion}/`
    this.ext = '.png'
  }

  start() {
    this.panorama.start()

    if (this.interval > 0) {
      setInterval(() => {
        this.initOptions()
        this.loadTextures(this.selectedVersion)
      }, 1000 * this.interval)
    }
  }
}

const app = new App()
app.start()
