import Footer from "../Footer";
import Navbar from "../Navbar";

const MainLayout = ({ children }) => (
  <div className="main-layout">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
