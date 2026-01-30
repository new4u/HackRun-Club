
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initPostHog } from './posthog';

// 初始化 PostHog
initPostHog();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Could not find root element");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
