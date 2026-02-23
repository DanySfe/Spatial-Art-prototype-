import { RouterProvider, createBrowserRouter } from 'react-router';
import GalleryFeed from './components/gallery/GalleryFeed';
import ArtworkDetail from './components/gallery/ArtworkDetail';
import SearchPage from './components/gallery/SearchPage';
import SavedPage from './components/gallery/SavedPage';
import ProfilePage from './components/gallery/ProfilePage';
import { GalleryProvider } from './context/GalleryContext';

const router = createBrowserRouter([
  {
    path: "/",
    Component: GalleryFeed,
  },
  {
    path: "/artwork/:id",
    Component: ArtworkDetail,
  },
  {
    path: "/search",
    Component: SearchPage,
  },
  {
    path: "/saved",
    Component: SavedPage,
  },
  {
    path: "/profile",
    Component: ProfilePage,
  },
]);

export default function App() {
  return (
    <GalleryProvider>
      <RouterProvider router={router} />
    </GalleryProvider>
  );
}