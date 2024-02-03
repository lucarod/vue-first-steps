<script setup>
import { reactive, ref } from 'vue';

  const items = ref([{ message: 'Foo' }, { message: 'Bar' }]);
  const parentMessage = ref('Parent')
  const items2 = ref([{ message: 'Foo' }, { message: 'Bar' }])

  const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
});
</script>

<template>
  <section>
    <h2>List Rendering</h2>
    <section>
      <h3>v-for</h3>
      <p>With v-for we're able to render lists with a loop</p>
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
      <p>v-for supports index as second param and supports destructuring of item</p>
      <p>it also supports "of" instead of "in" for iterating, giving the same result</p>
      <li v-for="({ message }, index) of items2" :key="message">
        {{ parentMessage }} - {{ index }} - {{ message }}
      </li>
      <p>v-for can also be used for template</p>
      <p>A v-for in the same element as a v-if can cause problems, because v-if will always have higher priority and will not be able to access v-for inner scope</p>
      <p>A v-for should whenever possible be provided a key attribute, which should be unique</p>
    </section>
    <section>
      <h3>v-for with Object</h3>
      <p>You can use v-for with objects, as an equivalent of "Object.values()"</p>
      <p>You can also receive key as second param, and index as third param</p>
      <ul>
        <li v-for="(value, key, index) in myObject" :key="key">
          {{`${index}. ${key}: ${value}`}}
        </li>
      </ul>
    </section>
    <section>
      <h3>v-for with Range</h3>
      <p>v-for can be used in a range of "1....n"</p>
      <li v-for="n in 5" :key="n">{{ n }}</li>
    </section>
    <section>
      <h3>v-for with Components</h3>
      <p>v-for can be used directly on any Component, but won't pass data unless using props</p>
    </section>
  </section>
</template>

<style scoped>

</style>