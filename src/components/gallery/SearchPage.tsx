import { useState } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import BottomNav from './BottomNav';
import { artworksData } from '../../data/artworks';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [recentSearches, setRecentSearches] = useState(['Sculptures', 'Modern Art', 'Renaissance', 'Abstract']);
  const popularSearches = ['Impressionism', 'Contemporary', 'Classical', 'Installation Art', 'Portraits', 'Landscapes'];
  
  const filteredArtworks = artworksData.filter(artwork => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artwork.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || artwork.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const handleSearch = (term: string) => {
    setSearchQuery(term);
    if (term && !recentSearches.includes(term)) {
      setRecentSearches([term, ...recentSearches.slice(0, 3)]);
    }
  };
  
  const clearSearch = () => {
    setSearchQuery('');
  };
  
  const clearRecentSearches = () => {
    setRecentSearches([]);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1613] via-[#2A2420] to-[#1A1613] pb-20">
      {/* Header */}
      <header className="bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm sticky top-0 z-40 border-b border-white/10">
        <div className="px-4 py-5">
          <h1 className="text-xl mb-4 text-white" style={{ fontFamily: 'Georgia, serif' }}>Search Artworks</h1>
          
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search artworks, artists, styles..."
              className="w-full pl-10 pr-10 py-3 text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#C2A572] transition-colors"
              autoFocus
            />
            <svg className="w-4 h-4 absolute left-3.5 top-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button 
                onClick={clearSearch}
                className="absolute right-3 top-3 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          
          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {['All', 'Painting', 'Sculpture', 'Installation'].map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium whitespace-nowrap rounded-full transition-all ${
                  selectedCategory === cat 
                    ? 'bg-[#C2A572] text-black' 
                    : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 pt-4">
        {!searchQuery ? (
          <>
            {/* Recent Searches */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs text-white/60 uppercase tracking-wider">Recent Searches</h3>
                {recentSearches.length > 0 && (
                  <button 
                    onClick={clearRecentSearches}
                    className="text-xs text-[#C2A572] hover:text-[#C2A572]/80"
                  >
                    Clear
                  </button>
                )}
              </div>
              {recentSearches.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((term, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(term)}
                      className="px-3 py-1.5 bg-white/10 backdrop-blur-md text-white/80 text-xs rounded-full border border-white/20 hover:bg-white/20 hover:border-[#C2A572]/50 transition-all"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-white/40">No recent searches</p>
              )}
            </div>
            
            {/* Popular Searches */}
            <div>
              <h3 className="text-xs text-white/60 uppercase tracking-wider mb-3">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(term)}
                    className="px-3 py-1.5 bg-white/5 backdrop-blur-md text-white/60 text-xs rounded-full border border-white/10 hover:bg-[#C2A572]/20 hover:text-[#C2A572] hover:border-[#C2A572]/50 transition-all"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Browse by Category */}
            <div>
              <h2 className="text-sm mb-3 text-white/80">Browse by Category</h2>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:border-[#C2A572]/50 transition-all text-left group">
                  <div className="text-sm mb-1 text-white group-hover:text-[#C2A572] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>Paintings</div>
                  <div className="text-xs text-white/60">125 artworks</div>
                </button>
                <button className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:border-[#C2A572]/50 transition-all text-left group">
                  <div className="text-sm mb-1 text-white group-hover:text-[#C2A572] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>Sculptures</div>
                  <div className="text-xs text-white/60">87 artworks</div>
                </button>
                <button className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:border-[#C2A572]/50 transition-all text-left group">
                  <div className="text-sm mb-1 text-white group-hover:text-[#C2A572] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>Installations</div>
                  <div className="text-xs text-white/60">43 artworks</div>
                </button>
                <button className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:border-[#C2A572]/50 transition-all text-left group">
                  <div className="text-sm mb-1 text-white group-hover:text-[#C2A572] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>Photography</div>
                  <div className="text-xs text-white/60">62 artworks</div>
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Results Header */}
            <div className="mb-4">
              <p className="text-sm text-white/80">
                Found <span className="text-[#C2A572] font-medium">{filteredArtworks.length}</span> results {searchQuery && `for "${searchQuery}"`}
              </p>
            </div>
            
            {/* Results List */}
            <div className="space-y-3">
              {filteredArtworks.map(artwork => (
                <Link 
                  key={artwork.id}
                  to={`/artwork/${artwork.id}`}
                  className="flex gap-3 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl hover:border-[#C2A572]/50 hover:bg-white/10 transition-all"
                >
                  <div className="w-24 h-24 bg-black/20 flex-shrink-0 overflow-hidden rounded-lg">
                    <ImageWithFallback
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm mb-0.5 line-clamp-1 text-white" style={{ fontFamily: 'Georgia, serif' }}>
                      {artwork.title}
                    </h3>
                    <p className="text-xs text-white/60 mb-1">{artwork.artist}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 bg-white/10 rounded text-white/60">{artwork.category}</span>
                      <span className="text-xs text-white/60">{artwork.year}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#C2A572]">{artwork.price}</div>
                  </div>
                </Link>
              ))}
              
              {filteredArtworks.length === 0 && (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 mx-auto text-white/20 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p className="text-sm text-white/80">No artworks found</p>
                  <p className="text-xs text-white/60 mt-1">Try different keywords or browse categories</p>
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