import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScrenn";
import AboutScreen from "./screen/AboutScreen";
import SingleCocktailScreen from "./screen/SingleCocktailScreen";
import ErrorScreen from "./screen/ErrorScreen";

function App() {
  return (
    <Router className='App'>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/cocktail/:id' element={<SingleCocktailScreen />} />
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
    </Router>
  );
}

export default App;