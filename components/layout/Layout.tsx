import { LayoutProps } from "@/interfaces";
import Header from "./Header";
import Footer from "./Footer";


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;