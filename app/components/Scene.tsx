"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import Sun from "./Sun"
import Planet from "./Planet"
import { planets } from "@/data/planets"

export default function Scene() {
    return (
        <Canvas camera={{ position: [0, 5, 20], fov: 60 }}>
            <ambientLight intensity={.5} />
            <pointLight position={[0, 0, 0]} intensity={10} distance={100} decay={2} />
            <Stars />

            <Sun />

            {planets.map((planet) => (
                <Planet
                    key={planet.name}
                    name={planet.name}
                    texture={planet.texture}
                    size={planet.size}
                    position={[planet.distance, 0, 0]}
                    rotationSpeed={planet.rotationSpeed}
                />
            ))}

            <OrbitControls enablePan={false} />
        </Canvas>
    )
}