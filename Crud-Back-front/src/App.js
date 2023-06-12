
import './App.css';
import Crud from './Crud/Crud';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReadData from './ReadData/Read';
import { Routes, Route } from 'react-router-dom';
import Edit from './Edit/Edit';
function App() {
  return (
    <>
      <div className="App">
     
        <Routes>
          <Route path="/" element={ < ReadData/>}></Route>
          <Route exact path="/create" element={<Crud />}></Route>
          <Route exact path="/edit/:id" element={<Edit/>}></Route>
        </Routes>
   


      </div>

    </>
  );
}

export default App;
