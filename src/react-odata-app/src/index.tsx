import singleSpaReact from 'single-spa-react';

import App from './App';
import React = require('react');
import ReactDOM = require('react-dom');


const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
