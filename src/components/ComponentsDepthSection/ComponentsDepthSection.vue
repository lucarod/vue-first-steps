<script setup>
import TwoWayDataBinding from './topics/TwoWayDataBinding.vue';
import FallthroughAttributes from './topics/FallthroughAttributes.vue';
import SlotsTopic from './topics/SlotsTopic.vue';
import ProvideInject from './topics/ProvideInject.vue';
import AsyncComponents from './topics/AsyncComponents.vue';
</script>

<template>
  <section>
    <h1>Components In Depth</h1>
    <TwoWayDataBinding />
    <FallthroughAttributes />
    <SlotsTopic />
    <ProvideInject />
    <AsyncComponents />
  </section>
</template>