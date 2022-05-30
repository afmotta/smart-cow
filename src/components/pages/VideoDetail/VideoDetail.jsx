import React from "react";
import { Outlet } from "react-router-dom";
import { VideoLayout } from "../../layouts/VideoLayout";
import bg from "./bg.png";

export const VideoDetail = () => {
  return (
    <VideoLayout active='video' title='Saying Hi to my customers'>
      <div className='py-8 flex flex-row'>
        <div
          key='video0'
          className='w-3/5 relative flex flex-col items-stretch rounded-3xl bg-gray-100 p-4 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-lime-500 '
        >
          <button type='button' className='absolute inset-0 focus:outline-none'>
            <span className='sr-only'>Say Hi to users!</span>
          </button>
          <img
            src={bg}
            alt=''
            className='object-cover pointer-events-none rounded-lg'
          />
          <div className='mt-4 p-4 bg-white h-36 rounded-3xl flex flex-col justify-between items-start'>
            <p className="text-gray-500">
              Type or paste your videoscript here. You can also request a
              translation of an English script to any of 27 other languages
            </p>
            <button
              type='button'
              className='inline-flex items-center px-2.5 py-1.5 shadow-sm text-xs font-medium rounded text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Listen
            </button>
          </div>
        </div>
        <div className='w-2/5 px-4'>
          <Outlet />
        </div>
      </div>
    </VideoLayout>
  );
};
