import { useEffect, useRef } from 'react'

export default function MatrixBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const gridSize = 80
    const lineHeight = 20
    const lines = []

    const initLines = () => {
      lines.length = 0
      const columns = Math.ceil(canvas.width / gridSize)
      
      for (let x = 0; x < columns; x++) {
        lines.push({
          x: x * gridSize,
          y: Math.random() * canvas.height,
          speed: 3 + Math.random() * 3,
        })
      }
    }

    initLines()
    window.addEventListener('resize', initLines)

    const animate = () => {
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = '#1a1a1a'
      ctx.lineWidth = 1

      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      ctx.strokeStyle = '#FFD700'
      ctx.shadowColor = '#FFD700'
      ctx.shadowBlur = 10
      ctx.lineWidth = 2

      lines.forEach(line => {
        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(line.x, line.y + lineHeight)
        ctx.stroke()

        line.y += line.speed

        if (line.y > canvas.height) {
          line.y = -lineHeight
          line.speed = 3 + Math.random() * 3
        }
      })

      ctx.shadowBlur = 0

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('resize', initLines)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: 'black' }}
    />
  )
}