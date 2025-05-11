
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useApp } from '@/contexts/AppContext';
import { 
  ChartPieIcon, 
  HomeIcon, 
  Cog6ToothIcon, 
  ArrowRightOnRectangleIcon, 
  DocumentChartBarIcon,
  UserGroupIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const { isMenuOpen, isMobile } = useApp();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  const navLinkClasses = ({ isActive }: { isActive: boolean }) => 
    `flex items-center px-4 py-3 ${
      isActive 
        ? 'bg-dark-elevated text-neon-blue border-l-2 border-neon-blue' 
        : 'text-gray-400 hover:bg-dark-elevated/50 hover:text-white'
    } rounded-md transition-colors duration-200`;
  
  // If on mobile and menu is not open, don't render the sidebar
  if (isMobile && !isMenuOpen) {
    return null;
  }
  
  return (
    <aside className={`
      fixed top-0 left-0 z-40 h-full w-64 bg-black border-r border-white/5
      transform transition-transform duration-300 ease-in-out
      ${isMobile && isMenuOpen ? 'translate-x-0' : ''}
      ${isMobile && !isMenuOpen ? '-translate-x-full' : ''}
      ${!isMobile ? 'translate-x-0' : ''}
    `}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6">
  <div className="flex items-center">
    <div className="h-10 w-10 rounded-md bg-neon-blue/20 flex items-center justify-center shadow-neon">
      <ChartPieIcon className="h-6 w-6 text-neon-blue" />
    </div>
    <button 
      onClick={() => window.location.href = '/'}
      className="ml-1.5  text-xl font-bold text-white focus:outline-none"
    >
      Chime
    </button>
  </div>
</div>

        
        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          <NavLink to="/dashboard" className={navLinkClasses}>
            <HomeIcon className="h-5 w-5 mr-3" />
            Dashboard
          </NavLink>
          
          <NavLink to="/subscriptions" className={navLinkClasses}>
            <CreditCardIcon className="h-5 w-5 mr-3" />
            Subscriptions
          </NavLink>
          
          <NavLink to="/reports" className={navLinkClasses}>
            <DocumentChartBarIcon className="h-5 w-5 mr-3" />
            Reports
          </NavLink>
          
          <NavLink to="/team" className={navLinkClasses}>
            <UserGroupIcon className="h-5 w-5 mr-3" />
            Team
          </NavLink>
          
          <NavLink to="/settings" className={navLinkClasses}>
            <Cog6ToothIcon className="h-5 w-5 mr-3" />
            Settings
          </NavLink>
        </nav>
        
        {/* User info */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue font-medium shadow-neon">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">{user?.name}</p>
              <p className="text-xs text-gray-400">{user?.email}</p>
            </div>
          </div>
          
          <button
            onClick={handleLogout}
            className="mt-4 flex items-center w-full text-gray-400 hover:text-white px-3 py-2 text-sm rounded-md hover:bg-dark-elevated/50 transition-colors duration-200"
          >
            <ArrowRightOnRectangleIcon className="h-4 w-4 mr-2" />
            Log out
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
