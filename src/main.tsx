
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Optimize React rendering with concurrent features
const container = document.getElementById("root");
if (!container) throw new Error("Root container not found");

const root = createRoot(container);

// Use startTransition for better performance
import { startTransition } from 'react';

startTransition(() => {
  root.render(<App />);
});

// Register service worker for better caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
