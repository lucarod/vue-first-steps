<script setup>
import { reactive, ref } from 'vue';

const count = ref(0);
count.value++;
const state = reactive({
  count
});
state.count = 0;
const object = { id: ref(1) }
const { id } = object;

</script>

<template>
  <h2>Reactivity Fundamentals</h2>
  <section>
    <h3>Declaring Reactive State</h3>
    <p>This is a ref: {{ count }}</p>
    <p>You can increment ref on this button:</p>
    <button @click="count++">Increment ref, unwrapped</button>
    <p>Vue by default detects mutations on deep, complex javascript variables, like nested objects, arrays, or built-ins like Map</p>
    <p>shallowRefs can be used for optimization and performance</p>
    <p>DOM updates asynchronously for auto batching, but dev can wait for variable update with nextTick() global API</p>
  </section>
  <section>
    <h3>reactive()</h3>
    <p>reactive() can be used as an alt for ref(), where you provide an object to be tracked by reactivity, through a JavaScript Proxy of the original object</p>
    <p>reactive() is limited to non-primitive variables, cannot be fully replaced and is not destructure-friendly, as you lose reactivity tracking doing so.</p>
  </section>
  <section>
    <h3>Additional Ref Unwrapping Details</h3>
    <p>Testing ref as a property of a reactive() object: {{ count }}</p>
    <p>Testing object manipulation without destructuring: {{ object.id + 1 }}</p>
    <p>Testing object destructuring: {{ id + 1 }}</p>
  </section>
</template>

<style scoped>
button {
  background: var(--vt-c-white-mute);
  color: var(--vt-c-text-light-1);
  padding: 4px 8px;
  border-radius: 4px;
}
</style>