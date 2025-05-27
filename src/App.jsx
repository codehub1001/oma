import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';

import Banner from './components/Banner';
import DesignShowcase from './components/DesignShowcase';


const App = () => {
  return (
    
      <Router>
        {/* <ToastContainer position="top-right" autoClose={3000} /> */}
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
               <Banner/>
               <DesignShowcase/>
                
              </>
            }
          />
    
        </Routes>
      </Router>
  
  );
};

export default App;
