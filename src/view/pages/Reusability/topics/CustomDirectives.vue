<script setup>
const vColor = (el, binding) => {
  el.style.color = binding.value;
}
</script>

<template>
  <section>
    <h2>Custom Directives</h2>
    <p>Vue allows for creating custom directives as objects that contain lifecycle hooks similar to those of a component.</p>
    <p>They receive the element the directive is bound to</p>
    <p>In "script setup", any camelCase variable that starts with "v" prefix can be used as a custom directive, converted to kebab-case on the template</p>
    <p>Custom directives can also be registered at app level with "app.directive"</p>
    <p>Custom directives should only be used when the desired functionality requires direct DOM manipulation</p>
    <p>This way, declarative templating using built-in directives such as v-bind is preferred as they are more efficient and server rendering friendly</p>
    <section>
      <h3>Directive Hooks</h3>
      <p>A custom directive object can provide hook functions (all optional) for all of a vue component's lifecycle</p>
      <p>Those hooks can also receive arguments:</p>
      <ul>
        <li>el: the element the directive is bound to</li>
        <li>binding: an object containing a series of properties, as seen in the vue documentation</li>
        <li>vnode: the VNode representing the bound element</li>
        <li>prevNode: the VNode representing the bound element on the previous render (Only beforeUpdate and updated hooks)</li>
      </ul>
      <p>Every argument besides "el" should be read-only</p>
    </section>
    <section>
      <h3>Function Shorthand</h3>
      <p>When the custom directive has the same behavior for "mounted" and "updated", a function shorthand can be passed on</p>
    </section>
    <section>
      <h3>Object Literals</h3>
      <p>An object literal can be passed on as a custom directive value if you need multiple values for that directive</p>
      <p>Also it's important to remember that custom directives can receive any javascript expression</p>
    </section>
    <section>
      <h3>Usage on components</h3>
      <p>In general it is not recommended to use custom directives on components</p>
      <p>In case they are used, they will behave like "Fallthrough Attributes"</p>
    </section>
    <section>
      <h3>Usage Example</h3>
      <p v-color="'red'">This receives a custom directive "v-color" that is changing its color to red</p>
    </section>
  </section>
</template>