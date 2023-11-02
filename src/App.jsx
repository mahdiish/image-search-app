import { useState } from "react";
import Form from "./components/form";
import { BiLogoUnsplash } from "react-icons/bi";
import { ProjectContext } from "./ProjectContext";
import Images from "./components/images";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);
  const [resultText, setResultText] = useState("");

  return (
    <div className="bg-gray-900 w-full min-h-screen flex flex-col items-center px-2 pt-10 pb-5 font-Acme">
      <ProjectContext.Provider
        value={{
          searchTerm,
          setSearchTerm,
          images,
          setImages,
          setResultText,
        }}
      >
        <h1 className="text-white text-xl font-black">Image Search App</h1>
        <Form />
        {resultText}
        <Images />
        <p className="text-purple-500 flex items-center text-xs">
          Powered By Unsplash API <BiLogoUnsplash className="text-white ml-1" />
        </p>
      </ProjectContext.Provider>
    </div>
  );
}

export default App;
