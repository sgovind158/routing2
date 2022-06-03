
import './App.css';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element= {<div>This is Home Page</div>}/>
    <Route path='/about' element= {<div>This is about Page</div>}/>
    <Route path='/mens' element= {<div>This is Mens Page</div>}/>
    <Route path='/login' element= {<div>This is Login Page</div>}/>
    
    </Routes>
     
    </div>
  );
}

export default App;
