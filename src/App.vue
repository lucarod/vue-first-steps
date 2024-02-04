<script setup>
import EssentialsSection from './components/EssentialsSection/EssentialsSection.vue';
import ComponentsDepthSection from './components/ComponentsDepthSection/ComponentsDepthSection.vue'
import ReusabilitySection from './components/ReusabilitySection/ReusabilitySection.vue';
</script>

<template>
  <div className="app-container">
    <header>
      <h1>Vue First Steps</h1>
      <p>Testing how vue works based on its official docs guide</p>
    </header>
    <main>
      <EssentialsSection />
      <ComponentsDepthSection />
      <ReusabilitySection />
    </main>
  </div>
</template>

<style scoped>
  .app-container {
    padding: 16px;
    margin-bottom: 64px;

    h1 {
      margin-top: 0;
      font-size: 32px;
    }
  }
</style>
