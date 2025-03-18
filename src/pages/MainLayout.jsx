import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../pages";
function MainLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
