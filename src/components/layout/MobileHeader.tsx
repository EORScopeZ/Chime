
import { useApp } from '@/contexts/AppContext';
import { Bars3Icon } from '@heroicons/react/24/outline';

const MobileHeader = () => {
  const { toggleMenu, isMobile } = useApp();
  
  if (!isMobile) return null;
  
  return (
    <header className="bg-black border-b border-white/5 p-4 md:hidden">
      <div className="flex items-center justify-between">
        <button 
          onClick={toggleMenu}
          className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-elevated/50"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-md bg-neon-blue/20 flex items-center justify-center shadow-neon">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon-blue" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
            </div>
  <button 
    onClick={() => window.location.href = '/'}
    className="text-xl font-bold text-white focus:outline-none"
  >
    Chime
  </button>
</div>
        
        <div className="w-8"></div>
      </div>
    </header>
  );
};

export default MobileHeader;
