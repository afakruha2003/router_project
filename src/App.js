
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import Login from './Pages/Login';
import People from './Pages/People';
import PersonDetail from './Pages/PersonDetail';
import { useState } from 'react';
import PrivateRouter from './PrivateRouter';
//index.js doyasında browserrouter eklemeyi unutma
function App() {

  const [isLogin, setIsLogin] = useState(false)
  //ilk başta giriş yapmamış oluyor



  return (
    < >
      <Navbar islogin={isLogin} setIsLogin={setIsLogin} /> {/* navbarı dışarda bıraktık çünkü sayfalararası geçiş yapsam bile sabit kalacaktır*/}


      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login islogin={isLogin} setIsLogin={setIsLogin} />} />

        <Route path='/people' element={<People />} />

        <Route path='/people/:id' element={<PrivateRouter islogin={isLogin} setIsLogin={setIsLogin} />}> {/*değişken ollduğunu belirtmek için : işareti koyuyorum */}
          <Route path='' element={<PersonDetail />} />
        </Route> {/*burada route açma ve kapama tagı ile birlkte gelecek */}


      </Routes>


    </>
  );
}

export default App;
