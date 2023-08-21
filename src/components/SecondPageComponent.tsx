import { useState, useEffect } from 'react';
import DepartmentListComponent from './DepartmentListComponent';
import  DepartmentData  from '../models/DepartmentData';
import  ApiService from '../services/ApiServices';

const SecondPageComponent = () => {
  const [departmentData, setDepartmentData] = useState<DepartmentData[]>([]);

  useEffect(() => {
    // Fetch data from API
    ApiService.fetchDepartmentData().then((data) => {
      setDepartmentData(data);
    });
  }, []);

  return (
    <div>
      <h2>Department List</h2>
      <DepartmentListComponent data={departmentData} />
      {/* Render the other component here */}
    </div>
  );
};

export default SecondPageComponent;
