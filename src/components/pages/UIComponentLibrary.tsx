export default function UIComponentLibrary() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="border-b border-neutral-300 pb-2">
        <h2 className="text-xl mb-0.5">UI Component Library</h2>
        <p className="text-xs text-neutral-600">Reusable WebAR interface elements</p>
      </div>
      
      {/* Primary Actions */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">01. Primary Action Buttons</h3>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="border border-neutral-300 p-4">
            <div className="mb-2 text-[10px] text-neutral-500">Default State</div>
            <button className="bg-[#1A1A19] text-white px-6 py-3 text-xs uppercase tracking-wider hover:bg-[#C2A572] transition-colors w-full">
              View in AR
            </button>
            <div className="mt-3 text-[10px] text-neutral-600 space-y-0.5">
              <div>BG: #1A1A19 → Hover: #C2A572</div>
              <div>Padding: 12px 24px / Text: 12px</div>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-4 bg-[#1A1A19]">
            <div className="mb-2 text-[10px] text-neutral-300">Inverted / On Dark</div>
            <button className="bg-white text-[#1A1A19] px-6 py-3 text-xs uppercase tracking-wider border-2 border-white hover:bg-transparent hover:text-white transition-colors w-full">
              View in AR
            </button>
            <div className="mt-3 text-[10px] text-neutral-300 space-y-0.5">
              <div>BG: White → Hover: Transparent</div>
              <div>Use over dark AR backgrounds</div>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-4">
            <div className="mb-2 text-[10px] text-neutral-500">Disabled State</div>
            <button className="bg-neutral-300 text-neutral-500 px-6 py-3 text-xs uppercase tracking-wider cursor-not-allowed w-full" disabled>
              View in AR
            </button>
            <div className="mt-3 text-[10px] text-neutral-600 space-y-0.5">
              <div>BG: #E5E4E0 / Text: #9B9B98</div>
              <div>Cursor: not-allowed</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Secondary Actions */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">02. Secondary Actions & Icon Buttons</h3>
        </div>
        
        <div className="grid grid-cols-6 gap-3">
          <div className="border border-neutral-300 p-3">
            <div className="mb-2 text-[10px] text-neutral-500">Save</div>
            <button className="border-2 border-[#3A3A38] text-[#3A3A38] px-4 py-2 text-xs flex items-center gap-1.5 hover:bg-[#3A3A38] hover:text-white transition-colors w-full justify-center">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
              </svg>
              Save
            </button>
          </div>
          
          <div className="border border-neutral-300 p-3">
            <div className="mb-2 text-[10px] text-neutral-500">Share</div>
            <button className="border-2 border-[#3A3A38] text-[#3A3A38] px-4 py-2 text-xs flex items-center gap-1.5 hover:bg-[#3A3A38] hover:text-white transition-colors w-full justify-center">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
            </button>
          </div>
          
          <div className="border border-neutral-300 p-3">
            <div className="mb-2 text-[10px] text-neutral-500">Close</div>
            <button className="border-2 border-[#3A3A38] text-[#3A3A38] w-full aspect-square flex items-center justify-center hover:bg-[#3A3A38] hover:text-white transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="border border-neutral-300 p-3">
            <div className="mb-2 text-[10px] text-neutral-500">Info</div>
            <button className="border-2 border-[#3A3A38] text-[#3A3A38] w-full aspect-square flex items-center justify-center hover:bg-[#3A3A38] hover:text-white transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4m0-4h.01" />
              </svg>
            </button>
          </div>
          
          <div className="border border-neutral-300 p-3">
            <div className="mb-2 text-[10px] text-neutral-500">Gallery</div>
            <button className="border-2 border-[#3A3A38] text-[#3A3A38] w-full aspect-square flex items-center justify-center hover:bg-[#3A3A38] hover:text-white transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
          
          <div className="border border-neutral-300 p-3">
            <div className="mb-2 text-[10px] text-neutral-500">Settings</div>
            <button className="border-2 border-[#3A3A38] text-[#3A3A38] w-full aspect-square flex items-center justify-center hover:bg-[#3A3A38] hover:text-white transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      
      {/* Form Controls */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">03. Form Controls & Input Elements</h3>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="border border-neutral-300 p-4 space-y-3">
            <div>
              <div className="text-[10px] text-neutral-500 mb-1">Text Input</div>
              <input 
                type="text" 
                placeholder="Search artworks..." 
                className="w-full px-3 py-2 text-xs border border-neutral-300 focus:border-[#C2A572] focus:outline-none"
              />
            </div>
            <div>
              <div className="text-[10px] text-neutral-500 mb-1">With Icon</div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full pl-8 pr-3 py-2 text-xs border border-neutral-300 focus:border-[#C2A572] focus:outline-none"
                />
                <svg className="w-4 h-4 absolute left-2 top-2 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-4 space-y-3">
            <div>
              <div className="text-[10px] text-neutral-500 mb-1">Dropdown Select</div>
              <select className="w-full px-3 py-2 text-xs border border-neutral-300 focus:border-[#C2A572] focus:outline-none bg-white">
                <option>All Categories</option>
                <option>Paintings</option>
                <option>Sculptures</option>
                <option>Installations</option>
              </select>
            </div>
            <div>
              <div className="text-[10px] text-neutral-500 mb-1">Textarea</div>
              <textarea 
                placeholder="Add notes..."
                className="w-full px-3 py-2 text-xs border border-neutral-300 focus:border-[#C2A572] focus:outline-none resize-none"
                rows={2}
              />
            </div>
          </div>
          
          <div className="border border-neutral-300 p-4 space-y-3">
            <div>
              <div className="text-[10px] text-neutral-500 mb-2">Checkbox</div>
              <label className="flex items-center gap-2 text-xs cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-[#C2A572]" />
                <span>Show frame details</span>
              </label>
              <label className="flex items-center gap-2 text-xs cursor-pointer mt-1">
                <input type="checkbox" className="w-4 h-4 accent-[#C2A572]" defaultChecked />
                <span>Enable audio guide</span>
              </label>
            </div>
            <div>
              <div className="text-[10px] text-neutral-500 mb-2">Radio Buttons</div>
              <label className="flex items-center gap-2 text-xs cursor-pointer">
                <input type="radio" name="quality" className="w-4 h-4 accent-[#C2A572]" defaultChecked />
                <span>High Quality</span>
              </label>
              <label className="flex items-center gap-2 text-xs cursor-pointer mt-1">
                <input type="radio" name="quality" className="w-4 h-4 accent-[#C2A572]" />
                <span>Low Quality</span>
              </label>
            </div>
          </div>
        </div>
      </section>
      
      {/* Toggle & Range Controls */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">04. Toggle Switches & Sliders</h3>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          <div className="border border-neutral-300 p-4">
            <div className="text-[10px] text-neutral-500 mb-2">Toggle Switch</div>
            <div className="flex items-center justify-between">
              <span className="text-xs">AR Mode</span>
              <div className="relative inline-block w-10 h-5">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-10 h-5 bg-neutral-300 peer-checked:bg-[#C2A572] rounded-full peer cursor-pointer transition-colors"></div>
                <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs">Shadows</span>
              <div className="relative inline-block w-10 h-5">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-10 h-5 bg-neutral-300 peer-checked:bg-[#C2A572] rounded-full peer cursor-pointer transition-colors"></div>
                <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
              </div>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-4 col-span-2">
            <div className="text-[10px] text-neutral-500 mb-2">Range Slider</div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Brightness</span>
                  <span className="text-neutral-500">75%</span>
                </div>
                <input 
                  type="range" 
                  className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#C2A572]"
                  defaultValue="75"
                />
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Model Scale</span>
                  <span className="text-neutral-500">1.0x</span>
                </div>
                <input 
                  type="range" 
                  className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#C2A572]"
                  defaultValue="50"
                />
              </div>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-4">
            <div className="text-[10px] text-neutral-500 mb-2">Segmented Control</div>
            <div className="inline-flex border border-neutral-300 text-xs">
              <button className="px-3 py-1.5 bg-[#1A1A19] text-white">Grid</button>
              <button className="px-3 py-1.5 hover:bg-neutral-50">List</button>
              <button className="px-3 py-1.5 hover:bg-neutral-50">Cards</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Navigation Components */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">05. Navigation Components</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-neutral-300 p-4">
            <div className="text-[10px] text-neutral-500 mb-2">Tab Navigation</div>
            <div className="flex border-b border-neutral-200">
              <button className="px-4 py-2 text-xs border-b-2 border-[#1A1A19] -mb-px">Artworks</button>
              <button className="px-4 py-2 text-xs text-neutral-500 hover:text-neutral-900">Collections</button>
              <button className="px-4 py-2 text-xs text-neutral-500 hover:text-neutral-900">Favorites</button>
            </div>
            <div className="mt-2 text-[10px] text-neutral-600">Active tab: 2px bottom border</div>
          </div>
          
          <div className="border border-neutral-300 p-4">
            <div className="text-[10px] text-neutral-500 mb-2">Breadcrumbs</div>
            <div className="flex items-center gap-2 text-xs">
              <a href="#" className="text-neutral-500 hover:text-[#C2A572]">Gallery</a>
              <span className="text-neutral-400">/</span>
              <a href="#" className="text-neutral-500 hover:text-[#C2A572]">Paintings</a>
              <span className="text-neutral-400">/</span>
              <span className="text-neutral-900">Modern Art</span>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-4">
            <div className="text-[10px] text-neutral-500 mb-2">Pagination</div>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 border border-neutral-300 text-xs hover:bg-neutral-50">←</button>
              <button className="px-3 py-1 bg-[#1A1A19] text-white text-xs">1</button>
              <button className="px-3 py-1 border border-neutral-300 text-xs hover:bg-neutral-50">2</button>
              <button className="px-3 py-1 border border-neutral-300 text-xs hover:bg-neutral-50">3</button>
              <span className="text-xs text-neutral-400">...</span>
              <button className="px-3 py-1 border border-neutral-300 text-xs hover:bg-neutral-50">12</button>
              <button className="px-2 py-1 border border-neutral-300 text-xs hover:bg-neutral-50">→</button>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-4">
            <div className="text-[10px] text-neutral-500 mb-2">Bottom Navigation Bar</div>
            <div className="flex justify-around border border-neutral-200 py-2">
              <button className="flex flex-col items-center gap-1">
                <svg className="w-5 h-5 text-[#C2A572]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-[9px] text-[#C2A572]">Home</span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <svg className="w-5 h-5 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-[9px] text-neutral-400">Search</span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <svg className="w-5 h-5 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-[9px] text-neutral-400">Profile</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Badges & Tags */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">06. Badges, Tags & Status Indicators</h3>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          <div className="border border-neutral-300 p-4">
            <div className="text-[10px] text-neutral-500 mb-2">Status Badges</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-green-100 text-green-800 text-[10px] rounded">Active</span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-[10px] rounded">Pending</span>
              <span className="px-2 py-1 bg-red-100 text-red-800 text-[10px] rounded">Error</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-[10px] rounded">New</span>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-4">
            <div className="text-[10px] text-neutral-500 mb-2">Category Tags</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 border border-neutral-300 text-[10px] hover:bg-neutral-50 cursor-pointer">Painting</span>
              <span className="px-2 py-1 border border-neutral-300 text-[10px] hover:bg-neutral-50 cursor-pointer">Modern</span>
              <span className="px-2 py-1 border border-neutral-300 text-[10px] hover:bg-neutral-50 cursor-pointer">1920s</span>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-4">
            <div className="text-[10px] text-neutral-500 mb-2">Notification Badge</div>
            <div className="relative inline-block">
              <button className="p-2 border border-neutral-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[8px] rounded-full flex items-center justify-center">3</span>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-4">
            <div className="text-[10px] text-neutral-500 mb-2">Quality Indicator</div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                <div className="w-1 h-3 bg-[#C2A572]"></div>
                <div className="w-1 h-3 bg-[#C2A572]"></div>
                <div className="w-1 h-3 bg-[#C2A572]"></div>
                <div className="w-1 h-3 bg-neutral-300"></div>
              </div>
              <span className="text-[10px]">High</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cards & List Items */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">07. Artwork Cards & List Items</h3>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="border border-neutral-300">
            <div className="bg-neutral-200 h-32 flex items-center justify-center text-[10px] text-neutral-500">
              Artwork Thumbnail
            </div>
            <div className="p-3">
              <div className="text-xs mb-1" style={{ fontFamily: 'Georgia, serif' }}>Starry Night</div>
              <div className="text-[10px] text-neutral-600 mb-2">Vincent van Gogh</div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] px-2 py-0.5 bg-neutral-100">Painting</span>
                <button className="text-neutral-400 hover:text-[#C2A572]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-3">
            <div className="flex gap-3">
              <div className="w-16 h-16 bg-neutral-200 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="text-xs mb-0.5 truncate" style={{ fontFamily: 'Georgia, serif' }}>The Scream</div>
                <div className="text-[10px] text-neutral-600 mb-1">Edvard Munch</div>
                <div className="flex gap-1">
                  <span className="text-[9px] px-1.5 py-0.5 bg-neutral-100 rounded">1893</span>
                  <span className="text-[9px] px-1.5 py-0.5 bg-neutral-100 rounded">Expressionism</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-3 hover:bg-neutral-50 cursor-pointer transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="text-xs mb-0.5" style={{ fontFamily: 'Georgia, serif' }}>Guernica</div>
                <div className="text-[10px] text-neutral-600">Pablo Picasso</div>
              </div>
              <span className="text-[9px] px-2 py-0.5 bg-green-100 text-green-800 rounded">Available</span>
            </div>
            <div className="text-[10px] text-neutral-500">Last viewed: 2 days ago</div>
          </div>
        </div>
      </section>
      
      {/* Tooltips & Alerts */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">08. Tooltips, Alerts & Notifications</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-neutral-300 p-4 space-y-2">
            <div className="bg-green-50 border-l-4 border-green-500 p-3 flex items-start gap-2">
              <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <div className="text-xs text-green-800">Artwork saved successfully</div>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 flex items-start gap-2">
              <svg className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div className="text-xs text-yellow-800">Low quality mode enabled</div>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-3 flex items-start gap-2">
              <svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div className="text-xs text-red-800">Failed to load 3D model</div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 flex items-start gap-2">
              <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4m0-4h.01" />
              </svg>
              <div className="text-xs text-blue-800">AR mode requires camera access</div>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-4 bg-black/5">
            <div className="bg-white border border-neutral-300 p-4 shadow-xl max-w-xs mx-auto">
              <div className="text-sm mb-2" style={{ fontFamily: 'Georgia, serif' }}>Confirm Action</div>
              <div className="text-xs text-neutral-600 mb-4">
                Are you sure you want to remove this artwork from your collection?
              </div>
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 border border-neutral-300 text-xs hover:bg-neutral-50">
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 bg-[#1A1A19] text-white text-xs hover:bg-[#C2A572]">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Overlay UI */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">09. AR Overlay Interface</h3>
        </div>
        
        <div className="border border-neutral-300 p-4 bg-[#1A1A19]">
          <div className="relative h-64 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="bg-black/40 backdrop-blur-sm px-3 py-1.5 text-white text-xs flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                AR Mode Active
              </div>
              <button className="bg-black/40 backdrop-blur-sm w-9 h-9 flex items-center justify-center text-white hover:bg-black/60 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex justify-center gap-3">
              <button className="bg-white/90 w-11 h-11 rounded-full flex items-center justify-center text-[#1A1A19] hover:bg-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4m0-4h.01" />
                </svg>
              </button>
              <button className="bg-white/90 w-11 h-11 rounded-full flex items-center justify-center text-[#1A1A19] hover:bg-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="bg-white/90 w-11 h-11 rounded-full flex items-center justify-center text-[#1A1A19] hover:bg-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Loading States */}
      <section>
        <div className="mb-3 bg-neutral-50 px-3 py-2 border-l-2 border-neutral-900">
          <h3 className="uppercase text-xs tracking-wider text-neutral-700">10. Loading & Progress States</h3>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          <div className="border border-neutral-300 p-4">
            <div className="mb-2 text-[10px] text-neutral-500">Spinner</div>
            <div className="flex items-center justify-center h-16">
              <div className="w-8 h-8 border-2 border-neutral-300 border-t-[#1A1A19] rounded-full animate-spin"></div>
            </div>
            <div className="mt-2 text-[10px] text-neutral-600 text-center">Loading...</div>
          </div>
          
          <div className="border border-neutral-300 p-4">
            <div className="mb-2 text-[10px] text-neutral-500">Progress Bar</div>
            <div className="h-16 flex flex-col justify-center">
              <div className="w-full bg-neutral-200 h-2 overflow-hidden">
                <div className="h-full bg-[#C2A572] w-2/3"></div>
              </div>
              <div className="text-[10px] text-neutral-600 mt-2">67% Complete</div>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-4">
            <div className="mb-2 text-[10px] text-neutral-500">Skeleton</div>
            <div className="space-y-2">
              <div className="h-3 bg-neutral-200 w-3/4 animate-pulse"></div>
              <div className="h-3 bg-neutral-200 w-full animate-pulse"></div>
              <div className="h-3 bg-neutral-200 w-5/6 animate-pulse"></div>
            </div>
          </div>
          
          <div className="border border-neutral-300 p-4">
            <div className="mb-2 text-[10px] text-neutral-500">Circular Progress</div>
            <div className="flex items-center justify-center h-16">
              <div className="relative w-12 h-12">
                <svg className="w-12 h-12 -rotate-90">
                  <circle cx="24" cy="24" r="20" stroke="#E5E4E0" strokeWidth="4" fill="none" />
                  <circle cx="24" cy="24" r="20" stroke="#C2A572" strokeWidth="4" fill="none" strokeDasharray="125.6" strokeDashoffset="31.4" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[10px]">75%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
