<script setup>
import { ref } from 'vue';

  const canRender = ref(true);
</script>

<template>
  <section>
    <h2>Conditional Rendering</h2>
    <section>
      <p>"canRender": {{ canRender }}</p>
      <p v-if="canRender">Element is rendered if canRender is true</p>
      <p v-else>Element is rendered on else condition (canRender is false)</p>
      <button @click="canRender = !canRender">Toggle canRender</button>
      <p>v-if can also be used on templates to control whole components</p>
      <p v-show="canRender">This element is always rendered, but its display css property changes based on canRender because of v-show</p>
      <p>v-if should not be used in the same element as v-for, because implicit precedence will always prioritize v-if to be evaluated first</p>
    </section>
  </section>
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