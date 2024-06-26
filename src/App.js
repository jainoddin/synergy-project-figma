import './App.css';
import { useEffect,useState } from 'react';
import Page_1 from './components/Page_1';
import Page_2 from './components/Page_2';
import './components/Page_1.css';
import './components/Page_2.css';
import Page_3 from './components/Page_3'
import Page_4 from './components/Page_4'
import {Routes,Route} from "react-router-dom"
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Signup from './components/Signup';
import Home from './components/indexpages/Home';
import Details from './components/indexpages/Details';
import Viewpage from './components/indexpages/Viewpage';



function App() {
  const [canAccessLogin, setCanAccessLogin] = useState(false);
  const fetchDetails = async () => {
    
    setCanAccessLogin(true)
  };
  useEffect(() => {
    fetchDetails();
  }, []);
 
  
  return (
    <div className="App">
      <Routes>
        
        
        <Route path="/" element={<Page_1></Page_1>} ></Route>
        <Route path="/home" element={<Page_2></Page_2>} ></Route>
        <Route path="/home2" element={<Page_3></Page_3>} ></Route>
        <Route path="/home3" element={<Page_4></Page_4>} ></Route>
        <Route path="/Login" element={<Login></Login>} ></Route>
        <Route path='/forgotpassword' element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path="/signup" element={<Signup></Signup>} ></Route>
        <Route path="/index/:email" element={<Home></Home>} ></Route>
        <Route path="/Details" element={<Details></Details>} ></Route>
        <Route path="/view" element={<Viewpage></Viewpage>} ></Route>

       







      </Routes>
  
    </div>
  );
}

export default App;
