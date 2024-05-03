import { Outlet } from "react-router-dom";
import Header from '../../components/Header'
import '../../../../Series_app/public/styles.scss'
import Footer from "../../components/Footer";
import { useAppState } from "../../AppState";
import { NavBar } from "../../components/NavBar/NavBar";
const Root = () => {
  const{Name}=useAppState()
  return (
    <div >
      <NavBar />
     <Header    />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;