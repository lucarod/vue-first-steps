<template>
  <section>
    <h2>Lifecycle Hooks Basics</h2>
    <section>
      <p>Each Vue Component has initialization steps when it's created, as described in the diagram below</p>
      <img src="@/app/assets/images/lifecycle-diagram.png" alt="Lifecycle Hooks Diagram">
      <p>The most commonly used hooks are "onMounted", "onUpdated" and "onUnmounted"</p>
      <p>Lifecycle hooks should be always invoked synchronously</p>
    </section>
  </section>
</template>

<style scoped>
  img {
    width: 768px;

    @media (width < 768px) {
      width: 100%;
    }
  }
</style>