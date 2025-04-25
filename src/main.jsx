import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import "slick-carousel/slick/slick.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/main.css';
import './assets/blog.css';
import './assets/blog-details.css';

// Initialize WOW.js
const initWOW = () => {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
  script.onload = () => {
    new window.WOW({
      live: false
    }).init();
  };
  document.head.appendChild(script);
};

// Initialize WOW.js when the DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWOW);
} else {
  initWOW();
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
