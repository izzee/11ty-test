const pluginSass = require("eleventy-plugin-sass");

const sassPluginOptions = {
  watch: 'assets/styles/base.scss'
}

module.exports = function(config) {
  config.addPlugin(pluginSass, sassPluginOptions);
  config.addPassthroughCopy("assets");
  return {
    passthroughFileCopy: true
  }
}