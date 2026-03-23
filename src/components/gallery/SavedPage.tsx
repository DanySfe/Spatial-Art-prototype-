import { useState } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import BottomNav from './BottomNav';
import { useGallery } from '../../context/GalleryContext';
import { artworksData } from '../../data/artworks';

export default function SavedPage() {
  const { savedArtworks, collections, removeFromSaved, addToCollection, createCollection, deleteCollection } = useGallery();
  const [showCollectionModal, setShowCollectionModal] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [newCollectionName, setNewCollectionName] = useState('');

  const savedArtworksList = artworksData.filter(artwork => savedArtworks.includes(artwork.id));

  const handleAddToCollection = (artworkId: string, collectionId: string) => {
    addToCollection(artworkId, collectionId);
    setShowCollectionModal(null);
  };

  const handleCreateCollection = () => {
    if (newCollectionName.trim()) {
      createCollection(newCollectionName.trim());
      setNewCollectionName('');
      setShowCreateModal(false);
    }
  };
  
  const handleDeleteCollection = (collectionId: string) => {
    deleteCollection(collectionId);
    setShowDeleteConfirm(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1613] via-[#2A2420] to-[#1A1613] pb-20 lg:pb-0">

      {/* Desktop Top Bar */}
      <header className="hidden lg:block border-b border-white/10 bg-black/30 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-12 py-4 flex items-center justify-between">
          <span className="text-[#C6A87C] font-semibold text-sm tracking-widest uppercase font-serif">Spatial Art Gallery</span>
          <nav className="flex items-center gap-8 text-sm text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Gallery</Link>
            <Link to="/search" className="hover:text-white transition-colors">Search</Link>
            <span className="text-[#C6A87C] font-medium">Saved</span>
            <Link to="/profile" className="hover:text-white transition-colors">Profile</Link>
          </nav>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm sticky top-0 z-40 border-b border-white/10">
        <div className="px-4 py-5">
          <h1 className="text-xl mb-1 text-white font-serif">Saved Artworks</h1>
          <p className="text-xs text-white/60">{savedArtworksList.length} artworks in your collection</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 lg:px-12 pt-6 lg:pt-12">
        
        {/* Desktop Page Title */}
        <div className="hidden lg:flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold text-[#C6A87C] uppercase tracking-[0.2em] mb-2">Your Library</p>
            <h1 className="text-5xl font-bold text-white font-serif">Saved Artworks</h1>
            <p className="text-base text-white/50 mt-2">{savedArtworksList.length} artworks curated in your collection</p>
          </div>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="px-6 py-3 bg-[#C6A87C] hover:bg-[#B59870] text-[#1A1A19] text-sm font-bold rounded-full transition-colors tracking-wide"
          >
            + New Collection
          </button>
        </div>

        {/* Two-column desktop layout */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">

          {/* Collections sidebar */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">Collections</h2>
                <button 
                  onClick={() => setShowCreateModal(true)}
                  className="lg:hidden text-xs text-[#C6A87C] hover:text-[#C6A87C]/80 font-medium"
                >
                  + Create New
                </button>
              </div>
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-3">
                {collections.map(collection => (
                  <div key={collection.id} className="relative group">
                    <button className={`w-full bg-gradient-to-br ${collection.gradient} border ${collection.border} p-4 lg:p-5 rounded-2xl hover:scale-[1.02] transition-all text-left`}>
                      <div className="text-2xl lg:text-3xl font-bold text-white font-serif mb-1">{collection.artworkIds.length}</div>
                      <div className="text-xs lg:text-sm text-white/80 font-medium">{collection.name}</div>
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(collection.id)}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                    >
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Saved artworks main area */}
          <div className="lg:col-span-2">
            {savedArtworksList.length > 0 ? (
              <div className="space-y-4">
                {savedArtworksList.map(artwork => (
                  <div 
                    key={artwork.id}
                    className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C6A87C]/40 transition-all group"
                  >
                    <Link to={`/artwork/${artwork.id}`} className="flex gap-4 p-4 lg:p-5">
                      <div className="w-28 h-28 lg:w-36 lg:h-36 bg-black/20 flex-shrink-0 overflow-hidden rounded-xl">
                        <ImageWithFallback
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                        <div>
                          <h3 className="text-base lg:text-xl font-bold text-white font-serif mb-1 line-clamp-1">{artwork.title}</h3>
                          <p className="text-sm text-white/60 mb-3">{artwork.artist} · {artwork.year}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2.5 py-1 bg-white/10 rounded-full text-white/60 border border-white/10">{artwork.category}</span>
                            {artwork.status === 'AR Ready' && (
                              <span className="text-xs px-2.5 py-1 bg-[#C6A87C]/15 rounded-full text-[#C6A87C] border border-[#C6A87C]/20">AR Ready</span>
                            )}
                          </div>
                        </div>
                        <div className="text-lg lg:text-xl font-semibold text-[#C6A87C]">{artwork.price}</div>
                      </div>
                    </Link>
                    
                    <div className="flex border-t border-white/10">
                      <button 
                        onClick={() => setShowCollectionModal(artwork.id)}
                        className="flex-1 py-3 text-xs lg:text-sm text-white/70 hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                        Add to Collection
                      </button>
                      <button 
                        onClick={() => removeFromSaved(artwork.id)}
                        className="flex-1 py-3 text-xs lg:text-sm text-red-400 hover:bg-red-500/10 transition-colors flex items-center justify-center gap-2 border-l border-white/10"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <svg className="w-24 h-24 mx-auto text-white/15 mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" /></svg>
                <h3 className="text-2xl font-bold text-white font-serif mb-2">No Saved Artworks</h3>
                <p className="text-white/50 mb-8">Start saving artworks to build your collection</p>
                <Link to="/" className="inline-block px-8 py-3.5 bg-[#C6A87C] text-[#1A1A19] font-bold text-sm rounded-full hover:bg-[#B59870] transition-colors">
                  Browse Gallery
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Collection Modal */}
      {showCollectionModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowCollectionModal(null)}>
          <div className="bg-[#2A2420] border border-white/10 rounded-2xl p-6 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl text-white font-serif mb-5">Add to Collection</h3>
            <div className="space-y-2 mb-5">
              {collections.map(collection => (
                <button
                  key={collection.id}
                  onClick={() => handleAddToCollection(showCollectionModal, collection.id)}
                  className={`w-full p-4 bg-gradient-to-br ${collection.gradient} border ${collection.border} rounded-xl text-left hover:scale-[1.02] transition-all`}
                >
                  <div className="text-sm text-white font-medium">{collection.name}</div>
                  <div className="text-xs text-white/60">{collection.artworkIds.length} artworks</div>
                </button>
              ))}
            </div>
            <button onClick={() => setShowCollectionModal(null)} className="w-full py-3 bg-white/10 text-white text-sm rounded-xl hover:bg-white/20 transition-colors">Cancel</button>
          </div>
        </div>
      )}

      {/* Create Collection Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowCreateModal(false)}>
          <div className="bg-[#2A2420] border border-white/10 rounded-2xl p-6 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl text-white font-serif mb-5">Create Collection</h3>
            <input
              type="text" value={newCollectionName}
              onChange={(e) => setNewCollectionName(e.target.value)}
              placeholder="Collection name..." autoFocus
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 mb-5 focus:outline-none focus:border-[#C6A87C] text-sm"
              onKeyDown={(e) => e.key === 'Enter' && handleCreateCollection()}
            />
            <div className="flex gap-3">
              <button onClick={() => setShowCreateModal(false)} className="flex-1 py-3 bg-white/10 text-white text-sm rounded-xl hover:bg-white/20 transition-colors">Cancel</button>
              <button onClick={handleCreateCollection} disabled={!newCollectionName.trim()} className="flex-1 py-3 bg-[#C6A87C] text-black text-sm font-semibold rounded-xl hover:bg-[#B59870] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">Create</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowDeleteConfirm(null)}>
          <div className="bg-[#2A2420] border border-white/10 rounded-2xl p-6 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl text-white font-serif mb-2">Delete Collection?</h3>
            <p className="text-sm text-white/60 mb-6">This action cannot be undone. Artworks will remain saved.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowDeleteConfirm(null)} className="flex-1 py-3 bg-white/10 text-white text-sm rounded-xl hover:bg-white/20 transition-colors">Cancel</button>
              <button onClick={() => handleDeleteCollection(showDeleteConfirm)} className="flex-1 py-3 bg-red-500 text-white text-sm font-semibold rounded-xl hover:bg-red-600 transition-colors">Delete</button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}