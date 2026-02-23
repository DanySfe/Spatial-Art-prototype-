export default function BrandingSystem() {
  const colorPalette = [
    { name: 'Gallery White', hex: '#F8F8F6', usage: 'Primary Background' },
    { name: 'Stone Grey', hex: '#E5E4E0', usage: 'Secondary Background' },
    { name: 'Warm Grey', hex: '#9B9B98', usage: 'Secondary Text' },
    { name: 'Charcoal', hex: '#3A3A38', usage: 'Body Text' },
    { name: 'Museum Black', hex: '#1A1A19', usage: 'Headings, UI Elements' },
    { name: 'Accent Gold', hex: '#C2A572', usage: 'Interactive States' },
  ];
  
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="border-b border-neutral-300 pb-2">
        <h2 className="text-xl mb-0.5">Branding System</h2>
        <p className="text-xs text-neutral-600">Visual identity foundation for WebAR interface</p>
      </div>
      
      {/* Color Palette */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">01. Color Palette</h3>
        </div>
        
        <div className="grid grid-cols-6 gap-3">
          {colorPalette.map((color) => (
            <div key={color.hex} className="border border-neutral-300">
              <div 
                className="h-20 w-full" 
                style={{ backgroundColor: color.hex }}
              />
              <div className="p-2 space-y-0.5">
                <div className="text-xs">{color.name}</div>
                <div className="text-[10px] font-mono text-neutral-500">{color.hex}</div>
                <div className="text-[10px] text-neutral-600">{color.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Typography */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">02. Typography Pairing</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-neutral-300 p-4">
            <div className="mb-2 flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-wider text-neutral-500">Primary — Headings</span>
              <span className="text-[10px] text-neutral-400">Georgia, Playfair Display</span>
            </div>
            <div style={{ fontFamily: 'Georgia, serif' }}>
              <div className="text-3xl mb-2">Artwork Titles</div>
              <div className="space-y-0.5 text-xs">
                <div className="text-lg">Aa Bb Cc Dd Ee Ff</div>
                <div className="text-sm">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                <div className="text-sm">abcdefghijklmnopqrstuvwxyz</div>
                <div className="text-sm">0123456789 !@#$%</div>
              </div>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-4">
            <div className="mb-2 flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-wider text-neutral-500">Secondary — Body & UI</span>
              <span className="text-[10px] text-neutral-400">Inter, System Sans</span>
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif' }}>
              <div className="text-3xl mb-2">Interface Text</div>
              <div className="space-y-0.5 text-xs">
                <div className="text-lg">Aa Bb Cc Dd Ee Ff</div>
                <div className="text-sm">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                <div className="text-sm">abcdefghijklmnopqrstuvwxyz</div>
                <div className="text-sm">0123456789 !@#$%</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Type Scale */}
        <div className="mt-3 grid grid-cols-4 gap-2">
          <div className="border border-neutral-200 p-2 text-center">
            <div className="text-2xl mb-0.5">Aa</div>
            <div className="text-[10px] text-neutral-500">H1 / 32px</div>
          </div>
          <div className="border border-neutral-200 p-2 text-center">
            <div className="text-xl mb-0.5">Aa</div>
            <div className="text-[10px] text-neutral-500">H2 / 24px</div>
          </div>
          <div className="border border-neutral-200 p-2 text-center">
            <div className="text-base mb-0.5">Aa</div>
            <div className="text-[10px] text-neutral-500">Body / 16px</div>
          </div>
          <div className="border border-neutral-200 p-2 text-center">
            <div className="text-sm mb-0.5">Aa</div>
            <div className="text-[10px] text-neutral-500">Caption / 14px</div>
          </div>
        </div>
      </section>
      
      {/* Icon Style */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">03. Icon Style Rules</h3>
        </div>
        
        <div className="grid grid-cols-8 gap-3">
          <div className="text-center">
            <div className="border border-neutral-300 p-4 mb-1">
              <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="text-[10px]">Search</div>
          </div>
          
          <div className="text-center">
            <div className="border border-neutral-300 p-4 mb-1">
              <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
              </svg>
            </div>
            <div className="text-[10px]">Save</div>
          </div>
          
          <div className="text-center">
            <div className="border border-neutral-300 p-4 mb-1">
              <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4m0-4h.01" />
              </svg>
            </div>
            <div className="text-[10px]">Info</div>
          </div>
          
          <div className="text-center">
            <div className="border border-neutral-300 p-4 mb-1">
              <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="text-[10px]">Close</div>
          </div>
          
          <div className="text-center">
            <div className="border border-neutral-300 p-4 mb-1">
              <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <div className="text-[10px]">Share</div>
          </div>
          
          <div className="text-center">
            <div className="border border-neutral-300 p-4 mb-1">
              <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-[10px]">Gallery</div>
          </div>
          
          <div className="text-center">
            <div className="border border-neutral-300 p-4 mb-1">
              <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-[10px]">Settings</div>
          </div>
          
          <div className="text-center">
            <div className="border border-neutral-300 p-4 mb-1">
              <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
            <div className="text-[10px]">AR View</div>
          </div>
        </div>
        
        <div className="mt-3 p-3 bg-neutral-50 border border-neutral-200">
          <div className="grid grid-cols-4 gap-x-6 text-[10px]">
            <div><span className="text-neutral-500">Stroke:</span> 1.5px</div>
            <div><span className="text-neutral-500">Corners:</span> 2px radius</div>
            <div><span className="text-neutral-500">Style:</span> Outline only</div>
            <div><span className="text-neutral-500">Color:</span> #3A3A38 / #1A1A19</div>
          </div>
        </div>
      </section>
    </div>
  );
}