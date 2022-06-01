import React from "react";
import { Badge } from "../../components/Badge";

export const VideoOverlay = (props) => {
  return (
    <>
      <div className='fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white/90 pl-24 pr-8 pt-2 pb-8'>
        <div className='w-1/4 mt-1 border-b border-gray-300 focus-within:ring-0'>
          <input
            type='text'
            name='name'
            id='name'
            className='block w-full text-2xl bg-transparent border-0 border-b border-transparent focus:ring-0 text-gray-500 focus:border-blue-500 focus:text-blue-500'
            placeholder='Insert video title'
          />
        </div>
        <div className='w-2/4 mt-4 border-b border-gray-200 focus-within:border-blue-500'>
          <textarea
            rows={3}
            name='comment'
            id='comment'
            className='block w-full border-0 border-b border-transparent pb-2 resize-none focus:ring-0 focus:border-blue-500 bg-transparent'
            placeholder='Description'
            defaultValue=''
          />
        </div>
        <div className='mt-4 flex flex-row items-center justify-start'>
          <div className='mx-1'>
            <Badge active>
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
        <div className='mt-4 mx-1'>
          <button
            type='button'
            onClick={props.onSave}
            className='inline-flex items-center px-2.5 py-1.5 shadow-sm text-xs font-medium rounded text-white bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500'
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};
