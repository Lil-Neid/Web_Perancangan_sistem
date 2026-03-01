import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * DottedSurface - Animated 3D particle surface using Three.js
 * Displays a grid of dots that animate with wave-like motion
 * 
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {number} props.separation - Distance between particles (default: 150)
 * @param {number} props.amountX - Number of particles on X axis (default: 40)
 * @param {number} props.amountY - Number of particles on Y axis (default: 60)
 * @param {string} props.color - Particle color in hex (default: '#000000')
 * @param {number} props.opacity - Particle opacity (default: 0.8)
 */
export function DottedSurface({
  className,
  separation = 130,
  amountX = 90,
  amountY = 70,
  color = '#000000',
  opacity = 0.9,
  ...props
}) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Parse color to RGB values (0-255 range)
    const colorObj = new THREE.Color(color);
    const r = Math.round(colorObj.r * 255);
    const g = Math.round(colorObj.g * 255);
    const b = Math.round(colorObj.b * 255);

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xffffff, 2000, 10000);

    // Get container dimensions
    const { width, height } = container.getBoundingClientRect();

    const camera = new THREE.PerspectiveCamera(
      60,
      width / height,
      1,
      10000
    );
    camera.position.set(0, 355, 1220);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeigh);
    renderer.setClearColor(scene.fog.color, 0);

    container.appendChild(renderer.domElement);

    // Create particles
    const particles = [];
    const positions = [];
    const colors = [];

    // Create geometry for all particles
    const geometry = new THREE.BufferGeometry();

    for (let ix = 0; ix < amountX; ix++) {
      for (let iy = 0; iy < amountY; iy++) {
        const x = ix * separation - (amountX * separation) / 2;
        const y = 0; // Will be animated
        const z = iy * separation - (amountY * separation) / 2;

        positions.push(x, y, z);
        colors.push(r, g, b);
      }
    }

    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    // Create material
    const material = new THREE.PointsMaterial({
      size: 8,
      vertexColors: false,
      color: colorObj,
      transparent: true,
      opacity: opacity,
      sizeAttenuation: true,
    });

    // Create points object
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    particles.push(points);

    let count = 0;
    let animationId;

    // Animation function
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const positionAttribute = geometry.attributes.position;
      const positions = positionAttribute.array;

      let i = 0;
      for (let ix = 0; ix < amountX; ix++) {
        for (let iy = 0; iy < amountY; iy++) {
          const index = i * 3;

          // Animate Y position with sine waves
          positions[index + 1] =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50;

          i++;
        }
      }

      positionAttribute.needsUpdate = true;

      renderer.render(scene, camera);
      count += 0.1;
    };

    // Handle container resize with ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      const { width: newWidth, height: newHeight } = container.getBoundingClientRect();
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    });

    resizeObserver.observe(container);

    // Also handle window resize
    const handleResize = () => {
      const { width: newWidth, height: newHeight } = container.getBoundingClientRect();
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Store references
    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles,
      animationId,
      count,
    };

    // Cleanup function
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);

        // Clean up Three.js objects
        sceneRef.current.scene.traverse((object) => {
          if (object instanceof THREE.Points) {
            object.geometry.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach((mat) => mat.dispose());
            } else {
              object.material.dispose();
            }
          }
        });

        sceneRef.current.renderer.dispose();

        if (containerRef.current && sceneRef.current.renderer.domElement) {
          containerRef.current.removeChild(sceneRef.current.renderer.domElement);
        }
      }
    };
  }, [separation, amountX, amountY, color, opacity]);

  return (
    <div
      ref={containerRef}
      className={className || ''}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        ...props.style,
      }}
      {...props}
    />
  );
}
