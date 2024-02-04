<script setup>
  const message = 'First Vue Message';
  const rawHtml = '<span style="color: red">This should be red.</span>';
  const dynamicId = 'dynamic-id';
  const id = 'same-name-id';
  const objectOfAttributes = {
    id: 'objectId',
    class: 'objectClass'
  }
  const number = 1;
  const ok = false;
  const eventName = 'click';

  function trim(string) {
    return string.split(' ').join('');
  }

  function say(message) {
    alert(message);
  }
</script>

<template>
  <section>
    <h2>Template Syntax</h2>
    <section>
      <h3>Text Interpolation</h3>
      <p>This is a message injected by javascript: {{ message }}</p>          
    </section>
    <section>
      <h3>Raw HTML</h3>
      <p>Comparing interpolation with v-html:</p>
      <p>Interpolation: {{ rawHtml }}</p>
      <p>Using v-html: <span v-html="rawHtml"></span></p>
    </section>
    <section>
      <h3>Attribute Bindings</h3>
      <p :id="dynamicId">Binding dynamic id to this paragraph</p>
      <p :id="null">Dynamic id is null on this paragraph</p>
      <!-- Shows error because same name shorthand is not supported by langage tools -->
      <p :id>Same name dynamic id</p>
      <p v-bind="objectOfAttributes">Binding object of attributes</p>
    </section>
    <section>
      <h3>Using JavaScript Expressions</h3>
      <p>Number plus 1: {{ number + 1 }}</p>
      <p>Ok: {{ ok ? 'YES' : 'NO' }}</p>
      <p>Reversed Message: {{ message.split('').reverse().join('') }}</p>
      <p :id="`list-${id}`">Template Literal Id</p>
      <p>Vue supports expressions only, so variable definitions and if statements won't work</p>
      <p>Calling functions (trim function): {{ trim('Trim this string') }}</p>
      <p>Vue has a restricted list of globals that can be changed by adding to app.config.globalProperties</p>
    </section>
    <section>
      <h3>Directives</h3>
      <p v-if="true">Example with v-if to render element: true</p>
      <p v-if="false">Example with v-if to render element: false</p>
      <p>
        <a @click="say('Using v-on')">Example of v-on / @ directive</a>
      </p>
      <p>
        <a @[eventName]="say('called click')">Example of dynamic arguments with on click></a>
      </p>
      <form @submit.prevent="say('submit')">
        <button>Vue supports modifiers, for example, preventing submit default from this form click</button>
      </form>
    </section>
  </section>
</template>