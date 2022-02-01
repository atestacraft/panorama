class App {
  versions = [
    '1.13',
    '1.14',
    '1.15',
    '1.16',
    '1.17',
    '1.18'
  ]

  init() {
    if (this.panorama) {
      const currentVersionIdx = Object.values(this.versions)
        .findIndex((version) => this.selectedVersion === version)

      if (currentVersionIdx === 0) {
        this.selectedVersion = this.versions[this.versions.length - 1]
      } else {
        this.selectedVersion = this.versions[currentVersionIdx - 1]
      }
    } else {
      const params = new URLSearchParams(window.location.search)
      const query = params.get('version')
      const version = this.versions.includes(query) ? query : this.versions[this.versions.length - 1]
      this.url = new URL(location.href)
      this.selectedVersion = version
    }

    this.url.searchParams.set('version', this.selectedVersion)
    history.pushState(null, '', this.url)

    this.path = `src/images/${this.selectedVersion}/`
    this.ext = '.png'

    if (!this.panorama) {
      document.body.style.backgroundImage = `url(${this.path}background${this.ext})`
    }
  }

  render() {
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
        controlBar: false,
        autoRotate: true,
        cameraFov: 85,
        autoRotateSpeed: 0.3,
        autoRotateActivationDuration: 0,
        initialLookAt: new THREE.Vector3(0, 0, 2)
      }
    })

    this.panorama.start()
  }

  run() {
    if (this.panorama) {
      this.panorama.destroy()
    }

    this.init()
    this.render()
    setTimeout(() => this.run(), 1000 * 10)
  }
}

const app = new App()
app.run()
