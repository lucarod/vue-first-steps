<script setup>
  import EssentialsSection from './components/EssentialsSection/EssentialsSection.vue';
</script>

<template>
  <div className="app-container">
    <header>
      <h1>Vue First Steps</h1>
      <p>Testing how vue works based on its official docs guide</p>
    </header>
    <main>
      <EssentialsSection />
    </main>
  </div>
</template>

<style scoped>
  .app-container {
    padding: 16px;
    margin-bottom: 64px;
  }
</style>
