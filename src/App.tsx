import { Routes } from "react-router";
import { MakeRouting } from "./route/route";


function App() {

 return (
   <div className="min-h-screen text-black bg-white dark:bg-gray-800 dark:text-white">

    
    <Routes>
      {
        MakeRouting()
      }
    </Routes>
   </div>
 );
}

export default App;
