import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { getFresnelMat } from "../../getFresnelMat";

function Earth() {
  const earthRef = useRef();
  const cloudsRef = useRef();
  const glowRef = useRef();

  useFrame(() => {
    earthRef.current.rotation.y += 0.002;
    cloudsRef.current.rotation.y += 0.0023;
    glowRef.current.rotation.y += 0.002;
  });

  const textureLoader = new THREE.TextureLoader();
  const detail = 20;

  const earthMaterial = new THREE.MeshPhongMaterial({
    map: textureLoader.load("/textures/03_earthlights1k.jpg"),
    specularMap: textureLoader.load("/textures/02_earthspec1k.jpg"),
    bumpMap: textureLoader.load("/textures/01_earthbump1k.jpg"),
    bumpScale: 0.04,
  });

  // const lightsMaterial = new THREE.MeshBasicMaterial({
  //   map: textureLoader.load("/textures/03_earthlights1k.jpg"),
  //   blending: THREE.AdditiveBlending,
  // });

  const cloudsMaterial = new THREE.MeshStandardMaterial({
    map: textureLoader.load("/textures/04_earthcloudmap.jpg"),
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    alphaMap: textureLoader.load("/textures/05_earthcloudmaptrans.jpg"),
  });

  return (
    <>
      <group rotation={[0, 0, 0]} position={[4, 1, 0.7]}>
        <mesh
          ref={earthRef}
          geometry={new THREE.IcosahedronGeometry(1, detail)}
          material={earthMaterial}
          scale={(6, 1, 3)}
        />
        {/* <mesh
          geometry={new THREE.IcosahedronGeometry(1, detail)}
          material={lightsMaterial}
        /> */}
        <mesh
          ref={cloudsRef}
          scale={1.515}
          geometry={new THREE.IcosahedronGeometry(1, detail)}
          material={cloudsMaterial}
        />
        <mesh
          ref={glowRef}
          scale={3.2}
          geometry={new THREE.IcosahedronGeometry(1, detail)}
          material={getFresnelMat()}
        />
      </group>
    </>
  );
}

export const ThreeScene = () => {
  return (
    <Canvas
      camera={{ position: [5, 3, 5], fov: 75 }}
      className='w-full h-screen'
    >
      <ambientLight intensity={1} />
      <directionalLight position={[-2, 0.5, 1.5]} intensity={1.0} />
      {/* <OrbitControls enableZoom={false} /> */}
      <Stars
        radius={100}
        depth={50}
        count={2000}
        factor={4}
        saturation={0}
        fade
      />
      <Earth />
    </Canvas>
  );
};
