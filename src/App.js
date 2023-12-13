import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Authotication from './Components/Authotication/Authotication';

function App() {
  return (
    <div className="">
     <Routes>
      <Route path="/" element={
        true?<HomePage/>:<Authotication/>
      }></Route>
     </Routes>
    </div>
  );
}

export default App;
