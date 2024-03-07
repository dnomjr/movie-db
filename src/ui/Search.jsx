import { SlMagnifier } from 'react-icons/sl';

const Search = () => {
  return (
    <form className="relative w-full">
      <input
        type="text"
        placeholder={
          window.innerWidth >= 550
            ? 'Search for a movies or TV series'
            : 'Search TMDb'
        }
        className="w-full rounded-lg border p-1 pr-10 text-black focus:outline-red-600 sm:p-2 sm:pr-12"
      />
      <button className="absolute right-2 top-2 bg-white ">
        <SlMagnifier className="h-auto w-4  text-gray-500 sm:w-6" />
      </button>
    </form>
  );
};
export default Search;
