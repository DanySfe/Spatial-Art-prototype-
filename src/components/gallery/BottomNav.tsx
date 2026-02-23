import { Link, useLocation } from 'react-router';

export default function BottomNav() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    {
      path: '/',
      label: 'Gallery',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      )
    },
    {
      path: '/search',
      label: 'Search',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      )
    },
    {
      path: '/saved',
      label: 'Saved',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
        </svg>
      )
    },
    {
      path: '/profile',
      label: 'Profile',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="4" />
          <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        </svg>
      )
    }
  ];
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      {/* Glassmorphic container with elegant border */}
      <div className="bg-gradient-to-t from-[#1A1613]/95 to-[#2A2420]/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl shadow-black/50">
        {/* Active indicator track */}
        <div className="relative">
          <div className="flex justify-around items-center px-4 py-2 pb-safe">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className="relative flex flex-col items-center gap-0.5 flex-1 group"
                >
                  {/* Icon container with smooth transitions */}
                  <div className={`relative transition-all duration-300 ${
                    active ? 'scale-105' : 'scale-100 group-hover:scale-105'
                  }`}>
                    {/* Glow effect for active state */}
                    {active && (
                      <div className="absolute inset-0 bg-[#C2A572]/30 blur-lg rounded-full scale-150"></div>
                    )}
                    
                    {/* Icon background */}
                    <div className={`relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      active 
                        ? 'bg-gradient-to-br from-[#C2A572] to-[#A88F5F] shadow-md shadow-[#C2A572]/30' 
                        : 'bg-transparent group-hover:bg-white/5'
                    }`}>
                      <div className={`transition-colors duration-300 ${
                        active ? 'text-black' : 'text-white/50 group-hover:text-white/80'
                      }`}>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          {item.path === '/' && (
                            <>
                              <rect x="3" y="3" width="7" height="7" />
                              <rect x="14" y="3" width="7" height="7" />
                              <rect x="14" y="14" width="7" height="7" />
                              <rect x="3" y="14" width="7" height="7" />
                            </>
                          )}
                          {item.path === '/search' && (
                            <>
                              <circle cx="11" cy="11" r="8" />
                              <path d="M21 21l-4.35-4.35" />
                            </>
                          )}
                          {item.path === '/saved' && (
                            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                          )}
                          {item.path === '/profile' && (
                            <>
                              <circle cx="12" cy="8" r="4" />
                              <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                            </>
                          )}
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Label */}
                  <span className={`text-[9px] font-medium tracking-wide transition-all duration-300 ${
                    active 
                      ? 'text-[#C2A572]' 
                      : 'text-white/40 group-hover:text-white/70'
                  }`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}