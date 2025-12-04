import { Canvas } from '@react-three/fiber';
import { StyleSheet, View } from 'react-native';
import Box from './components/Box';
import Controls from './components/Controls';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Canvas style={{flex: 1}}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        
        <Box props={[-1.2, 0, 0]} />
        
        <Controls />
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({});
