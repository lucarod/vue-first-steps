<script setup>
  import TemplateSyntax from './topics/TemplateSyntax.vue';
  import ReactivityFundamentals from './topics/ReactivityFundamentals.vue';
  import ComputedProperties from './topics/ComputedProperties.vue';
  import ClassAndStyleBindings from './topics/ClassAndStyleBindings.vue';
  import ConditionalRendering from './topics/ConditionalRendering.vue';
  import ListRendering from './topics/ListRendering.vue';
  import EventHandling from './topics/EventHandling.vue';
  import FormInputBindings from './topics/FormInputBindings.vue';
  import LifecycleHooksBasics from './topics/LifecycleHooksBasics.vue';
  import WatchersTopic from './topics/WatchersTopic.vue';
  import TemplateRefs from './topics/TemplateRefs.vue';
import ComponentBasics from './topics/ComponentBasics.vue';
</script>

<template>
  <section>
    <h1>Essentials</h1>
    <TemplateSyntax />
    <ReactivityFundamentals />
    <ComputedProperties />
    <ClassAndStyleBindings />
    <ConditionalRendering />
    <ListRendering />
    <EventHandling />
    <FormInputBindings />
    <LifecycleHooksBasics />
    <WatchersTopic />
    <TemplateRefs />
    <ComponentBasics />
  </section>
</template>