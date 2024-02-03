<script setup>
import { reactive, ref } from 'vue';
import FunnyInput from './components/FunnyInput.vue'
import FunnyCapitalizeInput from './components/FunnyCapitalizeInput.vue'

const name = reactive({
  first: '',
  last: ''
});
const capitalizedText = ref('');
</script>

<template>
  <section>
    <h2>Two Way Data Binding with v-model</h2>
    <section>
      <h3>Prior to 3.4</h3>
      <p>In previous versions of Vue, to define a two way data binding with v-model, child component needed to use "defineProps" for 'modelValue' and "defineEmit" for 'update:modelValue'</p>
    </section>
    <section>
      <h3>Post 3.4</h3>
      <p>Now, you can use "defineModel", then call v-model on parent component. As with props, you can pass options to the arguments of "defineModel"</p>
      <p>You can also specify a model argument by passing a string as first argument of "defineModel", which also supports an options object after that.</p>
      <p>This ables passing multiple models to child component, so that you can control multiple elements inside it easily</p>
    </section>
    <section>
      <h3>Use example</h3>
      <p>The input below is inside a custom component, but its value ref is declared in parent</p>
      <p>First Name: {{ name.first }}</p>
      <p>Last Name: {{ name.last }}</p>
      <FunnyInput 
        v-model:first-name="name.first" 
        v-model:last-name="name.last"
      />
    </section>
    <section>
      <h3>Modifiers</h3>
      <p>v-model also supports modifiers .trim .number .lazy, but you can create custom modifiers</p>
      <p>To do this, pass a .something to v-model, and in child component get the value in the second position of the model array ([model, modifiers] = defineModel())</p>
      <p>Then, in the get and set options of defineModel this modifiers can be applied</p>
      <p>Capitalized value on parent: {{ capitalizedText }}</p>
      <FunnyCapitalizeInput v-model.capitalize="capitalizedText" />
    </section>
  </section>
</template>