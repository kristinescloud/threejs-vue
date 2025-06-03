<script setup lang="js">
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshNormalMaterial, Mesh } from 'three';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  xPos: Number,
  yPos: Number,
  zPos: Number,
})

const container = ref(null)

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
  camera = new PerspectiveCamera(75, container.value.clientWidth / container.value.clientHeight, 0.1, 1000);
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
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    cube.rotation.x = props.yPos;
    cube.rotation.y = props.xPos;
    renderer.render(scene, camera);
  }
  // animate();
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener('resize', resizeRenderer);
  renderer.dispose();
})

</script>

<template>
  <div class="viewer">
    <!-- <h1>x:  {{ props.xPos }}  y:  {{ props.yPos }}  z:  {{ props.zPos }}</h1> -->
    <div ref="container" class="three-container"></div>       
  </div>
</template>

<style scoped>
.viewer{
  display: grid;
  place-items: center;

}
.three-container {

}
</style>