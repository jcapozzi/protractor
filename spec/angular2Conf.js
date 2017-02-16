var env = require('./environment');

// This is the configuration for a smoke test for an Angular TypeScript application.
exports.config = {
  seleniumAddress: env.seleniumAddress,

  framework: 'jasmine',

  specs: [
    'ng2/async_spec.js'
  ],

  capabilities: env.capabilities,

  baseUrl: env.baseUrl,
  allScriptsTimeout: 10000,
  getPageTimeout: 20000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 10000
  }
};
