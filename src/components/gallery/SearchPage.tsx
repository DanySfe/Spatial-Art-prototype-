import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import BottomNav from './BottomNav';
import { artworksData } from '../../data/artworks';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [recentSearches, setRecentSearches] = useState(['Sculptures', 'Modern Art', 'Renaissance', 'Abstract']);
  const [sortBy, setSortBy] = useState<'relevance' | 'price-asc' | 'price-desc' | 'year'>('relevance');
  const inputRef = useRef<HTMLInputElement>(null);

  const popularSearches = ['Impressionism', 'Contemporary', 'Classical', 'Installation Art', 'Portraits', 'Landscapes'];

  const categories = [
    { name: 'All', count: artworksData.length },
    { name: 'Painting', count: artworksData.filter(a => a.category === 'Painting').length },
    { name: 'Sculpture', count: artworksData.filter(a => a.category === 'Sculpture').length },
    { name: 'Installation', count: artworksData.filter(a => a.category === 'Installation').length },
  ];

  const browseCategories = [
    { name: 'Paintings', filterName: 'Painting', count: artworksData.filter(a => a.category === 'Painting').length, icon: (
      <svg className="w-7 h-7 text-[#C6A87C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
    )},
    { name: 'Sculptures', filterName: 'Sculpture', count: artworksData.filter(a => a.category === 'Sculpture').length, icon: (
      <svg className="w-7 h-7 text-[#C6A87C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a5 5 0 015 5v3a5 5 0 01-10 0V7a5 5 0 015-5z" /><path d="M6 21v-1a6 6 0 0112 0v1" /></svg>
    )},
    { name: 'Installations', filterName: 'Installation', count: artworksData.filter(a => a.category === 'Installation').length, icon: (
      <svg className="w-7 h-7 text-[#C6A87C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
    )},
    { name: 'Photography', filterName: 'Photography', count: 0, icon: (
      <svg className="w-7 h-7 text-[#C6A87C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" /></svg>
    )},
  ];

  const handleCategorySelect = (filterName: string) => {
    setSelectedCategory(filterName);
    // If browsing, trigger a space search to show all results in that category
    if (!searchQuery) setSearchQuery(' ');
    inputRef.current?.focus();
  };

  const handleSearch = (term: string) => {
    setSearchQuery(term);
    if (term.trim() && !recentSearches.includes(term)) {
      setRecentSearches([term, ...recentSearches.slice(0, 3)]);
    }
  };

  const clearSearch = () => { setSearchQuery(''); setSelectedCategory('All'); };
  const clearRecentSearches = () => setRecentSearches([]);

  const parsePrice = (price: string) => parseFloat(price.replace(/[$,]/g, '')) || 0;

  const filteredArtworks = artworksData
    .filter(artwork => {
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch = !q ||
        artwork.title.toLowerCase().includes(q) ||
        artwork.artist.toLowerCase().includes(q) ||
        artwork.category.toLowerCase().includes(q) ||
        (artwork.year && artwork.year.toLowerCase().includes(q));
      const matchesCategory = selectedCategory === 'All' || artwork.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return parsePrice(a.price) - parsePrice(b.price);
      if (sortBy === 'price-desc') return parsePrice(b.price) - parsePrice(a.price);
      if (sortBy === 'year') return parseInt(b.year) - parseInt(a.year);
      return 0;
    });

  const showResults = searchQuery.trim() !== '' || selectedCategory !== 'All';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1613] via-[#2A2420] to-[#1A1613] pb-20 lg:pb-0">

      {/* Desktop Top Bar */}
      <header className="hidden lg:block border-b border-white/10 bg-black/30 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-12 py-4 flex items-center justify-between">
          <span className="text-[#C6A87C] font-semibold text-sm tracking-widest uppercase font-serif">Spatial Art Gallery</span>
          <nav className="flex items-center gap-8 text-sm text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Gallery</Link>
            <span className="text-[#C6A87C] font-medium">Search</span>
            <Link to="/saved" className="hover:text-white transition-colors">Saved</Link>
            <Link to="/profile" className="hover:text-white transition-colors">Profile</Link>
          </nav>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm sticky top-0 z-40 border-b border-white/10">
        <div className="px-4 py-5">
          <h1 className="text-xl mb-4 text-white font-serif">Search Artworks</h1>
          <div className="relative mb-3">
            <input
              ref={inputRef}
              type="text" value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search artworks, artists, styles..."
              className="w-full pl-10 pr-10 py-3 text-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#C6A87C] transition-colors"
            />
            <svg className="w-4 h-4 absolute left-3.5 top-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            {(searchQuery || selectedCategory !== 'All') && (
              <button onClick={clearSearch} className="absolute right-3 top-3 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            )}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map(cat => (
              <button key={cat.name} onClick={() => { setSelectedCategory(cat.name); if (!searchQuery) setSearchQuery(' '); }}
                className={`px-4 py-1.5 text-xs font-semibold whitespace-nowrap rounded-full transition-all ${selectedCategory === cat.name ? 'bg-[#C6A87C] text-black' : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'}`}>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 lg:px-12 pt-6 lg:pt-12">

        {/* Desktop Search Bar */}
        <div className="hidden lg:block mb-10">
          <p className="text-xs font-bold text-[#C6A87C] uppercase tracking-[0.2em] mb-3">Discover</p>
          <h1 className="text-5xl font-bold text-white font-serif mb-8">Search Artworks</h1>
          <div className="relative max-w-2xl mb-6">
            <input
              ref={inputRef}
              type="text" value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by artwork, artist, style, or era..."
              className="w-full pl-14 pr-12 py-5 text-base bg-white/8 border border-white/15 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-[#C6A87C]/60 transition-colors backdrop-blur-sm"
            />
            <svg className="w-5 h-5 absolute left-5 top-5 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            {(searchQuery.trim() || selectedCategory !== 'All') && (
              <button onClick={clearSearch} className="absolute right-4 top-4 w-7 h-7 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            )}
          </div>
          <div className="flex gap-3">
            {categories.map(cat => (
              <button key={cat.name} onClick={() => { setSelectedCategory(cat.name); if (!searchQuery) setSearchQuery(' '); }}
                className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all ${selectedCategory === cat.name ? 'bg-[#C6A87C] text-[#1A1A19]' : 'bg-white/8 text-white/70 border border-white/15 hover:border-white/30'}`}>
                {cat.name} <span className="opacity-60 text-xs ml-1">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>

        {!showResults ? (
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">

            {/* Left: Searches */}
            <div className="lg:col-span-1 space-y-8 mb-8 lg:mb-0">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">Recent Searches</h3>
                  {recentSearches.length > 0 && <button onClick={clearRecentSearches} className="text-xs text-[#C6A87C] hover:text-[#C6A87C]/80">Clear</button>}
                </div>
                {recentSearches.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term, i) => (
                      <button key={i} onClick={() => handleSearch(term)}
                        className="flex items-center gap-1.5 px-4 py-2 bg-white/8 text-white/80 text-sm rounded-full border border-white/15 hover:bg-white/15 hover:border-[#C6A87C]/40 transition-all">
                        <svg className="w-3 h-3 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                        {term}
                      </button>
                    ))}
                  </div>
                ) : <p className="text-sm text-white/30">No recent searches</p>}
              </div>

              <div>
                <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-4">Popular</h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term, i) => (
                    <button key={i} onClick={() => handleSearch(term)}
                      className="px-4 py-2 bg-white/5 text-white/60 text-sm rounded-full border border-white/10 hover:bg-[#C6A87C]/15 hover:text-[#C6A87C] hover:border-[#C6A87C]/40 transition-all">
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Browse by Category */}
            <div className="lg:col-span-2">
              <h2 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-4">Browse by Category</h2>
              <div className="grid grid-cols-2 gap-4">
                {browseCategories.map(cat => (
                  <button key={cat.name} onClick={() => handleCategorySelect(cat.filterName)}
                    className="bg-white/5 border border-white/10 p-6 lg:p-8 rounded-2xl hover:border-[#C6A87C]/40 hover:bg-white/8 transition-all text-left group cursor-pointer">
                    <div className="mb-4">{cat.icon}</div>
                    <div className="text-base lg:text-xl font-bold text-white group-hover:text-[#C6A87C] transition-colors font-serif mb-1">{cat.name}</div>
                    <div className="text-sm text-white/40">{cat.count} artworks</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Results header + sort */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-white/60">
                <span className="text-[#C6A87C] font-semibold">{filteredArtworks.length}</span> result{filteredArtworks.length !== 1 ? 's' : ''}
                {searchQuery.trim() && <> for &ldquo;<span className="text-white">{searchQuery.trim()}</span>&rdquo;</>}
                {selectedCategory !== 'All' && <> in <span className="text-white">{selectedCategory}</span></>}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="bg-white/8 border border-white/15 text-white/70 text-sm rounded-xl px-3 py-1.5 focus:outline-none focus:border-[#C6A87C]/50 cursor-pointer"
              >
                <option value="relevance" className="bg-[#2A2420]">Relevance</option>
                <option value="price-asc" className="bg-[#2A2420]">Price: Low → High</option>
                <option value="price-desc" className="bg-[#2A2420]">Price: High → Low</option>
                <option value="year" className="bg-[#2A2420]">Newest First</option>
              </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredArtworks.map(artwork => (
                <Link key={artwork.id} to={`/artwork/${artwork.id}`}
                  className="flex gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl hover:border-[#C6A87C]/40 hover:bg-white/8 transition-all group">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-black/20 flex-shrink-0 overflow-hidden rounded-xl">
                    <ImageWithFallback src={artwork.image} alt={artwork.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                    <div>
                      <h3 className="text-base lg:text-lg font-bold text-white font-serif mb-0.5 line-clamp-1">{artwork.title}</h3>
                      <p className="text-sm text-white/50 mb-2">{artwork.artist} · {artwork.year}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs px-2.5 py-1 bg-white/10 rounded-full text-white/60 border border-white/10">{artwork.category}</span>
                        {artwork.status === 'AR Ready' && (
                          <span className="text-xs px-2.5 py-1 bg-[#C6A87C]/15 rounded-full text-[#C6A87C] border border-[#C6A87C]/20">AR</span>
                        )}
                      </div>
                    </div>
                    <div className="text-base font-semibold text-[#C6A87C]">{artwork.price}</div>
                  </div>
                </Link>
              ))}
              {filteredArtworks.length === 0 && (
                <div className="col-span-2 text-center py-20">
                  <svg className="w-16 h-16 mx-auto text-white/15 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  <p className="text-xl font-bold text-white font-serif mb-2">No artworks found</p>
                  <p className="text-white/40 mb-6">Try different keywords or browse categories</p>
                  <button onClick={clearSearch} className="px-6 py-2.5 bg-[#C6A87C] text-black font-semibold text-sm rounded-full hover:bg-[#B59870] transition-colors">
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <BottomNav />
    </div>
  );
}