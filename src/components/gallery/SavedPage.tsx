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
    <div className="min-h-screen bg-gradient-to-br from-[#1A1613] via-[#2A2420] to-[#1A1613] pb-20">
      {/* Header */}
      <header className="bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm sticky top-0 z-40 border-b border-white/10">
        <div className="px-4 py-5">
          <h1 className="text-xl mb-2 text-white" style={{ fontFamily: 'Georgia, serif' }}>Saved Artworks</h1>
          <p className="text-xs text-white/60">{savedArtworksList.length} artworks in your collection</p>
        </div>
      </header>

      <div className="px-4 pt-4">
        {/* Collections */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm text-white/80">Collections</h2>
            <button 
              onClick={() => setShowCreateModal(true)}
              className="text-xs text-[#C2A572] hover:text-[#C2A572]/80 font-medium"
            >
              + Create New
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {collections.map(collection => (
              <div key={collection.id} className="relative group">
                <button 
                  className={`w-full bg-gradient-to-br ${collection.gradient} backdrop-blur-md border ${collection.border} p-3 rounded-xl hover:scale-105 transition-all text-left`}
                >
                  <div className="text-lg text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>{collection.artworkIds.length}</div>
                  <div className="text-[10px] text-white/80 font-medium">{collection.name}</div>
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(collection.id)}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                >
                  <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Artworks List */}
        {savedArtworksList.length > 0 ? (
          <div className="space-y-3">
            {savedArtworksList.map(artwork => (
              <div 
                key={artwork.id}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-[#C2A572]/50 transition-all group"
              >
                <Link to={`/artwork/${artwork.id}`} className="flex gap-3 p-3">
                  <div className="w-28 h-28 bg-black/20 flex-shrink-0 overflow-hidden rounded-lg">
                    <ImageWithFallback
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm mb-0.5 line-clamp-1 text-white" style={{ fontFamily: 'Georgia, serif' }}>
                      {artwork.title}
                    </h3>
                    <p className="text-xs text-white/60 mb-2">{artwork.artist}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-0.5 bg-white/10 rounded text-white/60">{artwork.category}</span>
                      <span className="text-[10px] text-white/50">{artwork.year}</span>
                    </div>
                    <div className="text-sm text-[#C2A572] font-medium">{artwork.price}</div>
                  </div>
                </Link>
                
                {/* Actions */}
                <div className="flex border-t border-white/10">
                  <button 
                    onClick={() => setShowCollectionModal(artwork.id)}
                    className="flex-1 py-2.5 text-xs text-white/80 hover:bg-white/5 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    Add to Collection
                  </button>
                  <button 
                    onClick={() => removeFromSaved(artwork.id)}
                    className="flex-1 py-2.5 text-xs text-red-400 hover:bg-red-500/10 transition-colors flex items-center justify-center gap-1.5 border-l border-white/10"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <svg className="w-20 h-20 mx-auto text-white/20 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
            </svg>
            <h3 className="text-sm mb-1 text-white" style={{ fontFamily: 'Georgia, serif' }}>No Saved Artworks</h3>
            <p className="text-xs text-white/60 mb-4">Start saving artworks to view them here</p>
            <Link to="/" className="inline-block px-6 py-2.5 bg-[#C2A572] text-black text-xs font-medium uppercase tracking-wider rounded-full hover:bg-[#C2A572]/90 transition-colors">
              Browse Gallery
            </Link>
          </div>
        )}
      </div>

      {/* Collection Modal */}
      {showCollectionModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowCollectionModal(null)}>
          <div className="bg-[#2A2420] border border-white/10 rounded-2xl p-5 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>Add to Collection</h3>
            <div className="space-y-2 mb-4">
              {collections.map(collection => (
                <button
                  key={collection.id}
                  onClick={() => handleAddToCollection(showCollectionModal, collection.id)}
                  className={`w-full p-3 bg-gradient-to-br ${collection.gradient} border ${collection.border} rounded-xl text-left hover:scale-[1.02] transition-all`}
                >
                  <div className="text-sm text-white font-medium">{collection.name}</div>
                  <div className="text-xs text-white/60">{collection.artworkIds.length} artworks</div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowCollectionModal(null)}
              className="w-full py-2.5 bg-white/10 text-white text-sm rounded-xl hover:bg-white/20 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Create Collection Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowCreateModal(false)}>
          <div className="bg-[#2A2420] border border-white/10 rounded-2xl p-5 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>Create Collection</h3>
            <input
              type="text"
              value={newCollectionName}
              onChange={(e) => setNewCollectionName(e.target.value)}
              placeholder="Collection name..."
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 mb-4 focus:outline-none focus:border-[#C2A572]"
              autoFocus
            />
            <div className="flex gap-2">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 py-2.5 bg-white/10 text-white text-sm rounded-xl hover:bg-white/20 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateCollection}
                disabled={!newCollectionName.trim()}
                className="flex-1 py-2.5 bg-[#C2A572] text-black text-sm font-medium rounded-xl hover:bg-[#C2A572]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Collection Confirm Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowDeleteConfirm(null)}>
          <div className="bg-[#2A2420] border border-white/10 rounded-2xl p-5 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>Delete Collection?</h3>
            <p className="text-sm text-white/60 mb-6">This action cannot be undone. Artworks will remain saved.</p>
            <div className="flex gap-2">
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="flex-1 py-2.5 bg-white/10 text-white text-sm rounded-xl hover:bg-white/20 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteCollection(showDeleteConfirm)}
                className="flex-1 py-2.5 bg-red-500 text-white text-sm font-medium rounded-xl hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}