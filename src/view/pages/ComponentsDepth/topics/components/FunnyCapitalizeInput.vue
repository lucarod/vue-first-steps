<script setup>
  const [model, modifiers] = defineModel({
    set(value) {
      if (modifiers.capitalize) {
        return value.charAt(0).toUpperCase() + value.slice(1);
      }

      return value;
    }
  })
</script>

<template>
  <input type="text" v-model="model" placeholder="Text to capitalize" />
</template>