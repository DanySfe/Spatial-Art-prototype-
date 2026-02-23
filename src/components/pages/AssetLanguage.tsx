export default function AssetLanguage() {
  const assetRules = [
    { label: 'Materials', value: 'PBR workflow — Base Color, Metallic, Roughness, Normal' },
    { label: 'Lighting', value: 'Neutral white ambient (5500K) with minimal shadows' },
    { label: 'Geometry', value: 'Clean topology, quad-based where possible, no n-gons' },
    { label: 'Scale', value: 'Real-world dimensions in meters (1 unit = 1 meter)' },
    { label: 'Pivot Point', value: 'Centered at base for floor placement' },
    { label: 'Orientation', value: 'Forward: -Z axis, Up: +Y axis (glTF standard)' },
  ];
  
  const artworkTypes = [
    { type: 'Paintings', specs: '2D plane with frame geometry, artwork as texture' },
    { type: 'Sculptures', specs: '3D geometry with realistic materials, under 50k tris' },
    { type: 'Installations', specs: 'Modular components, reusable materials' },
    { type: 'Pedestals', specs: 'Simple box geometry, neutral grey material' },
  ];
  
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="border-b border-neutral-300 pb-2">
        <h2 className="text-xl mb-0.5">3D Asset Language</h2>
        <p className="text-xs text-neutral-600">Visual rules and aesthetic guidelines for 3D models</p>
      </div>
      
      {/* Artwork Model Placeholders */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">01. Artwork Model Placeholders</h3>
        </div>
        
        <div className="grid grid-cols-4 gap-3">
          {/* Painting */}
          <div className="border border-neutral-300">
            <div className="bg-neutral-100 h-32 flex items-center justify-center">
              <div className="bg-[#3A3A38] w-20 h-28 border-4 border-[#C2A572] shadow-lg flex items-center justify-center">
                <div className="bg-neutral-300 w-16 h-24 flex items-center justify-center text-[10px] text-neutral-500">
                  ART
                </div>
              </div>
            </div>
            <div className="p-2 space-y-0.5">
              <div className="text-xs">Framed Painting</div>
              <div className="text-[10px] text-neutral-600">2K texture</div>
              <div className="text-[10px] font-mono text-neutral-500">painting_01.glb</div>
            </div>
          </div>
          
          {/* Sculpture */}
          <div className="border border-neutral-300">
            <div className="bg-neutral-100 h-32 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-20 bg-gradient-to-b from-neutral-300 to-neutral-400 rounded-t-lg"></div>
                <div className="w-10 h-2 bg-neutral-400"></div>
                <div className="w-16 h-6 bg-[#E5E4E0]"></div>
              </div>
            </div>
            <div className="p-2 space-y-0.5">
              <div className="text-xs">Sculpture</div>
              <div className="text-[10px] text-neutral-600">PBR materials</div>
              <div className="text-[10px] font-mono text-neutral-500">sculpture_01.glb</div>
            </div>
          </div>
          
          {/* Installation */}
          <div className="border border-neutral-300">
            <div className="bg-neutral-100 h-32 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-1">
                <div className="w-8 h-16 bg-[#C2A572]"></div>
                <div className="w-8 h-20 bg-[#C2A572]"></div>
                <div className="w-8 h-12 bg-[#C2A572]"></div>
              </div>
            </div>
            <div className="p-2 space-y-0.5">
              <div className="text-xs">Installation</div>
              <div className="text-[10px] text-neutral-600">Modular</div>
              <div className="text-[10px] font-mono text-neutral-500">install_01.glb</div>
            </div>
          </div>
          
          {/* Gallery Space */}
          <div className="border border-neutral-300">
            <div className="bg-neutral-100 h-32 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-200"></div>
              <div className="absolute bottom-0 w-full h-20 bg-neutral-300 border-t-2 border-neutral-400"></div>
              <div className="relative text-[10px] text-neutral-500">FLOOR</div>
            </div>
            <div className="p-2 space-y-0.5">
              <div className="text-xs">Environment</div>
              <div className="text-[10px] text-neutral-600">Minimal</div>
              <div className="text-[10px] font-mono text-neutral-500">floor_01.glb</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Visual Rules */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">02. Visual Rules & Technical Specs</h3>
        </div>
        
        <div className="border border-neutral-300">
          <div className="divide-y divide-neutral-200">
            {assetRules.map((rule, index) => (
              <div key={index} className="grid grid-cols-5 gap-3 p-2 text-xs">
                <div className="uppercase tracking-wider text-neutral-500">
                  {rule.label}
                </div>
                <div className="col-span-4 text-neutral-700">
                  {rule.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Museum Aesthetic Guidelines */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">03. Museum Aesthetic Guidelines</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-neutral-300 p-4">
            <div className="text-xs mb-2">Material Palette</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#F8F8F6] border border-neutral-300"></div>
                <div className="text-[10px]">
                  <div className="text-neutral-700">Gallery White</div>
                  <div className="text-neutral-500">Walls, pedestals</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#C2A572] border border-neutral-300"></div>
                <div className="text-[10px]">
                  <div className="text-neutral-700">Brushed Gold</div>
                  <div className="text-neutral-500">Frames, accents</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-neutral-400 to-neutral-200 border border-neutral-300"></div>
                <div className="text-[10px]">
                  <div className="text-neutral-700">Polished Stone</div>
                  <div className="text-neutral-500">Sculptures, bases</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-4">
            <div className="text-xs mb-2">Lighting Guidelines</div>
            <div className="space-y-1 text-[10px]">
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span className="text-neutral-600">Color Temperature</span>
                <span className="text-neutral-800">5500K</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span className="text-neutral-600">Ambient Intensity</span>
                <span className="text-neutral-800">0.6 - 0.8</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span className="text-neutral-600">Directional</span>
                <span className="text-neutral-800">Top-down</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span className="text-neutral-600">Shadow Quality</span>
                <span className="text-neutral-800">Minimal</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-600">HDR</span>
                <span className="text-neutral-800">Studio neutral</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Asset Type Specifications */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">04. Asset Type Specifications</h3>
        </div>
        
        <div className="border border-neutral-300 text-xs">
          {artworkTypes.map((type, index) => (
            <div 
              key={index} 
              className={`p-2 grid grid-cols-5 gap-3 ${index !== artworkTypes.length - 1 ? 'border-b border-neutral-200' : ''}`}
            >
              <div className="font-medium">{type.type}</div>
              <div className="col-span-4 text-neutral-600">{type.specs}</div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Additional Model Requirements */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">05. Export & File Requirements</h3>
        </div>
        
        <div className="grid grid-cols-3 gap-3 text-[10px]">
          <div className="border border-neutral-200 p-3">
            <div className="text-neutral-500 mb-1">Format</div>
            <div>GLB (primary)</div>
            <div>USDZ (iOS)</div>
          </div>
          <div className="border border-neutral-200 p-3">
            <div className="text-neutral-500 mb-1">Compression</div>
            <div>Draco mesh</div>
            <div>KTX2 textures</div>
          </div>
          <div className="border border-neutral-200 p-3">
            <div className="text-neutral-500 mb-1">Validation</div>
            <div>glTF Validator</div>
            <div>Check warnings</div>
          </div>
        </div>
      </section>
    </div>
  );
}