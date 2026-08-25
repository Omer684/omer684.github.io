import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl'

/* Conditional class-name join. */
const cn = (...classes) => classes.filter(Boolean).join(' ')

const lerp = (a, b, t) => a + (b - a) * t

/* Rasterize a bold heading onto a transparent canvas and hand it back as an
   OGL texture. The canvas aspect matches the plane so glyphs never stretch. */
function createHeadingTexture(gl, text, { color, family, weight }) {
  const W = 1200
  const H = 742 // ≈ 1.618 : 1 landscape — matches the plane aspect below
  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')
  const maxW = W * 0.86
  const maxH = H * 0.84

  const wrap = (size) => {
    ctx.font = `${weight} ${size}px ${family}`
    const words = String(text).split(/\s+/)
    const lines = []
    let line = ''
    for (const word of words) {
      const test = line ? `${line} ${word}` : word
      if (ctx.measureText(test).width > maxW && line) {
        lines.push(line)
        line = word
      } else {
        line = test
      }
    }
    if (line) lines.push(line)
    return lines
  }

  // Shrink the type until the wrapped block fits within the plane.
  let size = Math.round(H * 0.21)
  let lines = wrap(size)
  while (size > 26) {
    lines = wrap(size)
    if (lines.length * size * 1.12 <= maxH && lines.length <= 4) break
    size -= 4
  }

  ctx.clearRect(0, 0, W, H)
  ctx.font = `${weight} ${size}px ${family}`
  ctx.fillStyle = color
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  const lh = size * 1.12
  const startY = H / 2 - (lines.length * lh) / 2 + lh / 2
  lines.forEach((ln, i) => ctx.fillText(ln, W / 2, startY + i * lh))

  const texture = new Texture(gl, { generateMipmaps: false })
  texture.image = canvas
  return texture
}

/* One curved, wobbling heading plane on the orbit. */
class Media {
  constructor({ gl, geometry, scene, text, index, length, screen, viewport, bend, color, family, weight }) {
    this.gl = gl
    this.geometry = geometry
    this.scene = scene
    this.text = text
    this.index = index
    this.length = length
    this.screen = screen
    this.viewport = viewport
    this.bend = bend
    this.color = color
    this.family = family
    this.weight = weight
    this.extra = 0
    this.createShader()
    this.createMesh()
    this.onResize()
  }

  createShader() {
    const texture = createHeadingTexture(this.gl, this.text, {
      color: this.color,
      family: this.family,
      weight: this.weight,
    })
    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      transparent: true,
      vertex: /* glsl */ `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = (sin(p.x * 3.0 + uTime) * 1.2 + cos(p.y * 2.0 + uTime) * 1.2) * (0.04 + uSpeed * 0.4);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragment: /* glsl */ `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.02) discard;
          gl_FragColor = color;
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uTime: { value: 100 * Math.random() },
        uSpeed: { value: 0 },
      },
    })
  }

  createMesh() {
    this.plane = new Mesh(this.gl, { geometry: this.geometry, program: this.program })
    this.plane.setParent(this.scene)
  }

  update(scroll, direction) {
    this.plane.position.x = this.x - scroll.current - this.extra

    const x = this.plane.position.x
    const H = this.viewport.width / 2

    if (this.bend === 0) {
      this.plane.position.y = 0
      this.plane.rotation.z = 0
    } else {
      const B = Math.abs(this.bend)
      const R = (H * H + B * B) / (2 * B)
      const effectiveX = Math.min(Math.abs(x), H)
      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX)
      if (this.bend > 0) {
        this.plane.position.y = -arc
        this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R)
      } else {
        this.plane.position.y = arc
        this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R)
      }
    }

    this.program.uniforms.uTime.value += 0.04
    this.program.uniforms.uSpeed.value = scroll.current - scroll.last

    const planeOffset = this.plane.scale.x / 2
    const viewportOffset = this.viewport.width / 2
    this.isBefore = this.plane.position.x + planeOffset < -viewportOffset
    this.isAfter = this.plane.position.x - planeOffset > viewportOffset
    if (direction === 'right' && this.isBefore) {
      this.extra -= this.widthTotal
      this.isBefore = this.isAfter = false
    }
    if (direction === 'left' && this.isAfter) {
      this.extra += this.widthTotal
      this.isBefore = this.isAfter = false
    }
  }

  onResize({ screen, viewport } = {}) {
    if (screen) this.screen = screen
    if (viewport) this.viewport = viewport
    this.scale = this.screen.height / 1500
    this.plane.scale.y = (this.viewport.height * (420 * this.scale)) / this.screen.height
    this.plane.scale.x = (this.viewport.width * (680 * this.scale)) / this.screen.width
    this.padding = 1.4
    this.width = this.plane.scale.x + this.padding
    this.widthTotal = this.width * this.length
    this.x = this.width * this.index
  }
}

