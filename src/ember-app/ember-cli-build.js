'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');


const autoprefixer = require('autoprefixer');


module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    lessOptions: {
      paths: [
        'bower_components/semantic-ui',
        'node_modules/ember-flexberry-themes'
      ]
    },
    postcssOptions: {
      compile: {
        enabled: false,
        browsers: ['last 3 versions'],
      },
      filter: {
        enabled: true,
        plugins: [
          {
            module: autoprefixer,
            options: {
              browsers: ['last 2 versions']
            }
          }
        ]
      }
    },

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
  app.import('vendor/font-icon.css');
  app.import('vendor/fonts/icons.eot', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/icons.otf', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/icons.svg', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/icons.ttf', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/icons.woff', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/icons.woff2', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/crim.eot', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/crim.svg', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/crim.ttf', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/crim.woff', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/crim.woff2', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/outline-icons.eot', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/outline-icons.svg', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/outline-icons.ttf', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/outline-icons.woff', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/outline-icons.woff2', { destDir: 'assets/fonts' });
  app.import('vendor/serviceImages/close.png', { destDir: 'assets/themes/blue-sky/assets/images' });
  app.import('vendor/serviceImages/close-hover.png', { destDir: 'assets/themes/blue-sky/assets/images' });
  app.import('vendor/serviceImages/header-bgw.png', { destDir: 'assets/themes/orange/assets/images' });
  app.import('vendor/serviceImages/bgw-head-calendar.png', { destDir: 'assets/themes/orange/assets/images' });


  app.import('vendor/fonts.css');

  // GOSTUI2
  app.import('vendor/fonts/GOSTUI2/GOSTUI2-w170-regular_g_temp.eot', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/GOSTUI2/GOSTUI2-w170-regular_g_temp.ttf', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/GOSTUI2/GOSTUI2-w170-regular_g_temp.woff', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/GOSTUI2/GOSTUI2-w170-regular_g_temp.woff2', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/GOSTUI2/GOSTUI2-w450-medium_g_temp.eot', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/GOSTUI2/GOSTUI2-w450-medium_g_temp.ttf', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/GOSTUI2/GOSTUI2-w450-medium_g_temp.woff', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/GOSTUI2/GOSTUI2-w450-medium_g_temp.woff2', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/GOSTUI2/GOSTUI2-w706-bold_g_temp.eot', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/GOSTUI2/GOSTUI2-w706-bold_g_temp.ttf', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/GOSTUI2/GOSTUI2-w706-bold_g_temp.woff', { destDir: 'assets/fonts' });
  app.import('vendor/fonts/GOSTUI2/GOSTUI2-w706-bold_g_temp.woff2', { destDir: 'assets/fonts' });



  // guideline-icons
  app.import('vendor/guideline-icons.css');
  app.import('vendor/fonts/guideline-icons/guideline-icons.eot', { destDir: 'assets/fonts/guideline-icons' });
  app.import('vendor/fonts/guideline-icons/guideline-icons.ttf', { destDir: 'assets/fonts/guideline-icons' });
  app.import('vendor/fonts/guideline-icons/guideline-icons.woff', { destDir: 'assets/fonts/guideline-icons' });
  app.import('vendor/fonts/guideline-icons/guideline-icons.woff2', { destDir: 'assets/fonts/guideline-icons' });
  app.import('vendor/fonts/guideline-icons/guideline-icons.svg', { destDir: 'assets/fonts/guideline-icons' });



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
