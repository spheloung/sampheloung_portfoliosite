import React from 'react';
import { Outlet } from 'react-router-dom';
import { BackgroundEffects } from '../ui/BackgroundEffects';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
    children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className="bg-background text-white min-h-screen selection:bg-accent selection:text-white">
            <BackgroundEffects />

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow pt-32">
                    {children || <Outlet />}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default PageLayout;
