import React from "react"
import { useGLTF } from "@react-three/drei"

/**
 * Model - Load and display a static .glb model
 * @param {string} path - Path to the .glb file
 * @param {Array} position - [x, y, z] coordinates
 * @param {Array} scale - [x, y, z] scaling factor
 */
export function Model({ path, position = [0, 0, 0], scale = [1, 1, 1] }) {
    const { scene } = useGLTF(path)

    return <primitive object={scene} position={position} scale={scale} />
}
