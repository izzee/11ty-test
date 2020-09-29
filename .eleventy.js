module.exports = function(config) {
  config.addPassthroughCopy("images");
  return {
    passthroughFileCopy: true
  }
}