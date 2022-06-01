import clsx from "clsx";
import { VideoTabs } from "./VideoTabs";

const Button = (props) => {
  return (
    <button
      type='button'
      className={clsx(
        "inline-flex items-center px-8 py-3 m-2 border text-md font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        props.active ? "border-blue-500 text-blue-500 bg-blue-100 hover:bg-blue-200" : "border-gray-500 text-gray-500 bg-gray-100 hover:bg-gray-200"
      )}
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
        <Button active>Center</Button>
        <Button>Right</Button>
      </div>
    </div>
  );
};
