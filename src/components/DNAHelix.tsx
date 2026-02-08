import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function HelixStrand() {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const { positions, colors, connections } = useMemo(() => {
    const pos: number[] = [];
    const col: number[] = [];
    const conn: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
    const turns = 4;
    const pointsPerTurn = 30;
    const totalPoints = turns * pointsPerTurn;
    const radius = 1.8;
    const height = 10;

    const cyanColor = new THREE.Color("hsl(189, 95%, 43%)");
    const purpleColor = new THREE.Color("hsl(258, 90%, 66%)");

    for (let i = 0; i < totalPoints; i++) {
      const t = i / totalPoints;
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * height;

      // Strand 1
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      pos.push(x1, y, z1);

      // Strand 2 (offset by PI)
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;
      pos.push(x2, y, z2);

      // Colors - gradient from cyan to purple
      const c = cyanColor.clone().lerp(purpleColor, t);
      col.push(c.r, c.g, c.b);
      col.push(c.r, c.g, c.b);

      // Cross connections (every few points)
      if (i % 4 === 0) {
        conn.push({
          start: new THREE.Vector3(x1, y, z1),
          end: new THREE.Vector3(x2, y, z2),
        });
      }
    }

    // Add floating particles
    for (let i = 0; i < 80; i++) {
      const x = (Math.random() - 0.5) * 8;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 8;
      pos.push(x, y, z);
      const c = cyanColor.clone().lerp(purpleColor, Math.random());
      col.push(c.r, c.g, c.b);
    }

    return {
      positions: new Float32Array(pos),
      colors: new Float32Array(col),
      connections: conn,
    };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    }
  });

  const connectionGeometries = useMemo(() => {
    return connections.map((conn) => {
      const points = [conn.start, conn.end];
      return new THREE.BufferGeometry().setFromPoints(points);
    });
  }, [connections]);

  return (
    <group ref={groupRef}>
      {/* Main helix points */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Cross connections */}
      {connectionGeometries.map((geo, i) => (
        <primitive key={i} object={new THREE.Line(geo, new THREE.LineBasicMaterial({
          color: new THREE.Color("hsl(189, 95%, 43%)"),
          transparent: true,
          opacity: 0.15,
          blending: THREE.AdditiveBlending,
        }))} />
      ))}

      {/* Glowing center core */}
      <mesh>
        <cylinderGeometry args={[0.02, 0.02, 10, 8]} />
        <meshBasicMaterial
          color="hsl(189, 95%, 43%)"
          transparent
          opacity={0.05}
        />
      </mesh>
    </group>
  );
}

function FloatingMolecules() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const molecules = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 12,
      ] as [number, number, number],
      scale: Math.random() * 0.06 + 0.02,
      speed: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  return (
    <group ref={ref}>
      {molecules.map((mol, i) => (
        <Float key={i} speed={mol.speed} rotationIntensity={0.3} floatIntensity={1}>
          <mesh position={mol.position}>
            <sphereGeometry args={[mol.scale, 8, 8]} />
            <meshBasicMaterial
              color={i % 2 === 0 ? "hsl(189, 95%, 43%)" : "hsl(258, 90%, 66%)"}
              transparent
              opacity={0.4}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function DNAHelix() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.3} />
        <HelixStrand />
        <FloatingMolecules />
      </Canvas>
    </div>
  );
}
