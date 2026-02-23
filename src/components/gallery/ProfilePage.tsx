import { Link } from 'react-router';
import BottomNav from './BottomNav';
import { useGallery } from '../../context/GalleryContext';

const recentActivity = [
  { action: 'Saved', item: 'Venus de Milo', time: '2 hours ago', icon: 'bookmark' },
  { action: 'Viewed in AR', item: 'Modern Form', time: '1 day ago', icon: 'cube' },
  { action: 'Added to cart', item: 'Portrait in Oil', time: '2 days ago', icon: 'cart' },
  { action: 'Created collection', item: 'Renaissance Art', time: '5 days ago', icon: 'folder' },
];

export default function ProfilePage() {
  const { savedArtworks, collections } = useGallery();
  
  const stats = [
    { label: 'Saved', value: savedArtworks.length.toString() },
    { label: 'Collections', value: collections.length.toString() },
    { label: 'AR Views', value: '47' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1613] via-[#2A2420] to-[#1A1613] pb-20">
      {/* Header with Profile */}
      <header className="bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm border-b border-white/10">
        <div className="px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C2A572] to-[#9B8B6F] flex items-center justify-center ring-2 ring-white/20">
              <span className="text-white text-xl" style={{ fontFamily: 'Georgia, serif' }}>AC</span>
            </div>
            <div className="flex-1">
              <h1 className="text-lg text-white mb-0.5" style={{ fontFamily: 'Georgia, serif' }}>Art Collector</h1>
              <p className="text-xs text-white/60">collector@spatialart.com</p>
            </div>
            <button className="text-xs text-[#C2A572] hover:text-[#C2A572]/80 font-medium">Edit</button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map(stat => (
              <div key={stat.label} className="text-center py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                <div className="text-xl text-white mb-0.5" style={{ fontFamily: 'Georgia, serif' }}>{stat.value}</div>
                <div className="text-[10px] text-white/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="px-4 pt-4">
        {/* Quick Actions */}
        <div className="mb-6">
          <h2 className="text-sm mb-3 text-white/80">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link to="/saved" className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:border-[#C2A572]/50 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-[#C2A572]/20 flex items-center justify-center mb-3 group-hover:bg-[#C2A572]/30 transition-colors">
                <svg className="w-5 h-5 text-[#C2A572]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                </svg>
              </div>
              <div className="text-sm mb-0.5 text-white" style={{ fontFamily: 'Georgia, serif' }}>Saved</div>
              <div className="text-xs text-white/60">View collection</div>
            </Link>
            
            <button className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:border-[#C2A572]/50 transition-all text-left group">
              <div className="w-10 h-10 rounded-xl bg-[#C2A572]/20 flex items-center justify-center mb-3 group-hover:bg-[#C2A572]/30 transition-colors">
                <svg className="w-5 h-5 text-[#C2A572]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-sm mb-0.5 text-white" style={{ fontFamily: 'Georgia, serif' }}>Cart</div>
              <div className="text-xs text-white/60">3 items</div>
            </button>
            
            <button className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:border-[#C2A572]/50 transition-all text-left group">
              <div className="w-10 h-10 rounded-xl bg-[#C2A572]/20 flex items-center justify-center mb-3 group-hover:bg-[#C2A572]/30 transition-colors">
                <svg className="w-5 h-5 text-[#C2A572]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-sm mb-0.5 text-white" style={{ fontFamily: 'Georgia, serif' }}>Orders</div>
              <div className="text-xs text-white/60">View history</div>
            </button>
            
            <button className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:border-[#C2A572]/50 transition-all text-left group">
              <div className="w-10 h-10 rounded-xl bg-[#C2A572]/20 flex items-center justify-center mb-3 group-hover:bg-[#C2A572]/30 transition-colors">
                <svg className="w-5 h-5 text-[#C2A572]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm mb-0.5 text-white" style={{ fontFamily: 'Georgia, serif' }}>History</div>
              <div className="text-xs text-white/60">Recently viewed</div>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-6">
          <h2 className="text-sm mb-3 text-white/80">Recent Activity</h2>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl divide-y divide-white/10">
            {recentActivity.map((activity, index) => (
              <div key={index} className="p-3 flex items-start gap-3 hover:bg-white/5 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#C2A572]/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C2A572]"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white">
                    <span className="text-white/60">{activity.action}</span> {activity.item}
                  </p>
                  <p className="text-[10px] text-white/50 mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Account Actions */}
        <div className="mb-6">
          <h2 className="text-sm mb-3 text-white/80">Account</h2>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl divide-y divide-white/10">
            <button className="w-full p-3.5 flex items-center justify-between hover:bg-white/5 transition-colors text-left group">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white/60 group-hover:text-[#C2A572] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs text-white">Settings & Preferences</span>
              </div>
              <svg className="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <button className="w-full p-3.5 flex items-center justify-between hover:bg-white/5 transition-colors text-left group">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white/60 group-hover:text-[#C2A572] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs text-white">Help & Support</span>
              </div>
              <svg className="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <button className="w-full p-3.5 flex items-center justify-between hover:bg-white/5 transition-colors text-left group">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white/60 group-hover:text-[#C2A572] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-xs text-white">Terms & Privacy</span>
              </div>
              <svg className="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <button className="w-full p-3.5 flex items-center gap-3 hover:bg-red-500/10 transition-colors text-left text-red-400 group">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="text-xs">Sign Out</span>
            </button>
          </div>
        </div>

        {/* App Info */}
        <div className="text-center py-4">
          <p className="text-[10px] text-white/40">Spatial Art Gallery v1.0.0</p>
          <p className="text-[10px] text-white/40 mt-1">© 2026 All rights reserved</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}