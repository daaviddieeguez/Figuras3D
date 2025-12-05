import { StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';

type BoxProps = {
  position?: [number, number, number];
};

const Box = ({ position = [0,0,0] }: BoxProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
//   useFrame((state, delta) => (
//     meshRef.current.rotation.x += delta,
//     meshRef.current.rotation.y += delta
//   ));
  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "blue"} />
    </mesh>
  );
};

export default Box;

const styles = StyleSheet.create({});
