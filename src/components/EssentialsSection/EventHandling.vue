<script setup>
import { ref } from 'vue';

  const keyName = ref('Select a key');

  function showKeyName(event) {
    keyName.value = event.key;
  }
</script>

<template>
  <section>
    <h2>Event Handling</h2>
    <section>
      <h3>Listening to Events</h3>
      <p>We can use the v-on directive (@ short syntax) to listen to DOM Events.</p>
      <p>These events handlers can be "inline handlers" or "method handlers"</p>
    </section>
    <section>
      <h3>Inline Handlers</h3>
      <p>Inline Handlers are simple, like calling "count++"" on a click, or invoking a method</p>
      <p>We can also pass the DOM event object in inline handlers using an arrow function with "event" as parameter or with the $event variable</p>
    </section>
    <section>
      <h3>Method Handlers</h3>
      <p>In Method Handlers, we pass a method as a reference to the v-on/@ directive</p>
      <p>Method Handlers automatically receive the native DOM Event object that triggers it</p>
    </section>
    <section>
      <h3>Event Modifiers</h3>
      <p>Vue provides event modifiers to v-on by postfixing with a dot</p>
      <ul>
        <li>.stop</li>
        <li>.prevent</li>
        <li>.self</li>
        <li>.capture</li>
        <li>.once</li>
        <li>.passive</li>
      </ul>
      <p>This modifiers can be chained, but the other at which they are used matters.</p>
    </section>
    <section>
      <h3>Modifiers</h3>
      <p>Key events can receive modifiers same as Event Basic Modifiers.</p>
      <p>Any valid key name exposed via "KeyboardEvent.key" can be used as long as its in kebab-case</p>
      <p>Vue also provides key aliases which can be viewed on vue website</p>
      <p>Vue also provides system modifier keys, mouse button modifiers and .exact modifier which can be viewed in Vue website</p>
    </section>
    <section>
      <h3>Event Handling Example</h3>
      <p>Select the button and press a key to change its text</p>
      <button @keyup="showKeyName">{{ keyName }}</button>
    </section>
  </section>
</template>

<style scoped>
button {
  background: var(--vt-c-white-mute);
  color: var(--vt-c-text-light-1);
  padding: 4px 8px;
  border-radius: 4px;
  margin-top: 8px;
}
</style>