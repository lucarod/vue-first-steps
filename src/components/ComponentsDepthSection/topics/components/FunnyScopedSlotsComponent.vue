<script setup>
  const count = 4;
</script>

<template>
  <header>
    <slot name="header" message="This message is being passed as prop from child component"></slot>
  </header>
  <slot message="This is sending a value of: " :count="count"></slot>
</template>