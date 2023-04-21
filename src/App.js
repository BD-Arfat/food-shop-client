import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routs } from './Raouts/Raouts';
import { ToastBar, Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="lg:w-11/12 lg:mx-auto">
      <RouterProvider router={routs}></RouterProvider>
      <Toaster></Toaster>
    </div>
    
  );
}

export default App;
