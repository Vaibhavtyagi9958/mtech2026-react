import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import C2f from './C2f';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
// import First from './First';
// import Class1 from './Class1';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<App />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/main" element={<Main/>} />
        
      </Routes>
      
    </BrowserRouter>
      {/* <C2f />
      <Header />
      <Footer /> */}
      {/* <main /> */}
    {/* <App /> */}
    {/* <First/> */}
    {/* <Class1/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
