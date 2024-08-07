import './App.css';
import{BrowserRouter,Routes,Route} from'react-router-dom'
import Home from './pages/Home';
import Singalepage from './pages/Singlepage';
import About from './pages/About'
function App() {
  return (
    <div className="App">
   <BrowserRouter>
        <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>

      <Route path='/single' element={<Singalepage/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
