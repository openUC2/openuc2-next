"use client";

import { useEffect, useRef, useState } from "react";
import type { Group, Mesh } from "three";

// Feature flag: set to false to disable the cube scroll animation
const CUBE_ANIMATION_ENABLED = false;

export function CubeScrollAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!CUBE_ANIMATION_ENABLED) return;
    if (!canvasRef.current) return;

    let cancelled = false;

    async function init() {
      // Dynamically import Three.js and GSAP to keep bundle clean
      const [THREE, { OBJLoader }, gsapModule, { ScrollTrigger }] = await Promise.all([
        import("three"),
        import("three/addons/loaders/OBJLoader.js"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled) return;

      const gsap = gsapModule.default;
      gsap.registerPlugin(ScrollTrigger);

      const canvas = canvasRef.current!;

      // Renderer
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Scene
      const scene = new THREE.Scene();

      // Camera
      const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        2000
      );
      camera.position.set(0, 0, 180);
      camera.lookAt(0, 5, 0);

      // Lights
      const pointLight = new THREE.PointLight(0xffffff, 0.75);
      pointLight.position.set(70, -20, 150);
      scene.add(pointLight);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
      scene.add(ambientLight);

      // Load the OBJ model
      const basePath = "/openuc2-next";
      const loader = new OBJLoader();
      let modelGroup: Group;

      try {
        const obj = await loader.loadAsync(
          `${basePath}/scroll/dist/ASS - 2011 - CUBSPLCUB - V04 - A.obj`
        );

        if (cancelled) {
          renderer.dispose();
          return;
        }

        // Apply a subtle brand-colored material
        obj.traverse((child) => {
          if ((child as Mesh).isMesh) {
            (child as Mesh).material = new THREE.MeshPhongMaterial({
              color: 0x023773, // UC2 blue
              specular: 0xd0cbc7,
              shininess: 5,
              flatShading: true,
              transparent: true,
              opacity: 0.35,
            });
          }
        });

        // Wireframe edges
        const firstMesh = obj.children[0] as Mesh;
        if (firstMesh?.geometry) {
          const edges = new THREE.EdgesGeometry(firstMesh.geometry);
          const line = new THREE.LineSegments(
            edges,
            new THREE.LineBasicMaterial({
              color: 0x023773,
              transparent: true,
              opacity: 0.25,
            })
          );
          line.position.set(0.5, 0.2, -1);
          modelGroup = new THREE.Group();
          modelGroup.add(obj);
          modelGroup.add(line);
        } else {
          modelGroup = new THREE.Group();
          modelGroup.add(obj);
        }

        scene.add(modelGroup);
      } catch {
        // Model failed to load — silently degrade
        renderer.dispose();
        return;
      }

      if (cancelled) {
        renderer.dispose();
        return;
      }

      // Initial position & rotation
      const tau = Math.PI * 2;
      modelGroup.rotation.set(0, tau * -0.25, 0);
      modelGroup.position.set(80, -32, -60);

      // Render function
      function render() {
        renderer.render(scene, camera);
      }

      render();
      setLoaded(true);

      // GSAP ScrollTrigger timeline — animate cube as user scrolls through .content sections
      const sectionDuration = 1;
      const tl = gsap.timeline({
        onUpdate: render,
        scrollTrigger: {
          trigger: "main",
          scrub: 1.5,
          start: "top top",
          end: "bottom bottom",
        },
        defaults: { duration: sectionDuration, ease: "power2.inOut" },
      });

      let delay = 0;

      // Move from right to center
      tl.to(modelGroup.position, { x: -10, ease: "power1.in" }, delay);
      delay += sectionDuration;

      // Rotate and shift left
      tl.to(
        modelGroup.rotation,
        { x: tau * 0.25, y: 0, z: -tau * 0.05, ease: "power1.inOut" },
        delay
      );
      tl.to(
        modelGroup.position,
        { x: -40, y: 0, z: -60, ease: "power1.inOut" },
        delay
      );
      delay += sectionDuration;

      // Shift right
      tl.to(
        modelGroup.rotation,
        { x: tau * 0.25, y: 0, z: tau * 0.05, ease: "power3.inOut" },
        delay
      );
      tl.to(
        modelGroup.position,
        { x: 40, y: 0, z: -60, ease: "power2.inOut" },
        delay
      );
      delay += sectionDuration;

      // Rotate and bring forward
      tl.to(
        modelGroup.rotation,
        { x: tau * 0.2, y: 0, z: -tau * 0.1, ease: "power3.inOut" },
        delay
      );
      tl.to(
        modelGroup.position,
        { x: -40, y: 0, z: -30, ease: "power2.inOut" },
        delay
      );
      delay += sectionDuration;

      // Center and close
      tl.to(modelGroup.rotation, { x: 0, z: 0, y: tau * 0.25 }, delay);
      tl.to(modelGroup.position, { x: 0, y: -10, z: 50 }, delay);
      delay += sectionDuration;
      delay += sectionDuration;

      // Final rotation
      tl.to(
        modelGroup.rotation,
        { x: tau * 0.25, y: tau * 0.5, z: 0, ease: "power4.inOut" },
        delay
      );
      tl.to(modelGroup.position, { z: 30, ease: "power4.inOut" }, delay);
      delay += sectionDuration;

      // Drift away
      tl.to(
        modelGroup.rotation,
        { x: tau * 0.35, y: tau * 0.75, z: tau * 0.6, ease: "power4.inOut" },
        delay
      );
      tl.to(
        modelGroup.position,
        { z: 100, x: 20, y: 0, ease: "power4.inOut" },
        delay
      );
      delay += sectionDuration;

      // Fly far
      tl.to(
        modelGroup.rotation,
        { x: tau * 0.15, y: tau * 0.85, z: 0, ease: "power1.in" },
        delay
      );
      tl.to(
        modelGroup.position,
        { z: -150, x: 0, y: 0, ease: "power1.inOut" },
        delay
      );
      delay += sectionDuration;

      // Final: fly forward and fade
      tl.to(
        modelGroup.rotation,
        {
          duration: sectionDuration,
          x: -tau * 0.05,
          y: tau,
          z: -tau * 0.1,
          ease: "none",
        },
        delay
      );
      tl.to(
        modelGroup.position,
        {
          duration: sectionDuration,
          x: 0,
          y: 30,
          z: 320,
          ease: "power1.in",
        },
        delay
      );
      tl.to(
        pointLight.position,
        { duration: sectionDuration, x: 0, y: 0, z: 0 },
        delay
      );

      // Handle resize
      function onResize() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        camera.aspect = w / h;
        const camZ = (screen.width - w) / 3;
        camera.position.z = camZ < 180 ? 180 : camZ;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        render();
      }
      window.addEventListener("resize", onResize);

      // Cleanup ref
      cleanupRef.current = () => {
        window.removeEventListener("resize", onResize);
        tl.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
        renderer.dispose();
        scene.clear();
      };
    }

    init();

    return () => {
      cancelled = true;
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, []);

  if (!CUBE_ANIMATION_ENABLED) return null;

  return (
    <div ref={containerRef} aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s ease", zIndex: 5 }}
      />
    </div>
  );
}
