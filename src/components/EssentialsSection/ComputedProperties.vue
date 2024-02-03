<script setup>
import { computed, reactive, ref } from 'vue';
  const author = reactive({
    name: 'John Doe',
    books: [
      'Vue 2 - Advanced Guide',
      'Vue 3 - Basic Guide',
      'Vue 4 - The Mystery'
    ]
  })
  const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
  });

  const getFixedDate = computed(() => Date.now());
  function getNowDate() {
    return Date.now();
  }
  const count = ref(0);
</script>

<template>
  <section>
    <h2>Computed Properties</h2>
    <section>
      <h3>Basics</h3>
      <p>Example use of computed, which caches the value</p>
      <p>Has published books? {{ publishedBooksMessage }}</p>
    </section>
    <section>
      <h3>Computed Caching vs Methods</h3>
      <p>Example of difference between computed and invoking methods:</p>
      <p>Computed Date: {{ getFixedDate }}</p>
      <p>Updated Date: {{ getNowDate() }}</p>
      <button @click="count++">Update state: {{ count }}</button>
    </section>
    <section>
      <h3>Best Practices</h3>
      <p>Computed properties getters should be side-effect free</p>
      <p>Computed value should not be mutated directly. Instead, update source state from which the computed property derived.</p>
    </section>
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