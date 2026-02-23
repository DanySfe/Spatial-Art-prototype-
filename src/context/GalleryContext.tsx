import { createContext, useContext, useState, ReactNode } from 'react';

interface Artwork {
  id: string;
  title: string;
  artist: string;
  price: string;
  image: string;
  category: string;
  year: string;
}

interface Collection {
  id: string;
  name: string;
  artworkIds: string[];
  gradient: string;
  border: string;
}

interface GalleryContextType {
  savedArtworks: string[];
  collections: Collection[];
  toggleSave: (artworkId: string) => void;
  isSaved: (artworkId: string) => boolean;
  addToCollection: (artworkId: string, collectionId: string) => void;
  removeFromSaved: (artworkId: string) => void;
  createCollection: (name: string) => void;
  deleteCollection: (collectionId: string) => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

const defaultCollections: Collection[] = [
  { 
    id: 'favorites', 
    name: 'Favorites', 
    artworkIds: ['1', '3'],
    gradient: 'from-rose-500/20 to-pink-500/20', 
    border: 'border-rose-500/30' 
  },
  { 
    id: 'modern', 
    name: 'Modern Art', 
    artworkIds: ['2', '4'],
    gradient: 'from-blue-500/20 to-cyan-500/20', 
    border: 'border-blue-500/30' 
  },
  { 
    id: 'classical', 
    name: 'Classical', 
    artworkIds: ['7'],
    gradient: 'from-amber-500/20 to-yellow-500/20', 
    border: 'border-amber-500/30' 
  },
];

export function GalleryProvider({ children }: { children: ReactNode }) {
  const [savedArtworks, setSavedArtworks] = useState<string[]>(['1', '3', '4', '7']);
  const [collections, setCollections] = useState<Collection[]>(defaultCollections);

  const toggleSave = (artworkId: string) => {
    setSavedArtworks(prev => {
      if (prev.includes(artworkId)) {
        return prev.filter(id => id !== artworkId);
      } else {
        return [...prev, artworkId];
      }
    });
  };

  const isSaved = (artworkId: string) => {
    return savedArtworks.includes(artworkId);
  };

  const removeFromSaved = (artworkId: string) => {
    setSavedArtworks(prev => prev.filter(id => id !== artworkId));
    // Also remove from all collections
    setCollections(prev => prev.map(collection => ({
      ...collection,
      artworkIds: collection.artworkIds.filter(id => id !== artworkId)
    })));
  };

  const addToCollection = (artworkId: string, collectionId: string) => {
    setCollections(prev => prev.map(collection => {
      if (collection.id === collectionId && !collection.artworkIds.includes(artworkId)) {
        return {
          ...collection,
          artworkIds: [...collection.artworkIds, artworkId]
        };
      }
      return collection;
    }));
    
    // Auto-save the artwork if not already saved
    if (!savedArtworks.includes(artworkId)) {
      setSavedArtworks(prev => [...prev, artworkId]);
    }
  };

  const createCollection = (name: string) => {
    const gradients = [
      { gradient: 'from-purple-500/20 to-indigo-500/20', border: 'border-purple-500/30' },
      { gradient: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/30' },
      { gradient: 'from-orange-500/20 to-red-500/20', border: 'border-orange-500/30' },
    ];
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    
    const newCollection: Collection = {
      id: `collection-${Date.now()}`,
      name,
      artworkIds: [],
      ...randomGradient
    };
    
    setCollections(prev => [...prev, newCollection]);
  };

  const deleteCollection = (collectionId: string) => {
    setCollections(prev => prev.filter(c => c.id !== collectionId));
  };

  return (
    <GalleryContext.Provider value={{
      savedArtworks,
      collections,
      toggleSave,
      isSaved,
      addToCollection,
      removeFromSaved,
      createCollection,
      deleteCollection,
    }}>
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
}
