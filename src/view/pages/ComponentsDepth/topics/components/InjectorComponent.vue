<script setup>
import { inject } from 'vue';

  const { providedValue, handleIncrementValue } = inject('provided-value');
</script>

<template>
  <p>This child component gets the provided value as: {{ providedValue }}</p>
  <button @click="handleIncrementValue">Click to increment provided value from child component</button>
</template>

<style scoped>
button {
  background: var(--vt-c-white-mute);
  color: var(--vt-c-text-light-1);
  padding: 4px 8px;
  border-radius: 4px;
  margin-top: 8px;
}
</style>