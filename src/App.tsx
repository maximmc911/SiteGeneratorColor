import { Routes } from "react-router";
import { MakeItemNavbar, MakeRouting } from "./route/route";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";



function App() {

 return (
   <div className="flex flex-col justify-between min-h-screen text-black bg-white dark:bg-gray-800 dark:text-white">
<Navbar>
  {
    MakeItemNavbar()
  }
</Navbar>
    
    <Routes>
      {
        MakeRouting()
      }
    </Routes>

<Footer/>
   </div>
 );
}

export default App;
