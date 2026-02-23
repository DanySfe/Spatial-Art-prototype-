export default function AssetPipeline() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="border-b border-neutral-300 pb-2">
        <h2 className="text-xl mb-0.5">Asset Pipeline Structure</h2>
        <p className="text-xs text-neutral-600">Organized web project file structure and workflow</p>
      </div>
      
      {/* Project Structure Diagram */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">01. Project Directory Structure</h3>
        </div>
        
        <div className="border-2 border-neutral-300 p-4 bg-neutral-50 font-mono text-[10px] leading-relaxed">
          <div className="space-y-0.5">
            <div className="text-[#1A1A19]">spatial-art-gallery/</div>
            <div className="ml-3">
              <div className="text-neutral-600">├── index.html</div>
              <div className="text-neutral-600">├── styles/</div>
              <div className="ml-3 text-neutral-500">│   └── main.css</div>
              <div className="text-neutral-600">├── scripts/</div>
              <div className="ml-3 text-neutral-500">│   ├── ar-viewer.js</div>
              <div className="ml-3 text-neutral-500">│   ├── ui-controller.js</div>
              <div className="ml-3 text-neutral-500">│   └── asset-loader.js</div>
              <div className="text-[#C2A572]">├── assets/</div>
              <div className="ml-3">
                <div className="text-[#C2A572]">│   ├── models/</div>
                <div className="ml-3 text-neutral-500">│   │   ├── paintings/</div>
                <div className="ml-6 text-neutral-400">│   │   │   ├── painting_01.glb</div>
                <div className="ml-6 text-neutral-400">│   │   │   ├── painting_01.usdz</div>
                <div className="ml-6 text-neutral-400">│   │   │   └── frame_gold.glb</div>
                <div className="ml-3 text-neutral-500">│   │   ├── sculptures/</div>
                <div className="ml-6 text-neutral-400">│   │   │   ├── sculpture_01.glb</div>
                <div className="ml-6 text-neutral-400">│   │   │   └── sculpture_02.glb</div>
                <div className="ml-3 text-neutral-500">│   │   ├── pedestals/</div>
                <div className="ml-6 text-neutral-400">│   │   │   └── pedestal_std.glb</div>
                <div className="ml-3 text-neutral-500">│   │   └── environment/</div>
                <div className="ml-6 text-neutral-400">│   │       └── gallery_floor.glb</div>
                <div className="text-[#C2A572]">│   ├── textures/</div>
                <div className="ml-3 text-neutral-500">│   │   ├── artworks/</div>
                <div className="ml-6 text-neutral-400">│   │   │   ├── art_01_base.jpg</div>
                <div className="ml-6 text-neutral-400">│   │   │   └── art_02_base.jpg</div>
                <div className="ml-3 text-neutral-500">│   │   ├── materials/</div>
                <div className="ml-6 text-neutral-400">│   │   │   ├── metal_rough.png</div>
                <div className="ml-6 text-neutral-400">│   │   │   └── wood_normal.png</div>
                <div className="ml-3 text-neutral-500">│   │   └── hdri/</div>
                <div className="ml-6 text-neutral-400">│   │       └── studio.hdr</div>
                <div className="text-[#C2A572]">│   ├── audio/</div>
                <div className="ml-3 text-neutral-500">│   │   ├── ambient/</div>
                <div className="ml-6 text-neutral-400">│   │   │   └── gallery.mp3</div>
                <div className="ml-3 text-neutral-500">│   │   └── sfx/</div>
                <div className="ml-6 text-neutral-400">│   │       ├── ui_click.mp3</div>
                <div className="ml-6 text-neutral-400">│   │       └── ar_place.mp3</div>
                <div className="text-[#C2A572]">│   └── ui/</div>
                <div className="ml-3 text-neutral-500">│       ├── icons/</div>
                <div className="ml-6 text-neutral-400">│       │   ├── icon_ar.svg</div>
                <div className="ml-6 text-neutral-400">│       │   └── icon_info.svg</div>
                <div className="ml-3 text-neutral-500">│       └── graphics/</div>
                <div className="ml-6 text-neutral-400">│           └── logo.png</div>
              </div>
              <div className="text-neutral-600">└── docs/</div>
              <div className="ml-3 text-neutral-500">    ├── specs.pdf</div>
              <div className="ml-3 text-neutral-500">    └── guidelines.pdf</div>
            </div>
          </div>
        </div>
        
        <div className="mt-2 grid grid-cols-4 gap-2 text-[10px]">
          <div className="p-2 bg-neutral-50 border border-neutral-200">
            <div className="text-[#C2A572] mb-0.5">/models</div>
            <div className="text-neutral-600">3D geometry</div>
          </div>
          <div className="p-2 bg-neutral-50 border border-neutral-200">
            <div className="text-[#C2A572] mb-0.5">/textures</div>
            <div className="text-neutral-600">Images, maps</div>
          </div>
          <div className="p-2 bg-neutral-50 border border-neutral-200">
            <div className="text-[#C2A572] mb-0.5">/audio</div>
            <div className="text-neutral-600">Sound effects</div>
          </div>
          <div className="p-2 bg-neutral-50 border border-neutral-200">
            <div className="text-[#C2A572] mb-0.5">/ui</div>
            <div className="text-neutral-600">Interface</div>
          </div>
        </div>
      </section>
      
      {/* Pipeline Flow Chart */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">02. Asset Creation Pipeline Flow</h3>
        </div>
        
        <div className="border border-neutral-300 p-4">
          <div className="flex items-center justify-between gap-3">
            {/* Stage 1 */}
            <div className="flex-1">
              <div className="bg-[#F8F8F6] border-2 border-neutral-300 p-3 text-center">
                <div className="text-xs mb-1">01. Creation</div>
                <div className="text-[10px] text-neutral-600">Blender/Maya</div>
              </div>
              <div className="mt-1 text-[10px] text-neutral-500 text-center">
                .blend, .ma
              </div>
            </div>
            
            <div className="text-neutral-400 text-xl">→</div>
            
            {/* Stage 2 */}
            <div className="flex-1">
              <div className="bg-[#F8F8F6] border-2 border-neutral-300 p-3 text-center">
                <div className="text-xs mb-1">02. Optimize</div>
                <div className="text-[10px] text-neutral-600">Reduce, bake</div>
              </div>
              <div className="mt-1 text-[10px] text-neutral-500 text-center">
                LOD, UV
              </div>
            </div>
            
            <div className="text-neutral-400 text-xl">→</div>
            
            {/* Stage 3 */}
            <div className="flex-1">
              <div className="bg-[#F8F8F6] border-2 border-neutral-300 p-3 text-center">
                <div className="text-xs mb-1">03. Export</div>
                <div className="text-[10px] text-neutral-600">GLB + USDZ</div>
              </div>
              <div className="mt-1 text-[10px] text-neutral-500 text-center">
                Draco
              </div>
            </div>
            
            <div className="text-neutral-400 text-xl">→</div>
            
            {/* Stage 4 */}
            <div className="flex-1">
              <div className="bg-[#C2A572] border-2 border-[#C2A572] p-3 text-center text-white">
                <div className="text-xs mb-1">04. Deploy</div>
                <div className="text-[10px] opacity-90">/assets</div>
              </div>
              <div className="mt-1 text-[10px] text-neutral-500 text-center">
                CDN
              </div>
            </div>
          </div>
          
          {/* Quality Check Loop */}
          <div className="mt-4 p-3 bg-neutral-50 border-2 border-dashed border-neutral-300">
            <div className="flex items-center justify-between text-[10px]">
              <div className="text-xs">Quality Gate</div>
              <div className="text-neutral-600">
                Perf test → Device check → Visual review → Approve
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Naming Conventions */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">03. File Naming Conventions</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="border border-neutral-300">
            <div className="bg-neutral-50 p-2 border-b border-neutral-200 text-xs">
              3D Models
            </div>
            <div className="p-3 space-y-2">
              <div>
                <div className="text-[10px] font-mono bg-neutral-100 px-2 py-1 inline-block mb-1">
                  [type]_[name]_[variant].glb
                </div>
                <div className="text-[10px] text-neutral-600 mt-1">
                  painting_starry_night_01.glb<br/>
                  sculpture_modern_02.glb<br/>
                  pedestal_white.glb
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-neutral-300">
            <div className="bg-neutral-50 p-2 border-b border-neutral-200 text-xs">
              Textures
            </div>
            <div className="p-3 space-y-2">
              <div>
                <div className="text-[10px] font-mono bg-neutral-100 px-2 py-1 inline-block mb-1">
                  [asset]_[maptype].jpg/png
                </div>
                <div className="text-[10px] text-neutral-600 mt-1">
                  painting_01_base.jpg<br/>
                  frame_gold_metallic.png<br/>
                  stone_normal.png
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-neutral-300">
            <div className="bg-neutral-50 p-2 border-b border-neutral-200 text-xs">
              Audio
            </div>
            <div className="p-3 space-y-2">
              <div>
                <div className="text-[10px] font-mono bg-neutral-100 px-2 py-1 inline-block mb-1">
                  [category]_[description].mp3
                </div>
                <div className="text-[10px] text-neutral-600 mt-1">
                  sfx_ui_click.mp3<br/>
                  ambient_gallery.mp3<br/>
                  sfx_ar_place.mp3
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-neutral-300">
            <div className="bg-neutral-50 p-2 border-b border-neutral-200 text-xs">
              UI Assets
            </div>
            <div className="p-3 space-y-2">
              <div>
                <div className="text-[10px] font-mono bg-neutral-100 px-2 py-1 inline-block mb-1">
                  icon_[name].svg
                </div>
                <div className="text-[10px] text-neutral-600 mt-1">
                  icon_ar.svg<br/>
                  icon_info.svg<br/>
                  icon_save.svg
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Version Control */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">04. Version Control & Documentation</h3>
        </div>
        
        <div className="border border-neutral-300">
          <div className="grid grid-cols-2 divide-x divide-neutral-200">
            <div className="p-3">
              <div className="text-xs mb-2">Git Repository</div>
              <div className="text-[10px] space-y-1 text-neutral-600">
                <div>• Source files separate commits</div>
                <div>• Track GLB/USDZ in main</div>
                <div>• Git LFS for 10MB+ files</div>
                <div>• Tag version releases</div>
                <div>• CHANGELOG.md updates</div>
              </div>
            </div>
            <div className="p-3">
              <div className="text-xs mb-2">Asset Metadata</div>
              <div className="text-[10px] space-y-1 text-neutral-600">
                <div>• JSON manifest per category</div>
                <div>• Track poly/texture specs</div>
                <div>• Material dependencies</div>
                <div>• Optimization history</div>
                <div>• Artist attribution</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-2 p-3 bg-neutral-50 border border-neutral-300">
          <div className="text-xs mb-1">Example: assets_manifest.json</div>
          <pre className="text-[9px] font-mono text-neutral-700 overflow-x-auto leading-relaxed">
{`{
  "paintings": [{
    "id": "painting_01",
    "name": "The Starry Night",
    "artist": "Vincent van Gogh",
    "file_glb": "assets/models/paintings/painting_01.glb",
    "file_usdz": "assets/models/paintings/painting_01.usdz",
    "texture": "assets/textures/artworks/artwork_01_base.jpg",
    "triangles": 482,
    "file_size_mb": 1.2,
    "last_updated": "2026-02-01"
  }]
}`}
          </pre>
        </div>
      </section>
      
      {/* CDN & Hosting */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">05. CDN & Hosting Strategy</h3>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          <div className="border border-neutral-300 p-3">
            <div className="text-xs mb-2">Asset Hosting</div>
            <div className="text-[10px] text-neutral-600 space-y-1">
              <div>CDN global delivery</div>
              <div>Gzip compression</div>
              <div>Long cache (1 year)</div>
              <div>Versioned URLs</div>
            </div>
          </div>
          <div className="border border-neutral-300 p-3">
            <div className="text-xs mb-2">Progressive Load</div>
            <div className="text-[10px] text-neutral-600 space-y-1">
              <div>Lightweight first</div>
              <div>Lazy offscreen</div>
              <div>Asset streaming</div>
              <div>Placeholders</div>
            </div>
          </div>
          <div className="border border-neutral-300 p-3">
            <div className="text-xs mb-2">Fallback</div>
            <div className="text-[10px] text-neutral-600 space-y-1">
              <div>Low-poly alts</div>
              <div>Detect slow network</div>
              <div>Quality toggle</div>
              <div>Local cache</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}