import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"; // Import Provider
import App from './App.jsx'
import store from './Store/AllStore.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Provider store={store}> 
      <App />
      
    </Provider>
    
  </StrictMode>,
)
