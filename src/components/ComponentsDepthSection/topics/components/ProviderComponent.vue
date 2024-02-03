<script setup>
import { provide, ref } from 'vue';
import InjectorComponent from './InjectorComponent.vue';

  const providedValue = ref(10);

  function handleIncrementValue() {
    providedValue.value++;
  }

  provide('provided-value', {
    providedValue,
    handleIncrementValue
  });
</script>

<template>
  <p>This provider component passes providedValue and handleIncrementValue to child below</p>
  <InjectorComponent />
</template>