# 🚀 Three.js en React Native: Escena 3D Interactiva con `@react-three/fiber`

Este proyecto es una plantilla para el desarrollo de escenas 3D interactivas en aplicaciones móviles utilizando **React Native** y la potencia de **Three.js** a través de la librería **@react-three/fiber**.

El enfoque aprovecha la simplicidad de **Expo** para gestionar automáticamente el contexto **WebGL** necesario, simplificando la configuración nativa.

## 🛠️ Configuración y Dependencias

Para empezar a trabajar con gráficos 3D en React Native, se necesitan las siguientes dependencias:

### Dependencias Fundamentales

| Dependencia | Descripción |
| :--- | :--- |
| **`three`** | El **Motor 3D**. Se encarga de saber qué es un cubo, dónde está la cámara o cómo rebota la luz. Solo calcula la escena. |
| **`@react-three/fiber`** | El **Traductor**. Convierte nuestros componentes de React (`<mesh />`, `<Canvas />`) en instrucciones que entiende Three.js. |
| **`expo-gl`** | El **Lienzo**. Proporciona la "ventana" nativa (OpenGL/Metal) en el móvil que simula el contexto WebGL que Three.js necesita. |
| **`three-stdlib`** | Contiene utilidades estándar de Three.js, esencialmente para usar los controles de órbita. |

> **Comando de Instalación:**
>
> ```bash
> npm install three @react-three/fiber expo-gl three-stdlib
> ```

### Dependencia de Desarrollo (TypeScript)

Si estás utilizando TypeScript, esta dependencia es necesaria para tener autocompletado y tipado correcto:

> **Comando de Instalación:**
>
> ```bash
> npm install --save-dev @types/three
> ```

---

## 📂 Componentes Principales y Estructura

La aplicación se compone de tres archivos clave:

### 1. `App.js` (Configuración Base)

Este archivo es el *host* de la escena 3D.

| Componente | Función |
| :--- | :--- |
| `<View style={{flex: 1}}>` | Contenedor de React Native para ocupar toda la pantalla. |
| `<Canvas style={{flex: 1}}>` | El **lienzo** donde se van a dibujar o renderizar las figuras 3D. Expo se encarga de la parte nativa para que Three.js funcione igual que en la web. |
| `<ambientLight />` | Luz ambiental que ilumina toda la escena uniformemente. |
| `<spotLight />`, `<pointLight />` | Luces direccionales y puntuales para dar profundidad y realismo a la escena. |
| `<Box />` | Múltiples instancias del componente de cubo 3D. |
| `<Controls />` | Permite la interacción del usuario con la cámara. |

### 2. `components/Box.js` (Objeto 3D Interactivo)

Define la geometría y la lógica de interacción de los cubos.

| Hook/Elemento | Descripción |
| :--- | :--- |
| `useRef (meshRef)` | Referencia directa al objeto 3D (`<mesh>`) para su manipulación. |
| `useState (hovered, active)` | `hovered` controla el cambio de color al pasar el cursor; `active` controla el escalado al hacer click. |
| `useFrame` | **(Comentado en el código)** Se ejecuta en cada frame de la animación. Si se descomenta, rota el cubo en los ejes X e Y (`meshRef.current.rotation.x += delta`). |
| `<boxGeometry args={[1, 1, 1]} />` | Define la forma: un cubo de $1 \times 1 \times 1$. |
| `<meshStandardMaterial color={...} />` | Material físico que cambia de color entre **hotpink** (hover) y **blue**. |
| `scale={active ? 1.5 : 1}` | Si el cubo está activo (clicado), su tamaño aumenta un 50%. |

### 3. `components/Controls.js` (Mover con el Cursor/Dedo)

Implementa la funcionalidad `OrbitControls` para la navegación de la cámara.

| Elemento | Descripción |
| :--- | :--- |
| `useThree()` | Acceso a la cámara (`camera`) y el contexto WebGL (`gl`) de React Three Fiber. |
| `extend({ OrbitControls })` | Permite usar `OrbitControls` como un elemento interno de R3F. |
| `useEffect` | Monta los controles una sola vez. Crea una instancia de `OrbitControls(camera, gl.domElement)`. |
| **Ajustes de Control** | Se han ajustado los parámetros para un movimiento más rápido y suave: `enableDamping = true`, `dampingFactor = 0.1`, y `rotateSpeed`, `zoomSpeed`, `panSpeed` a **3.0**. |
| **Cleanup** | `return () => controls.dispose()`: Limpia los controles al desmontar para evitar fugas de memoria. |

---

## 💡 Iluminación de la Escena

La escena está configurada con tres fuentes de luz:

* **`<ambientLight intensity={0.5} />`**: Ilumina toda la escena de manera uniforme.
* **`<spotLight position={[10, 10, 10]} ... />`**: Luz puntual en forma de cono.
    * `decay=0`: La intensidad de la luz no disminuye con la distancia.
    * `intensity=Math.PI`: Intensidad de luz alta.
* **`<pointLight position={[-10, -10, -10]} ... />`**: Luz que irradia en todas direcciones desde un punto.
    * `decay=0`: La intensidad se mantiene constante.
    * `intensity=Math.PI`: Intensidad de luz alta.

---

## 🏃 Puesta en Marcha

Para iniciar el proyecto, asegúrate de tener las dependencias instaladas y ejecuta tu aplicación de React Native con Expo:

1.  Instala las dependencias:
    ```bash
    npm install three @react-three/fiber expo-gl three-stdlib
    npm install --save-dev @types/three # Si usas TypeScript
    ```
2.  Ejecuta la aplicación con Expo:
    ```bash
    npm start
    ```
3.  Abre la aplicación en un dispositivo físico o emulador con la **App Expo Go**.

---
👤 Autor: Daaviddieeguez
