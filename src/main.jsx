import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Toaster />
      <App />
    </BrowserRouter>
  </>
)
