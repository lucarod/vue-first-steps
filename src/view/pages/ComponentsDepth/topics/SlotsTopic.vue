<script setup>
import FunnyScopedSlotsComponent from './components/FunnyScopedSlotsComponent.vue';
import FunnySlotsComponent from './components/FunnySlotsComponent.vue';
</script>

<template>
  <section>
    <h2>Slots</h2>
    <p>As previosly seen, we can use the "slot" tag to add any content type to a component body</p>
    <section>
      <h3>Fallback Content</h3>
      <p>To make sure that the component always has content regradless of its declaration, we can pass content to the body of the "slot" tag</p>
      <p>This default content will be overrided if when declaring the component, it receives a custom content value</p>
    </section>
    <section>
      <h3>Named Slots</h3>
      <p>"slot" tags can receive a "name" prop, so that when we use the component, we can inject content in multiple parts of the child component</p>
      <p>To do this, in the parent component, when rendering the component with multiple slots, we pass a "template" tag for each, with "v-slot:slot-name / #slot-name" as an attribute</p>
      <p>If the child component also has a default, non-named slot, all content that is not encapsulated by a "template" tag will be put inside the default slot</p>
      <p>This default slot can also be tagged as "template #default"</p>
      <p>Dynamic directive arguments also work with v-slot</p>
    </section>
    <section>
      <h3>Basic Usage</h3>
      <p>The component below has slots but they are default</p>
      <FunnySlotsComponent />
      <p>The component below receives slots from parent</p>
      <FunnySlotsComponent>
        <template #header>
          This is injected header content
        </template>
        This is injected default slot content
        <template #footer>
          This is injected footer content
        </template>
      </FunnySlotsComponent>
    </section>
    <section>
      <h3>Scoped Slots</h3>
      <p>By default, slots are bound to parent component props, but there are cases where we can make use of child component's state</p>
      <p>To do this, we pass attributes to the slot outlet</p>
      <p>To receive this attributes on parent component, we look at v-slot equality ('v-slot="slotProps"'), which can also be destructured</p>
      <p>This also works for named slots ("#header={ value1, value2 }")</p>
      <p>In this case, "name" is a reserved word and won't be included in the slot props</p>
    </section>
    <section>
      <h3>Scoped Slot Usage</h3>
      <FunnyScopedSlotsComponent>
        <template #header="{ message }">
          {{ message }}
        </template>
        <template #default="{ message, count }">
          {{ message }} {{ count }}
        </template>
      </FunnyScopedSlotsComponent>
    </section>
    <section>
      <h3>Renderless Components</h3>
      <p>This capability lead to the usage of Renderless Components, which only encapsulate logic and return them via slots to parent component</p>
      <p>This pattern was interesting, but can be done in a better way with Composition API</p>
    </section>
  </section>
</template>