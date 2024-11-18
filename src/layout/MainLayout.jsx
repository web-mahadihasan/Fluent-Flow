import { Outlet } from "react-router-dom";
import FooterSection from "../components/FooterSection";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <>
        <Toaster/>
        <header className="sticky top-0 font-popins z-50">
            <Header/>
            {/* <Nav/> */}
        </header>

        <main className="min-h-[calc(100vh-418px)] font-popins bg-white">
            <Outlet/>
        </main>

        <footer>
            <FooterSection/>
        </footer>
        </>
    );
};

export default MainLayout;