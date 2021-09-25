const params = new URLSearchParams(window.location.search)
const version = params.get('version')

const path = `images/${version || '1.17'}/`
const format = '.png'

// 1, 3, 4, 5, 0, 2
const panorama = new PANOLENS.CubePanorama([
  path + 'panorama_1' + format,
  path + 'panorama_3' + format,
  path + 'panorama_4' + format,
  path + 'panorama_5' + format,
  path + 'panorama_0' + format,
  path + 'panorama_2' + format,
])

const camera = new PANOLENS.CameraPanorama()
const viewer = new PANOLENS.Viewer({
  controlBar: false,
  initialLookAt: new THREE.Vector3(-10, 5, 5)
})

viewer.dispose()
viewer.add(panorama)