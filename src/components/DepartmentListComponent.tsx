import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid'; // Import DataGrid and ColDef from '@mui/x-data-grid'
import Department from '../models/DepartmentData'; // Assuming you have Department interface defined in DepartmentData.ts

interface Props {
  data: Department[];
}

const DepartmentListComponent: React.FC<Props> = ({ data }) => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    // Add more columns as needed
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} columns={columns} />
    </div>
  );
};

export default DepartmentListComponent;
