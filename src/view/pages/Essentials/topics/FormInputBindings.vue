<script setup>
  import { ref } from 'vue';

  const message = ref('');
  const lazyMessage = ref('');
  const rawMessage = ref('');
  const rawLazyMessage = ref('');
</script>

<template>
  <section>
    <h2>Form Input Bindings</h2>
    <section>
      <p>Instead of using ":value" and "v-on:input/@input", which can be cumbersome, we can use the v-model directive</p>
      <ul>
        <li>input and textarea use "value" property and "input" event</li>
        <li>checkbox and radio use "checked" property and "change" event</li>
        <li>select uses "value" property and "change" event</li>
      </ul>
    </section>
    <section>
      <h3>Basic Usage</h3>
      <section>
        <h4>Using v-model directly:</h4>
        <p>Message is: {{ message }}</p>
        <input v-model="message" placeholder="Edit me" />
      </section>
      <section>
        <h4>Using v-model with .lazy:</h4>
        <p>Message is: {{ lazyMessage }}</p>
        <input v-model.lazy="lazyMessage" placeholder="Edit me" />
      </section>
      <section>
        <h4>Using :value and @input:</h4>
        <p>Message is: {{ rawMessage }}</p>
        <input 
          :value="rawMessage"
          @input="event => rawMessage = event.target.value"
          placeholder="Edit me"
        />
      </section>
      <section>
        <h4>Using :value and @change:</h4>
        <p>Message is: {{ rawLazyMessage }}</p>
        <input 
          :value="rawLazyMessage"
          @input="event => rawLazyMessage = event.target.value"
          placeholder="Edit me"
        />
      </section>
    </section>
    <section>
      <h3>Value Bindings</h3>
      <p>v-bind can be used together with v-model to provide custom input values</p>
      <p>true-value and false-value can also be used together with boolean inputs to set custom values</p>
    </section>
    <section>
      <h3>Modifiers</h3>
      Vue provides modifiers to validate and transform data
      <ul>
        <li>.lazy: Makes sync occur after change event instead of input event</li>
        <li>.number: typecasts user input to number with parseFloat(). Applied automatically with input type=number</li>
        <li>.trim: Trims whitespace from user input</li>
      </ul>
    </section>
  </section>
</template>