/* The WebGL app: builds the scene, drives a gentle auto-spin + drag, and
   recycles planes for a seamless loop. Deliberately self-contained — it never
   touches window.scrollY, so multiple orbits coexist on one page. */
class App {
  constructor(container, { texts, bend = 3, color = '#0a0a0a', family = 'serif', weight = 900, autoSpeed = 0.018 }) {
    this.container = container
    this.texts = texts
    this.bend = bend
    this.color = color
    this.family = family
    this.weight = weight
    this.autoSpeed = autoSpeed
    this.scroll = { ease: 0.05, current: 0, target: 0, last: 0, position: 0 }
    this.isDown = false
    this.isVisible = true

    this.update = this.update.bind(this)
    this.onResize = this.onResize.bind(this)
    this.onDown = this.onDown.bind(this)
    this.onMove = this.onMove.bind(this)
    this.onUp = this.onUp.bind(this)

    this.createRenderer()
    this.createCamera()
    this.createScene()
    this.onResize()
    this.createGeometry()
    this.createMedias()
    this.addEventListeners()
    this.raf = requestAnimationFrame(this.update)
  }

  createRenderer() {
    this.renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
    })
    this.gl = this.renderer.gl
    this.gl.clearColor(0, 0, 0, 0)
    this.container.appendChild(this.gl.canvas)
    this.gl.canvas.style.width = '100%'
    this.gl.canvas.style.height = '100%'
    this.gl.canvas.style.display = 'block'
  }

  createCamera() {
    this.camera = new Camera(this.gl)
    this.camera.fov = 45
    this.camera.position.z = 20
  }

  createScene() {
    this.scene = new Transform()
  }

  createGeometry() {
    this.planeGeometry = new Plane(this.gl, { heightSegments: 40, widthSegments: 80 })
  }

  createMedias() {
    // Duplicate the list so the ribbon of headings loops without a visible seam.
    const looped = this.texts.concat(this.texts)
    this.medias = looped.map(
      (text, index) =>
        new Media({
          gl: this.gl,
          geometry: this.planeGeometry,
          scene: this.scene,
          text,
          index,
          length: looped.length,
          screen: this.screen,
          viewport: this.viewport,
          bend: this.bend,
          color: this.color,
          family: this.family,
          weight: this.weight,
        })
    )
  }

  onDown(e) {
    this.isDown = true
    this.scroll.position = this.scroll.current
    this.start = e.touches ? e.touches[0].clientX : e.clientX
  }

  onMove(e) {
    if (!this.isDown) return
    const x = e.touches ? e.touches[0].clientX : e.clientX
    const distance = (this.start - x) * 0.05
    this.scroll.target = this.scroll.position + distance
  }

  onUp() {
    this.isDown = false
  }

  onResize() {
    this.screen = {
      width: this.container.clientWidth || 1,
      height: this.container.clientHeight || 1,
    }
    this.renderer.setSize(this.screen.width, this.screen.height)
    this.camera.perspective({ aspect: this.gl.canvas.width / this.gl.canvas.height })
    const fov = (this.camera.fov * Math.PI) / 180
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z
    const width = height * this.camera.aspect
    this.viewport = { width, height }
    if (this.medias) this.medias.forEach((m) => m.onResize({ screen: this.screen, viewport: this.viewport }))
  }

  update() {
    this.raf = requestAnimationFrame(this.update)
    if (!this.isVisible) return // paused off-screen — saves GPU and freezes cleanly

    if (!this.isDown) this.scroll.target += this.autoSpeed
    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease)
    const direction = this.scroll.current > this.scroll.last ? 'right' : 'left'
    if (this.medias) this.medias.forEach((m) => m.update(this.scroll, direction))
    this.renderer.render({ scene: this.scene, camera: this.camera })
    this.scroll.last = this.scroll.current
  }

  addEventListeners() {
    window.addEventListener('resize', this.onResize)
    this.container.addEventListener('mousedown', this.onDown)
    window.addEventListener('mousemove', this.onMove)
    window.addEventListener('mouseup', this.onUp)
    this.container.addEventListener('touchstart', this.onDown, { passive: true })
    window.addEventListener('touchmove', this.onMove, { passive: true })
    window.addEventListener('touchend', this.onUp)
    this.io = new IntersectionObserver(
      ([entry]) => {
        this.isVisible = entry ? entry.isIntersecting : true
      },
      { threshold: 0 }
    )
    this.io.observe(this.container)
  }

  destroy() {
    cancelAnimationFrame(this.raf)
    window.removeEventListener('resize', this.onResize)
    this.container.removeEventListener('mousedown', this.onDown)
    window.removeEventListener('mousemove', this.onMove)
    window.removeEventListener('mouseup', this.onUp)
    this.container.removeEventListener('touchstart', this.onDown)
    window.removeEventListener('touchmove', this.onMove)
    window.removeEventListener('touchend', this.onUp)
    if (this.io) this.io.disconnect()
    if (this.gl.canvas.parentNode) this.gl.canvas.parentNode.removeChild(this.gl.canvas)
    const ext = this.gl.getExtension('WEBGL_lose_context')
    if (ext) ext.loseContext()
  }
}

