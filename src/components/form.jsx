import { FiSearch } from "react-icons/fi";
import { FormContext } from "../FormContext";
import { useContext } from "react";
export default function Form() {
  const { searchTerm, setSearchTerm } = useContext(FormContext);
  return (
    <div className="flex items-center h-10 w-10/12 sm:w-8/12 md:w-6/12 my-5 border border-white rounded">
      <FiSearch className="bg-purple-500 w-[12%] sm:w-1/12 h-full p-1.5 cursor-pointer rounded-l text-white" />
      <input
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search something..."
        className="w-full h-full px-2 focus:outline-none rounded-r"
      />
    </div>
  );
}
