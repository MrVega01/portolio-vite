import './styles.css'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import * as THREE from 'three'

export default function WorldAnimation () {
  const worldDiv = useRef()

  const scene = new THREE.Scene()
  scene.background = new THREE.Color('rgb(22, 22, 35)')
  document.addEventListener('mousemove', onMouseMove, false)
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  let mouseX
  let mouseY

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)

  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })

  const distance = Math.min(200, window.innerWidth / 4)
  const geometry = new THREE.Geometry()

  for (let i = 0; i < 1600; i++) {
    const vertex = new THREE.Vector3()

    // var theta = THREE.Math.randFloatSpread(360);
    const theta = Math.acos(THREE.Math.randFloatSpread(2))
    const phi = THREE.Math.randFloatSpread(360)

    vertex.x = distance * Math.sin(theta) * Math.cos(phi)
    vertex.y = distance * Math.sin(theta) * Math.sin(phi)
    vertex.z = distance * Math.cos(theta)

    geometry.vertices.push(vertex)
  }
  const particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 'rgb(248, 147, 29)', size: 2 }))
  particles.boundingSphere = 50

  const renderingParent = new THREE.Group()
  renderingParent.add(particles)

  const resizeContainer = new THREE.Group()
  resizeContainer.add(renderingParent)
  scene.add(resizeContainer)

  camera.position.z = 400

  const animate = function () {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
  let myTween
  function onMouseMove (event) {
    if (myTween) { myTween.kill() }

    mouseX = (event.clientX / window.innerWidth) * 2 - 1
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    myTween = gsap.to(particles.rotation, { duration: 0.1, x: mouseY * -1, y: mouseX })
    // particles.rotation.x = mouseY*-1;
    // particles.rotation.y = mouseX;
  }
  animate()

  // Scaling animation
  const animProps = { scale: 1, xRot: 0, yRot: 0 }
  gsap.to(animProps, {
    duration: 10,
    scale: 1.3,
    repeat: -1,
    yoyo: true,
    ease: 'sine',
    onUpdate: function () {
      renderingParent.scale.set(animProps.scale, animProps.scale, animProps.scale)
    }
  })

  gsap.to(animProps, {
    duration: 120,
    xRot: Math.PI * 2,
    yRot: Math.PI * 4,
    repeat: -1,
    yoyo: true,
    ease: 'none',
    onUpdate: function () {
      renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0)
    }
  })

  useEffect(() => {
    worldDiv.current.appendChild(renderer.domElement)
  }, [renderer.domElement])

  return <div className='worldCanvas' ref={worldDiv} />
}
