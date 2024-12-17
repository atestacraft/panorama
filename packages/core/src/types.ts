export interface PanoramaOptions {
  /**
   * Enable movement by panning and/or rotating.
   * @default false
   */
  enablePan?: boolean

  /**
   * Enable automatic rotation.
   * @default true
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
