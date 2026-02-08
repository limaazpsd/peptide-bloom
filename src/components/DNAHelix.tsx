import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const { sin, cos, random, PI } = Math;

const DENSITY_RADIUS = 14;
const PHASE_SHIFT = 120;
const HELIX_RADIUS = 90;
const POINTS_PER_CLOUD = 80;
const CONNECTION_DENSITY = 80;

const rad = (deg: number) => (deg / 180) * PI;
const range = (x: number) => Array(x).fill(0).map((_, i) => i);
const norm = (val: number, min: number, max: number) => (val - min) / (max - min);
const lerp = (nrm: number, min: number, max: number) => (max - min) * nrm + min;
const lerpMap = (val: number, sMin: number, sMax: number, dMin: number, dMax: number) =>
  lerp(norm(val, sMin, sMax), dMin, dMax);

const getRandomPoint = () => DENSITY_RADIUS * random() - DENSITY_RADIUS / 2;

interface Point3D {
  x: number;
  y: number;
  z: number;
}

function getPointCloud(p: Point3D): Point3D[] {
  return range(POINTS_PER_CLOUD).map(() => ({
    x: p.x + getRandomPoint(),
    y: p.y + getRandomPoint(),
    z: p.z + getRandomPoint(),
  }));
}

function getCirclePoint(angle: number): { x: number; z: number } {
  const a = rad(angle);
  return {
    x: HELIX_RADIUS * sin(a),
    z: HELIX_RADIUS * cos(a),
  };
}

function DNAParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    let allPoints: Point3D[] = [];
    const connectionPairs: { pa: Point3D; pb: Point3D }[] = [];

    // Build double helix strands
    range(360).forEach((a) => {
      const pa: Point3D = { ...getCirclePoint(a), y: 1.4 * (a - 180) };
      const pb: Point3D = { ...getCirclePoint(a + PHASE_SHIFT), y: 1.4 * (a - 180) };

      allPoints = allPoints.concat(getPointCloud(pa));
      allPoints = allPoints.concat(getPointCloud(pb));

      // Cross connections every 36 degrees
      if (a % 36 === 0) {
        connectionPairs.push({ pa, pb });
      }
    });

    // Build connection bridges
    connectionPairs.forEach(({ pa, pb }) => {
      const bridgePoints = range(CONNECTION_DENSITY).reduce<Point3D[]>((acc, i) => {
        return [
          ...acc,
          ...getPointCloud({
            x: lerpMap(i, 0, CONNECTION_DENSITY, pa.x, pb.x),
            y: pa.y,
            z: lerpMap(i, 0, CONNECTION_DENSITY, pa.z, pb.z),
          }),
        ];
      }, []);
      allPoints = allPoints.concat(bridgePoints);
    });

    // Convert to typed arrays
    const pos = new Float32Array(allPoints.length * 3);
    const col = new Float32Array(allPoints.length * 3);

    const cyanColor = new THREE.Color().setHSL(0.52, 1, 0.5);
    const purpleColor = new THREE.Color().setHSL(0.72, 0.9, 0.66);

    const minY = -280;
    const maxY = 280;

    allPoints.forEach((p, i) => {
      pos[i * 3] = p.x;
      pos[i * 3 + 1] = p.y;
      pos[i * 3 + 2] = p.z;

      // Color gradient based on Y position
      const t = norm(p.y, minY, maxY);
      const c = cyanColor.clone().lerp(purpleColor, t);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    });

    return { positions: pos, colors: col };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.003;
      // Gentle floating motion
      pointsRef.current.position.y = sin(state.clock.elapsedTime * 0.2) * 5;
    }
  });

  return (
    <points ref={pointsRef}>
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
        size={1.8}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function DNAHelix() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 1200], fov: 15 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <DNAParticles />
      </Canvas>
    </div>
  );
}
