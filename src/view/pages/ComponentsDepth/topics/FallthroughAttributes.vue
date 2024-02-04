<script setup>
import FunnyFallthroughComponent from './components/FunnyFallthroughComponent.vue';
</script>

<template>
  <section>
    <h2>Fallthrough Attributes</h2>
    <section>
      <h3>Attribute inheritance</h3>
      <p>Some attributes and event listeners like "class", "style", "id" and "v-on" will be implicitly passed to component with no need to be declared as props.</p>
      <p>When the component has a single root element, this element will receive the attributes passed down</p>
      <p>Any attributes that matches the same name will be merged with the incoming values</p>
      <p>If the component has another component as its root, the inheritance will keep going down on the component tree</p>
      <p>However, if the component has declared those attributes as props or event listeners, fallthrough will not happen</p>
    </section>
    <section>
      <h3>Example usage:</h3>
      <FunnyFallthroughComponent class="text-pink" />
    </section>
  </section>
  <section>
    <h3>Disabling Inheritance</h3>
    <p>Inheritance on the component can be disabled by setting "inheritAttrs: false" on the component options, with "defineOptions()"</p>
    <p>This way attributes can also be fully controlled by using the $attrs variable</p>
    <p>This attributes preserve their casing in JavaScript, with no conversion from kebab-case to camelCase or vice-versa</p>
    <p>Event listeners will be exposed as a function (@click will turn to $attrs.onClick)</p>
  </section>
  <section>
    <h3>Extra usage</h3>
    <p>When a component has multiple root nodes, $attrs needs to be explicitly assigned to one of them.</p>
    <p>If component attributes are needed in script, "useAttrs()" hook can be used to get access to them</p>
    <p>Attributes are not reactive, so "watch" functions won't work, so a prop is a better usage. Alternatively, "onUpdated()" can be used to perform side-effects when attrs change</p>
</section>
</template>