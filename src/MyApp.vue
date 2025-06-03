<script setup lang="js">
import { ref } from 'vue'
import Controller from './components/Controller.vue';
import Viewer from './components/Viewer.vue';

const xPos = ref(0);
const yPos = ref(0);
const zPos = ref(0);

function onResponse(arg) {
    switch (arg) {
        case "up":
            yPos.value -= 0.1;
            break;
        case "down":
            yPos.value += 0.1;
            break;
        case "left":
            xPos.value -= 0.1;
            break;
        case "right":
            xPos.value += 0.1;
            break;
        case "reset":
            xPos.value = 0;
            yPos.value = 0;
            break;
    }
}

</script>

<template>
    <header>
        <div class="welcome">
            <h1>welcome to my three.js app</h1>
            <p>i want to control the rotation of an object...</p>
            <p>so i'm going to do that</p>
            <br>
            <Controller @response="(dir) => onResponse(dir)" />
        </div>
        <Viewer :xPos :yPos :zPos/>
    </header>

</template>

<style lang="css" scoped>
header {
    /* margin: auto;
    line-height: 1.5;
    max-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    padding-left: calc(var(--section-gap) / 2); */

    display: grid;
    grid-template-columns: 1fr 1fr;
    /* border: 2px solid rgb(191, 222, 191); */
    margin: auto;
}


.welcome {
    /* display: grid;
    margin: 50px; */
    display: grid;
    padding: 5em;
    min-width: 35em;
    justify-items: center;


}
</style>