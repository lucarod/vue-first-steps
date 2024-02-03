<script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

// watch works directly on a ref
watch(question, async (newQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      loading.value = false
    }
  }
})
</script>

<template>
  <section>
    <h2>Watchers</h2>
    <section>
      <h3>Basics</h3>
      <p>When we need to perform side-effects based on state changes, we can use the watch function to trigger a callback whenever a reactive state changes</p>
      <p>Example: Ask a yes/no question: <input v-model="question" :disabled="loading" /></p>
      <p>API Answer: {{ answer }}</p>
      <p>The first argument is the source of data at which the watch function will look for updates</p>
      <p>The source can be a ref, a reactive object, a getter function or an array of sources</p>
      <p>If the source is a reactive object, it will create a deep watcher, triggering on all property mutations</p>
      <p>To prevent that, a getter function should be used that selects a single property from the object</p>
      <p>A watcher can be called immediatly when the component mounts with the "immediate" option</p>
      <p>To perform the watcher without specifying source, but by looking at the data being used inside callback function, you can use the "watchEffect()" function instead of "watch()"</p>
      <p>"watch()" and "watchEffect()" both return a "unwatch" method which can be called whenever you want to stop the watch excecution</p>
    </section>
  </section>
</template>