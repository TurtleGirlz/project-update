import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MoralisProvider } from "react-moralis";


const root = ReactDOM.createRoot(document.getElementById('root'));
const appId = "BZeBMmlxsKdmWb991CXkTgy82vPGSiNmJUVYtOsb"
const serverUrl = "https://upva7es2wd64.usemoralis.com:2053/server"
root.render(
  <React.StrictMode>
  <MoralisProvider appId= {appId} serverUrl= {serverUrl}>
    <App />
    </MoralisProvider>
    
      

  </React.StrictMode>
);
