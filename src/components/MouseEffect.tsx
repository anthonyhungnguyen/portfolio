import { useEffect, useState } from 'react'

function MouseEffect() {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div
            className='pointer-events-none fixed inset-0 z-50 transition duration-300'
            style={{
                background: `radial-gradient(200px at ${position.x}px ${position.y}px, rgba(56, 189, 248, 0.25), transparent 80%)`,
            }}
        />
    )
}

export default MouseEffect
