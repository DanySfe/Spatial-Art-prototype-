import { Outlet, Link, useLocation } from 'react-router';

export default function Root() {
  const location = useLocation();
  
  const pages = [
    { path: '/', label: 'Page 1: Branding System' },
    { path: '/ui-library', label: 'Page 2: UI Component Library' },
    { path: '/asset-language', label: 'Page 3: 3D Asset Language' },
    { path: '/performance', label: 'Page 4: Performance Rules' },
    { path: '/pipeline', label: 'Page 5: Asset Pipeline' },
  ];
  
  const currentPageIndex = pages.findIndex(p => p.path === location.pathname) + 1;
  
  return (
    <div className="min-h-screen bg-neutral-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Document Header */}
        <header className="mb-3 pb-3 border-b-2 border-neutral-900 bg-white px-6 py-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl mb-1">Spatial Art Gallery</h1>
              <p className="text-neutral-600 text-xs uppercase tracking-wider">
                WebAR Project — Asset Inventory & Visual Language Board
              </p>
            </div>
            <div className="text-right">
              <div className="text-xs text-neutral-500">Page {currentPageIndex} of {pages.length}</div>
              <div className="text-xs text-neutral-400">Feb 2026</div>
              <Link to="/gallery" className="text-xs text-[#C2A572] hover:underline mt-1 block">
                View Live App →
              </Link>
            </div>
          </div>
        </header>
        
        {/* Page Navigation */}
        <nav className="mb-3 flex gap-2 bg-white px-6 py-3">
          {pages.map((page, index) => (
            <Link
              key={page.path}
              to={page.path}
              className={`px-3 py-1.5 text-xs border transition-colors ${
                location.pathname === page.path
                  ? 'bg-neutral-900 text-white border-neutral-900'
                  : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-900'
              }`}
            >
              {index + 1}
            </Link>
          ))}
          <div className="ml-auto text-xs text-neutral-500 px-3 py-1.5">
            {pages.find(p => p.path === location.pathname)?.label}
          </div>
        </nav>
        
        {/* Page Content */}
        <main className="bg-white border border-neutral-200 px-8 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}