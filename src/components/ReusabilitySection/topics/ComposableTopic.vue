<script setup>
import { useMouse } from './components/useMouse';

const { x, y } = useMouse();
</script>

<template>
  <h2>Composable</h2>
  <section>
    <h3>Basics</h3>
    <p>We can use Composables to encapsulate and reuse stateful logic</p>
    <p>By convention, composable functions start with "use"</p>
    <p>Composables expose managed state as return value (commonly an object)</p>
    <p>Composables can be nested inside one another to enhance separation of concerns</p>
    <p>In order to be able to accept any ref, getter or static value as an argument for a composable function, we can use the "useValue()" function</p>
    <p>In order to track reactive dependencies and create effects, watch the ref / getter with "watch()" function, or use "toValue()" with "watchEffect()"</p>
    <p>The common way to return a value from a composable function is to return a plain, non-reactive object containing multiple refs, allowing destructuring on the component using the composable</p>
    <p>If you want to use the returned value as object properties, you can wrap the invoked composable with a "reactive()" function</p>
  </section>
  <section>
    <h3>Side-effects</h3>
    <p>If working with SSR, DOM-specific side-effects should be performed in post-mount lifecycle hooks, generally "onMounted(), so that those hooks are only called in the browser"</p>
    <p>Side-effects should be cleaned-up in "onUnmounted()", for example, an "addEventListener" should have a "removeEventListener" counterpart</p>
  </section>
  <section>
    <h3>Usage Restrictions</h3>
    <p>Composables should be called directly in "script setup", and always synchronously. In some cases, can be called inside lifecycle hooks like "onMounted()"</p>
  </section>
  <section>
    <h3>Usage Example</h3>
    <p>This is a value of mouse tracking provided by a Composable:</p>
    <p>Mouse position X: {{ x }}</p>
    <p>Mouse position Y: {{ y }}</p>
  </section>
</template>