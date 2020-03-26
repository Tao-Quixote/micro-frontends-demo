import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { registerMicroApps, start, setDefaultMountApp, runAfterFirstMounted } from 'qiankun';

function render ({ appContent, loading }) {
  const container = document.getElementById('mainContain');
  ReactDOM.render(
    <App appContent={appContent} loading={loading} />,
    container,
  )
}

function genActiveRule (routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

render({ appContent: '', loading: true});

registerMicroApps([
  {
    name: 'micro-react',
    entry: 'http://localhost:8100',
    render,
    activeRule: genActiveRule('/react')
  },
  {
    name: 'micro-vue',
    entry: 'http://localhost:8101',
    render,
    activeRule: genActiveRule('/vue')
  }
])

setDefaultMountApp('/react');

start({
  prefetch: true,
  jsSandbox: true,
  singular: true,
  fetch: window.fetch,
});


runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
