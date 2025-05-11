
import { ReactNode, useEffect } from 'react';
import Sidebar from './Sidebar';
import MobileHeader from './MobileHeader';
import { useApp } from '@/contexts/AppContext';

interface AppLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}

const AppLayout = ({ children, title, subtitle, actions }: AppLayoutProps) => {
  const { isMenuOpen, isMobile, setMenuOpen } = useApp();
  
  // Close menu on navigation on mobile
  useEffect(() => {
    if (isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile, setMenuOpen]);
  
  return (
    <div className="flex min-h-screen bg-dark-bg">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Mobile overlay */}
      {isMobile && isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <MobileHeader />
        
        <main className="flex-1 p-4 md:p-6 pb-24 md:ml-64">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">{title}</h1>
                {subtitle && <p className="text-gray-400 mt-1">{subtitle}</p>}
              </div>
              {actions && <div className="mt-4 md:mt-0">{actions}</div>}
            </div>
            
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
