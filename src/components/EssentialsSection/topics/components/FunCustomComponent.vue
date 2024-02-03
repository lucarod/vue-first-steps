<script setup>
  const props = defineProps(['customProp']);

  const a = 2;
  const b = 'this is a string';

  const secondParagraphText = 
    props.customProp 
    || 'I have too, but parent component is changing it'

  defineExpose({
    a,
    b
  });
</script>

<template>
  <p class="text-info">I have blue text by default</p>
  <p :class="['text-info', $attrs.class]">{{ secondParagraphText }}</p>
</template>

<style scoped>
  p {
    &.text-info {
      color: blue;
    }

    &.text-orange {
      color: orange;
    }
  }
</style>