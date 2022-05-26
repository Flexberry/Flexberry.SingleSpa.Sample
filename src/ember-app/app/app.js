import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import singleSpaEmber from 'single-spa-ember';
import singleSpaCss from 'single-spa-css';
import { buildPath } from './utils/url';

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
});

const cssLifecycles = singleSpaCss({
  cssUrls: [
    //buildPath(config.rootURL, 'assets/vendor.css'),
    //buildPath(config.rootURL, 'assets/ember-app.css')
    //TODO
  ],

  // optional: defaults to true. Indicates whether the <link> element for the CSS will be
  // unmounted when the single-spa microfrontend is unmounted.
  shouldUnmount: true,

  // optional: defaults to a standard <link rel="stylesheet" href="/main.css"> element
  // Customize the creation of the link element that is used by single-spa-css by providing a
  // function. For example, for setting the cross-origin or other HTML attributes on the <link>
  createLink(url) {
    const linkEl = document.createElement('link');
    linkEl.integrity = '';
    linkEl.rel = 'stylesheet';
    linkEl.href = url;
    return linkEl;
  },
});

export const bootstrap = [
  cssLifecycles.bootstrap,
  emberLifecycles.bootstrap
];
export const mount = [
  cssLifecycles.mount,
  emberLifecycles.mount
];
export const unmount = [
  cssLifecycles.unmount,
  emberLifecycles.unmount
];
