---
description: Add a new product card with AR capabilities
---

1. Copy the new `.glb` (Android/Web) and `.usdz` (iOS) 3D model files into the `public` directory.
2. Ensure you have an image for the product card and place it in the `public` directory if it's a local file.
3. Open `src/data/artworks.ts`.
4. Add a new `Artwork` object to the `artworksData` array (or modify an existing one).
5. Set the required fields: `id`, `title`, `artist`, `price`, `image` (URL or local path), `status` (e.g., 'AR Ready'), `category`, and `year`.
6. Set the `description` field for the product details page.
7. Set the `modelSrc` field to the path of the new `.glb` file (e.g., `/Spatial-Art-prototype-/model.glb`).
8. Set the `iosSrc` field to the path of the new `.usdz` file (e.g., `/Spatial-Art-prototype-/model.usdz`).
9. Verify the changes locally by checking the gallery feed and the "View in Your Space" AR button on both Android and iOS devices.
