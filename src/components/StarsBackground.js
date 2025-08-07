import React, {useRef, useMemo} from "react"
import {useFrame} from "@react-three/fiber"
import * as THREE from "three"

export function StarsBackground({count = 1000}) {
    const points = useRef()

    // Generate random positions for stars
    const stars = useMemo(() => {
        const positions = []
        for (let i = 0; i < count; i++) {
            const x = THREE.MathUtils.randFloatSpread(1000)
            const y = THREE.MathUtils.randFloatSpread(1000)
            const z = THREE.MathUtils.randFloatSpread(1000)
            positions.push(x, y, z)
        }
        return new Float32Array(positions)
    }, [count])

    // Animate the material opacity to simulate twinkling
    useFrame(({clock}) => {
        if (points.current) {
            const t = clock.getElapsedTime()
            points.current.material.opacity = 0.5 + 0.5 * Math.sin(t * 2)
        }
    })

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={stars.length / 3}
                    array={stars}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                color="yellow"
                size={1}
                transparent
                depthWrite={false}
            />
        </points>
    )
}
