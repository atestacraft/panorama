const params = new URLSearchParams(window.location.search)
const versions = ['1.13', '1.14', '1.15', '1.16', '1.17', '1.18']
const query = params.get('version')
const version = versions.includes(query) ? query : versions[versions.length - 1]
const url = new URL(location.href)

url.searchParams.set('version', version)
history.pushState(null, '', url)

const path = `src/images/${version}/`
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
    controlBar: true,
    autoRotate: true,
    cameraFov: 85,
    autoRotateSpeed: 0.3,
    autoRotateActivationDuration: 0,
    initialLookAt: new THREE.Vector3(0, 0, 2)
  }
})

panorama.start()
