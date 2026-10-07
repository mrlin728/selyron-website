import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeHeroCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 600;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07080b, 0.0018);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 160);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 2. Nodes Creation (Synaptic Agents Matrix)
    const nodeCount = 42;
    const nodePositions: THREE.Vector3[] = [];
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    const nodeGeometry = new THREE.SphereGeometry(0.85, 16, 16);
    const nodeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x6366f1, // Electric Indigo
    });
    const activeNodeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x38bdf8, // Sky Cyan
    });
    const guardNodeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x10b981, // Emerald Gate
    });

    for (let i = 0; i < nodeCount; i++) {
      // Distribute in a spherical/cylindrical field
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 45 + Math.random() * 35;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = (radius * Math.sin(phi) * Math.sin(theta)) * 0.55; // Flatten slightly
      const z = radius * Math.cos(phi) * 0.7;

      const pos = new THREE.Vector3(x, y, z);
      nodePositions.push(pos);

      const mat = i % 7 === 0 ? guardNodeMaterial : i % 3 === 0 ? activeNodeMaterial : nodeMaterial;
      const mesh = new THREE.Mesh(nodeGeometry, mat);
      mesh.position.copy(pos);
      nodeGroup.add(mesh);
    }

    // 3. Network Lines (Connected Pipelines)
    const linePositions: number[] = [];
    const lineColors: number[] = [];
    const connections: { from: THREE.Vector3; to: THREE.Vector3 }[] = [];

    const color1 = new THREE.Color(0x38bdf8);
    const color2 = new THREE.Color(0x4f46e5);

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 38) {
          connections.push({ from: nodePositions[i], to: nodePositions[j] });
          linePositions.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );

          const c = i % 2 === 0 ? color1 : color2;
          lineColors.push(c.r, c.g, c.b, c.r, c.g, c.b);
        }
      }
    }

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    linesGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending
    });

    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    nodeGroup.add(linesMesh);

    // 4. Kinetic Data Pulse Packets (Traveling along pipelines)
    const packetCount = 28;
    const packetGeometry = new THREE.BufferGeometry();
    const packetPosArray = new Float32Array(packetCount * 3);
    const packetProgress = new Float32Array(packetCount);
    const packetRoutes: { from: THREE.Vector3; to: THREE.Vector3 }[] = [];
    const packetSpeeds = new Float32Array(packetCount);

    for (let i = 0; i < packetCount; i++) {
      const conn = connections[Math.floor(Math.random() * connections.length)] || {
        from: new THREE.Vector3(),
        to: new THREE.Vector3(10, 10, 10)
      };
      packetRoutes.push(conn);
      packetProgress[i] = Math.random();
      packetSpeeds[i] = 0.003 + Math.random() * 0.007;

      const p = conn.from.clone().lerp(conn.to, packetProgress[i]);
      packetPosArray[i * 3] = p.x;
      packetPosArray[i * 3 + 1] = p.y;
      packetPosArray[i * 3 + 2] = p.z;
    }

    packetGeometry.setAttribute('position', new THREE.BufferAttribute(packetPosArray, 3));

    // Create custom particle point texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(56, 189, 248, 0.9)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const packetMaterial = new THREE.PointsMaterial({
      size: 3.2,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const packetsMesh = new THREE.Points(packetGeometry, packetMaterial);
    nodeGroup.add(packetsMesh);

    // 5. Ambient Micro Dust Particles
    const dustCount = 80;
    const dustGeometry = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPos[i] = (Math.random() - 0.5) * 220;
      dustPos[i + 1] = (Math.random() - 0.5) * 160;
      dustPos[i + 2] = (Math.random() - 0.5) * 120;
    }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMaterial = new THREE.PointsMaterial({
      size: 1.2,
      color: 0x64748b,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    const dustMesh = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dustMesh);

    // 6. Interactive Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetX = (e.clientX - windowHalfX) * 0.0007;
      targetY = (e.clientY - windowHalfY) * 0.0007;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // 7. Resize Observer
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 600;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // 8. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let isVisible = true;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(container);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();

      // Smooth camera parallax
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      nodeGroup.rotation.y += 0.05 * delta + mouseX * 0.02;
      nodeGroup.rotation.x += 0.02 * delta - mouseY * 0.02;
      dustMesh.rotation.y -= 0.02 * delta;

      // Update data packet positions
      const positions = packetGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < packetCount; i++) {
        packetProgress[i] += packetSpeeds[i];
        if (packetProgress[i] >= 1) {
          packetProgress[i] = 0;
          packetRoutes[i] = connections[Math.floor(Math.random() * connections.length)] || packetRoutes[i];
        }
        const route = packetRoutes[i];
        const current = route.from.clone().lerp(route.to, packetProgress[i]);
        positions[i * 3] = current.x;
        positions[i * 3 + 1] = current.y;
        positions[i * 3 + 2] = current.z;
      }
      packetGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      activeNodeMaterial.dispose();
      guardNodeMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      packetGeometry.dispose();
      packetMaterial.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      particleTexture.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-70 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
};
