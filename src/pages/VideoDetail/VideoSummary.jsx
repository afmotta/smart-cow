import bg from "./bg.png";

export const VideoSummary = (props) => {
  return (
    <div className='relative flex flex-col items-stretch rounded-3xl bg-gray-100 p-4'>
      <img
        src={bg}
        alt=''
        className='object-cover pointer-events-none rounded-lg'
      />
      <div className='mt-4 p-4 bg-white h-36 rounded-3xl flex flex-col justify-between items-start'>
        <p className='text-gray-500'>
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
  );
};
