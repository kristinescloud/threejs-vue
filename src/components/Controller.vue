<script setup lang="js">

const emit = defineEmits(['response']);

function onUp() {
    emit('response', 'up');
}

function onDown() {
    emit('response', 'down');
}

function onLeft() {
    emit('response', 'left');
}

function onRight() {
    emit('response', 'right');
}

function onReset() {
    emit('response', 'reset');
}

</script>

<template>
    <div class="button-wrapper">
        <div></div>
        <div>
            <button class="btn" @click="onUp"></button>
        </div>
        <div></div>
        <div>
            <button class="btn" @click="onLeft"></button>
        </div>
        <div>
            <button id="reset-btn" class="btn" @click="onReset"></button>
        </div>
        <div>
            <button class="btn" @click="onRight"></button>
        </div>
        <div></div>
        <div>
            <button class="btn" @click="onDown"></button>
        </div>
        <div></div>
    </div>
</template>

<style scoped>
.button-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
}
.btn {
    aspect-ratio: 1;
    border-radius: 50%;
    display: grid;
    place-items: center;
    padding: 2em;
    border: 0;
    margin: 0.25em;
}
#reset-btn {
    background-color: rgb(108, 108, 108);
}
</style>