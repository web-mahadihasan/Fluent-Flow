import { Outlet } from "react-router-dom";
import FooterSection from "../components/FooterSection";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";
import { React, useContext, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthProviderContext } from "../providers/AuthProvider";
import WelcomeMessage from "../components/WelcomeMessage";


const MainLayout = () => {
    const {user} = useContext(AuthProviderContext)
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])

    return (
        <>
        <Toaster/>
        <div>
            {user && <WelcomeMessage/>}
        </div>
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