import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home.js' 
import Create from './Create.js';
import Update from './Update.js';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/create' element={<Create/>}></Route>
    <Route path='/' element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
