import { SlMagnifier } from 'react-icons/sl';

const Search = () => {
  return (
    <form className="relative w-full">
      <input
        type="text"
        placeholder="Search for movies or TV series"
        className="w-full rounded-lg border p-2 text-black focus:outline-red-600"
      />
      <button className="absolute right-4 top-2">
        <SlMagnifier className="h-auto w-6 text-gray-500" />
      </button>
    </form>
  );
};
export default Search;
