<template>
  <section>
    <h2>Async Components</h2>
    <p>In large applications, it is common to divide the app bundle into smaller chunk and only load when needed</p>
    <p>Vue provides "defineAsyncComponent()" function for this purposes</p>
    <p>The function accepts a loader function as first argument, which must return a Promise</p>
    <p>Promise's "resolve" callback should be called when component is retrieved from server</p>
    <p>"reject" can be provided to indicate the load has failed</p>
    <p>ES Module dynamic import returns a Promise, so it can be used together with "defineAsyncComponent"</p>
    <p>The Async Component will only call the loader function when it's rendered on the page, passing along any props and slots to the inner component</p>
    <p>Async components can also be registered globally on "app.component()"</p>
    <p>"defineAsyncComponent" also supports advanced options with a object argument, some of those being:</p>
    <ul>
      <li>loader: loader function</li>
      <li>loadingComponent: Loader component while loading inner component</li>
      <li>delay: Delay before showing loading component</li>
      <li>errorComponent: Error Component</li>
      <li>timeout: Time limit before showing error component</li>
    </ul>
    <p>Async components can also be used alongside "Suspense" built-in component</p>
  </section>
</template>