<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

import HomePage from '@/view/pages/HomePage.vue';
import NotFoundPage from '@/view/pages/NotFoundPage.vue';
import EssentialsPage from '@/view/pages/Essentials/EssentialsPage.vue';
import ComponentsDepthPage from '@/view/pages/ComponentsDepth/ComponentsDepthPage.vue'
import ReusabilityPage from '@/view/pages/Reusability/ReusabilityPage.vue';

const routes = {
  '/': HomePage, 
  '/essentials': EssentialsPage,
  '/components-depth': ComponentsDepthPage,
  '/reusability': ReusabilityPage
};

const currentPath = ref(window.location.hash);

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/' || NotFoundPage]
})

function handleChangeRoute() {
  currentPath.value = window.location.hash;
}

onMounted(() => {
  window.addEventListener('hashchange', handleChangeRoute)
});

onUnmounted(() => {
  window.removeEventListener('hashchange', handleChangeRoute)
});

</script>

<template>
  <div className="app-container">
    <header>
      <h1><span>Vue</span> First Steps</h1>
      <p>Testing how vue works based on its official docs guide</p>
      <nav>
        <a href="#/">Home</a>
        <a href="#/essentials">Essentials</a>
        <a href="#/components-depth">Components In Depth</a>
        <a href="#/reusability">Reusability</a>
      </nav>
    </header>
    <main>
      <component :is="currentView" />
    </main>
    <footer>
      <span>
        Made with 💗 by Luca Rodrigues
      </span>
    </footer>
  </div>
</template>

<style scoped>
  .app-container {
    padding: 16px;
    margin-bottom: 64px;

    h1 {
      margin-top: 0;
      font-size: 32px;

      & > span {
        color: #42b883;
      }
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;

    & > a {
      color: var(--vt-c-white-soft);
    }
  }

  footer {
    width: 100%;
    position: fixed;
    bottom: 16px;
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
</style>
