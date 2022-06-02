import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import { loadEmberApp } from 'single-spa-ember';
import importmap from 'importmap';

const getImportmap = fetch(importmap).then((response) => response.json());

const emberApps = [
  {
    appImport: '@app/ember-app',
    appName: 'ember-app'
  },
  {
    appImport: '@app/ember-app-navbar',
    appName: 'ember-app-navbar'
  }
];

// Инициализация приложений (с помощью layout engine):
const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    let emberConfig = emberApps.find(x => x.appImport == name);
    let isEmberApp = emberConfig !== undefined;
    return isEmberApp ? loadEmberAppFn(emberConfig) : System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();

function loadEmberAppFn(config) {
  return getImportmap.then(importmap => {
    const appUrl = `${location.protocol}${importmap.imports[config.appImport]}`;
    const vendorUrl = `${location.protocol}${importmap.imports[config.appImport + '-vendor']}`;
    return loadEmberApp(config.appName, appUrl, vendorUrl);
  });
}
