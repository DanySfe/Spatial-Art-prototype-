import { useParams, useNavigate } from 'react-router';
import { useState, useRef } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useGallery } from '../../context/GalleryContext';
import { getArtworkById } from '../../data/artworks';

export default function ArtworkDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isSaved, toggleSave, collections, addToCollection } = useGallery();
  const [showCollectionModal, setShowCollectionModal] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);
  const modelViewerRef = useRef<HTMLElement & { activateAR?: () => void }>(null);

  const artwork = getArtworkById(id || '1');

  if (!artwork) {
    return <div>Artwork not found</div>;
  }

  const handleAddToCollection = (collectionId: string) => {
    addToCollection(artwork.id, collectionId);
    setShowCollectionModal(false);
  };

  const artworkDetails = {
    materials: artwork.category === 'Sculpture' ? 'Marble, Bronze base' : artwork.category === 'Painting' ? 'Oil on canvas' : 'Mixed media',
    dimensions: artwork.category === 'Sculpture' ? '180 cm × 60 cm × 45 cm' : '120 cm × 90 cm',
    provenance: 'Private Collection, Europe',
    condition: 'Excellent',
    authentication: 'Certificate of Authenticity included',
  };

  return (
    <div className="min-h-screen bg-[#1A1A19] relative overflow-hidden">
      {/* Full-screen 3D Viewer Area */}
      <div className="absolute inset-0">
        <model-viewer
          ref={modelViewerRef}
          src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
          ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
          alt="A 3D model of an astronaut"
          ar
          ar-modes="scene-viewer webxr quick-look"
          camera-controls
          auto-rotate
          shadow-intensity="1"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        ></model-viewer>
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none"></div>
      </div>

      {/* Top Bar with Save & Share */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => navigate('/')}
            className="w-9 h-9 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            <button
              onClick={() => toggleSave(artwork.id)}
              className="w-9 h-9 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              <svg
                className={`w-5 h-5 ${isSaved(artwork.id) ? 'fill-red-500 text-red-500' : ''}`}
                viewBox="0 0 24 24"
                fill={isSaved(artwork.id) ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
              </svg>
            </button>
            <button className="w-9 h-9 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* AR Mode Indicator */}
      <div className="absolute top-20 left-4 z-30">
        <div className="bg-black/40 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-white text-xs">3D View Active</span>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="absolute bottom-0 left-0 right-0 z-40 pb-6">
        {/* Primary Action Button - View in Your Space */}
        <div className="px-4 mb-4">
          <button
            onClick={() => modelViewerRef.current?.activateAR?.()}
            className="w-full bg-[#C2A572] hover:bg-[#B39562] text-white py-4 rounded-full text-sm uppercase tracking-wider transition-colors shadow-xl flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            View in Your Space
          </button>
        </div>

        {/* Floating Info Panel */}
        <div className="mx-4">
          <div className="bg-white/95 backdrop-blur-md rounded-lg border border-[#E5E4E0] shadow-2xl overflow-hidden">
            <div className="p-5">
              {/* Title & Price */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 pr-4">
                  <h1 className="text-xl mb-1 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                    {artwork.title}
                  </h1>
                  <p className="text-sm text-[#9B9B98]">{artwork.artist}, {artwork.year}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl text-[#1A1A19]" style={{ fontFamily: 'Georgia, serif' }}>
                    {artwork.price}
                  </div>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 py-3 border-t border-[#E5E4E0]">
                <div>
                  <div className="text-[10px] text-[#9B9B98] uppercase tracking-wider mb-1">Materials</div>
                  <div className="text-xs text-[#3A3A38]">{artworkDetails.materials}</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#9B9B98] uppercase tracking-wider mb-1">Dimensions</div>
                  <div className="text-xs text-[#3A3A38]">{artworkDetails.dimensions}</div>
                </div>
              </div>

              {/* Description */}
              <div className="pt-3 border-t border-[#E5E4E0]">
                <p className="text-xs text-[#3A3A38] leading-relaxed">
                  {artwork.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-4 pt-4 border-t border-[#E5E4E0]">
                <button
                  onClick={() => setShowCollectionModal(true)}
                  className="flex-1 px-4 py-3 bg-[#1A1A19] text-white text-xs uppercase tracking-wider hover:bg-[#3A3A38] transition-colors rounded"
                >
                  Add to Collection
                </button>
                <button
                  onClick={() => setShowLearnMore(true)}
                  className="flex-1 px-4 py-3 border-2 border-[#1A1A19] text-[#1A1A19] text-xs uppercase tracking-wider hover:bg-[#F8F8F6] transition-colors rounded"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* AR Badge */}
            <div className="bg-green-50 border-t border-green-200 px-5 py-2 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-xs text-green-800">AR viewing available for this piece</span>
            </div>
          </div>
        </div>

        {/* Interaction Hint */}
        <div className="text-center mt-4">
          <p className="text-xs text-white/70">
            Pinch to zoom • Drag to rotate
          </p>
        </div>
      </div>

      {/* Collection Modal */}
      {showCollectionModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowCollectionModal(false)}>
          <div className="bg-[#2A2420] border border-white/10 rounded-2xl p-5 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>Add to Collection</h3>
            <div className="space-y-2 mb-4">
              {collections.map(collection => (
                <button
                  key={collection.id}
                  onClick={() => handleAddToCollection(collection.id)}
                  className={`w-full p-3 bg-gradient-to-br ${collection.gradient} border ${collection.border} rounded-xl text-left hover:scale-[1.02] transition-all`}
                >
                  <div className="text-sm text-white font-medium">{collection.name}</div>
                  <div className="text-xs text-white/60">{collection.artworkIds.length} artworks</div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowCollectionModal(false)}
              className="w-full py-2.5 bg-white/10 text-white text-sm rounded-xl hover:bg-white/20 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Learn More Modal */}
      {showLearnMore && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end" onClick={() => setShowLearnMore(false)}>
          <div className="w-full bg-white rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
            <h3 className="text-xl mb-4" style={{ fontFamily: 'Georgia, serif' }}>{artwork.title}</h3>

            <div className="space-y-4 mb-6">
              <div>
                <div className="text-xs text-[#9B9B98] uppercase tracking-wider mb-1">Artist</div>
                <div className="text-sm text-[#1A1A19]">{artwork.artist}</div>
              </div>

              <div>
                <div className="text-xs text-[#9B9B98] uppercase tracking-wider mb-1">Year</div>
                <div className="text-sm text-[#1A1A19]">{artwork.year}</div>
              </div>

              <div>
                <div className="text-xs text-[#9B9B98] uppercase tracking-wider mb-1">Category</div>
                <div className="text-sm text-[#1A1A19]">{artwork.category}</div>
              </div>

              <div>
                <div className="text-xs text-[#9B9B98] uppercase tracking-wider mb-1">Materials</div>
                <div className="text-sm text-[#1A1A19]">{artworkDetails.materials}</div>
              </div>

              <div>
                <div className="text-xs text-[#9B9B98] uppercase tracking-wider mb-1">Dimensions</div>
                <div className="text-sm text-[#1A1A19]">{artworkDetails.dimensions}</div>
              </div>

              <div>
                <div className="text-xs text-[#9B9B98] uppercase tracking-wider mb-1">Provenance</div>
                <div className="text-sm text-[#1A1A19]">{artworkDetails.provenance}</div>
              </div>

              <div>
                <div className="text-xs text-[#9B9B98] uppercase tracking-wider mb-1">Condition</div>
                <div className="text-sm text-[#1A1A19]">{artworkDetails.condition}</div>
              </div>

              <div>
                <div className="text-xs text-[#9B9B98] uppercase tracking-wider mb-1">Authentication</div>
                <div className="text-sm text-[#1A1A19]">{artworkDetails.authentication}</div>
              </div>

              <div>
                <div className="text-xs text-[#9B9B98] uppercase tracking-wider mb-1">Description</div>
                <div className="text-sm text-[#1A1A19] leading-relaxed">{artwork.description}</div>
              </div>
            </div>

            <button
              onClick={() => setShowLearnMore(false)}
              className="w-full py-3 bg-[#1A1A19] text-white text-sm rounded-xl hover:bg-[#3A3A38] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}