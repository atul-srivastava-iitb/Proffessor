import { GALLERY } from '../interface/gallery.interface';

type props = {
  images: GALLERY;
  location: string;
  children?: React.ReactNode;
};

function GalleryList({ children, images, location }: props) {
  return (
    <div className="flex flex-col gap-3 rounded-md border p-3">
      {children}
      {images.map((imgName, index) => {
        return (
          <img
            src={`${location}${imgName.trim()}`}
            alt=""
            key={index}
            className="h-full max-h-full w-full max-w-full rounded-md object-fill"
          />
        );
      })}
    </div>
  );
}

export default GalleryList;
