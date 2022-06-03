
import './App.css';

import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Feeds from './pages/Feeds';
import Navbar from './componets/Navbar';
import RequredAuth from './hoc/RequredAuth';
import Posts from './pages/Posts';
import Careers from './pages/Careers';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>

       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/feeds' element={
       <RequredAuth>

         <Feeds/>
       </RequredAuth> }/>

       <Route path='/posts' element={
       <RequredAuth>

         <Posts/>
       </RequredAuth> }/>

       <Route path='/careers' element={
       <RequredAuth>

         <Careers/>
       </RequredAuth> }/>

      </Routes>

      

   

    </div>
  );
}

export default App;
