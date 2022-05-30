import { VideoTabs } from "./VideoTabs";

const Button = (props) => {
  return (
    <button
      type='button'
      className='inline-flex items-center px-8 py-3 m-2 border border-blue-500 text-md font-medium rounded shadow-sm text-blue-500 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500'
    >
      {props.children}
    </button>
  );
};

export const VideoAlignment = () => {
  return (
    <div className='flex flex-col'>
      <VideoTabs active='alignment' />
      <div className='flex flex-row justify-start'>
        <Button>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
      </div>
    </div>
  );
};
