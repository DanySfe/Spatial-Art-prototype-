import { Link } from 'react-router';
import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import BottomNav from './BottomNav';
import { useGallery } from '../../context/GalleryContext';
import { artworksData } from '../../data/artworks';

const featuredArtwork = artworksData.find(a => a.id === '7') || artworksData[0];

export default function GalleryFeed() {
  const { isSaved, toggleSave } = useGallery();
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [displayCount, setDisplayCount] = useState(6);
  
  const filters = ['All', 'Painting', 'Sculpture', 'Installation'];
  
  const filteredArtworks = selectedFilter === 'All' 
    ? artworksData 
    : artworksData.filter(a => a.category === selectedFilter);
  
  const displayedArtworks = filteredArtworks.slice(0, displayCount);
  const hasMore = displayCount < filteredArtworks.length;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1613] via-[#2A2420] to-[#1A1613] pb-20">
      {/* Header */}
      <header className="bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm sticky top-0 z-40 border-b border-white/5">
        <div className="px-4 py-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>Spatial Gallery</h1>
              <p className="text-xs text-white/60">Curated AR Art Collection</p>
            </div>
            <button className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
          
          {/* Search */}
          <Link to="/search" className="block">
            <div className="relative">
              <div className="w-full pl-10 pr-4 py-3 text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white/60 hover:bg-white/15 transition-colors">
                Search artworks, artists, styles...
              </div>
              <svg className="w-4 h-4 absolute left-3.5 top-3.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </Link>
        </div>
      </header>

      {/* Featured Hero Section */}
      <div className="px-4 pt-6 pb-5">
        <Link to={`/artwork/${featuredArtwork.id}`} className="block group">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#C2A572]/20 to-transparent border border-white/10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
            <div className="h-80 overflow-hidden">
              <ImageWithFallback
                src={featuredArtwork.image}
                alt={featuredArtwork.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-[#C2A572] text-black text-[10px] font-medium rounded-full mb-3">
                    FEATURED
                  </span>
                  <h2 className="text-2xl text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                    {featuredArtwork.title}
                  </h2>
                  <p className="text-sm text-white/80 mb-2">{featuredArtwork.artist}</p>
                  <p className="text-xs text-white/60">{featuredArtwork.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-lg text-white font-medium">{featuredArtwork.price}</div>
                <button className="px-5 py-2.5 bg-white text-black text-xs font-medium rounded-full hover:bg-[#C2A572] hover:text-black transition-colors">
                  View in AR
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Categories */}
      <div className="px-4 pb-6">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <button className="px-4 py-2 bg-[#C2A572] text-black text-xs font-medium whitespace-nowrap rounded-full">
            All Artworks
          </button>
          <button className="px-4 py-2 bg-white/10 backdrop-blur-md text-white text-xs font-medium whitespace-nowrap rounded-full border border-white/20 hover:bg-white/20 transition-colors">
            Paintings
          </button>
          <button className="px-4 py-2 bg-white/10 backdrop-blur-md text-white text-xs font-medium whitespace-nowrap rounded-full border border-white/20 hover:bg-white/20 transition-colors">
            Sculptures
          </button>
          <button className="px-4 py-2 bg-white/10 backdrop-blur-md text-white text-xs font-medium whitespace-nowrap rounded-full border border-white/20 hover:bg-white/20 transition-colors">
            AR Ready
          </button>
        </div>
      </div>

      {/* Grid Title */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg text-white" style={{ fontFamily: 'Georgia, serif' }}>Collection</h3>
          <button 
            onClick={() => setShowFilter(true)}
            className="text-xs text-[#C2A572] flex items-center gap-1 hover:text-[#C2A572]/80 transition-colors"
          >
            {selectedFilter !== 'All' ? selectedFilter : 'Filter'}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Artworks Grid */}
      <div className="px-6">
        <div className="grid grid-cols-2 gap-4">
          {displayedArtworks.map((artwork) => (
            <Link 
              key={artwork.id} 
              to={`/artwork/${artwork.id}`}
              className="block group"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-[#C2A572]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#C2A572]/10">
                <div className="relative aspect-square overflow-hidden bg-black/20">
                  <ImageWithFallback
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-2 right-2">
                    {artwork.status === 'AR Ready' ? (
                      <div className="px-2 py-0.5 bg-green-500 backdrop-blur-md text-white text-[8px] font-medium rounded-full flex items-center gap-1">
                        <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                        AR
                      </div>
                    ) : (
                      <span className="px-2 py-0.5 bg-blue-500/90 backdrop-blur-md text-white text-[8px] font-medium rounded-full">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Quick Action */}
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSave(artwork.id);
                    }}
                    className="absolute top-2 left-2 w-7 h-7 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20"
                  >
                    <svg 
                      className={`w-3.5 h-3.5 ${isSaved(artwork.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} 
                      viewBox="0 0 24 24" 
                      fill={isSaved(artwork.id) ? 'currentColor' : 'none'}
                      stroke="currentColor" 
                      strokeWidth="1.5"
                    >
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                
                {/* Card Content */}
                <div className="p-2.5">
                  <h3 className="text-xs text-white mb-0.5 line-clamp-1" style={{ fontFamily: 'Georgia, serif' }}>
                    {artwork.title}
                  </h3>
                  <p className="text-[10px] text-white/60 mb-1.5 line-clamp-1">
                    {artwork.artist}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#C2A572] font-medium">{artwork.price}</span>
                    <span className="text-[8px] px-1.5 py-0.5 bg-white/10 text-white/60 rounded-full">
                      {artwork.year}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="px-6 pt-6 pb-4">
        {hasMore ? (
          <button 
            onClick={() => setDisplayCount(prev => prev + 6)}
            className="w-full py-3 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
          >
            Load More Artworks
          </button>
        ) : filteredArtworks.length > 6 && (
          <div className="text-center text-xs text-white/40">
            All artworks loaded
          </div>
        )}
      </div>

      {/* Filter Modal */}
      {showFilter && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end" onClick={() => setShowFilter(false)}>
          <div className="w-full bg-gradient-to-t from-[#1A1613] to-[#2A2420] border-t border-white/10 rounded-t-3xl p-6" onClick={(e) => e.stopPropagation()}>
            <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-6"></div>
            <h3 className="text-lg text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>Filter by Category</h3>
            <div className="space-y-2 mb-6">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => {
                    setSelectedFilter(filter);
                    setDisplayCount(6);
                    setShowFilter(false);
                  }}
                  className={`w-full p-4 rounded-xl text-left transition-all ${
                    selectedFilter === filter 
                      ? 'bg-[#C2A572] text-black' 
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{filter}</span>
                    {selectedFilter === filter && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowFilter(false)}
              className="w-full py-3 bg-white/10 text-white text-sm rounded-xl hover:bg-white/20 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}