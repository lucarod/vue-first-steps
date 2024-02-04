<template>
  <section>
    <h2>Plugins</h2>
    <p>Plugins are self-contained code that add app-level functionality to Vue</p>
    <p>To use a plugin, define a "app.use" function, passing plugin name as first argument and an object with optional options as second argument</p>
    <p>A plugin should be defined in its own file, as an object that exposes an "install" method or simply a function that acts as the install itself</p>
    <p>"install" will receive the app instance along with additional options passed to "app.use"</p>
    <section>
      <h3>Common scenarios</h3>
      <p>Some common scenarios of usage of a plugin include:</p>
      <ul>
        <li>Registering global components or directives</li>
        <li>Providing a resource with "app.provide"</li>
        <li>Adding global instance properties or methods and attaching them to "app.config.globalProperties"</li>
        <li>Performing a combination of the above</li>
      </ul>
    </section>
    <section>
      <h3>Plugin usage example:</h3>
      <p>The code below uses a custom $translate function that translates from English to Brazilian Portuguese</p>
      <p>Original: Hello!</p>
      <p>Translated: {{ $translate('greetings.hello') }}</p>
    </section>
  </section>
</template>