import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const Layout = () => {
  const location = useLocation();
  const isProdutoPage = location.pathname.startsWith('/produto');

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {!isProdutoPage && <WhatsAppButton />}
    </div>
  );
};

export default Layout;
