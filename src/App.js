import React from "react"
import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import {Model} from "./components/Model"
import {EarthOrbit} from "./components/EarthOrbit"
import {StarsBackground} from "./components/StarsBackground"
import {RotatingModel} from "./components/RotatingModel"
import {EffectComposer, Bloom} from "@react-three/postprocessing"
import {Leva, useControls} from "leva"

function App() {
    // Bloom effect settings using Leva control panel
    const bloomSettings = useControls("Bloom", {
        threshold: {value: 0.1, min: 0, max: 1, step: 0.01},
        smoothing: {value: 0.1, min: 0, max: 1, step: 0.01},
        intensity: {value: 1.5, min: 0, max: 10, step: 0.1},
    })

    return (
        <div style={{width: "100vw", height: "100vh"}}>
            <Canvas
                camera={{position: [0, 2, 50], fov: 50}}
                style={{background: "radial-gradient(#010a1f, #000)"}} // Space-like background
            >
                {/* Lighting */}
                <ambientLight intensity={0.5}/>
                <directionalLight position={[5, 10, 5]} intensity={1}/>

                {/* Starfield background */}
                <StarsBackground count={1500}/>

                {/* Rotating Sun (static model) */}
                <RotatingModel
                    path="/models/soleil.glb"
                    position={[0, 0, 0]}
                    scale={[1, 1, 1]}
                    speed={0.001}
                />

                {/* Orbiting Earth (animated model) */}
                <EarthOrbit/>

                {/* Bloom postprocessing effect */}
                <EffectComposer>
                    <Bloom
                        luminanceThreshold={bloomSettings.threshold}
                        luminanceSmoothing={bloomSettings.smoothing}
                        intensity={bloomSettings.intensity}
                    />
                </EffectComposer>

                {/* Camera controls */}
                <OrbitControls/>
            </Canvas>

            {/* Leva control panel for real-time tweaking */}
            <Leva collapsed={false}/>
        </div>
    )
}

export default App
