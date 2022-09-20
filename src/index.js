import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* //     <BrowserRouter>
    //         <Routes>
    //             <Route path='/' element={<App />} />
    //         </Routes>
    //     </BrowserRouter> */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
