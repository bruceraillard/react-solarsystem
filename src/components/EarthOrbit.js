import React, {useRef} from "react"
import {useFrame} from "@react-three/fiber"
import {AnimatedModel} from "./AnimatedModel"

/**
 * EarthOrbit - Earth model orbiting around the Sun
 */
export function EarthOrbit() {
    const groupRef = useRef()

    // Animate the orbit around Y axis
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.3 // Adjust speed here
        }
    })

    return (
        <group ref={groupRef}>
            {/* Earth is placed at a distance from the center (e.g., 20 units) */}
            <AnimatedModel
                path="/models/terre.glb"
                position={[50, 0, 0]} // distance from the center (sun)
                scale={[5, 5, 5]}
            />
        </group>
    )
}
