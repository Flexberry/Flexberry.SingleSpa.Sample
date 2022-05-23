import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import singleSpaEmber from 'single-spa-ember/src/single-spa-ember'; //to-do: rename to "single-spa-ember" using ember-cli-build

let App;

App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

const emberLifecycles = singleSpaEmber({
  App,
  appName: 'ember-app'
})
export const bootstrap = emberLifecycles.bootstrap;
export const mount = emberLifecycles.mount;
export const unmount = emberLifecycles.unmount;
