import {Routes,Route} from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import{Navbar } from './Components/Navbar'

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' Component={Home}></Route>
      </Routes>
    </div>
  );
}

export default App;
