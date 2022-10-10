import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './Component/Add';
import Header from './Component/Header';
import Home from './Component/Home';
import Update from './Component/Update';
import View from './Component/View';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home ></Home>}></Route>
        <Route path='/home' element={<Home ></Home>}></Route>
        <Route path='/add' element={<Add></Add>}></Route>
        <Route path='/view/:id' element={<View></View>}></Route>
        <Route path='/update/:id' element={<Update></Update>}></Route>
      </Routes>
    </div>
  );
}

export default App;
