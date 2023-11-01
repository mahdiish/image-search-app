import { useState } from "react";
import Form from "./components/form";
import { BiLogoUnsplash } from "react-icons/bi";
import { FormContext } from "./FormContext";
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-gray-800 w-full h-screen flex flex-col items-center px-2 py-10 font-MontserratAlternates">
      <FormContext.Provider value={{ searchTerm, setSearchTerm }}>
        <h1 className="text-white text-xl font-black">Image Search App</h1>
        <Form />
        <p className="text-purple-500 flex items-center">
          Powered By Unsplash API <BiLogoUnsplash className="text-white ml-1" />
        </p>
      </FormContext.Provider>
    </div>
  );
}

export default App;
