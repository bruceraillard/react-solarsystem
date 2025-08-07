import React, {useRef} from "react"
import {useFrame} from "@react-three/fiber"
import {useGLTF} from "@react-three/drei"

/**
 * RotatingModel - Loads and rotates a static .glb model on its Y axis
 * @param {string} path - Path to the .glb file
 * @param {Array} position - [x, y, z] coordinates
 * @param {Array} scale - [x, y, z] scaling factor
 * @param {number} speed - Rotation speed
 */
export function RotatingModel({path, position = [0, 0, 0], scale = [1, 1, 1], speed = 0.01}) {
    const {scene} = useGLTF(path)
    const ref = useRef()

    // Rotate continuously on Y axis
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += speed
        }
    })

    return <primitive object={scene} ref={ref} position={position} scale={scale}/>
}
