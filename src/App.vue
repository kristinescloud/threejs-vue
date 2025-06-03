<script setup lang="js">
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshNormalMaterial, Mesh } from 'three';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const container = ref(null);

let renderer, scene, camera, animationId;

function resizeRenderer() {
  const width = container.value.clientWidth;
  const height = container.value.clientHeight;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

onMounted(() => {
  // sets up the scene
  scene = new Scene();
  camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 2

  // sets up the renderer
  renderer = new WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setAnimationLoop(animate)
  container.value.appendChild(renderer.domElement);

  // resize and start
  resizeRenderer();
  window.addEventListener('resize', resizeRenderer);

  // adding a basic object
  const geometry = new BoxGeometry();
  const material = new MeshNormalMaterial();
  const cube = new Mesh(geometry, material);
  scene.add(cube);

  function animate() {
    // animationId = requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  // animate();
})

// onBeforeUnmount(() => {
//   cancelAnimationFrame(animationId);
//   window.removeEventListener('resize', resizeRenderer);
//   renderer.dispose();
// })
</script>

<template>
  <header>
    <div class="greetings">
      <h1>welcome to my three.js app :)</h1>
      <h3>
        You’ve successfully created a project with
        <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
      </h3>
    </div>
    <div ref="container" class="three-container"></div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  place-items: center;

}
.three-container {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

</style>
