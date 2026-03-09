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
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const modelViewerRef = useRef<HTMLElement & { activateAR?: () => void }>(null);

  const artwork = getArtworkById(id || '1');

  if (!artwork) {
    return <div>Artwork not found</div>;
  }

  const images = artwork.images || [artwork.image];

  const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);

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
    <div className="min-h-screen bg-[#1A1A19] relative overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-center">
      {/* Background & 3D Viewer Area - Desktop: Left Column, Mobile: Absolute Fill */}
      <div className="absolute inset-0 z-0 lg:static lg:flex-1 lg:h-[100dvh] lg:relative flex flex-col items-center justify-center lg:w-auto overflow-hidden">
        {/* Dark overlay for better text contrast - Hidden on Desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A19] via-[#1A1A19]/60 to-black/80 pointer-events-none lg:hidden"></div>

        {/* Hidden model-viewer just for AR activation */}
        <model-viewer
          ref={modelViewerRef}
          src={artwork.modelSrc || "https://modelviewer.dev/shared-assets/models/Astronaut.glb"}
          {...(artwork.iosSrc ? { "ios-src": artwork.iosSrc } : (!artwork.modelSrc ? { "ios-src": "https://modelviewer.dev/shared-assets/models/Astronaut.usdz" } : {}))}
          alt={artwork.title}
          ar
          ar-modes="scene-viewer webxr quick-look"
          style={{ position: 'absolute', width: '1px', height: '1px', opacity: 0, pointerEvents: 'none' }}
        ></model-viewer>

        {/* Unified Responsive Image Display */}
        <div className="w-full h-full flex items-center justify-center p-6 lg:p-0 pointer-events-none group">
          {/* Image & Controls Wrapper */}
          <div className="relative inline-block max-h-full max-w-full">
            <ImageWithFallback
              src={images[activeImageIndex]}
              alt={artwork.title}
              className="max-w-full max-h-[85vh] lg:rounded-xl object-contain pointer-events-auto transition-all duration-300 relative z-10"
            />
            
            {images.length > 1 && (
              <>
                {/* Carousel Arrows */}
                <button 
                  onClick={prevImage} 
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] pointer-events-auto transition-all"
                >
                  <svg className="w-8 h-8 lg:w-12 lg:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button 
                  onClick={nextImage} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] pointer-events-auto transition-all"
                >
                  <svg className="w-8 h-8 lg:w-12 lg:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>

                {/* Dot Indicators */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2 lg:gap-3 pointer-events-auto bg-black/20 backdrop-blur-md px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border border-white/10 z-20">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`transition-all rounded-full ${
                        idx === activeImageIndex 
                          ? 'w-4 lg:w-6 h-1.5 bg-white' 
                          : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Top Bar with Save & Share (Mobile Only) */}
      <div className="absolute top-0 left-0 right-0 z-30 lg:hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
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

      {/* AR Mode Indicator (Removed since we don't have a 3D preview mode anymore) */}

      {/* Details/Action Panel Area - Desktop: Right Column, Mobile: Absolute Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-40 pb-6 pointer-events-none lg:relative lg:inset-auto lg:bottom-auto lg:left-auto lg:right-auto lg:pb-0 lg:w-[480px] lg:flex-shrink-0 lg:h-[100dvh] lg:flex lg:flex-col lg:bg-white lg:border-l lg:border-gray-200 lg:shadow-[-20px_0_50px_rgba(0,0,0,0.05)] lg:overflow-y-auto custom-scrollbar">
        <div className="md:max-w-2xl mx-auto pointer-events-auto lg:w-full lg:max-w-none lg:h-full lg:flex lg:flex-col">
          
        {/* Details Panel */}
        <div className="mx-4 lg:mx-0 lg:flex-1 lg:flex lg:flex-col lg:min-h-full lg:pt-14">
          <div className="bg-white/95 backdrop-blur-md rounded-lg border border-[#E5E4E0] shadow-2xl lg:shadow-none overflow-hidden lg:rounded-none lg:border-none flex flex-col h-full">
            <div className="p-5 lg:p-10 flex-1 flex flex-col">
              <button 
                onClick={() => navigate('/')}
                className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#1A1A19] transition-colors mb-8 group w-fit"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Gallery
              </button>

              {/* Title & Price */}
              <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 pr-4">
                    <h1 className="text-3xl font-bold font-serif text-[#1A1A19] mb-1">{artwork.title}</h1>
                    <p className="text-sm text-gray-500 font-medium">
                      {artwork.artist}, {artwork.year}
                    </p>
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-lg font-medium text-[#1A1A19] block">{artwork.price}</span>
                  </div>
                </div>

                {/* Museum Label Metadata (2-Column Grid) */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 py-4 my-2 border-y border-gray-100">
                  <div>
                    <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">Materials</h3>
                    <p className="text-xs text-[#1A1A19] font-medium leading-relaxed">{artworkDetails.materials}</p>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">Dimensions</h3>
                    <p className="text-xs text-[#1A1A19] font-medium leading-relaxed">{artworkDetails.dimensions}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {artwork.description}
                </p>

                {/* Primary Action Button - View in Your Space */}
                <button
                  onClick={() => {
                    const modelViewer = modelViewerRef.current;
                    if (modelViewer && modelViewer.activateAR) {
                      modelViewer.activateAR();
                    }
                  }}
                  className="w-full bg-[#C6A87C] hover:bg-[#B59870] text-[#1A1A19] py-3.5 px-6 rounded-lg font-medium tracking-wide transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 mb-4"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8V5a2 2 0 0 1 2-2h3"></path>
                    <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                    <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                    <path d="M21 16v3a2 2 0 0 1-2 2h-3"></path>
                    <path d="M12 11v6"></path>
                    <path d="M9 14l3-3 3 3"></path>
                  </svg>
                  VIEW IN YOUR SPACE
                </button>
              {/* Secondary Actions Row */}
              <div className="flex gap-2.5 mt-auto pt-6 lg:pb-10">
                <button 
                  onClick={() => setShowCollectionModal(true)}
                  className="flex-1 bg-[#1A1A19] hover:bg-black text-white py-3.5 px-4 rounded-md text-xs font-medium tracking-wider uppercase transition-colors"
                >
                  Add to Collection
                </button>
                <button 
                  onClick={() => setShowLearnMore(true)}
                  className="flex-1 bg-transparent border border-[#E5E4E0] hover:bg-gray-50 text-[#1A1A19] py-3.5 px-4 rounded-md text-xs font-medium tracking-wider uppercase transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* AR viewing indicator (docked to bottom of scrollable area) */}
            <div className="bg-green-50 border-t border-green-200 px-5 py-3 flex items-center justify-center gap-2 mt-auto shrink-0">
              <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-xs font-medium text-green-800">AR viewing available for this piece</span>
            </div>
          </div>
        </div>

        {/* Interaction Hint (Mobile Only - Hidden on Desktop Sidebar) */}
        <div className="text-center mt-4 lg:hidden">
          <p className="text-xs text-white/70">
            Pinch to zoom • Drag to rotate
          </p>
        </div>
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