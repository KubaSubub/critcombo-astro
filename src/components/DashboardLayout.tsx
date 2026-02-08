import React from 'react';
import TopNav from './layout/TopNav';
import HUDPanel from './layout/HUDPanel';
import Footer from './layout/Footer';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="relative min-h-screen w-full bg-bg-primary text-text-primary selection:bg-accent-primary selection:text-white">
            <TopNav />

            {/* Main Content Area - Standard Scrolling */}
            <main className="">
                <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
                    {children}
                </div>
            </main>

            <Footer />

            {/* Collapsible HUD */}
            <HUDPanel />
        </div>
    );
};

export default DashboardLayout;
