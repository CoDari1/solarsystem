"use client"

import { useLoader } from "@react-three/fiber"
import * as THREE from "three"

export default function Sun() {
    const texture = useLoader(
        THREE.TextureLoader,
        "/textures/Sun.jpg" // your SolarSystemScope texture
    )

    return (
        <group>
            <mesh>
                <sphereGeometry args={[5, 64, 64]} />
                <meshStandardMaterial
                    map={texture}
                    emissive={"orange"}
                    emissiveMap={texture}
                    emissiveIntensity={10}
                />
            </mesh>

            <mesh>
                <sphereGeometry args={[2.8, 64, 64]} />
                <meshBasicMaterial
                    color="orange"
                    transparent
                    opacity={0.2}
                />
            </mesh>
        </group>
    )
}