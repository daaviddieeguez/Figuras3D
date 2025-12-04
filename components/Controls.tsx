import { useThree, extend } from '@react-three/fiber';
import { useEffect } from 'react';
import { OrbitControls } from 'three-stdlib';
extend({ OrbitControls });

export default function Controls() {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    // Movimientos más rápidos
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;

    controls.rotateSpeed = 3.0; // velocidad de rotación (antes 1)
    controls.zoomSpeed = 3.0;   // velocidad del zoom (antes 1)
    controls.panSpeed = 3.0;    // velocidad de movimiento lateral (antes 1)

    controls.enableZoom = true;

    return () => controls.dispose();
  }, [camera, gl]);

  return null;
}
