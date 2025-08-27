import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { optimizeImageLoading } from './utils/imageOptimization'

// Optimize image loading after DOM is ready
document.addEventListener('DOMContentLoaded', optimizeImageLoading);

createRoot(document.getElementById("root")!).render(<App />);
