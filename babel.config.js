// babel.config.js
module.exports = function (api) {
    api.cache(true);
  
    const plugins = [];
    if (process.env.INSTRUMENT_COVERAGE === 'true') {
      console.log('Instrumenting Next client for code coverage...');
      plugins.push('babel-plugin-istanbul');
    }
  
    return {
      presets: ['next/babel'],
      plugins
    };
  };