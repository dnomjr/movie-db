import { SlMagnifier } from 'react-icons/sl';

const Search = () => {
  return (
    <form className='relative w-full'>
      <input
        type='text'
        placeholder={
          window.innerWidth >= 550
            ? 'Search for a movies or TV series'
            : 'Search TMDb'
        }
        className='border-text-light text-text-light focus:outline-logo w-full min-w-[150px] rounded-md border-2 p-1 pr-10 sm:rounded-lg sm:p-2 sm:pr-12'
      />
      <button className='absolute right-2 top-2 bg-white'>
        <SlMagnifier className='h-auto w-4 text-gray-500 sm:w-6' />
      </button>
    </form>
  );
};
export default Search;
