import { ImSearch } from "react-icons/im";
import { ProjectContext } from "../ProjectContext";
import { useContext } from "react";
export default function Form() {
  const { searchTerm, setSearchTerm, setImages } = useContext(ProjectContext);
  function imagesRequest() {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&client_id=S7d9Fku-XEISKy8px20TQ9y8pPbzdkdaoggOtrkmglk`
    )
      .then(function (response) {
        if (response.ok === false) {
          throw new Error("Oops! There is a problem");
        }
        return response.json();
      })
      .then(function (data) {
        setImages(data.results);
      })
      .catch(function (err) {
        window.alert(`${err}`);
      });
  }

  return (
    <div className="flex items-center h-10 w-10/12 sm:w-8/12 md:w-7/12 my-5 border border-white rounded">
      <ImSearch
        className="bg-purple-500 w-[12%] sm:w-1/12 h-full p-1.5 cursor-pointer rounded-l text-white border-2 border-purple-500"
        onClick={imagesRequest}
      />
      <input
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={(event) => {
          if (event.target.value !== "" && event.key === "Enter") {
            imagesRequest();
          }
        }}
        placeholder="Search something..."
        className="w-full h-full px-2 focus:outline-none rounded-r border-2 border-white"
      />
    </div>
  );
}
