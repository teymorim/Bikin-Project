import { BrowserRouter , Routes , Route  } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PortfolioApp from './Components/homecomponent/Portfolio/PortfolioApp/PortfolioApp'
import PortfolioCard from './Components/homecomponent/Portfolio/PortfolioCard/PortfolioCard'
import PortfolioWeb from './Components/homecomponent/Portfolio/PortfolioWeb/PortfolioWeb'
import PortfolioALL from './Components/homecomponent/Portfolio/PortfolioAll/PortfolioAll'
function App() {
  
  return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home /> }>
      <Route path="all" element={<PortfolioALL />} />
      <Route path="app" element={<PortfolioApp />} />
      <Route path="card" element={<PortfolioCard />} />
      <Route path="web" element={<PortfolioWeb />} />
      </Route>
    </Routes>
  
  </BrowserRouter>
  );
}

export default App;
