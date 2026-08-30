import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AmbientScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const wrapper = canvas.parentElement;
    if (!wrapper) return;
    const compactScene = window.matchMedia("(max-width: 767px)").matches;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: !compactScene,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, compactScene ? 1.1 : 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, compactScene ? 6.8 : 6.2);

    const group = new THREE.Group();
    group.rotation.set(-0.2, -0.35, 0.06);
    scene.add(group);

    const readColors = () => {
      const styles = getComputedStyle(document.documentElement);
      return {
        accent: new THREE.Color(styles.getPropertyValue("--accent").trim() || "#2454ff"),
        ink: new THREE.Color(styles.getPropertyValue("--ink").trim() || "#11110f"),
      };
    };

    const initialColors = readColors();
    const shellGeometry = new THREE.IcosahedronGeometry(1.55, compactScene ? 1 : 2);
    const shellMaterial = new THREE.MeshBasicMaterial({
      color: initialColors.accent,
      wireframe: true,
      transparent: true,
      opacity: 0.74,
    });
    const shell = new THREE.Mesh(shellGeometry, shellMaterial);
    group.add(shell);

    const coreGeometry = new THREE.TorusKnotGeometry(
      0.72,
      0.16,
      compactScene ? 56 : 96,
      compactScene ? 7 : 10,
      2,
      3,
    );
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: initialColors.ink,
      wireframe: true,
      transparent: true,
      opacity: 0.34,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    const pointCount = compactScene ? 48 : 120;
    const positions = new Float32Array(pointCount * 3);
    for (let index = 0; index < pointCount; index += 1) {
      const radius = 2.15 + Math.random() * 0.75;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[index * 3 + 2] = radius * Math.cos(phi);
    }

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pointsMaterial = new THREE.PointsMaterial({
      color: initialColors.accent,
      size: 0.028,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    group.add(points);

    const pointerTarget = new THREE.Vector2(0, 0);
    const pointerCurrent = new THREE.Vector2(0, 0);
    let frameId = 0;
    let isVisible = true;
    let previousTime = performance.now();

    const resize = () => {
      const { width, height } = wrapper.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerTarget.x = (event.clientX / window.innerWidth - 0.5) * 0.7;
      pointerTarget.y = (event.clientY / window.innerHeight - 0.5) * -0.5;
    };

    const onVisibilityChange = () => {
      const shouldRender = !document.hidden && wrapper.getBoundingClientRect().bottom > 0;
      if (shouldRender === isVisible) return;

      isVisible = shouldRender;
      if (isVisible) {
        previousTime = performance.now();
        frameId = window.requestAnimationFrame(renderFrame);
      } else {
        window.cancelAnimationFrame(frameId);
      }
    };

    const renderFrame = (time: number) => {
      const delta = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;
      pointerCurrent.lerp(pointerTarget, 0.045);

      group.rotation.y += delta * 0.12;
      group.rotation.x += (pointerCurrent.y - group.rotation.x) * 0.025;
      group.position.x += (pointerCurrent.x - group.position.x) * 0.035;
      core.rotation.x -= delta * 0.2;
      core.rotation.z += delta * 0.1;
      points.rotation.y -= delta * 0.025;

      renderer.render(scene, camera);
      if (isVisible) frameId = window.requestAnimationFrame(renderFrame);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(wrapper);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      const shouldRender = entry.isIntersecting && !document.hidden;
      if (shouldRender === isVisible) return;
      isVisible = shouldRender;
      if (isVisible) {
        previousTime = performance.now();
        frameId = window.requestAnimationFrame(renderFrame);
      } else {
        window.cancelAnimationFrame(frameId);
      }
    });
    visibilityObserver.observe(wrapper);

    const themeObserver = new MutationObserver(() => {
      const colors = readColors();
      shellMaterial.color.copy(colors.accent);
      pointsMaterial.color.copy(colors.accent);
      coreMaterial.color.copy(colors.ink);
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    resize();
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    frameId = window.requestAnimationFrame(renderFrame);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      themeObserver.disconnect();
      shellGeometry.dispose();
      shellMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-scene-canvas" aria-hidden="true" />;
}
