import * as THREE from "three/src/Three"
import React, { useRef, useMemo } from "react"
// A THREE.js React renderer, see: https://github.com/drcmda/react-three-fiber
import { Canvas, useFrame } from "react-three-fiber"
// A React animation lib, see: https://github.com/react-spring/react-spring

function Stars() {
  let group = useRef()
  let theta = 0
  useFrame(state => {
    // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
    const r = 1 * Math.sin(THREE.Math.degToRad((theta += 0.1)))
    const s = Math.cos(THREE.Math.degToRad(theta * 1.25))
    group.current.rotation.set(r, r, r)
    group.current.scale.set(s, s, s)
  })
  const [geo, mat, vertices, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(0.5, 8, 8)
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#FDCA40"),
    })
    const coords = new Array(2000)
      .fill()
      .map(i => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
      ])
    return [geo, mat, vertices, coords]
  }, [])
  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
      ))}
    </group>
  )
}

function Sky() {
  return (
    <Canvas id="sky" resize={{ scroll: false }}>
      <ambientLight color="#FDCA40" />
      <pointLight color="white" intensity={1} position={[10, 10, 10]} />
      <Stars />
    </Canvas>
  )
}

export default Sky