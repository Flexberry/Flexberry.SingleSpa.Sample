'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    //single-spa:
    autoRun: false, // Set autoRun to false, because we only want the ember app to render to the DOM when single-spa tells it to.
    storeConfigInMeta: false, // We're making a single-spa application, which doesn't exclusively own the HTML file. So we don't want to have to have a `<meta>` tag for the ember environment to be initialized.
    fingerprint: {
      customHash: null, // have the same file name every time you do an ember build
    },

    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  //single-spa
  app.import('node_modules/single-spa-ember/lib/single-spa-ember.js', {
    using: [
      { transformation: 'cjs', as: 'single-spa-ember' }
    ]
  });
  app.import('node_modules/single-spa-css/lib/umd/single-spa-css.min.js', {
    using: [
      { transformation: 'amd', as: 'single-spa-css' }
    ]
  });

  return app.toTree();
};
