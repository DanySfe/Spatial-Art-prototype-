import { useState } from 'react';
import { Link } from 'react-router';
import BottomNav from './BottomNav';
import { useGallery } from '../../context/GalleryContext';

const recentActivity = [
  { action: 'Saved', item: 'Venus de Milo', time: '2 hours ago' },
  { action: 'Viewed in AR', item: 'Modern Form', time: '1 day ago' },
  { action: 'Added to cart', item: 'Portrait in Oil', time: '2 days ago' },
  { action: 'Created collection', item: 'Renaissance Art', time: '5 days ago' },
  { action: 'Saved', item: 'The Thinker', time: '1 week ago' },
  { action: 'Viewed in AR', item: 'Mona Lisa', time: '1 week ago' },
];

type ModalType = 'edit' | 'cart' | 'orders' | 'history' | 'settings' | 'help' | 'terms' | 'signout' | null;

export default function ProfilePage() {
  const { savedArtworks, collections } = useGallery();

  // Profile state
  const [displayName, setDisplayName] = useState('Art Collector');
  const [email, setEmail] = useState('collector@spatialart.com');
  const [bio, setBio] = useState('Passionate about Renaissance masters and contemporary sculpture.');

  // Edit modal draft state
  const [draftName, setDraftName] = useState(displayName);
  const [draftEmail, setDraftEmail] = useState(email);
  const [draftBio, setDraftBio] = useState(bio);

  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [signedOut, setSignedOut] = useState(false);

  const openModal = (modal: ModalType) => {
    if (modal === 'edit') {
      setDraftName(displayName);
      setDraftEmail(email);
      setDraftBio(bio);
    }
    setActiveModal(modal);
  };
  const closeModal = () => setActiveModal(null);

  const saveProfile = () => {
    setDisplayName(draftName.trim() || displayName);
    setEmail(draftEmail.trim() || email);
    setBio(draftBio.trim());
    closeModal();
  };

  const handleSignOut = () => {
    setSignedOut(true);
    closeModal();
  };

  const initials = displayName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);

  const stats = [
    { label: 'Saved', value: savedArtworks.length.toString(), icon: (
      <svg className="w-5 h-5 text-[#C6A87C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" /></svg>
    )},
    { label: 'Collections', value: collections.length.toString(), icon: (
      <svg className="w-5 h-5 text-[#C6A87C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
    )},
    { label: 'AR Views', value: '47', icon: (
      <svg className="w-5 h-5 text-[#C6A87C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8V5a2 2 0 012-2h3M21 8V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3M21 16v3a2 2 0 01-2 2h-3" /></svg>
    )},
    { label: 'Acquired', value: '3', icon: (
      <svg className="w-5 h-5 text-[#C6A87C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
    )},
  ];

  const cartItems = [
    { title: 'Portrait in Oil', artist: 'Classical Master', price: '$8,900' },
    { title: 'Modern Form', artist: 'Contemporary Artist', price: '$15,000' },
    { title: 'The Golden Hour', artist: 'Renaissance Master', price: '$45,000' },
  ];

  const orderHistory = [
    { id: 'ORD-2024-001', title: 'Impressionist Landscape', date: 'Feb 12, 2024', status: 'Delivered', price: '$6,750' },
    { id: 'ORD-2023-042', title: 'Installation Piece', date: 'Nov 3, 2023', status: 'Delivered', price: '$22,000' },
  ];

  if (signedOut) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1A1613] via-[#2A2420] to-[#1A1613] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg>
          </div>
          <h2 className="text-2xl font-bold text-white font-serif mb-2">You've signed out</h2>
          <p className="text-white/50 mb-8">Come back anytime to explore the gallery.</p>
          <button onClick={() => setSignedOut(false)} className="px-8 py-3 bg-[#C6A87C] text-black font-semibold rounded-full hover:bg-[#B59870] transition-colors">
            Sign Back In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1613] via-[#2A2420] to-[#1A1613] pb-20 lg:pb-0">

      {/* Desktop Top Bar */}
      <header className="hidden lg:block border-b border-white/10 bg-black/30 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-12 py-4 flex items-center justify-between">
          <span className="text-[#C6A87C] font-semibold text-sm tracking-widest uppercase font-serif">Spatial Art Gallery</span>
          <nav className="flex items-center gap-8 text-sm text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Gallery</Link>
            <Link to="/search" className="hover:text-white transition-colors">Search</Link>
            <Link to="/saved" className="hover:text-white transition-colors">Saved</Link>
            <span className="text-[#C6A87C] font-medium">Profile</span>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 lg:px-12 pt-8 lg:pt-12">

        {/* Profile Hero */}
        <div className="lg:flex lg:items-end lg:justify-between mb-10 lg:mb-12">
          <div className="flex items-end gap-6">
            <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-[#C6A87C] to-[#8B7D6B] flex items-center justify-center ring-4 ring-[#C6A87C]/20 shrink-0">
              <span className="text-white text-2xl lg:text-4xl font-bold font-serif">{initials}</span>
            </div>
            <div className="pb-1">
              <p className="text-[#C6A87C] text-xs font-semibold uppercase tracking-widest mb-1">Art Collector · Member since 2024</p>
              <h1 className="text-2xl lg:text-4xl font-bold text-white font-serif leading-tight mb-1">{displayName}</h1>
              <p className="text-sm lg:text-base text-white/50">{email}</p>
              {bio && <p className="text-sm text-white/40 mt-1 max-w-md">{bio}</p>}
            </div>
          </div>
          <button
            onClick={() => openModal('edit')}
            className="mt-5 lg:mt-0 flex items-center gap-2 px-6 py-2.5 border border-[#C6A87C]/40 text-[#C6A87C] text-sm font-semibold rounded-full hover:bg-[#C6A87C]/10 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Edit Profile
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map(stat => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 lg:p-6 text-center hover:border-[#C6A87C]/30 transition-all">
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-bold text-white font-serif mb-1">{stat.value}</div>
              <div className="text-xs text-white/50 font-semibold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">

          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">

            {/* Quick Actions */}
            <section>
              <h2 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <Link to="/saved" className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-[#C6A87C]/40 transition-all group text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#C6A87C]/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#C6A87C]/25 transition-colors">
                    <svg className="w-5 h-5 text-[#C6A87C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" /></svg>
                  </div>
                  <div className="text-sm font-semibold text-white mb-0.5">Saved</div>
                  <div className="text-xs text-white/50">View collection</div>
                </Link>

                <button onClick={() => openModal('cart')} className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-[#C6A87C]/40 transition-all group text-center relative">
                  <div className="w-12 h-12 rounded-xl bg-[#C6A87C]/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#C6A87C]/25 transition-colors">
                    <svg className="w-5 h-5 text-[#C6A87C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <div className="absolute top-3 right-3 w-5 h-5 bg-[#C6A87C] text-black text-[10px] font-bold rounded-full flex items-center justify-center">{cartItems.length}</div>
                  <div className="text-sm font-semibold text-white mb-0.5">Cart</div>
                  <div className="text-xs text-white/50">{cartItems.length} items</div>
                </button>

                <button onClick={() => openModal('orders')} className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-[#C6A87C]/40 transition-all group text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#C6A87C]/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#C6A87C]/25 transition-colors">
                    <svg className="w-5 h-5 text-[#C6A87C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div className="text-sm font-semibold text-white mb-0.5">Orders</div>
                  <div className="text-xs text-white/50">View history</div>
                </button>

                <button onClick={() => openModal('history')} className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-[#C6A87C]/40 transition-all group text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#C6A87C]/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#C6A87C]/25 transition-colors">
                    <svg className="w-5 h-5 text-[#C6A87C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div className="text-sm font-semibold text-white mb-0.5">History</div>
                  <div className="text-xs text-white/50">Recently viewed</div>
                </button>
              </div>
            </section>

            {/* Recent Activity */}
            <section>
              <h2 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-4">Recent Activity</h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl divide-y divide-white/5">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="px-5 py-4 flex items-center gap-4 hover:bg-white/5 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#C6A87C] shrink-0 opacity-70"></div>
                    <div className="flex-1">
                      <p className="text-sm text-white">
                        <span className="text-white/50">{activity.action}</span>{' '}{activity.item}
                      </p>
                      <p className="text-xs text-white/40 mt-0.5">{activity.time}</p>
                    </div>
                    <svg className="w-4 h-4 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5l7 7-7 7" /></svg>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="mt-8 lg:mt-0 space-y-6">
            <section>
              <h2 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-4">Account</h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl divide-y divide-white/5">
                {[
                  { label: 'Settings & Preferences', modal: 'settings' as ModalType, icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
                  { label: 'Help & Support', modal: 'help' as ModalType, icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                  { label: 'Terms & Privacy', modal: 'terms' as ModalType, icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
                ].map(item => (
                  <button key={item.label} onClick={() => openModal(item.modal)} className="w-full px-5 py-4 flex items-center justify-between hover:bg-white/5 transition-colors text-left group">
                    <div className="flex items-center gap-3">
                      <span className="text-white/50 group-hover:text-[#C6A87C] transition-colors">{item.icon}</span>
                      <span className="text-sm text-white">{item.label}</span>
                    </div>
                    <svg className="w-4 h-4 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5l7 7-7 7" /></svg>
                  </button>
                ))}
                <button onClick={() => openModal('signout')} className="w-full px-5 py-4 flex items-center gap-3 hover:bg-red-500/10 transition-colors text-left text-red-400">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                  <span className="text-sm">Sign Out</span>
                </button>
              </div>
            </section>
            <div className="text-center py-2">
              <p className="text-xs text-white/30">Spatial Art Gallery v1.0.0</p>
              <p className="text-xs text-white/30 mt-1">© 2026 All rights reserved</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── MODALS ─────────────────────────────────────────── */}

      {/* Edit Profile Modal */}
      {activeModal === 'edit' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-[#2A2420] border border-white/10 rounded-2xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-white font-serif mb-6">Edit Profile</h3>
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-xs font-semibold text-white/50 uppercase tracking-widest block mb-1.5">Display Name</label>
                <input value={draftName} onChange={e => setDraftName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#C6A87C] text-sm transition-colors"
                  placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs font-semibold text-white/50 uppercase tracking-widest block mb-1.5">Email</label>
                <input value={draftEmail} onChange={e => setDraftEmail(e.target.value)} type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#C6A87C] text-sm transition-colors"
                  placeholder="Your email" />
              </div>
              <div>
                <label className="text-xs font-semibold text-white/50 uppercase tracking-widest block mb-1.5">Bio</label>
                <textarea value={draftBio} onChange={e => setDraftBio(e.target.value)} rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#C6A87C] text-sm resize-none transition-colors"
                  placeholder="Tell us about your taste in art…" />
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={closeModal} className="flex-1 py-3 bg-white/10 text-white text-sm rounded-xl hover:bg-white/20 transition-colors">Cancel</button>
              <button onClick={saveProfile} className="flex-1 py-3 bg-[#C6A87C] text-black text-sm font-bold rounded-xl hover:bg-[#B59870] transition-colors">Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {activeModal === 'cart' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-[#2A2420] border border-white/10 rounded-2xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white font-serif">Your Cart</h3>
              <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="space-y-3 mb-6">
              {cartItems.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-white/50">{item.artist}</p>
                  </div>
                  <span className="text-sm font-semibold text-[#C6A87C]">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between py-3 border-t border-white/10 mb-4">
              <span className="text-sm text-white/60">Total</span>
              <span className="text-lg font-bold text-[#C6A87C]">$68,900</span>
            </div>
            <button className="w-full py-3.5 bg-[#C6A87C] text-black font-bold text-sm rounded-xl hover:bg-[#B59870] transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      {/* Orders Modal */}
      {activeModal === 'orders' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-[#2A2420] border border-white/10 rounded-2xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white font-serif">Order History</h3>
              <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="space-y-3">
              {orderHistory.map((order) => (
                <div key={order.id} className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-white/40 font-mono">{order.id}</span>
                    <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/20">{order.status}</span>
                  </div>
                  <p className="text-sm font-semibold text-white mb-0.5">{order.title}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/40">{order.date}</span>
                    <span className="text-sm font-semibold text-[#C6A87C]">{order.price}</span>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={closeModal} className="w-full mt-5 py-3 bg-white/10 text-white text-sm rounded-xl hover:bg-white/20 transition-colors">Close</button>
          </div>
        </div>
      )}

      {/* History Modal */}
      {activeModal === 'history' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-[#2A2420] border border-white/10 rounded-2xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white font-serif">Recently Viewed</h3>
              <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="space-y-2">
              {recentActivity.map((a, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-2 h-2 bg-[#C6A87C] rounded-full shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-sm text-white">{a.item}</p>
                    <p className="text-xs text-white/40">{a.action} · {a.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={closeModal} className="w-full mt-5 py-3 bg-white/10 text-white text-sm rounded-xl hover:bg-white/20 transition-colors">Close</button>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {activeModal === 'settings' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-[#2A2420] border border-white/10 rounded-2xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white font-serif">Settings</h3>
              <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Push Notifications', desc: 'New arrivals and price updates' },
                { label: 'AR Mode by Default', desc: 'Open artworks directly in AR' },
                { label: 'High Quality Images', desc: 'Uses more data' },
                { label: 'Dark Mode', desc: 'Always on for gallery experience' },
              ].map((setting, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <div>
                    <p className="text-sm font-semibold text-white">{setting.label}</p>
                    <p className="text-xs text-white/40">{setting.desc}</p>
                  </div>
                  <div className="w-11 h-6 bg-[#C6A87C] rounded-full relative cursor-pointer">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 shadow"></div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={closeModal} className="w-full mt-6 py-3 bg-white/10 text-white text-sm rounded-xl hover:bg-white/20 transition-colors">Done</button>
          </div>
        </div>
      )}

      {/* Help Modal */}
      {activeModal === 'help' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-[#2A2420] border border-white/10 rounded-2xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white font-serif">Help & Support</h3>
              <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="space-y-3">
              {['How to use AR Viewing', 'Managing your collections', 'Purchasing artwork', 'Contact support team', 'Report an issue'].map((item, i) => (
                <button key={i} className="w-full flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#C6A87C]/30 hover:bg-white/8 transition-all text-left">
                  <span className="text-sm text-white">{item}</span>
                  <svg className="w-4 h-4 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5l7 7-7 7"/></svg>
                </button>
              ))}
            </div>
            <button onClick={closeModal} className="w-full mt-5 py-3 bg-white/10 text-white text-sm rounded-xl hover:bg-white/20 transition-colors">Close</button>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {activeModal === 'terms' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-[#2A2420] border border-white/10 rounded-2xl p-6 w-full max-w-md max-h-[80vh] flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6 shrink-0">
              <h3 className="text-xl font-bold text-white font-serif">Terms & Privacy</h3>
              <button onClick={closeModal} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="overflow-y-auto flex-1 space-y-4 text-sm text-white/60 leading-relaxed pr-1">
              <p><span className="text-white font-semibold">Terms of Service.</span> By using Spatial Art Gallery you agree to our terms of service. All artwork purchases are final unless the artwork is materially different from its description.</p>
              <p><span className="text-white font-semibold">Privacy Policy.</span> We collect minimal personal data required to operate the service. We do not sell your data to third parties. AR session data stays on your device.</p>
              <p><span className="text-white font-semibold">Cookies.</span> We use essential cookies only. No advertising cookies are used.</p>
              <p><span className="text-white font-semibold">Intellectual Property.</span> All artwork images and 3D models are property of their respective artists or estates. Reproduction without permission is prohibited.</p>
            </div>
            <button onClick={closeModal} className="w-full mt-5 py-3 bg-white/10 text-white text-sm rounded-xl hover:bg-white/20 transition-colors shrink-0">Close</button>
          </div>
        </div>
      )}

      {/* Sign Out Confirm */}
      {activeModal === 'signout' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-[#2A2420] border border-white/10 rounded-2xl p-6 w-full max-w-sm" onClick={e => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-white font-serif mb-2">Sign Out?</h3>
            <p className="text-sm text-white/50 mb-6">You'll need to sign back in to access your saved artworks and collections.</p>
            <div className="flex gap-3">
              <button onClick={closeModal} className="flex-1 py-3 bg-white/10 text-white text-sm rounded-xl hover:bg-white/20 transition-colors">Cancel</button>
              <button onClick={handleSignOut} className="flex-1 py-3 bg-red-500 text-white text-sm font-bold rounded-xl hover:bg-red-600 transition-colors">Sign Out</button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}