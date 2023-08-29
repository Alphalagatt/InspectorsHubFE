import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import SideNav from './Components/SideNav';
import Assigned from './Pages/Assigned';
import Account from './Pages/Account';
import Reinspection from './Pages/Reinspection';
import Correspondence from './Pages/Correspondance';
import Pending from './Pages/Pending';
import Completed from './Pages/Completed';
import TopRibbon from './Components/TopRibbon';

function App() {
  return (
    <Router>
      <SideNav/>
      <TopRibbon/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/all-reports' element = {<About/>} />
        <Route path='/assigned' element = {<Assigned/>} />
        <Route path='/completed' element = {<Completed/>} />
        <Route path='/pending' element = {<Pending/>} />
        <Route path='/correspondence' element = {<Correspondence/>} />
        <Route path='/reinspection' element={<Reinspection/>} />
        <Route path='/account' element={<Account/>} />
      </Routes>  
    </Router>
  );
}

export default App;
