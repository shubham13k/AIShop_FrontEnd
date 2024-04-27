import {Routes,Route} from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' Component={Home}></Route>
      </Routes>
    </div>
  );
}

export default App;
