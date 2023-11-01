import { ProjectContext } from "../ProjectContext";
import { useContext } from "react";
export default function Images() {
  const { images } = useContext(ProjectContext);
  let renderedImages;
  if (images !== "") {
    renderedImages = images.map((image) => {
      return (
        <img
          src={image.urls.full}
          alt={image.alt_description}
          key={image.id}
          className="flex mb-4 rounded-md"
        />
      );
    });
  }
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 w-10/12 sm:w-8/12 md:w-7/12 mt-3 mb-5">
      {renderedImages}
    </div>
  );
}
