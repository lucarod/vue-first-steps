
<script setup>
import { ref } from 'vue';
import AnotherFunComponent from './components/AnotherFunComponent.vue';
import FunCustomComponent from './components/FunCustomComponent.vue';
import FunnySlotComponent from './components/FunnySlotComponent.vue'

const random = ref(Math.random());

const components = {
  first: FunCustomComponent,
  second: AnotherFunComponent,
  third: FunnySlotComponent,
}
</script>
<template>
  <section>
    <h2>Component Basics</h2>
    <section>
      <h3>Defining a component</h3>
      <p>When not using a build step, vue components can be defined as a plain JavaScript object containing vue specific options</p>
      <p>These components are exported as default in js files, but there can be multiple components in a single js file, using named exports</p>
      <p>When using Single-file Components (.vue), the component is also exported as default for the file</p>
    </section>
    <section>
      <h3>Using a Component</h3>
      <p>Components can be imported by other files, or made global with registration</p>
      <p>The recommended way to name components is in PascalCase, as vue files are case sensitive for tag names</p>
      <p>When using in-DOM templates, kebab-case should be used, but SFCs are automatically converted if needed, so there's no change to be done</p>
    </section>
    <section>
      <h3>Passing Props</h3>
      <p>Component props can be registered by declaring them on the "script setup" with "defineProps"</p>
      <p>"defineProps" receives an array of prop names, and returns an object with these props, so they can be accessed in JavaScript if needed</p>
      <p>Once registered, props can be passed as a custom attribute</p>
      <p>Props can also be passed with v-bind/:propName expression</p>
      <FunCustomComponent customProp="Parent component is changing my text via props" />
    </section>
    <section>
      <h3>Listening to Events</h3>
      <p>Parent component can listen to child component events with "v-on/@" directive</p>
      <p>The child component emits the event with the built-in "$emit", passing the name of the event</p>
      <p>Emitted events can also be declared with "defineEmits()", which returns an "emit()" function, which can be used on the same component as its declared</p>
      <p>
        This is a parent paragraph with a inner button. My random value is: {{ random }}
        <AnotherFunComponent @custom-emit="random = Math.random()" />
      </p>
    </section>
    <section>
      <h3>Slots</h3>
      <p>Content can be passed as a Component children by using vue's slot element</p>
      <FunnySlotComponent>
        <p>This content is being passed by parent component as a slot</p>
      </FunnySlotComponent>
    </section>
    <section>
      <h3>Dynamic components</h3>
      <p>Components can be dynamically switched using the "component" tag and the "v-bind/:is attribute"</p>
      <p>The ":is" value can be either the name string of a registered component or the imported component object</p>
      <p>It can also be a regular html element</p>
      <p>Components that are switched out will be unmounted, unless using the custom "KeepAlive" component</p>
      <p>Example below by selecting one of the custom components with an object: </p>
      <component :is="components.second">This is a h4 by the ":is" directive</component>
    </section>
  </section>
</template>