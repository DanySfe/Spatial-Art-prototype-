export default function PerformanceRules() {
  const polygonLimits = [
    { category: 'Small Props', range: '500 - 2,000 tris', example: 'Pedestals, frames, simple objects' },
    { category: 'Paintings', range: '200 - 1,000 tris', example: 'Frame geometry with plane' },
    { category: 'Sculptures', range: '5,000 - 50,000 tris', example: 'Detailed 3D artwork' },
    { category: 'Environment', range: '1,000 - 10,000 tris', example: 'Floor, walls, ambient geometry' },
    { category: 'Scene Total', range: 'Max 200,000 tris', example: 'All visible geometry combined' },
  ];
  
  const textureSpecs = [
    { asset: 'Hero Artworks', resolution: '2048 x 2048', format: 'JPEG/PNG', compression: '80%' },
    { asset: 'Secondary Assets', resolution: '1024 x 1024', format: 'JPEG/PNG', compression: '75%' },
    { asset: 'Material Maps', resolution: '1024 x 1024', format: 'PNG', compression: 'Lossless' },
    { asset: 'UI Elements', resolution: '512 x 512', format: 'PNG', compression: '90%' },
  ];
  
  const formatRequirements = [
    { platform: 'iOS (ARKit)', format: 'USDZ', specs: 'PBR materials, max 100MB' },
    { platform: 'Android (ARCore)', format: 'GLB', specs: 'glTF 2.0, max 50MB' },
    { platform: 'WebXR', format: 'GLB', specs: 'Draco compression' },
  ];
  
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="border-b border-neutral-300 pb-2">
        <h2 className="text-xl mb-0.5">Performance Rules</h2>
        <p className="text-xs text-neutral-600">Technical constraints for mobile WebAR optimization</p>
      </div>
      
      {/* Overview */}
      <section>
        <div className="bg-[#F8F8F6] border-l-4 border-[#C2A572] p-3">
          <div className="text-xs mb-1">Performance Target</div>
          <div className="text-[10px] text-neutral-600 leading-relaxed">
            60 FPS on mid-range devices (iPhone 11, Galaxy S10). Load within 5s on 4G. Responsive interaction with multiple 3D assets.
          </div>
        </div>
      </section>
      
      {/* Polygon Limits */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">01. Polygon Limits</h3>
        </div>
        
        <div className="border border-neutral-300">
          <table className="w-full text-[10px]">
            <thead className="bg-neutral-50">
              <tr className="border-b border-neutral-200">
                <th className="text-left p-2 uppercase tracking-wider text-neutral-600">Asset Category</th>
                <th className="text-left p-2 uppercase tracking-wider text-neutral-600">Triangle Range</th>
                <th className="text-left p-2 uppercase tracking-wider text-neutral-600">Example Use Case</th>
              </tr>
            </thead>
            <tbody>
              {polygonLimits.map((limit, index) => (
                <tr key={index} className={index !== polygonLimits.length - 1 ? 'border-b border-neutral-100' : ''}>
                  <td className="p-2">{limit.category}</td>
                  <td className="p-2 font-mono text-neutral-700">{limit.range}</td>
                  <td className="p-2 text-neutral-600">{limit.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-2 p-2 bg-neutral-50 border border-neutral-200 text-[10px] text-neutral-700">
          <span className="text-neutral-500">Note:</span> Use LOD for 30k+ tri sculptures. Auto quality scaling by device.
        </div>
      </section>
      
      {/* Texture Resolution */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">02. Texture Resolution Limits</h3>
        </div>
        
        <div className="border border-neutral-300">
          <table className="w-full text-[10px]">
            <thead className="bg-neutral-50">
              <tr className="border-b border-neutral-200">
                <th className="text-left p-2 uppercase tracking-wider text-neutral-600">Asset Type</th>
                <th className="text-left p-2 uppercase tracking-wider text-neutral-600">Resolution</th>
                <th className="text-left p-2 uppercase tracking-wider text-neutral-600">Format</th>
                <th className="text-left p-2 uppercase tracking-wider text-neutral-600">Compression</th>
              </tr>
            </thead>
            <tbody>
              {textureSpecs.map((spec, index) => (
                <tr key={index} className={index !== textureSpecs.length - 1 ? 'border-b border-neutral-100' : ''}>
                  <td className="p-2">{spec.asset}</td>
                  <td className="p-2 font-mono text-neutral-700">{spec.resolution}</td>
                  <td className="p-2 text-neutral-600">{spec.format}</td>
                  <td className="p-2 text-neutral-600">{spec.compression}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="p-2 bg-neutral-50 border border-neutral-200 text-[10px]">
            <div className="text-neutral-500 mb-0.5">Memory Budget</div>
            <div>256 MB max per scene</div>
          </div>
          <div className="p-2 bg-neutral-50 border border-neutral-200 text-[10px]">
            <div className="text-neutral-500 mb-0.5">Atlas Strategy</div>
            <div>Combine UI into single texture</div>
          </div>
        </div>
      </section>
      
      {/* Format Requirements */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">03. File Format Requirements</h3>
        </div>
        
        <div className="space-y-2">
          {formatRequirements.map((req, index) => (
            <div key={index} className="border border-neutral-300 p-3 grid grid-cols-6 gap-3 items-center text-[10px]">
              <div className="col-span-2">
                <div className="text-neutral-500 mb-0.5">Platform</div>
                <div>{req.platform}</div>
              </div>
              <div>
                <div className="text-neutral-500 mb-0.5">Format</div>
                <div className="font-mono">{req.format}</div>
              </div>
              <div className="col-span-3">
                <div className="text-neutral-500 mb-0.5">Specifications</div>
                <div className="text-neutral-600">{req.specs}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-2 p-2 bg-neutral-50 border border-neutral-200 text-[10px] text-neutral-700">
          <span className="text-neutral-500">Pipeline:</span> .blend/.ma → GLB (Draco) → USDZ (iOS). Keep source files.
        </div>
      </section>
      
      {/* Real-time Rendering Optimization */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">04. Real-time Rendering Optimization</h3>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          <div className="border border-neutral-300 p-3">
            <div className="text-xs mb-2">Geometry</div>
            <div className="space-y-1 text-[10px]">
              <div className="flex gap-1.5">
                <div className="text-[#C2A572]">✓</div>
                <div>Instance repeated elements</div>
              </div>
              <div className="flex gap-1.5">
                <div className="text-[#C2A572]">✓</div>
                <div>Occlusion culling</div>
              </div>
              <div className="flex gap-1.5">
                <div className="text-[#C2A572]">✓</div>
                <div>Frustum culling</div>
              </div>
              <div className="flex gap-1.5">
                <div className="text-[#C2A572]">✓</div>
                <div>Bake AO to vertices</div>
              </div>
              <div className="flex gap-1.5">
                <div className="text-[#C2A572]">✓</div>
                <div>Remove invisible faces</div>
              </div>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-3">
            <div className="text-xs mb-2">Material & Light</div>
            <div className="space-y-1 text-[10px]">
              <div className="flex gap-1.5">
                <div className="text-[#C2A572]">✓</div>
                <div>Max 3 active lights</div>
              </div>
              <div className="flex gap-1.5">
                <div className="text-[#C2A572]">✓</div>
                <div>Baked lighting</div>
              </div>
              <div className="flex gap-1.5">
                <div className="text-[#C2A572]">✓</div>
                <div>Minimize alpha blend</div>
              </div>
              <div className="flex gap-1.5">
                <div className="text-[#C2A572]">✓</div>
                <div>Share materials</div>
              </div>
              <div className="flex gap-1.5">
                <div className="text-[#C2A572]">✓</div>
                <div>No RT reflections mobile</div>
              </div>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-3">
            <div className="text-xs mb-2">Loading</div>
            <div className="space-y-1 text-[10px]">
              <div className="flex gap-1.5">
                <div className="text-[#C2A572]">✓</div>
                <div>Progressive: UI first</div>
              </div>
              <div className="flex gap-1.5">
                <div className="text-[#C2A572]">✓</div>
                <div>Lazy load offscreen</div>
              </div>
              <div className="flex gap-1.5">
                <div className="text-[#C2A572]">✓</div>
                <div>Asset streaming</div>
              </div>
              <div className="flex gap-1.5">
                <div className="text-[#C2A572]">✓</div>
                <div>Local caching</div>
              </div>
              <div className="flex gap-1.5">
                <div className="text-[#C2A572]">✓</div>
                <div>Low-res placeholders</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testing Matrix */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">05. Testing Matrix</h3>
        </div>
        
        <div className="border border-neutral-300">
          <table className="w-full text-[10px]">
            <thead className="bg-neutral-50">
              <tr className="border-b border-neutral-200">
                <th className="text-left p-2 uppercase tracking-wider text-neutral-600">Device Tier</th>
                <th className="text-left p-2 uppercase tracking-wider text-neutral-600">Model Example</th>
                <th className="text-left p-2 uppercase tracking-wider text-neutral-600">FPS Target</th>
                <th className="text-left p-2 uppercase tracking-wider text-neutral-600">Quality Preset</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-100">
                <td className="p-2">Low</td>
                <td className="p-2 text-neutral-600">iPhone XR, Galaxy S9</td>
                <td className="p-2 font-mono">30 FPS</td>
                <td className="p-2 text-neutral-600">Reduced textures, no shadows</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="p-2">Mid</td>
                <td className="p-2 text-neutral-600">iPhone 11, Galaxy S10</td>
                <td className="p-2 font-mono">60 FPS</td>
                <td className="p-2 text-neutral-600">Standard quality</td>
              </tr>
              <tr>
                <td className="p-2">High</td>
                <td className="p-2 text-neutral-600">iPhone 14+, Galaxy S22+</td>
                <td className="p-2 font-mono">60 FPS</td>
                <td className="p-2 text-neutral-600">Full quality, soft shadows</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}