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
  const [show3DPreview, setShow3DPreview] = useState(false);
  const [panelState, setPanelState] = useState<'hidden' | 'peek' | 'expanded'>('peek');
  const [fullscreenImage, setFullscreenImage] = useState(false);
  const touchStartY = useRef(0);
  const imageTouchStartX = useRef(0);
  const imageTouchStartY = useRef(0);
  const modelViewerRef = useRef<HTMLElement & { activateAR?: () => void }>(null);

  const artwork = getArtworkById(id || '1');
  if (!artwork) return <div>Artwork not found</div>;

  const images = artwork.images || [artwork.image];
  const nextImage = () => setActiveImageIndex((p) => (p + 1) % images.length);
  const prevImage = () => setActiveImageIndex((p) => (p - 1 + images.length) % images.length);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartY.current = e.touches[0].clientY; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const d = e.changedTouches[0].clientY - touchStartY.current;
    if (d > 40) setPanelState(p => p === 'expanded' ? 'peek' : 'hidden');
    else if (d < -40) setPanelState(p => p === 'hidden' ? 'peek' : 'expanded');
  };
  const handleAddToCollection = (collectionId: string) => {
    addToCollection(artwork.id, collectionId);
    setShowCollectionModal(false);
  };

  const artworkDetails = artwork.id === '1' ? {
    materials: 'Oil on poplar wood panel',
    dimensions: '77 cm × 53 cm (30 in × 21 in)',
    provenance: 'Musée du Louvre, Paris, France',
    condition: 'Preserved under climate-controlled glass',
    authentication: 'Authenticated by the Louvre. Universally attributed to Leonardo da Vinci since the 16th century.',
    medium: 'Sfumato technique',
    location: 'Salle des États, Louvre Museum',
  } : artwork.id === '2' ? {
    materials: 'Bronze cast from original plaster',
    dimensions: '186 cm × 98 cm × 145 cm',
    provenance: 'Musée Rodin, Paris, France',
    condition: 'Excellent — patinated bronze',
    authentication: 'Cast authorized by the Musée Rodin foundation. One of 28 known full-size casts worldwide.',
    medium: 'Lost-wax casting',
    location: 'Musée Rodin, Paris',
  } : {
    materials: artwork.category === 'Sculpture' ? 'Marble, Bronze base' : 'Oil on canvas',
    dimensions: artwork.category === 'Sculpture' ? '180 cm × 60 cm × 45 cm' : '120 cm × 90 cm',
    provenance: 'Private Collection, Europe',
    condition: 'Excellent',
    authentication: 'Certificate of Authenticity included',
    medium: artwork.category === 'Sculpture' ? 'Carved stone' : 'Oil painting',
    location: 'Private Gallery',
  };

  /* ─── DESKTOP LAYOUT ─────────────────────────────────────────────── */
  const DesktopSidebar = () => (
    <aside
      style={{ width: '480px', minWidth: '480px' }}
      className="hidden lg:flex flex-col h-screen bg-gradient-to-b from-[#F5EEE3] to-[#EDE4D3] border-l border-[#D4C4A8]/40 overflow-hidden flex-shrink-0"
    >
      {/* Header */}
      <div className="px-10 pt-10 pb-6 border-b border-[#D4C4A8]/30 flex-shrink-0">
        <button onClick={() => navigate('/')} className="flex items-center gap-1.5 text-xs font-semibold text-[#8B7D6B] hover:text-[#2A2420] transition-colors mb-6 group uppercase tracking-widest">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Gallery
        </button>
        {artwork.modelSrc && (
          <div className="inline-flex items-center gap-1.5 bg-[#2A2420] text-[#C6A87C] text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-[#C6A87C] rounded-full animate-pulse inline-block" />3D · AR Ready
          </div>
        )}
        <h1 className="text-4xl font-bold font-serif text-[#2A2420] leading-tight mb-1.5">{artwork.title}</h1>
        <p className="text-sm text-[#8B7D6B] font-medium mb-5">{artwork.artist} &nbsp;·&nbsp; {artwork.year}</p>
        <div className="flex items-end justify-between">
          <span className="text-2xl font-semibold text-[#2A2420]">{artwork.price}</span>
          <span className="text-[10px] font-semibold text-[#8B7D6B] uppercase tracking-widest border border-[#D4C4A8] rounded-full px-3 py-1">{artwork.category}</span>
        </div>
      </div>

      {/* Scrollable body */}
      <div className="px-10 py-8 flex-1 overflow-y-auto space-y-7">
        <div>
          <h3 className="text-[11px] font-bold text-[#8B7D6B] uppercase tracking-[0.2em] mb-2.5">About</h3>
          <p className="text-sm text-[#4A4035] leading-[1.75]">{artwork.description}</p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4C4A8]/50 to-transparent" />
        <div>
          <h3 className="text-[11px] font-bold text-[#8B7D6B] uppercase tracking-[0.2em] mb-4">Details</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            {[
              { label: 'Medium', value: artworkDetails.medium },
              { label: 'Materials', value: artworkDetails.materials },
              { label: 'Dimensions', value: artworkDetails.dimensions },
              { label: 'Condition', value: artworkDetails.condition },
              { label: 'Provenance', value: artworkDetails.provenance },
              { label: 'Location', value: artworkDetails.location },
            ].map(({ label, value }) => (
              <div key={label}>
                <dt className="text-[11px] font-semibold text-[#A89880] uppercase tracking-widest mb-1">{label}</dt>
                <dd className="text-sm text-[#2A2420] font-medium leading-relaxed">{value}</dd>
              </div>
            ))}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4C4A8]/50 to-transparent" />
        <div className="bg-[#EDE4D3]/60 border border-[#D4C4A8]/40 rounded-xl px-5 py-4 flex items-start gap-3">
          <svg className="w-5 h-5 text-[#C6A87C] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <div>
            <p className="text-[11px] font-bold text-[#8B7D6B] uppercase tracking-[0.15em] mb-0.5">Verified</p>
            <p className="text-sm text-[#4A4035] leading-relaxed">{artworkDetails.authentication}</p>
          </div>
        </div>
      </div>

      {/* Footer actions */}
      <div className="px-10 py-7 border-t border-[#D4C4A8]/30 flex-shrink-0 bg-[#EDE4D3]/40 space-y-3">
        <button onClick={() => setShow3DPreview(!show3DPreview)} className="w-full bg-[#2A2420] hover:bg-[#1A1A19] text-[#E8D5B5] py-4 px-6 rounded-xl font-semibold tracking-wide transition-all active:scale-[0.98] flex items-center justify-center gap-2.5 shadow-lg">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
          {show3DPreview ? 'Back to Gallery View' : 'View in 3D'}
        </button>
        <div className="flex gap-3">
          <button onClick={() => setShowCollectionModal(true)} className="flex-1 bg-[#C6A87C] hover:bg-[#B59870] text-[#2A2420] py-3.5 px-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-all active:scale-[0.98]">Save</button>
          <button onClick={() => setShowLearnMore(true)} className="flex-1 bg-transparent border border-[#D4C4A8] hover:bg-[#EDE4D3]/60 text-[#2A2420] py-3.5 px-4 rounded-xl text-xs font-bold tracking-widest uppercase">Learn More</button>
        </div>
      </div>
    </aside>
  );

  return (
    <>
      {/* ════════════════ DESKTOP LAYOUT ════════════════ */}
      <div className="hidden lg:flex h-screen bg-[#1A1A19] overflow-hidden">
        {/* Left: image area */}
        <div className="flex-1 flex items-center justify-center relative overflow-hidden">
          {/* @ts-ignore */}
          <model-viewer
            ref={modelViewerRef}
            src={artwork.modelSrc || "https://modelviewer.dev/shared-assets/models/Astronaut.glb"}
            {...(artwork.iosSrc ? { "ios-src": artwork.iosSrc } : {})}
            alt={artwork.title}
            ar ar-modes="scene-viewer webxr quick-look"
            camera-controls={show3DPreview ? true : undefined}
            auto-rotate={show3DPreview ? true : undefined}
            shadow-intensity="1"
            style={show3DPreview
              ? { width: '100%', height: '100%', display: 'block', outline: 'none', cursor: 'grab' }
              : { position: 'absolute', width: '1px', height: '1px', opacity: 0, pointerEvents: 'none' }}
          >{/* @ts-ignore */}</model-viewer>

          {show3DPreview && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
              <p className="text-sm text-white/90 bg-black/40 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10">
                Drag to rotate • Scroll to zoom
              </p>
            </div>
          )}

          {!show3DPreview && (
            <div className="w-full h-full flex items-center justify-center p-16">
              <div
                className="relative w-full h-full flex items-center justify-center cursor-zoom-in"
                onClick={() => setFullscreenImage(true)}
              >
                <ImageWithFallback
                  key={activeImageIndex}
                  src={images[activeImageIndex]}
                  alt={artwork.title}
                  style={{ animation: 'fadeIn 0.4s ease-out forwards' }}
                  className="max-w-full max-h-full object-contain rounded-xl"
                />
                <style dangerouslySetInnerHTML={{__html:`@keyframes fadeIn{from{opacity:0;transform:scale(0.98)}to{opacity:1;transform:scale(1)}}`}} />
              </div>

              {images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                  <button onClick={prevImage} className="p-2 text-white/70 hover:text-white transition-all">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <div className="flex gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    {images.map((_, idx) => (
                      <button key={idx} onClick={() => setActiveImageIndex(idx)}
                        className={`rounded-full transition-all ${idx === activeImageIndex ? 'w-6 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'}`}
                      />
                    ))}
                  </div>
                  <button onClick={nextImage} className="p-2 text-white/70 hover:text-white transition-all">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right: sidebar */}
        <DesktopSidebar />
      </div>

      {/* ════════════════ MOBILE LAYOUT ════════════════ */}
      <div className="lg:hidden h-[100dvh] overflow-hidden bg-[#1A1A19] relative">
        {/* Full-screen image background */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A19] via-[#1A1A19]/50 to-black/70 z-10 pointer-events-none" />
          {/* @ts-ignore */}
          <model-viewer
            ref={modelViewerRef}
            src={artwork.modelSrc || "https://modelviewer.dev/shared-assets/models/Astronaut.glb"}
            alt={artwork.title}
            ar ar-modes="scene-viewer webxr quick-look"
            style={{ position: 'absolute', width: '1px', height: '1px', opacity: 0, pointerEvents: 'none' }}
          >{/* @ts-ignore */}</model-viewer>

          <div
            className="w-full h-full p-6 flex items-center justify-center"
            onTouchStart={(e) => { imageTouchStartX.current = e.touches[0].clientX; imageTouchStartY.current = e.touches[0].clientY; }}
            onTouchEnd={(e) => {
              const dx = e.changedTouches[0].clientX - imageTouchStartX.current;
              const dy = e.changedTouches[0].clientY - imageTouchStartY.current;
              if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) { if (dx > 0) prevImage(); else nextImage(); }
              else if (Math.abs(dx) < 10 && Math.abs(dy) < 10) setFullscreenImage(true);
            }}
            onClick={() => setFullscreenImage(true)}
          >
            <ImageWithFallback
              key={activeImageIndex}
              src={images[activeImageIndex]}
              alt={artwork.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {images.length > 1 && (
            <div className={`absolute bottom-36 left-1/2 -translate-x-1/2 flex gap-2 z-20 transition-opacity duration-300 ${panelState === 'expanded' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              {images.map((_, idx) => (
                <button key={idx} onClick={() => setActiveImageIndex(idx)}
                  className={`rounded-full transition-all ${idx === activeImageIndex ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Mobile top bar */}
        <div className={`absolute top-0 left-0 right-0 z-30 flex items-center justify-between p-4 transition-all duration-300 ${panelState === 'hidden' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
          <button onClick={() => navigate('/')} className="w-9 h-9 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="flex gap-2">
            <button onClick={() => toggleSave(artwork.id)} className="w-9 h-9 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
              <svg className={`w-5 h-5 ${isSaved(artwork.id) ? 'fill-[#C6A87C] text-[#C6A87C]' : ''}`} viewBox="0 0 24 24" fill={isSaved(artwork.id) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
              </svg>
            </button>
            <button className="w-9 h-9 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
            </button>
          </div>
        </div>

        {/* Mobile bottom sheet */}
        <div
          className={`absolute bottom-0 left-0 right-0 z-40 transition-transform duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${
            panelState === 'expanded' ? 'translate-y-0' : panelState === 'peek' ? 'translate-y-[calc(100%-120px)]' : 'translate-y-full'
          }`}
        >
          <div className="bg-white/96 backdrop-blur-3xl rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.4)] flex flex-col max-h-[85vh]">

            {/* Tap handle */}
            <div className="cursor-pointer select-none flex-shrink-0"
              onClick={() => setPanelState(p => p === 'expanded' ? 'peek' : 'expanded')}
              onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}
            >
              {/* Bounce arrows — peek state only */}
              <div className={`flex flex-col items-center pt-3 pb-1 transition-all duration-300 overflow-hidden ${panelState === 'expanded' ? 'max-h-0 opacity-0 py-0' : 'max-h-16 opacity-100'}`}>
                <div className="animate-bounce flex flex-col items-center gap-0.5">
                  <svg className="w-4 h-4 text-[#C6A87C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
                  <svg className="w-4 h-4 text-[#C6A87C]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
                </div>
                <p className="text-[10px] font-bold text-[#C6A87C] uppercase tracking-[0.2em] mt-0.5">Tap for details</p>
              </div>
              {/* Down chevron — expanded state only */}
              <div className={`flex justify-center pt-2 transition-all duration-300 overflow-hidden ${panelState === 'expanded' ? 'max-h-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                <svg className="w-5 h-5 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
              </div>
              {/* Title row */}
              <div className="px-6 pb-4 pt-2 flex items-start justify-between border-b border-gray-100/60">
                <div className="flex-1 pr-4">
                  <h2 className="text-xl font-bold font-serif text-[#1A1A19] truncate">{artwork.title}</h2>
                  <p className="text-xs text-gray-500 font-medium">{artwork.artist}</p>
                </div>
                <div className="text-right shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-[#1A1A19] block">{artwork.price}</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest">{artwork.category}</span>
                </div>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="px-6 pt-5 pb-12 flex-1 overflow-y-auto"
              onClick={() => { if (panelState !== 'expanded') setPanelState('expanded'); }}>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 py-4 mb-4 border-b border-gray-100">
                <div>
                  <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">Materials</h3>
                  <p className="text-xs text-[#1A1A19] font-medium leading-relaxed">{artworkDetails.materials}</p>
                </div>
                <div>
                  <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">Dimensions</h3>
                  <p className="text-xs text-[#1A1A19] font-medium leading-relaxed">{artworkDetails.dimensions}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">{artwork.description}</p>
              <button
                onClick={() => { const mv = modelViewerRef.current; if (mv && mv.activateAR) mv.activateAR(); }}
                className="w-full bg-[#C6A87C] hover:bg-[#B59870] text-[#1A1A19] py-3.5 px-6 rounded-xl font-semibold tracking-wide transition-all active:scale-[0.98] flex items-center justify-center gap-2 mb-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8V5a2 2 0 012-2h3"/><path d="M21 8V5a2 2 0 00-2-2h-3"/>
                  <path d="M3 16v3a2 2 0 002 2h3"/><path d="M21 16v3a2 2 0 01-2 2h-3"/>
                </svg>
                View in Your Room (AR)
              </button>
              <div className="flex gap-2.5">
                <button onClick={() => setShowCollectionModal(true)} className="flex-1 bg-[#1A1A19] text-white py-3.5 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase">Add to Collection</button>
                <button onClick={() => setShowLearnMore(true)} className="flex-1 border border-gray-200 text-[#1A1A19] py-3.5 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════ FULLSCREEN IMAGE OVERLAY ════════════ */}
      {fullscreenImage && (
        <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center" onClick={() => setFullscreenImage(false)}>
          <button className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white"
            onClick={(e) => { e.stopPropagation(); setFullscreenImage(false); }}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          {images.length > 1 && (
            <div className="absolute top-4 right-4 z-10 bg-black/50 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10">
              {activeImageIndex + 1} / {images.length}
            </div>
          )}
          <img src={images[activeImageIndex]} alt={artwork.title} className="max-w-full max-h-full object-contain select-none"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => { imageTouchStartX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => { const dx = e.changedTouches[0].clientX - imageTouchStartX.current; if (Math.abs(dx) > 40) { if (dx > 0) prevImage(); else nextImage(); } }}
          />
        </div>
      )}

      {/* ════════════ COLLECTION MODAL ════════════ */}
      {showCollectionModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[150] flex items-center justify-center p-4" onClick={() => setShowCollectionModal(false)}>
          <div className="bg-[#2A2420] border border-white/10 rounded-2xl p-5 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg text-white mb-4 font-serif">Add to Collection</h3>
            <div className="space-y-2 mb-4">
              {collections.map(col => (
                <button key={col.id} onClick={() => handleAddToCollection(col.id)}
                  className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm transition-colors">
                  {col.name}
                </button>
              ))}
              {collections.length === 0 && <p className="text-white/50 text-sm text-center py-4">No collections yet.</p>}
            </div>
            <button onClick={() => setShowCollectionModal(false)} className="w-full py-3 bg-white/10 text-white rounded-xl text-sm hover:bg-white/20 transition-colors">Cancel</button>
          </div>
        </div>
      )}

      {/* ════════════ LEARN MORE MODAL ════════════ */}
      {showLearnMore && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[150] flex items-center justify-center p-4 lg:p-8" onClick={() => setShowLearnMore(false)}>
          <div className="bg-gradient-to-b from-[#2A2420] to-[#1A1613] border border-[#C6A87C]/20 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 flex items-center justify-between px-8 py-5 bg-[#2A2420]/90 backdrop-blur-sm border-b border-[#C6A87C]/10 rounded-t-3xl">
              <div>
                <p className="text-[10px] font-bold text-[#C6A87C] uppercase tracking-[0.3em] mb-0.5">Museum Entry</p>
                <h2 className="text-2xl font-bold text-white font-serif">{artwork.title}</h2>
              </div>
              <button onClick={() => setShowLearnMore(false)} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="px-8 py-8 space-y-8">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: 'Artist', value: artwork.artist },
                  { label: 'Year', value: artwork.year },
                  { label: 'Medium', value: artworkDetails.medium },
                  { label: 'Dimensions', value: artworkDetails.dimensions },
                  { label: 'Location', value: artworkDetails.location },
                  { label: 'Condition', value: artworkDetails.condition },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <dt className="text-[10px] font-bold text-[#C6A87C] uppercase tracking-widest mb-1">{label}</dt>
                    <dd className="text-sm text-white font-medium">{value}</dd>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-[11px] font-bold text-[#C6A87C] uppercase tracking-[0.2em] mb-3">About This Work</h3>
                <p className="text-[#D4C4A8] leading-relaxed">{artwork.description}</p>
              </div>
              {artwork.extendedDetails && (
                <>
                  {artwork.extendedDetails.history && <div><h3 className="text-[11px] font-bold text-[#C6A87C] uppercase tracking-[0.2em] mb-3">History & Context</h3><p className="text-[#D4C4A8] leading-relaxed">{artwork.extendedDetails.history}</p></div>}
                  {artwork.extendedDetails.significance && <div><h3 className="text-[11px] font-bold text-[#C6A87C] uppercase tracking-[0.2em] mb-3">Cultural Significance</h3><p className="text-[#D4C4A8] leading-relaxed">{artwork.extendedDetails.significance}</p></div>}
                  {artwork.extendedDetails.exhibitions && <div><h3 className="text-[11px] font-bold text-[#C6A87C] uppercase tracking-[0.2em] mb-3">Exhibition History</h3><p className="text-[#D4C4A8] leading-relaxed">{artwork.extendedDetails.exhibitions}</p></div>}
                  {artwork.extendedDetails.conservation && <div><h3 className="text-[11px] font-bold text-[#C6A87C] uppercase tracking-[0.2em] mb-3">Conservation</h3><p className="text-[#D4C4A8] leading-relaxed">{artwork.extendedDetails.conservation}</p></div>}
                  {artwork.extendedDetails.funFact && (
                    <div className="bg-[#C6A87C]/10 border border-[#C6A87C]/20 rounded-xl p-5">
                      <h3 className="text-[11px] font-bold text-[#C6A87C] uppercase tracking-[0.2em] mb-2">Did You Know?</h3>
                      <p className="text-[#D4C4A8] leading-relaxed italic">"{artwork.extendedDetails.funFact}"</p>
                    </div>
                  )}
                </>
              )}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-3">
                <svg className="w-5 h-5 text-[#C6A87C] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <p className="text-[11px] font-bold text-[#C6A87C] uppercase tracking-widest mb-1">Provenance & Authentication</p>
                  <p className="text-sm text-[#D4C4A8] leading-relaxed">{artworkDetails.authentication}</p>
                  <p className="text-xs text-white/40 mt-1">{artworkDetails.provenance}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}