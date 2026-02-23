"use client"

import { useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import * as THREE from "three"

interface PlanetProps {
    name: string
    texture: string
    size: number
    position: [number, number, number]
    rotationSpeed?: number
}

export default function Planet({
                                   name,
                                   texture,
                                   size,
                                   position,
                                   rotationSpeed = 0.01,
                               }: PlanetProps) {
    const meshRef = useRef<THREE.Mesh>(null)
    const map = useLoader(THREE.TextureLoader, texture)

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += rotationSpeed
            meshRef.current.position.z = 0
        }
    })

    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[size, 64, 64]} />
            <meshStandardMaterial
                map={map}
                emissive={"white"}       // makes the planet brighter
                emissiveIntensity={0.01}  // tweak to taste
                roughness={0.7}
                metalness={0}
            />
        </mesh>
    )
}