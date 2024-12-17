export interface PanoramaOptions {
  /**
   * Enable movement by panning and/or rotating.
   * @default false
   */
  enablePan?: boolean

  /**
   * Enable automatic rotation.
   * @default false
   */
  enableRotate?: boolean

  /**
   * Rotation speed.
   * @default 0.3
   */
  rotateSpeed?: number

  /**
   * Camera field of view.
   * @default 100
   */
  cameraFov?: number
}

/**
 * Path to panorama images, includes files `panorama_0` to `panorama_5` (6 images).
 * @see https://minecraft.wiki/w/Panorama
 * @example 'images/panorama'
 */
export type PanoramaImagesPath = string
