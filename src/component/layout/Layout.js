
import Footer from "../Footer/Footer";
import Navbar from "./navbar/Navbar";





const Layout = (props) => {
  return (
    <div >
      <Navbar/>
      {props.children }
     <Footer/>
    </div>
  );
}

export default Layout;
