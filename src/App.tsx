import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormComponent from './components/FormComponent';
import SecondPageComponent from './components/SecondPageComponent';
import DepartmentListComponent from './components/DepartmentListComponent';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/Department-List" element={<DepartmentListComponent />} />
          <Route path="/second-page" element={<SecondPageComponent />} />
          <Route path="/" element={<FormComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
