import React, {useEffect} from "react"
import {useGLTF, useAnimations} from "@react-three/drei"

/**
 * AnimatedModel - Load and auto-play the first animation of a .glb model
 */
export function AnimatedModel({path, position = [0, 0, 0], scale = [1, 1, 1]}) {
    const {scene, animations} = useGLTF(path)
    const {actions} = useAnimations(animations, scene)

    // Auto-play the first animation on mount
    useEffect(() => {
        if (actions) {
            const firstAction = Object.values(actions)[0]
            if (firstAction) {
                firstAction.reset().fadeIn(0.3).play()
            }
        }
    }, [actions])

    return (
        <primitive
            object={scene}
            position={position}
            scale={scale}
            castShadow
            receiveShadow
        />
    )
}
