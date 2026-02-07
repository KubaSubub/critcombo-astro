import React from 'react';
import TopHUD from './TopHUD';
import BottomHUD from './BottomHUD';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="flex h-screen w-full flex-col overflow-hidden bg-hud-bg text-text-main font-sans selection:bg-accent-primary selection:text-hud-bg">
            <TopHUD />

            {/* Scrollable Main Content Area */}
            <main className="flex-1 overflow-y-auto px-6 py-6 scrollbar-thin scrollbar-track-hud-bg scrollbar-thumb-hud-border hover:scrollbar-thumb-accent-secondary">
                <div className="mx-auto max-w-7xl animate-in fade-in zoom-in duration-500">
                    {children}
                </div>
                {/* Spacer for Bottom HUD so content isn't hidden behind it */}
                <div className="h-24"></div>
            </main>

            <BottomHUD />
        </div>
    );
};

export default DashboardLayout;
