export default function i18nPlugin(app, options) {
  app.config.globalProperties.$translate = (key) => {
    // retrieve a nested property in `options`
    // using `key` as the path
    return key.split('.').reduce((o, i) => {
      if (o) return o[i]
    }, options)
  }
}