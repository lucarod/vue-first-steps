<script setup>
import { ref } from 'vue';
import FunCustomComponent from './components/FunCustomComponent.vue';

const funCustomComponentRef = ref(null);
</script>

<template>
  <section>
    <h2>Template Refs</h2>
    <section>
      <p>Refs can be used as an element attribute to access that element DOM data</p>
      <p>To access the ref value, we must create a variable on the script with the same name as the ref value on the element</p>
      <p>The ref will be null on the first render, only being available after the component is mounted</p>
    </section>
    <section>
      <h3>Refs inside v-for</h3>
      <p>When defining a ref inside a v-for, the corresponding ref should be an array value</p>
    </section>
    <section>
      <h3>Function Refs</h3>
      <p>A ref can be v-binded (:ref) to a function which will be called on each component update to give flexibility to the way the ref is stored, with the element as the first argument</p>
    </section>
    <section>
      <h3>Ref on a component</h3>
      <p>A ref can be passed to a component, in which the reference will be of the component instance</p>
      <p>When using Options API, the instance will be identical to the component's "this", which means that the parent component will have access to all the properties and methods of the child component</p>
      <p>When using Composition API with "script setup", the child component props are private by default, and must choose which to expose with "defineExpose"</p>
    </section>
    <section>
      <h3>Example</h3>
      <p>Below is the same component as used before</p>
      <FunCustomComponent ref="funCustomComponentRef" />
      <p>Here are the component inner props:</p>
      <p v-if="funCustomComponentRef">{{ funCustomComponentRef }}</p>
    </section>
  </section>
</template>