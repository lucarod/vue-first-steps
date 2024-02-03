<template>
  <p class="text-info">I have blue text by default</p>
  <p :class="['text-info', $attrs.class]">I have too, but parent component is changing it</p>
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