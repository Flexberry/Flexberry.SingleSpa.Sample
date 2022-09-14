import { ODataGrid, ODataGridColDef} from 'o-data-grid';
import './App.css';
const columns: ODataGridColDef[] = [
  { field: 'Name', headerName: 'Name', width: 150, caseSensitive: true },
];

export default function App() {
  return (
    <div className="c-main padding-30">
      <ODataGrid 
        columns={columns} 
        getRowId={(row) => row.__PrimaryKey}
        alwaysSelect={['__PrimaryKey']} 
        url="http://localhost:6501/odata/TVSingleSpaSampleSocialNetworks" 
      />
    </div>
  );
}
