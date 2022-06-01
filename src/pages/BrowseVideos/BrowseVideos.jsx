import { Badge } from "../../components/Badge";
import { BaseLayout } from "../../layouts/BaseLayout";
import bg from "./bg.png";
import { DotsHorizontalIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div className='sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex'>
      <div className='flex-1 flex justify-between'>
        <div className='flex-1 flex items-center'>
          <h1 className='text-2xl font-semibold text-gray-900'>Saved Videos</h1>
        </div>
        <div className='ml-6 flex items-center'>
          <button
            type='button'
            className='inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500'
          >
            Create new
          </button>
        </div>
      </div>
    </div>
  );
};

export const BrowseVideos = () => {
  return (
    <BaseLayout navbar={<Navbar />} active="gallery">
      <div className='py-8 px-2'>
        <ul className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
          <li
            key='video0'
            className='relative flex flex-col items-center rounded-lg bg-gray-100 p-2 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-lime-500 '
          >
            <button
              type='button'
              className='absolute inset-0 focus:outline-none'
            >
              <span className='sr-only'>Say Hi to users!</span>
            </button>
            <div className='group block relative w-full aspect-w-10 aspect-h-7 overflow-hidden'>
              <img
                src={bg}
                alt=''
                className='object-cover pointer-events-none group-hover:opacity-75 rounded-lg'
              />
              <DotsHorizontalIcon className='absolute top-1 right-2 h-4 w-4' />
              <button
                type='button'
                className='absolute inset-0 focus:outline-none'
              >
                <span className='sr-only'>Say Hi to users!</span>
              </button>
            </div>
            <h3 className='mt-2 block text-sm font-medium text-gray-900 truncate'>
              Say Hi to users!
            </h3>
            <div className='mt-2 flex flex-row items-center justify-around'>
              <div className='mx-1'>
                <Badge>
                  <p className='text-xs'>Email</p>
                </Badge>
              </div>
              <div className='mx-1'>
                <Badge>
                  <p className='text-xs'>Marketing</p>
                </Badge>
              </div>
              <div className='mx-1'>
                <Badge>
                  <p className='text-xs'>Greeting</p>
                </Badge>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </BaseLayout>
  );
};
