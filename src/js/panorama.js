class Panorama {
  constructor({ cube, options }) {
    // 1,  3,  4,  5,  0,  2
    // px, nx, py, ny, pz, nz
    this.panorama = new PANOLENS.CubePanorama(cube)
    this.viewer = new PANOLENS.Viewer(options)
    this.viewer.disableControl()
  }

  start() {
    this.viewer.add(this.panorama)
  }

  updateTextures(textures) {
    this.panorama.material.uniforms.tCube.value = textures
  }
}
