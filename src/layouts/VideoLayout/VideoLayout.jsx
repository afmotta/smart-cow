import { BaseLayout } from "../BaseLayout";

const Navbar = (props) => {
  const { title, onTitleClick = () => {} } = props;
  console.log("onTitleClick", onTitleClick);
  return (
    <div className='sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex'>
      <div className='flex-1 flex justify-between' onClick={onTitleClick}>
        <div
          className='flex-1 flex items-center cursor-pointer'
          onClick={onTitleClick}
        >
          <h1
            className='text-2xl font-semibold text-gray-900'
            onClick={onTitleClick}
          >
            {title ?? ""}
          </h1>
        </div>
        <div className='ml-6 flex items-center'>
          <button
            type='button'
            className='mr-4 inline-flex items-center px-2.5 py-1.5 shadow-sm text-xs font-medium rounded text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            Cancel
          </button>
          <button
            type='button'
            className='inline-flex items-center px-2.5 py-1.5 shadow-sm text-xs font-medium rounded text-white bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export const VideoLayout = (props) => {
  const { title, onTitleClick, ...rest } = props;
  return (
    <BaseLayout navbar={<Navbar {...{ title, onTitleClick }} />} {...rest} />
  );
};
