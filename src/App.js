import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import FreightManagement from "./components/FreightManagement/FreightManagement";
import Header from "./components/Header/Header";
import HeaderMobo from "./components/Header/HeaderMobo";
import NavBar from "./components/NavBar/NavBar";
import useDeviceType from "./utility/useDeviceType";
import { Outlet } from "react-router-dom";

function App() {
  const deviceType = useDeviceType();
  const isDesktop = deviceType === 'Desktop';

  return (
    <div className="App">
      {!isDesktop && <HeaderMobo />}

      <NavBar />
      <div className="content">
        {isDesktop && <Header />}
        <Outlet />
        {/* <Dashboard /> */}
        {/* <FreightManagement /> */}
      </div>
    </div>
  );
}

export default App;
