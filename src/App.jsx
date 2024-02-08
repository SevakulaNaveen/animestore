import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import AnimeProvider from "./context/AnimeProvider";


const App = () => {
  return (
    <AnimeProvider>
      <div >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </AnimeProvider>
  )
}
export default App;