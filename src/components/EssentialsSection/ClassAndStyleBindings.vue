<script setup>
  import { computed, ref } from 'vue';
  import FunCustomComponent from './FunCustomComponent.vue';

  const isActive = ref(false);
  const error = ref(false);
  const errorClass = ref('text-warning');

  const classObject = computed(() => ({
    active: isActive.value && !error.value,
    'text-danger': error.value,
  }))
</script>

<template>
  <section>
    <h2>Class and Style Bindings</h2>
    <section>
      <h3>Binding HTML Classes</h3>
      <p :class="{active: isActive}">Classes can be dynamically toggled</p>
      <button @click="isActive = !isActive">Toggle .active</button>
      <p :class="classObject">A computed property can contain an classObject deriving from other states</p>
      <button @click="error = !error">Toggle .error</button>
      <p :class="[{ active: isActive }, errorClass]">An array of classes can also be provided</p>
      <p>Classes will be automatically passed to child of components:</p>
      <FunCustomComponent class="text-orange" />
    </section>
    <section>
      <h3>Binding Inline Styles</h3>
      <p>Vue does Auto-prefixing in :style</p>
    </section>
  </section>
</template>

<style scoped>
  p {
    &.active {
      background: green;
    }

    &.text-danger {
      color: red;
    }

    &.text-warning {
      color: yellow
    }
  }

  button {
    background: var(--vt-c-white-mute);
    color: var(--vt-c-text-light-1);
    padding: 4px 8px;
    border-radius: 4px;
  }
</style>