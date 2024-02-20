import React, {useRef, useEffect, useState} from 'react'
import * as THREE from 'three'
import './styles.css'

const logoRatio = 124.49 / 300

const threeEnabled = false;

export const Logo = () => {
  const logoContainerRef = useRef(null)
  const refContainer = useRef(null)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const resize = () => {
    const newWidth = logoContainerRef.current.offsetWidth
    const newHeight = newWidth * logoRatio
    if(newWidth !== width){
      setWidth(newWidth)
      setHeight(newHeight)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
    return () => { window.removeEventListener('resize', resize); }
  }, []);

  useEffect(() => {
    // Scene Setup
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(80, width / height, 0.1, 1000);
    camera.position.z = 5;
    var renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(width, height);

    // Objects
    var box = new THREE.BoxGeometry(20, 8, 0.01);
    var boxM = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    var cube = new THREE.Mesh(box, boxM);
    scene.add(cube);

    // Append to DOM
    if (refContainer.current) {
      refContainer.current.innerHTML = '';
      refContainer.current.appendChild(renderer.domElement);
    }

    // Animate
    var animate = function () {
      requestAnimationFrame(animate);
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      if (refContainer.current && renderer.domElement) {
        refContainer.current.removeChild(renderer.domElement);
      }
    };
  }, [width, height]);

  return (
    <div ref={logoContainerRef} id="logo" className={threeEnabled ? 'big' : ''}>
      <img src="/img/logo.svg" alt="logo" className={threeEnabled ? 'opaque' : ''} />
      {threeEnabled && <div className="logo-three" ref={refContainer}></div>}
    </div>
  );
}
