<script setup>
import ProviderComponent from './components/ProviderComponent.vue';
</script>

<template>
  <section>
    <h2>Provide / Inject</h2>
    <p>In order to prevent prop drilling, we can use the "provide()" and "inject()" functions inside our components</p>
    <section>
      <h3>Provide</h3>
      <p>The "provide()" function receives a key as its first argument, and the value as its second argument</p>
      <p>The value can be anything from a static primitive or object to a reactive value</p>
      <p>If a reactive value is provided, the consumer will form a reactive connection to the provider</p>
      <p>Providers can also be app-level, by the use of app.provide(same arguments)</p>
      <p>This is specially helpful for plugins</p>
    </section>
    <section>
      <h3>Inject</h3>
      <p>The provided value can be consumed by calling the "inject()" function, which receives the key as its first argument and returns the value associated to that key</p>
      <p>A default value can be provided as the second argument in case the key is not found in the parent chain.</p>
      <p>In case we need to call a function or instantiate a new class as default value, we can treat it as a factory function by passing a boolean third value to the "inject()" function</p>
      <p>This helps avoid unnecessary computation or side effects in case the default value is not needed</p>
    </section>
    <section>
      <h3>Working with Reactivity</h3>
      <p>It is recommended to keep mutations to the provided values inside the provider component</p>
      <p>In case the consumer component needs to mutate a value from the provider, we should provide a function which will be responsible for mutating the value inside the provider component</p>
      <p>To ensure that the consumer won't mutate the provided value, we can wrap it with a "readonly()" function</p>
    </section>
    <section>
      <h3>Working with Symbol Keys</h3>
      <p>If working with a large application with many providers, it is recommended to use Symbols as keys to avoid collisions</p>
      <p>Symbol keys should be defined and exported from a dedicated "keys" file</p>
    </section>
    <section>
      <h3>Usage Example</h3>
      <ProviderComponent />
    </section>
  </section>
</template>