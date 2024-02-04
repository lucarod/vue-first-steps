<script setup>
  defineEmits([
    'custom-emit'
  ])
</script>

<template>
  <button @click="$emit('custom-emit')">Click me to change parent random value</button>
</template>

<style scoped>
  button {
    display: block;
    background: var(--vt-c-white-mute);
    color: var(--vt-c-text-light-1);
    padding: 4px 8px;
    border-radius: 4px;
  }
</style>