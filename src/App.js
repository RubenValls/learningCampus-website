import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginComponent from './components/mainpage/loginpage/loginComponent';
import MainpageComponent from './components/mainpage/mainpageComponent';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/learningCampus-website' element={<LoginComponent/>}></Route>
        <Route path='/learningCampus-website/campus' element={<MainpageComponent/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