/**
 * A 3D curved "orbit" of bold headings, rendered in WebGL (OGL).
 *
 * Text-only by design: each item becomes a large bold heading floating on a
 * gently bending, auto-spinning ring you can drag. No images, no cards.
 *
 * Accessibility: the canvas is aria-hidden; the same headings (and their links)
 * are mirrored in a visually-hidden list so the content stays reachable. Under
 * prefers-reduced-motion the WebGL layer is skipped entirely in favour of a
 * static, readable row of headings.
 *
 * Props:
 *   items      Array<{ label: string, href?: string, sr?: string }> | string[]
 *   bend       curvature of the orbit (0 = flat), default 3
 *   autoSpeed  world-units added to the spin each frame, default 0.018
 *   height     px height of the stage, default 460
 *   label      aria-label for the region
 *   hint       small caption under the orbit
 */
export function CircularGallery({
  items = [],
  bend = 3,
  autoSpeed = 0.018,
  height = 460,
  label = '3D heading gallery',
  hint = 'Drag to spin',
  className,
}) {
  const reduce = useReducedMotion()
  const containerRef = useRef(null)

  const entries = items.map((it) => (typeof it === 'string' ? { label: it } : it))

  useEffect(() => {
    if (reduce) return
    const el = containerRef.current
    if (!el) return

    const cs = getComputedStyle(el)
    const color = cs.color || '#0a0a0a'
    const family = cs.fontFamily || 'serif'
    const weight = cs.fontWeight || '900'
    const texts = items.map((it) => (typeof it === 'string' ? it : it.label))

    let app = null
    let cancelled = false
    const start = () => {
      if (cancelled || !containerRef.current) return
      app = new App(containerRef.current, { texts, bend, color, family, weight, autoSpeed })
    }

    // Wait for the display webfont so canvas text rasterizes in the right face.
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(start)
    else start()

    return () => {
      cancelled = true
      if (app) app.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, bend, autoSpeed, reduce])

  // Reduced motion → static, readable headings (no WebGL).
  if (reduce) {
    return (
      <ul
        className={cn('flex flex-wrap items-center justify-center gap-x-10 gap-y-5', className)}
        aria-label={label}
      >
        {entries.map((it, i) => (
          <li key={`${it.label}-${i}`}>
            {it.href ? (
              <a
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl font-black tracking-tight text-ink transition-colors hover:text-accent md:text-3xl"
              >
                {it.label}
              </a>
            ) : (
              <span className="font-display text-2xl font-black tracking-tight text-ink md:text-3xl">
                {it.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className={cn('relative w-full', className)}>
      {/* soft accent glow to seat the orbit on the light background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 46% 62% at 50% 50%, rgba(37,99,235,0.07), transparent 72%)',
        }}
      />

      <div
        ref={containerRef}
        aria-hidden="true"
        className="relative w-full cursor-grab touch-pan-y select-none font-display font-black text-ink active:cursor-grabbing"
        style={{ height }}
      />

      {/* Non-visual mirror so headings + links stay reachable by AT and search. */}
      <ul className="sr-only">
        {entries.map((it, i) => (
          <li key={`${it.label}-${i}`}>{it.href ? <a href={it.href}>{it.sr || it.label}</a> : it.sr || it.label}</li>
        ))}
      </ul>

      <p className="mt-5 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
        {hint}
      </p>
    </div>
  )
}

export default CircularGallery
