
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import MainPage from "./page/MainPage/MainPage.js";



function App() {

 return (
   <div className="flex flex-col justify-between min-h-screen text-[#2D2D2D] bg-[#FFF8E1] dark:bg-[#212121] dark:text-[#E0E0E0]">
<Navbar/>

<MainPage/>


<Footer/>
   </div>
 );
}

export default App;
