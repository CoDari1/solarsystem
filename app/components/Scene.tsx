"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import Sun from "./Sun"
import Planet from "./Planet"
import { planets } from "@/data/planets"
import { FlyControls } from "@react-three/drei"

export default function Scene() {
    return (
        <Canvas camera={{ position: [0, 10, 40], fov: 60 }}>
            <FlyControls
                movementSpeed={10}      // camera moves freely
                rollSpeed={0.5}
                dragToLook={true}      // click + drag to rotate camera
                autoForward={false}
            />
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

        </Canvas>
    )
}