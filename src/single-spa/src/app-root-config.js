import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import { loadEmberApp } from 'single-spa-ember';

const emberApps = [{
  appNameSingleSpa: '@app/ember-app',
  appName: 'ember-app',
  appUrl: 'http://localhost:4200/ember/assets/ember-app.js',
  vendorUrl: 'http://localhost:4200/ember/assets/vendor.js'
}];

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    let emberConfig = emberApps.find(x => x.appNameSingleSpa == name);
    let isEmberApp = emberConfig !== undefined;
    return isEmberApp ? loadEmberAppFn(emberConfig) : System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();

function loadEmberAppFn(config) {
  return loadEmberApp(config.appName, config.appUrl, config.vendorUrl);
}