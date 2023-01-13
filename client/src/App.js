import './App.css';
import {io} from 'socket.io-client'
//👇🏻 React Router configuration & routes
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Login , Photos , Register , SharePhoto , UploadPhotos , MyPhotos} from './components';
//👇🏻 React Toastify configuration
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
//👇🏻 Websockets configuration
const socket = io.connect("http://localhost:3000/");

function App() {
  const socket = io.connect("http://localhost:3000/")
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login socket={socket}/>} />
          <Route path='/register' element={<Register socket={socket}/>}/>
          <Route path='/photos' element={<Photos socket={socket}/>}/>
          <Route path='/photo/upload' element={<UploadPhotos socket={socket}/>}/>
          <Route path='/user/photos' element={<MyPhotos socket={socket}/>}/>
          <Route path='/share/:user' element={<SharePhoto socket={socket}/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
};

export default App;
