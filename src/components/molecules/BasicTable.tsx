import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
interface BasicTableProps {
  rows: any[];
  columns: GridColDef[];
  onRowDoubleClick?: (params: GridRowParams) => void
}

const BasicTable: React.FC<BasicTableProps> = ({ rows, columns, onRowDoubleClick }) => {

  const [currentColumns, setCurrentColumns] = useState<GridColDef[]>(columns)
  const [currentRows, setCurrentRows] = useState<any[]>(rows)


  useEffect(() => {
    setCurrentRows(rows);
  }, [rows])

  useEffect(() => {
    setCurrentColumns(columns);
  }, [columns])

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={currentRows}
        columns={currentColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20, 50, 100]}
        // checkboxSelection
        disableColumnSelector={false}
        onRowDoubleClick={onRowDoubleClick}
      />
    </div>
  );
}

export default BasicTable;
