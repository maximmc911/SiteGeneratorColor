// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.tsx'
import '../public/I18n/i18n'
import { BrowserRouter } from "react-router";
createRoot(document.getElementById('root')!).render(
<BrowserRouter>
<App />
</BrowserRouter>

)