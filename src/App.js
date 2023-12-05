import './App.css';
import Home from './pages/Home';
import Searchpage from './pages/searchpage';
import { BrowserRouter,Switch,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/search' element={<Searchpage/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
