import * as THREE from "three";

export function getFresnelMat({ rimHex = 0x0088ff, facingHex = 0x000000 } = {}) {
  const uniforms = {
    color1: { value: new THREE.Color(rimHex) },
    color2: { value: new THREE.Color(facingHex) },
    fresnelBias: { value: 0.1 },
    fresnelScale: { value: 1.0 },
    fresnelPower: { value: 4.0 },
  };

  const vertexShader = `
    uniform float fresnelBias;
    uniform float fresnelScale;
    uniform float fresnelPower;
  
    varying float vReflectionFactor;
  
    void main() {
      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
      vec3 worldNormal = normalize( normalMatrix * normal );
      vec3 I = mvPosition.xyz - cameraPosition;
      vReflectionFactor = fresnelBias + fresnelScale * pow( 1.0 - dot( normalize(I), worldNormal ), fresnelPower );
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  const fragmentShader = `
    uniform vec3 color1;
    uniform vec3 color2;
  
    varying float vReflectionFactor;
  
    void main() {
      vec3 color = mix(color2, color1, vReflectionFactor);
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  return new THREE.ShaderMaterial({
    uniforms: uniforms,
    // vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    transparent: true,
    blending: THREE.AdditiveBlending,
    
  });
}
